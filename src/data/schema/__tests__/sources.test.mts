/**
 * Source-policy and URL-hygiene tests.
 *
 * `canonicalizeUrl` is hashed into resource ids that get written into content files,
 * so it is held to the same standard as the hash itself: **stable, total and
 * idempotent**. A change in its output silently re-ids the corpus.
 *
 * `checkUrlForSlot` is the rule that makes a fabricated resource list fail the
 * build, so each slot's contract is tested from both sides — the link that should
 * pass and the plausible-looking link that must not.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  PAYWALLED_HOSTS,
  SHORTENER_HOSTS,
  VIDEO_HOSTS,
  canonicalizeUrl,
  checkUrlForSlot,
  classifyHost,
  isBareHomepage,
  normalizeHost,
} from '../sources';
import type { Issue } from '../validator';
import type { ResourceType } from '../resource-type';

const codes = (issues: readonly Issue[]): string[] => issues.map((i) => i.code);
const check = (url: string, type: ResourceType): string[] => codes(checkUrlForSlot(url, type, 'p'));

/* -------------------------------------------------------------------------- */
/* normalizeHost                                                              */
/* -------------------------------------------------------------------------- */

test('normalizeHost folds the mobile and AMP prefixes away', () => {
  assert.equal(normalizeHost('www.example.com'), 'example.com');
  assert.equal(normalizeHost('WWW.Example.COM'), 'example.com');
  assert.equal(normalizeHost('m.youtube.com'), 'youtube.com');
  assert.equal(normalizeHost('amp.cnn.com'), 'cnn.com');
});

test('normalizeHost refuses to strip a label when no domain would remain', () => {
  // `amp.dev` is Google's AMP documentation. Stripping the prefix invents `dev`,
  // a host that does not exist, and silently changes the resource's identity.
  assert.equal(normalizeHost('amp.dev'), 'amp.dev');
  assert.equal(normalizeHost('m.me'), 'm.me');
  assert.equal(normalizeHost('localhost'), 'localhost');
});

test('normalizeHost only touches the leading label', () => {
  assert.equal(normalizeHost('mobile.example.com'), 'mobile.example.com');
  assert.equal(normalizeHost('docs.www.example.com'), 'docs.www.example.com');
  assert.equal(normalizeHost('example.com'), 'example.com');
});

/* -------------------------------------------------------------------------- */
/* canonicalizeUrl — identity mode                                            */
/* -------------------------------------------------------------------------- */

test('identity mode folds the spellings of one page into one string', () => {
  const expected = 'https://developer.mozilla.org/en-US/docs/Web/API/fetch';
  const spellings = [
    'https://developer.mozilla.org/en-US/docs/Web/API/fetch',
    'https://developer.mozilla.org/en-US/docs/Web/API/fetch/',
    'http://developer.mozilla.org/en-US/docs/Web/API/fetch',
    'https://www.developer.mozilla.org/en-US/docs/Web/API/fetch',
    'https://developer.mozilla.org/en-US/docs/Web/API/fetch?utm_source=newsletter',
    '  https://developer.mozilla.org/en-US/docs/Web/API/fetch  ',
  ];
  for (const spelling of spellings) {
    assert.equal(canonicalizeUrl(spelling), expected, spelling);
  }
});

test('identity mode preserves path case, because paths are case-sensitive', () => {
  assert.equal(canonicalizeUrl('https://EXAMPLE.org/Docs/Fetch'), 'https://example.org/Docs/Fetch');
});

test('canonicalization is idempotent in both modes', () => {
  const inputs = [
    'http://WWW.Example.com:443/a/b/?utm_source=x&z=1&a=2#frag',
    'https://youtu.be/dQw4w9WgXcQ?si=abc',
    'https://example.org/',
    'https://example.org/path/',
  ];
  for (const input of inputs) {
    const identity = canonicalizeUrl(input);
    assert.equal(canonicalizeUrl(identity), identity, `identity not idempotent: ${input}`);
    const storage = canonicalizeUrl(input, { mode: 'storage' });
    assert.equal(canonicalizeUrl(storage, { mode: 'storage' }), storage, `storage: ${input}`);
  }
});

test('tracking parameters are dropped and the rest are sorted', () => {
  assert.equal(
    canonicalizeUrl('https://example.org/a?z=26&utm_campaign=spring&fbclid=xyz&a=1&gclid=q'),
    'https://example.org/a?a=1&z=26',
  );
});

test('parameters that identify the resource survive on the hosts that need them', () => {
  assert.equal(
    canonicalizeUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ&si=track&feature=share'),
    'https://youtube.com/watch?v=dQw4w9WgXcQ',
  );
  assert.equal(
    canonicalizeUrl('https://www.youtube.com/watch?list=PLabc&v=dQw4w9WgXcQ'),
    'https://youtube.com/watch?list=PLabc&v=dQw4w9WgXcQ',
  );
  // `t` is load-bearing on YouTube (a timestamped link) but tracking elsewhere.
  // Remaining parameters are sorted, so the same link always produces one string.
  assert.equal(
    canonicalizeUrl('https://youtube.com/watch?v=abc123&t=42'),
    'https://youtube.com/watch?t=42&v=abc123',
  );
});

test('credentials, default ports and a bare fragment are removed', () => {
  assert.equal(canonicalizeUrl('https://user:secret@example.org/a'), 'https://example.org/a');
  assert.equal(canonicalizeUrl('http://example.org:443/a'), 'https://example.org/a');
  assert.equal(canonicalizeUrl('https://example.org/a#'), 'https://example.org/a');
  assert.equal(canonicalizeUrl('https://example.org/a?b=1#'), 'https://example.org/a?b=1');
});

test('a meaningful fragment is kept', () => {
  assert.equal(
    canonicalizeUrl('https://example.org/guide#connection-pooling'),
    'https://example.org/guide#connection-pooling',
  );
});

test('a non-default port is kept, because it is part of the address', () => {
  assert.equal(canonicalizeUrl('https://example.org:8443/a'), 'https://example.org:8443/a');
});

/* -------------------------------------------------------------------------- */
/* canonicalizeUrl — storage mode                                             */
/* -------------------------------------------------------------------------- */

test('storage mode fixes only what is unambiguously an improvement', () => {
  const cases: readonly [input: string, expected: string][] = [
    ['http://postgresguide.com/', 'https://postgresguide.com/'],
    ['https://user:pw@example.org/a', 'https://example.org/a'],
    ['https://example.org/a?utm_source=x&b=2', 'https://example.org/a?b=2'],
    ['https://example.org/a#', 'https://example.org/a'],
  ];
  for (const [input, expected] of cases) {
    assert.equal(canonicalizeUrl(input, { mode: 'storage' }), expected, input);
  }
});

test('storage mode leaves the host and trailing slash exactly as written', () => {
  // Normalising either one would add a redirect hop to every affected link, and
  // break the sites that redirect the other way. Roughly seven hundred URLs in this
  // repository are affected, so the distinction is not academic.
  assert.equal(
    canonicalizeUrl('https://www.rust-lang.org/learn/', { mode: 'storage' }),
    'https://www.rust-lang.org/learn/',
  );
  assert.equal(
    canonicalizeUrl('https://m.example.com/a', { mode: 'storage' }),
    'https://m.example.com/a',
  );
  assert.notEqual(
    canonicalizeUrl('https://www.rust-lang.org/learn/', { mode: 'storage' }),
    canonicalizeUrl('https://www.rust-lang.org/learn/'),
  );
});

test('storage mode still lower-cases the host, which is case-insensitive by spec', () => {
  assert.equal(
    canonicalizeUrl('https://WWW.Example.COM/A', { mode: 'storage' }),
    'https://www.example.com/A',
  );
});

test('canonicalizeUrl throws on input that is not an absolute URL', () => {
  for (const bad of ['', 'not a url', '/relative/path', 'example.org/a']) {
    assert.throws(() => canonicalizeUrl(bad), TypeError, bad);
  }
});

/* -------------------------------------------------------------------------- */
/* classifyHost / isBareHomepage                                              */
/* -------------------------------------------------------------------------- */

test('classification matches subdomains of a listed host', () => {
  // The returned string is whichever list entry matched first, so it is the *policy*
  // that is asserted here, not the label — the label only ever appears in a hint.
  assert.equal(classifyHost('gist.github.com').isCodeHost, 'github.com');
  assert.equal(classifyHost('player.vimeo.com').isVideoHost, 'vimeo.com');
  assert.equal(classifyHost('blog.medium.com').isPaywalled, 'medium.com');
  assert.equal(classifyHost('notgithub.com').isCodeHost, undefined);
  assert.equal(classifyHost('mygithub.com.evil.net').isCodeHost, undefined);
});

test('classification is unaffected by the mobile prefix', () => {
  assert.equal(classifyHost('m.youtube.com').isVideoHost, 'youtube.com');
  assert.equal(classifyHost('www.w3schools.com').isLowAuthority, 'w3schools.com');
});

test('every policy list entry classifies as itself', () => {
  for (const host of SHORTENER_HOSTS) assert.equal(classifyHost(host).isShortener, true, host);
  for (const host of PAYWALLED_HOSTS) assert.ok(classifyHost(host).isPaywalled, host);
  for (const host of VIDEO_HOSTS) assert.ok(classifyHost(host).isVideoHost, host);
});

test('isBareHomepage means a front door, not merely a short path', () => {
  assert.equal(isBareHomepage(new URL('https://react.dev/')), true);
  assert.equal(isBareHomepage(new URL('https://react.dev')), true);
  assert.equal(isBareHomepage(new URL('https://react.dev/learn')), false);
  assert.equal(isBareHomepage(new URL('https://react.dev/?tab=docs')), false);
  assert.equal(isBareHomepage(new URL('https://react.dev/#install')), false);
});

/* -------------------------------------------------------------------------- */
/* checkUrlForSlot — the slot contract                                        */
/* -------------------------------------------------------------------------- */

test('a well-chosen resource for each slot passes cleanly', () => {
  const good: readonly [ResourceType, string][] = [
    ['official', 'https://react.dev/learn/describing-the-ui'],
    ['video_en', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'],
    ['video_hi', 'https://youtu.be/dQw4w9WgXcQ'],
    ['article', 'https://developer.mozilla.org/en-US/docs/Web/API/fetch'],
    ['github', 'https://github.com/facebook/react'],
    ['cheat_sheet', 'https://devhints.io/react'],
    ['deep_dive', 'https://web.dev/articles/critical-rendering-path'],
  ];
  for (const [type, url] of good) {
    assert.deepEqual(check(url, type), [], `${type}: ${url}`);
  }
});

test('unparseable URLs report one issue and stop', () => {
  assert.deepEqual(check('mdn.io/fetch', 'article'), ['resource.url.unparseable']);
  assert.deepEqual(check('', 'article'), ['resource.url.unparseable']);
});

test('a placeholder host short-circuits every other check', () => {
  // Nothing else is worth saying about a URL that was never filled in — and a
  // second opinion on its slot would only obscure the one fact that matters.
  assert.deepEqual(check('http://localhost:3000/docs', 'official'), ['resource.url.non_public_host']);
  assert.deepEqual(check('https://example.com/guide', 'article'), ['resource.url.non_public_host']);
});

test('http is reported even when everything else is right', () => {
  assert.deepEqual(check('http://react.dev/learn', 'official'), ['resource.url.not_https']);
});

test('shorteners are rejected because they hide the destination', () => {
  assert.deepEqual(check('https://bit.ly/3xYz', 'article'), ['resource.url.shortener']);
});

test('tracking parameters are reported with the clean URL to paste back', () => {
  const [only] = checkUrlForSlot('https://react.dev/learn?utm_source=newsletter', 'official', 'p');
  assert.equal(only?.code, 'resource.url.tracking_params');
  assert.match(only?.message ?? '', /utm_source/);
  assert.equal(only?.hint, 'Store the clean URL: https://react.dev/learn');
});

/* -------------------------------------------------------------------------- */
/* checkUrlForSlot — video slots                                              */
/* -------------------------------------------------------------------------- */

test('a video slot must actually hold a video', () => {
  const [only] = checkUrlForSlot('https://developer.mozilla.org/en-US/docs/Web', 'video_en', 'p');
  assert.equal(only?.code, 'resource.url.slot_mismatch');
  assert.match(only?.hint ?? '', /move it to the `article` slot/i);
});

test('a YouTube link without a video or playlist id is not a resource', () => {
  assert.ok(check('https://www.youtube.com/watch', 'video_en').includes('resource.url.no_video_id'));
  assert.ok(check('https://youtu.be/', 'video_hi').includes('resource.url.no_video_id'));
});

test('a YouTube search page and a channel page are both rejected on sight', () => {
  assert.deepEqual(check('https://www.youtube.com/results?search_query=react+hooks', 'video_en'), [
    'resource.url.search_results_page',
  ]);
  assert.deepEqual(check('https://www.youtube.com/@fireship', 'video_en'), [
    'resource.url.channel_not_video',
  ]);
  assert.deepEqual(check('https://www.youtube.com/c/Fireship', 'video_en'), [
    'resource.url.channel_not_video',
  ]);
});

test('short-form and embed URLs carry their id in the path and are accepted', () => {
  assert.deepEqual(check('https://www.youtube.com/shorts/abc123def', 'video_en'), []);
  assert.deepEqual(check('https://www.youtube.com/embed/abc123def', 'video_en'), []);
  assert.deepEqual(check('https://www.youtube.com/live/abc123def', 'video_en'), []);
});

test('a playlist is an acceptable video resource', () => {
  assert.deepEqual(check('https://www.youtube.com/playlist?list=PLabcdef', 'video_hi'), []);
});

/* -------------------------------------------------------------------------- */
/* checkUrlForSlot — github slot                                              */
/* -------------------------------------------------------------------------- */

test('the github slot requires a repository, not a person or a search', () => {
  assert.deepEqual(check('https://github.com/facebook', 'github'), [
    'resource.url.not_a_repository',
  ]);
  assert.deepEqual(check('https://github.com/topics/react', 'github'), [
    'resource.url.not_a_repository',
  ]);
  assert.deepEqual(check('https://github.com/search?q=react', 'github'), [
    'resource.url.not_a_repository',
  ]);
  assert.deepEqual(check('https://github.com/trending', 'github'), [
    'resource.url.not_a_repository',
  ]);
});

test('the bare github homepage is reported as a homepage, since it names no repo', () => {
  // This is the exact defect the rule was written for: one `https://github.com`
  // standing in as the code resource for ninety-three topics.
  assert.deepEqual(check('https://github.com', 'github'), ['resource.url.bare_homepage']);
});

test('a gist is a legitimate github-slot resource despite its short path', () => {
  assert.deepEqual(check('https://gist.github.com/someone', 'github'), []);
});

test('a non-code host in the github slot is a slot mismatch', () => {
  assert.deepEqual(check('https://react.dev/learn', 'github'), ['resource.url.slot_mismatch']);
});

/* -------------------------------------------------------------------------- */
/* checkUrlForSlot — authority                                                */
/* -------------------------------------------------------------------------- */

test('a tutorial farm can never be the official source', () => {
  assert.deepEqual(check('https://www.w3schools.com/js/js_promise.asp', 'official'), [
    'resource.url.low_authority_official',
  ]);
  assert.deepEqual(check('https://www.geeksforgeeks.org/tcp-3-way-handshake/', 'deep_dive'), [
    'resource.url.low_authority_deep_dive',
  ]);
});

test('a tutorial farm elsewhere is a warning, not a build failure', () => {
  const issues = checkUrlForSlot('https://www.w3schools.com/js/js_promise.asp', 'article', 'p');
  assert.deepEqual(codes(issues), ['resource.url.low_authority']);
  assert.equal(issues[0]?.severity, 'warning');
});

test('a video platform in the official slot is a mismatch, not a judgement call', () => {
  const issues = checkUrlForSlot('https://www.youtube.com/watch?v=abc123', 'official', 'p');
  assert.deepEqual(codes(issues), ['resource.url.slot_mismatch']);
  assert.equal(issues[0]?.severity, 'error');
});

test('a vendor that also hosts video is not treated as a video platform', () => {
  // coursera.org is a video host; developer.apple.com is not, and both are official
  // for something. The allowlist exists to stop the first rule firing on the second.
  assert.deepEqual(check('https://developer.apple.com/documentation/swiftui', 'official'), []);
});

test('paywalled hosts are flagged as warnings wherever they appear', () => {
  const issues = checkUrlForSlot('https://medium.com/@author/a-real-post-abc123', 'article', 'p');
  assert.deepEqual(codes(issues), ['resource.url.paywalled']);
  assert.equal(issues[0]?.severity, 'warning');
});

/* -------------------------------------------------------------------------- */
/* checkUrlForSlot — specificity                                              */
/* -------------------------------------------------------------------------- */

test('a homepage is fatal where a specific page is the whole point', () => {
  for (const type of ['article', 'deep_dive', 'cheat_sheet', 'video_en', 'video_hi'] as const) {
    assert.ok(
      check('https://react.dev/', type).includes('resource.url.bare_homepage'),
      `${type} should reject a homepage`,
    );
  }
});

test('a homepage in the official slot is advisory, because docs indexes are usable', () => {
  const issues = checkUrlForSlot('https://react.dev/', 'official', 'p');
  assert.deepEqual(codes(issues), ['resource.url.homepage_in_official_slot']);
  assert.equal(issues[0]?.severity, 'warning');
});

test('several independent defects are all reported, not just the first', () => {
  const issues = check('http://www.w3schools.com/', 'deep_dive');
  assert.deepEqual(issues.sort(), [
    'resource.url.bare_homepage',
    'resource.url.low_authority_deep_dive',
    'resource.url.not_https',
  ]);
});
