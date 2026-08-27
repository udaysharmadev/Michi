/**
 * Boilerplate-detection tests.
 *
 * These rules are the ones that would have caught the 156 identically-worded topics
 * and the 247 templated descriptions in this repository, so they are worth pinning
 * from both directions: known filler must be rejected *however it is punctuated*,
 * and real hand-written prose must pass untouched. A false positive here is
 * expensive — it teaches a curator that the gate is wrong and can be ignored.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  BANNED_PROSE,
  BANNED_RESOURCE_TITLES,
  DuplicateProseDetector,
  banBoilerplate,
  fingerprint,
  requireSubstance,
} from '../boilerplate';
import type { Issue } from '../validator';

const codes = (issues: readonly Issue[]): string[] => issues.map((i) => i.code);

/* -------------------------------------------------------------------------- */
/* fingerprint                                                                */
/* -------------------------------------------------------------------------- */

test('fingerprint erases the differences a copy-paste edit introduces', () => {
  assert.equal(fingerprint('Understand core concepts.'), 'understand core concepts');
  assert.equal(fingerprint('  UNDERSTAND   core  concepts!!  '), 'understand core concepts');
  assert.equal(fingerprint('Understand — core, concepts;'), 'understand core concepts');
});

test('fingerprint normalises smart quotes so an apostrophe swap cannot evade a rule', () => {
  assert.equal(fingerprint('don’t skip it'), fingerprint("don't skip it"));
  assert.equal(fingerprint('“quoted” text'), fingerprint('"quoted" text'));
});

test('fingerprint keeps letters and digits from any script', () => {
  assert.equal(fingerprint('HTTP/2 और gRPC'), 'http 2 और grpc');
  assert.equal(fingerprint('!!!'), '');
});

/* -------------------------------------------------------------------------- */
/* banBoilerplate                                                             */
/* -------------------------------------------------------------------------- */

const prose = banBoilerplate({ code: 'topic.whyLearnThis' });

test('every entry in the banned corpus is actually rejected', () => {
  for (const banned of BANNED_PROSE) {
    assert.deepEqual(
      codes(prose(banned, 'p')),
      ['topic.whyLearnThis.boilerplate'],
      `not caught: ${banned}`,
    );
  }
});

test('banned prose is caught through case, spacing and punctuation edits', () => {
  const variants = [
    'This is a foundational concept required for career progression.',
    'this is a foundational concept required for career progression',
    'This  is a foundational   concept required for career progression!',
    'This is a foundational concept required for career progression',
  ];
  for (const variant of variants) {
    assert.deepEqual(codes(prose(variant, 'p')), ['topic.whyLearnThis.boilerplate'], variant);
  }
});

test('real hand-written prose passes', () => {
  const genuine = [
    'Browsers cap concurrent connections per origin at six, so a page requesting forty assets over HTTP/1.1 serialises most of them.',
    'You reach for a database index when a query plan shows a sequential scan over a table large enough that the scan dominates response time.',
    'Kubernetes readiness probes decide whether a pod receives traffic; liveness probes decide whether it is restarted.',
  ];
  for (const text of genuine) {
    assert.deepEqual(prose(text, 'p'), [], text);
  }
});

test('the generic-title corpus is rejected only where titles are being validated', () => {
  const withTitles = banBoilerplate({ code: 'resource.title', includeTitleCorpus: true });
  for (const banned of BANNED_RESOURCE_TITLES) {
    assert.deepEqual(
      codes(withTitles(banned, 'p')),
      ['resource.title.generic_title'],
      `not caught: ${banned}`,
    );
  }
  // The same words in a prose field are not a *title* defect, so they must not be
  // reported with the title code.
  assert.deepEqual(codes(prose('Getting Started', 'p')), []);
});

test('templated shapes are caught even though the text varies per topic', () => {
  const cases: readonly [text: string, label: RegExp][] = [
    ['Learn about Linux Fundamentals in the context of devops.', /Learn about <topic>/],
    ['Official Docs: Linux Fundamentals', /Official Docs/],
    ['Everything you need to know about closures', /clickbait/],
    ['The complete guide to', /superlative/],
    ['Lorem ipsum dolor', /placeholder/],
    ['This is an interesting concept.', /self-referential/],
  ];
  for (const [text, label] of cases) {
    const [only] = prose(text, 'p');
    assert.equal(only?.code, 'topic.whyLearnThis.boilerplate_pattern', text);
    assert.match(only?.message ?? '', label);
  }
});

test('skipPatterns exempts fields where a templated shape is legitimate', () => {
  const titles = banBoilerplate({ code: 'topic.title', skipPatterns: true });
  assert.deepEqual(titles('Overview', 'p'), [], 'a node may legitimately be titled Overview');
  assert.deepEqual(codes(titles('Understand the basics.', 'p')), ['topic.title.boilerplate']);
});

test('text with no letters at all is not reported as boilerplate', () => {
  assert.deepEqual(prose('---', 'p'), [], 'emptiness is a different rule’s job');
});

/* -------------------------------------------------------------------------- */
/* requireSubstance                                                           */
/* -------------------------------------------------------------------------- */

test('requireSubstance counts words, not characters', () => {
  const rule = requireSubstance({ code: 'topic.whyLearnThis', minWords: 12 });
  const [only] = rule('Because it is important for your career and future growth.', 'p');
  assert.equal(only?.code, 'topic.whyLearnThis.too_few_words');
  assert.match(only?.message ?? '', /Only 10 word\(s\); expected at least 12/);
});

test('requireSubstance rejects prose that is long enough and says nothing', () => {
  const rule = requireSubstance({ code: 'f', minWords: 8 });
  assert.deepEqual(
    codes(rule('This is a very important and essential key concept for you to be great at.', 'p')),
    ['f.low_substance'],
  );
  assert.deepEqual(
    rule('Connection pooling reuses TCP sockets so Postgres avoids a fork per query.', 'p'),
    [],
  );
});

test('requireSubstance reports the length problem before the substance one', () => {
  const rule = requireSubstance({ code: 'f', minWords: 20 });
  assert.deepEqual(codes(rule('It is very important.', 'p')), ['f.too_few_words']);
});

/* -------------------------------------------------------------------------- */
/* DuplicateProseDetector                                                     */
/* -------------------------------------------------------------------------- */

test('the detector fires only once the threshold is exceeded', () => {
  const sentence = 'Applied when a service must survive a node failure.';
  const under = new DuplicateProseDetector(3);
  under.add(sentence, 'a.whyLearnThis');
  under.add(sentence, 'b.whyLearnThis');
  assert.deepEqual(under.report(), [], 'two occurrences may be a coincidence');

  const over = new DuplicateProseDetector(3);
  over.add(sentence, 'a.whyLearnThis');
  over.add(sentence, 'b.whyLearnThis');
  over.add(sentence, 'c.whyLearnThis');
  const issues = over.report();
  assert.deepEqual(codes(issues), ['corpus.duplicate_prose']);
  assert.equal(issues[0]?.path, 'a.whyLearnThis');
  assert.match(issues[0]?.message ?? '', /appears in 3 places/);
  assert.match(issues[0]?.hint ?? '', /a\.whyLearnThis, b\.whyLearnThis, c\.whyLearnThis/);
});

test('the detector matches on fingerprint, so re-punctuating does not hide reuse', () => {
  const detector = new DuplicateProseDetector(2);
  detector.add('Used when a request must be retried safely.', 'a');
  detector.add('used when a request must be retried safely', 'b');
  assert.equal(detector.report().length, 1);
});

test('short list items are exempt, because they legitimately recur', () => {
  const detector = new DuplicateProseDetector(2);
  for (const path of ['a', 'b', 'c', 'd']) detector.add('Idempotency keys', path);
  assert.deepEqual(detector.report(), [], 'three words or fewer is a term, not a sentence');
});

test('the detector truncates long location lists but reports the true count', () => {
  const detector = new DuplicateProseDetector(3);
  const paths = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  for (const path of paths) detector.add('This sentence is repeated everywhere in the corpus.', path);
  const [only] = detector.report();
  assert.match(only?.message ?? '', /appears in 7 places/);
  assert.match(only?.hint ?? '', /\(\+2 more\)/);
});

test('report output is ordered deterministically by path', () => {
  const detector = new DuplicateProseDetector(2);
  detector.add('The second sentence repeated twice here.', 'zebra');
  detector.add('The second sentence repeated twice here.', 'zebra2');
  detector.add('The first sentence repeated twice here.', 'alpha');
  detector.add('The first sentence repeated twice here.', 'alpha2');
  assert.deepEqual(
    detector.report().map((i) => i.path),
    ['alpha', 'zebra'],
  );
});

test('the reported sample keeps the original text, not the fingerprint', () => {
  const detector = new DuplicateProseDetector(2);
  detector.add('Used when the cache must be invalidated!', 'a');
  detector.add('Used when the cache must be invalidated!', 'b');
  assert.equal(detector.report()[0]?.received, '"Used when the cache must be invalidated!"');
});
