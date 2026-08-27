/**
 * `npm run validate` — the content gate.
 *
 * Loads every roadmap off disk, runs the canonical schema over all of it, and exits
 * non-zero if anything a learner can reach is broken. This is the script CI runs,
 * and it is deliberately the only thing standing between a content change and
 * production.
 *
 * ```
 * node --import tsx scripts/validate-content.mts [options]
 *
 *   --only=<slug,…>          Validate only these roadmaps.
 *   --default-status=<s>     Status assumed for topics that declare none
 *                            (draft | review | published). Default: draft.
 *   --strict                 Treat warnings as failures.
 *   --max-warnings=<n>       Fail if warnings exceed n.
 *   --baseline=<file>        Ratchet against recorded per-code counts (see below).
 *   --update-baseline=<file> Rewrite that file from this run and exit 0.
 *   --limit=<n>              Issues printed per section. Default 40. 0 means all.
 *   --quiet                  Errors only; no statistics.
 *   --json                   Machine-readable report on stdout, nothing else.
 *   --no-color               Disable ANSI colour.
 *   --help                   Show this message.
 * ```
 *
 * ## The ratchet
 *
 * The corpus this gate was written for already fails it, by hundreds of issues. A CI
 * job that is red on day one is not a gate — it is a light everyone learns to ignore,
 * and it cannot tell a new defect from an inherited one. So CI compares against a
 * recorded baseline instead: a per-code count that may fall but never rise.
 *
 * Per code, not in total, because a single number lets a fix in one place pay for a
 * regression in another. Improvements are reported but never fail, and re-recording
 * is a deliberate act with its own flag, so the baseline can only be loosened on
 * purpose and the loosening shows up in the diff.
 *
 * Exit codes: `0` clean, `1` validation failed, `2` the script itself could not run.
 */

import { readFile, writeFile } from 'node:fs/promises';

import {
  type Issue,
  type PublishStatus,
  PUBLISH_STATUSES,
  RESOURCE_TYPES,
  formatIssue,
  validateCorpus,
} from '../src/data/schema/index';
import { type LoadedRoadmap, loadContent } from './lib/load-content.mjs';

/* -------------------------------------------------------------------------- */
/* Options                                                                    */
/* -------------------------------------------------------------------------- */

interface Options {
  readonly only: readonly string[];
  readonly defaultStatus: PublishStatus;
  readonly strict: boolean;
  readonly maxWarnings: number;
  readonly baseline: string | undefined;
  readonly updateBaseline: string | undefined;
  readonly limit: number;
  readonly quiet: boolean;
  readonly json: boolean;
  readonly color: boolean;
}

const USAGE = `Usage: node --import tsx scripts/validate-content.mts [options]

  --only=<slug,...>        Validate only these roadmaps
  --default-status=<s>     draft | review | published  (default: draft)
  --strict                 Treat warnings as failures
  --max-warnings=<n>       Fail if warnings exceed n
  --baseline=<file>        Fail only on counts that rose above this recorded baseline
  --update-baseline=<file> Rewrite that baseline from this run
  --limit=<n>              Issues printed per section (default 40; 0 = all)
  --quiet                  Errors only, no statistics
  --json                   Machine-readable report on stdout
  --no-color               Disable ANSI colour
  --help                   Show this message`;

class UsageError extends Error {}

function parseOptions(argv: readonly string[]): Options {
  const only: string[] = [];
  let defaultStatus: PublishStatus = 'draft';
  let strict = false;
  let maxWarnings = Number.POSITIVE_INFINITY;
  let baseline: string | undefined;
  let updateBaseline: string | undefined;
  let limit = 40;
  let quiet = false;
  let json = false;
  let color = process.stdout.isTTY === true && process.env['NO_COLOR'] === undefined;

  for (const arg of argv) {
    const [flag, ...rest] = arg.split('=');
    const value = rest.join('=');
    switch (flag) {
      case '--help':
      case '-h':
        process.stdout.write(`${USAGE}\n`);
        process.exit(0);
      // `process.exit` is typed `never`, so no-fallthrough correctly stays quiet here.
      case '--only':
        if (value === '') throw new UsageError('--only needs at least one slug.');
        only.push(...value.split(',').map((s) => s.trim()).filter(Boolean));
        break;
      case '--default-status':
        if (!PUBLISH_STATUSES.includes(value as PublishStatus)) {
          throw new UsageError(`--default-status must be one of ${PUBLISH_STATUSES.join(', ')}.`);
        }
        defaultStatus = value as PublishStatus;
        break;
      case '--strict':
        strict = true;
        break;
      case '--max-warnings':
        maxWarnings = parseCount(flag, value);
        break;
      case '--baseline':
        if (value === '') throw new UsageError('--baseline needs a file path.');
        baseline = value;
        break;
      case '--update-baseline':
        if (value === '') throw new UsageError('--update-baseline needs a file path.');
        updateBaseline = value;
        break;
      case '--limit':
        limit = parseCount(flag, value);
        break;
      case '--quiet':
        quiet = true;
        break;
      case '--json':
        json = true;
        break;
      case '--no-color':
        color = false;
        break;
      default:
        throw new UsageError(`Unknown option \`${arg}\`.`);
    }
  }

  // A partial run produces lower counts for reasons that have nothing to do with
  // content quality. Comparing one against a whole-corpus baseline reads as a large
  // improvement, and recording one silently discards every code it did not visit.
  if ((baseline !== undefined || updateBaseline !== undefined) && only.length > 0) {
    throw new UsageError('--baseline cannot be combined with --only: a partial run is not comparable.');
  }
  // The ratchet is a complete pass/fail criterion on its own. Layering a second one
  // over it produces a failure whose cause nobody can read off the output.
  if (baseline !== undefined && (strict || Number.isFinite(maxWarnings))) {
    throw new UsageError('--baseline replaces --strict and --max-warnings; pass only one.');
  }
  if (baseline !== undefined && updateBaseline !== undefined) {
    throw new UsageError('Pass either --baseline or --update-baseline, not both.');
  }

  return {
    only,
    defaultStatus,
    strict,
    maxWarnings,
    baseline,
    updateBaseline,
    limit,
    quiet,
    json,
    color,
  };
}

function parseCount(flag: string, value: string): number {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 0) {
    throw new UsageError(`${flag} needs a non-negative integer, got \`${value}\`.`);
  }
  return parsed;
}

/* -------------------------------------------------------------------------- */
/* The ratchet                                                                */
/* -------------------------------------------------------------------------- */

interface Baseline {
  /** Written into the file so whoever finds it in a diff knows what it governs. */
  readonly note: string;
  /** Counts are only comparable at the status they were recorded under. */
  readonly defaultStatus: PublishStatus;
  readonly totals: { readonly errors: number; readonly warnings: number };
  readonly errors: Readonly<Record<string, number>>;
  readonly warnings: Readonly<Record<string, number>>;
}

interface Movement {
  readonly severity: 'error' | 'warning';
  readonly code: string;
  readonly was: number;
  readonly now: number;
}

interface Ratchet {
  readonly file: string;
  readonly regressions: readonly Movement[];
  readonly improvements: readonly Movement[];
}

const BASELINE_NOTE =
  'Per-code issue counts that `npm run validate:ci` refuses to let rise. ' +
  'Fix content and re-record with `npm run validate:baseline`; never edit by hand.';

/** Counts issues by code, sorted by code so the file diffs cleanly. */
function tallyByCode(issues: readonly Issue[]): Record<string, number> {
  const counts = new Map<string, number>();
  for (const item of issues) counts.set(item.code, (counts.get(item.code) ?? 0) + 1);
  return Object.fromEntries([...counts].sort(([a], [b]) => a.localeCompare(b)));
}

function buildBaseline(
  defaultStatus: PublishStatus,
  errors: readonly Issue[],
  warnings: readonly Issue[],
): Baseline {
  return {
    note: BASELINE_NOTE,
    defaultStatus,
    totals: { errors: errors.length, warnings: warnings.length },
    errors: tallyByCode(errors),
    warnings: tallyByCode(warnings),
  };
}

async function readBaseline(file: string, expected: PublishStatus): Promise<Baseline> {
  let raw: string;
  try {
    raw = await readFile(file, 'utf8');
  } catch {
    throw new UsageError(
      `Cannot read baseline \`${file}\`. Record one first: npm run validate:baseline`,
    );
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new UsageError(`Baseline \`${file}\` is not valid JSON: ${(error as Error).message}`);
  }
  // Validated by hand rather than through the schema kernel: this file is tooling
  // state, not content, and a malformed one must not be reported as a content defect.
  if (typeof parsed !== 'object' || parsed === null) {
    throw new UsageError(`Baseline \`${file}\` is not an object.`);
  }
  const candidate = parsed as Partial<Baseline>;
  if (!PUBLISH_STATUSES.includes(candidate.defaultStatus as PublishStatus)) {
    throw new UsageError(`Baseline \`${file}\` does not record a valid \`defaultStatus\`.`);
  }
  if (candidate.defaultStatus !== expected) {
    throw new UsageError(
      `Baseline \`${file}\` was recorded at --default-status=${candidate.defaultStatus}, ` +
        `but this run used ${expected}. The counts are not comparable.`,
    );
  }
  const codeMap = (value: unknown, field: string): Record<string, number> => {
    if (typeof value !== 'object' || value === null) {
      throw new UsageError(`Baseline \`${file}\` has no \`${field}\` object.`);
    }
    for (const [code, count] of Object.entries(value)) {
      if (!Number.isInteger(count) || (count as number) < 0) {
        throw new UsageError(`Baseline \`${file}\`: \`${field}.${code}\` is not a count.`);
      }
    }
    return value as Record<string, number>;
  };
  return {
    note: typeof candidate.note === 'string' ? candidate.note : BASELINE_NOTE,
    defaultStatus: candidate.defaultStatus as PublishStatus,
    totals: {
      errors: Number(candidate.totals?.errors ?? 0),
      warnings: Number(candidate.totals?.warnings ?? 0),
    },
    errors: codeMap(candidate.errors, 'errors'),
    warnings: codeMap(candidate.warnings, 'warnings'),
  };
}

/**
 * Compares this run to the baseline, per code and per severity.
 *
 * A code absent from the baseline has an implied count of zero, so a brand-new defect
 * class is a regression however small it is — which is the whole point: the first
 * instance of a new fault is the cheapest one to fix.
 */
function compareToBaseline(
  file: string,
  baseline: Baseline,
  errors: readonly Issue[],
  warnings: readonly Issue[],
): Ratchet {
  const regressions: Movement[] = [];
  const improvements: Movement[] = [];

  for (const [severity, recorded, current] of [
    ['error', baseline.errors, tallyByCode(errors)],
    ['warning', baseline.warnings, tallyByCode(warnings)],
  ] as const) {
    for (const code of new Set([...Object.keys(recorded), ...Object.keys(current)])) {
      const was = recorded[code] ?? 0;
      const now = current[code] ?? 0;
      if (now > was) regressions.push({ severity, code, was, now });
      else if (now < was) improvements.push({ severity, code, was, now });
    }
  }

  const worst = (a: Movement, b: Movement): number =>
    b.now - b.was - (a.now - a.was) || a.code.localeCompare(b.code);
  return {
    file,
    regressions: regressions.sort(worst),
    improvements: improvements.sort((a, b) => a.was - a.now - (b.was - b.now) || a.code.localeCompare(b.code)),
  };
}

/* -------------------------------------------------------------------------- */
/* Presentation                                                               */
/* -------------------------------------------------------------------------- */

type Paint = (text: string) => string;

interface Palette {
  readonly bold: Paint;
  readonly dim: Paint;
  readonly red: Paint;
  readonly yellow: Paint;
  readonly green: Paint;
  readonly cyan: Paint;
}

function palette(enabled: boolean): Palette {
  const wrap = (code: string): Paint => (text) => (enabled ? `\u001b[${code}m${text}\u001b[0m` : text);
  return {
    bold: wrap('1'),
    dim: wrap('2'),
    red: wrap('31'),
    yellow: wrap('33'),
    green: wrap('32'),
    cyan: wrap('36'),
  };
}

const out: string[] = [];
const write = (line = ''): void => void out.push(line);
const flush = (): void => void process.stdout.write(`${out.join('\n')}\n`);

function heading(text: string, c: Palette): void {
  write();
  write(c.bold(text));
  write(c.dim('─'.repeat(Math.max(text.length, 8))));
}

/** Renders a fixed-width table without depending on a formatting library. */
function table(header: readonly string[], rows: readonly (readonly string[])[], c: Palette): void {
  const widths = header.map((cell, i) =>
    Math.max(cell.length, ...rows.map((row) => (row[i] ?? '').length)),
  );
  const line = (cells: readonly string[]): string =>
    cells
      .map((cell, i) => (i === 0 ? cell.padEnd(widths[i]!) : cell.padStart(widths[i]!)))
      .join('  ')
      .trimEnd();
  write(c.dim(line(header)));
  for (const row of rows) write(line(row));
}

/** Prints at most `limit` issues, then says how many were withheld. */
function printIssues(issues: readonly Issue[], limit: number, c: Palette): void {
  const shown = limit === 0 ? issues : issues.slice(0, limit);
  for (const item of shown) {
    const text = formatIssue(item);
    write(item.severity === 'error' ? c.red(text) : c.yellow(text));
    write();
  }
  const withheld = issues.length - shown.length;
  if (withheld > 0) {
    write(c.dim(`… and ${withheld} more. Re-run with --limit=0 to see all of them.`));
    write();
  }
}

/* -------------------------------------------------------------------------- */
/* Report                                                                     */
/* -------------------------------------------------------------------------- */

async function main(argv: readonly string[]): Promise<number> {
  const options = parseOptions(argv);
  const c = palette(options.color && !options.json);

  const load = await loadContent({ only: options.only });
  const report = validateCorpus(load.sources, { defaultStatus: options.defaultStatus });

  const loaderErrors = load.issues.filter((i) => i.severity === 'error');
  const loaderWarnings = load.issues.filter((i) => i.severity === 'warning');
  const errors = [...loaderErrors, ...report.errors];
  const warnings = [...loaderWarnings, ...report.warnings];

  if (options.updateBaseline !== undefined) {
    const recorded = buildBaseline(options.defaultStatus, errors, warnings);
    await writeFile(options.updateBaseline, `${JSON.stringify(recorded, null, 2)}\n`, 'utf8');
    process.stdout.write(
      `Recorded ${errors.length} errors and ${warnings.length} warnings ` +
        `across ${Object.keys(recorded.errors).length + Object.keys(recorded.warnings).length} codes ` +
        `to ${options.updateBaseline}\n`,
    );
    return 0;
  }

  const ratchet =
    options.baseline === undefined
      ? undefined
      : compareToBaseline(
          options.baseline,
          await readBaseline(options.baseline, options.defaultStatus),
          errors,
          warnings,
        );

  const failed =
    ratchet === undefined
      ? errors.length > 0 ||
        (options.strict && warnings.length > 0) ||
        warnings.length > options.maxWarnings
      : ratchet.regressions.length > 0;

  if (options.json) {
    process.stdout.write(
      `${JSON.stringify(
        {
          ok: !failed,
          counts: {
            errors: errors.length,
            warnings: warnings.length,
            suppressed: report.suppressedTotal,
          },
          ...(ratchet === undefined ? {} : { ratchet }),
          errors,
          warnings,
          suppressedByCode: Object.fromEntries(report.suppressedByCode),
          stats: {
            ...report.stats,
            reusedUrls: report.stats.reusedUrls.slice(0, 100),
          },
          registry: {
            roadmapSlugs: load.roadmapSlugs,
            slugsWithoutContent: load.slugsWithoutContent,
            unwiredDirectories: load.unwiredDirectories,
          },
        },
        null,
        2,
      )}\n`,
    );
    return failed ? 1 : 0;
  }

  write(c.bold('Michi content validation'));
  write(
    c.dim(
      `${load.sources.length} roadmap${load.sources.length === 1 ? '' : 's'}, ` +
        `${report.stats.totalTopicRecords} topics, ` +
        `${report.stats.totalResourceRefs} resource references — ` +
        `default status \`${options.defaultStatus}\``,
    ),
  );

  if (errors.length > 0) {
    heading(`Errors (${errors.length})`, c);
    write(c.dim('These fail the build. Structural defects, and quality defects on published content.'));
    write();
    printIssues(errors, options.limit, c);
  }

  if (!options.quiet && warnings.length > 0) {
    heading(`Warnings (${warnings.length})`, c);
    write(c.dim('The curation worklist. Quality defects on `review` content, plus advisory checks.'));
    write();
    printIssues(warnings, options.limit, c);
  }

  if (!options.quiet) {
    printStatistics(load.sources, report, c);
  }

  if (ratchet !== undefined) {
    printRatchet(ratchet, c);
  }

  heading('Verdict', c);
  const summary = [
    `${errors.length} error${errors.length === 1 ? '' : 's'}`,
    `${warnings.length} warning${warnings.length === 1 ? '' : 's'}`,
    `${report.suppressedTotal} suppressed`,
  ].join(', ');

  if (ratchet !== undefined) {
    const { regressions, improvements } = ratchet;
    if (regressions.length > 0) {
      const worse = regressions.reduce((sum, m) => sum + (m.now - m.was), 0);
      write(c.red(`FAIL — ${worse} new issue${worse === 1 ? '' : 's'} across ${regressions.length} code${regressions.length === 1 ? '' : 's'}`));
      write(c.dim(`${summary}. The baseline is \`${ratchet.file}\`.`));
    } else if (improvements.length > 0) {
      const better = improvements.reduce((sum, m) => sum + (m.was - m.now), 0);
      write(c.green(`PASS — ${better} fewer issue${better === 1 ? '' : 's'} than the baseline`));
      write(c.dim(`${summary}. Lock the gain in with: npm run validate:baseline`));
    } else {
      write(c.green(`PASS — unchanged against the baseline`));
      write(c.dim(summary));
    }
  } else if (!failed) {
    write(c.green(`PASS — ${summary}`));
  } else if (errors.length > 0) {
    write(c.red(`FAIL — ${summary}`));
  } else if (options.strict) {
    write(c.red(`FAIL — ${summary} (--strict treats warnings as failures)`));
  } else {
    write(c.red(`FAIL — ${summary} (exceeds --max-warnings=${options.maxWarnings})`));
  }
  write();

  flush();
  return failed ? 1 : 0;
}

/** Reports movement against the baseline: what got worse, then what got better. */
function printRatchet(ratchet: Ratchet, c: Palette): void {
  const { regressions, improvements } = ratchet;
  if (regressions.length === 0 && improvements.length === 0) return;

  const rows = (movements: readonly Movement[]): readonly (readonly string[])[] =>
    movements.map((m) => [m.severity, m.code, String(m.was), String(m.now)]);

  if (regressions.length > 0) {
    heading(`Regressions against the baseline (${regressions.length})`, c);
    write(
      c.dim(
        'These codes count higher than the recorded baseline. Fix them, or — if the rise ' +
          'is deliberate — re-record and say why in the commit message.',
      ),
    );
    table(['severity', 'code', 'was', 'now'], rows(regressions), c);
  }

  if (improvements.length > 0) {
    heading(`Improvements (${improvements.length})`, c);
    write(c.dim('Not failures. Re-record so the gate holds the new, lower line.'));
    table(['severity', 'code', 'was', 'now'], rows(improvements), c);
  }
}

function printStatistics(
  sources: readonly LoadedRoadmap[],
  report: ReturnType<typeof validateCorpus>,
  c: Palette,
): void {
  const byName = new Map(sources.map((s) => [s.slug, s]));

  heading('Roadmaps', c);
  table(
    ['roadmap', 'live', 'nodes', 'content', 'gap', 'res', 'url', 'err', 'warn', 'supp'],
    report.stats.roadmaps.map((r) => {
      const source = byName.get(r.slug);
      const live = source?.isRegistered === true ? 'yes' : source?.inRoadmapRegistry === true ? 'unwired' : 'no';
      return [
        r.slug,
        live,
        String(r.topicNodes),
        String(r.topicRecords),
        String(Math.max(0, r.topicNodes - r.topicRecords)),
        String(r.resourceRefs),
        String(r.distinctResourceUrls),
        String(r.errorCount),
        String(r.warningCount),
        String(r.suppressedCount),
      ];
    }),
    c,
  );
  write(
    c.dim(
      'live: catalogued and wired · gap: canvas nodes with no content · res: resource references · url: distinct URLs',
    ),
  );

  heading('Publication status', c);
  const total = report.stats.totalTopicRecords || 1;
  table(
    ['status', 'topics', 'share'],
    PUBLISH_STATUSES.map((status) => {
      const count = report.stats.byStatus[status];
      return [status, String(count), `${((count / total) * 100).toFixed(1)}%`];
    }),
    c,
  );

  heading('Resource slot coverage', c);
  const slotTotals = new Map<string, { filled: number; total: number }>();
  for (const roadmap of report.stats.roadmaps) {
    for (const slot of roadmap.slotCoverage) {
      const acc = slotTotals.get(slot.type) ?? { filled: 0, total: 0 };
      acc.filled += slot.filled;
      acc.total += slot.total;
      slotTotals.set(slot.type, acc);
    }
  }
  table(
    ['slot', 'filled', 'topics', 'coverage'],
    RESOURCE_TYPES.map((type) => {
      const acc = slotTotals.get(type) ?? { filled: 0, total: 0 };
      const share = acc.total === 0 ? 0 : (acc.filled / acc.total) * 100;
      return [type, String(acc.filled), String(acc.total), `${share.toFixed(1)}%`];
    }),
    c,
  );

  const reused = report.stats.reusedUrls;
  if (reused.length > 0) {
    heading('Most reused resource URLs', c);
    write(c.dim(`${reused.length} URLs are referenced by more than one topic.`));
    table(
      ['url', 'topics'],
      reused.slice(0, 10).map((entry) => [truncate(entry.url, 92), String(entry.count)]),
      c,
    );
  }

  if (report.suppressedByCode.size > 0) {
    heading(`Suppressed on draft content (${report.suppressedTotal})`, c);
    write(c.dim('Known defects on quarantined topics. Promote a topic to `review` to see its own list.'));
    const ranked = [...report.suppressedByCode.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    table(
      ['code', 'count'],
      ranked.slice(0, 20).map(([code, count]) => [code, String(count)]),
      c,
    );
  }
}

function truncate(text: string, max: number): string {
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

/* -------------------------------------------------------------------------- */
/* Entry point                                                                */
/* -------------------------------------------------------------------------- */

try {
  process.exitCode = await main(process.argv.slice(2));
} catch (error) {
  if (out.length > 0) flush();
  if (error instanceof UsageError) {
    process.stderr.write(`${error.message}\n\n${USAGE}\n`);
  } else {
    process.stderr.write(`${error instanceof Error ? (error.stack ?? error.message) : String(error)}\n`);
  }
  process.exitCode = 2;
}
