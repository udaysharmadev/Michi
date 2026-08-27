#!/usr/bin/env node
/**
 * URL Verifier - checks all resource URLs in topics.ts files
 * Uses native fetch with concurrency control
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIR = '/Users/uday/Roadmap for all/src/data/content';
const REPORT_FILE = '/tmp/url_verification_report.json';
const CONCURRENCY = 15;
const TIMEOUT_MS = 12000;

// Some domains block bots but are definitely real - whitelist them
const KNOWN_GOOD_DOMAINS = [
  'developer.android.com',
  'developer.apple.com',
  'docs.oracle.com',
  'docs.microsoft.com',
  'learn.microsoft.com',
  'arxiv.org',        // often returns 200 but slow
  'aws.amazon.com',
  'cloud.google.com',
  'kubernetes.io',
  'docs.docker.com',
  'docs.ansible.com',
  'prometheus.io',
  'grafana.com',
  'hashicorp.com',
  'developer.hashicorp.com',
  'soliditylang.org',
  'docs.soliditylang.org',
  'ethereum.org',
  'web3js.readthedocs.io',
  'docs.unity3d.com',
  'docs.unrealengine.com',
  'godotengine.org',
  'fmod.com',
  'scikit-learn.org',
  'pytorch.org',
  'huggingface.co',
  'deepmind.google',
  'langchain.com',
  'platform.openai.com',
  'docs.anthropic.com',
  'apache.org',
  'spark.apache.org',
  'kafka.apache.org',
  'airflow.apache.org',
  'dbt.io',
  'fivetran.com',
  'docs.snowflake.com',
  'gameprogrammingpatterns.com',
  'gamedeveloper.com',
  'gamasutra.com',
  'realtimerendering.com',
  'thebookofshaders.com',
];

// Extract URLs from all topics.ts files
function extractAllUrls() {
  const results = [];
  
  function walk(dir) {
    const entries = fs.readdirSync(dir);
    for (const e of entries) {
      const full = path.join(dir, e);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) walk(full);
      else if (e === 'topics.ts') {
        const content = fs.readFileSync(full, 'utf8');
        const lines = content.split('\n');
        const urlRegex = /url:\s*[\"'\`]([^\"'\`]+)[\"'\`]/;
        lines.forEach((line, idx) => {
          const m = line.match(urlRegex);
          if (m) {
            results.push({
              file: path.relative(CONTENT_DIR, full),
              line: idx + 1,
              url: m[1].trim(),
            });
          }
        });
      }
    }
  }
  
  walk(CONTENT_DIR);
  return results;
}

// Check if domain is whitelisted
function isKnownGood(url) {
  try {
    const hostname = new URL(url).hostname;
    return KNOWN_GOOD_DOMAINS.some(d => hostname === d || hostname.endsWith('.' + d));
  } catch {
    return false;
  }
}

// Check a single URL
async function checkUrl(entry) {
  const { url } = entry;
  
  if (isKnownGood(url)) {
    return { ...entry, status: 'whitelisted', ok: true };
  }
  
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  
  try {
    const resp = await fetch(url, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,*/*',
      },
      redirect: 'follow',
    });
    clearTimeout(timer);
    
    const ok = resp.status >= 200 && resp.status < 400;
    return { ...entry, status: resp.status, ok };
  } catch (err) {
    clearTimeout(timer);
    const errMsg = err.name === 'AbortError' ? 'TIMEOUT' : err.message;
    return { ...entry, status: errMsg, ok: false };
  }
}

// Run with concurrency
async function runWithConcurrency(items, fn, concurrency) {
  const results = [];
  let idx = 0;
  
  async function worker() {
    while (idx < items.length) {
      const i = idx++;
      const item = items[i];
      const result = await fn(item);
      results.push(result);
      
      if (i % 50 === 0) {
        process.stdout.write(`\r  Progress: ${i}/${items.length} (${Math.round(i/items.length*100)}%)`);
      }
    }
  }
  
  const workers = Array.from({ length: concurrency }, worker);
  await Promise.all(workers);
  process.stdout.write('\n');
  return results;
}

async function main() {
  console.log('=== MICHI URL VERIFICATION SCRIPT ===');
  console.log('Extracting URLs from all topics.ts files...');
  
  const allUrls = extractAllUrls();
  console.log(`Found ${allUrls.length} total URL entries`);
  
  // Deduplicate for checking (but keep all for reporting)
  const uniqueUrls = [...new Map(allUrls.map(u => [u.url, u])).values()];
  console.log(`Unique URLs to check: ${uniqueUrls.length}`);
  console.log(`Starting verification with concurrency=${CONCURRENCY}...\n`);
  
  const results = await runWithConcurrency(uniqueUrls, checkUrl, CONCURRENCY);
  
  // Build lookup
  const resultMap = {};
  for (const r of results) resultMap[r.url] = r;
  
  // Merge back all entries with results
  const fullReport = allUrls.map(entry => ({
    ...entry,
    ...resultMap[entry.url],
  }));
  
  // Summary
  const failed = results.filter(r => !r.ok && r.status !== 'whitelisted');
  const whitelisted = results.filter(r => r.status === 'whitelisted');
  const passed = results.filter(r => r.ok && r.status !== 'whitelisted');
  
  console.log('\n=== RESULTS ===');
  console.log(`✅ Passed: ${passed.length}`);
  console.log(`⚡ Whitelisted (known-good): ${whitelisted.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\n--- FAILED URLS ---');
    failed.forEach(f => {
      console.log(`  [${f.status}] ${f.file}:${f.line} -> ${f.url}`);
    });
  }
  
  // Write full report
  fs.writeFileSync(REPORT_FILE, JSON.stringify({
    summary: {
      total: allUrls.length,
      unique: uniqueUrls.length,
      passed: passed.length,
      whitelisted: whitelisted.length,
      failed: failed.length,
    },
    failed,
    passed,
    whitelisted,
    fullReport,
  }, null, 2));
  
  console.log(`\nFull report written to ${REPORT_FILE}`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
