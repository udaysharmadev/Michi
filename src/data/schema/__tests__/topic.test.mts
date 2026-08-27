/**
 * Topic schema and publication-policy tests.
 *
 * The policy is the part of this system that decides what a learner can reach, so
 * the whole `status × structural × severity` matrix is pinned explicitly rather than
 * sampled. Two properties matter most and are easy to break by accident:
 *
 *  - a **structural** issue is never suppressed, at any status;
 *  - a structural issue that chose `warning` is never *promoted* either, or every
 *    layout observation in the corpus becomes a build failure.
 *
 * The known-good fixture is load-bearing in a second way: if `publishedTopic()`
 * stops validating cleanly, the published tier has become unreachable and the first
 * test in this file says so directly.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  type PublishStatus,
  applyPublishPolicy,
  isPublished,
  isStructuralIssue,
  slugify,
  topicCountValidator,
  topicStructureValidator,
  topicValidator,
  validateTopic,
} from '../topic';
import { type Issue, issue } from '../validator';
import { publishedTopic } from './fixtures.mjs';

const codes = (issues: readonly Issue[]): string[] => issues.map((i) => i.code);
const STATUSES: readonly PublishStatus[] = ['draft', 'review', 'published'];

/* -------------------------------------------------------------------------- */
/* The known-good fixture                                                     */
/* -------------------------------------------------------------------------- */

test('the published tier is achievable: a hand-written topic passes every rule', () => {
  const outcome = validateTopic(publishedTopic());
  assert.deepEqual(outcome.errors, [], 'errors');
  assert.deepEqual(outcome.warnings, [], 'warnings');
  assert.deepEqual(outcome.suppressed, [], 'suppressed');
  assert.equal(outcome.status, 'published');
});

test('the fixture also passes the full validator directly, not only through the policy', () => {
  assert.deepEqual(topicValidator.check(publishedTopic(), 'topic'), []);
});

/* -------------------------------------------------------------------------- */
/* isStructuralIssue                                                          */
/* -------------------------------------------------------------------------- */

test('codes that describe unrenderable data are structural', () => {
  for (const code of [
    'topic.title.type',
    'topic.missing_field',
    'topic.unknown_field',
    'topic.difficulty.unknown_value',
    'topic.slug.pattern',
    'topic.description.empty',
    'resource.url.unparseable',
    'resource.url.non_public_host',
    'resource.url.embedded_credentials',
    'resource.id.mismatch',
    'roadmap.topicCount.not_integer',
  ]) {
    assert.equal(isStructuralIssue(code), true, code);
  }
});

test('graph and corpus-integrity codes are structural by prefix, whatever their suffix', () => {
  assert.equal(isStructuralIssue('roadmap.node.legacy_label_field'), true);
  assert.equal(isStructuralIssue('roadmap.isolated_topics'), true);
  assert.equal(isStructuralIssue('corpus.integrity.duplicate_slug'), true);
});

test('editorial-quality codes are not structural, so the policy can govern them', () => {
  for (const code of [
    'resource.title.generic_title',
    'resource.title.boilerplate_pattern',
    'topic.whyLearnThis.boilerplate',
    'topic.whyLearnThis.low_substance',
    'topic.description.too_short',
    'topic.resources.missing_slots',
    'resource.url.low_authority',
    'resource.url.bare_homepage',
    // Only `corpus.integrity.*` is structural; the softer corpus checks are advice.
    'corpus.unresolved_next_topic',
  ]) {
    assert.equal(isStructuralIssue(code), false, code);
  }
});

test('the structural set is matched on the last segment, not anywhere in the code', () => {
  // `topic.pattern_matching.too_short` ends in `too_short`; the word `pattern`
  // appearing mid-code must not make it structural.
  assert.equal(isStructuralIssue('topic.pattern_matching.too_short'), false);
  assert.equal(isStructuralIssue('topic.mismatch_notes.boilerplate'), false);
});

/* -------------------------------------------------------------------------- */
/* applyPublishPolicy                                                         */
/* -------------------------------------------------------------------------- */

const structuralError = (): Issue => issue('t.title', 'topic.title.type', 'Expected a string.');
const structuralWarning = (): Issue =>
  issue('r.nodes', 'roadmap.isolated_topics', 'Nothing links to these nodes.', {
    severity: 'warning',
  });
const qualityError = (): Issue =>
  issue('t.whyLearnThis', 'topic.whyLearnThis.boilerplate', 'Known generated filler.');
const qualityWarning = (): Issue =>
  issue('t.resources[0].url', 'resource.url.low_authority', 'Tutorial farm.', {
    severity: 'warning',
  });

test('a structural error fails the build at every status, including draft', () => {
  for (const status of STATUSES) {
    const { errors, warnings, suppressed } = applyPublishPolicy(status, [structuralError()]);
    assert.equal(errors.length, 1, status);
    assert.deepEqual(warnings, [], status);
    assert.deepEqual(suppressed, [], status);
  }
});

test('a structural warning stays a warning at every status — never promoted, never hidden', () => {
  for (const status of STATUSES) {
    const { errors, warnings, suppressed } = applyPublishPolicy(status, [structuralWarning()]);
    assert.deepEqual(errors, [], status);
    assert.equal(warnings.length, 1, status);
    assert.equal(warnings[0]?.severity, 'warning', status);
    assert.deepEqual(suppressed, [], status);
  }
});

test('a quality error is fatal when published, advisory in review, silent in draft', () => {
  const published = applyPublishPolicy('published', [qualityError()]);
  assert.deepEqual(codes(published.errors), ['topic.whyLearnThis.boilerplate']);

  const review = applyPublishPolicy('review', [qualityError()]);
  assert.deepEqual(review.errors, []);
  assert.deepEqual(codes(review.warnings), ['topic.whyLearnThis.boilerplate']);
  assert.equal(review.warnings[0]?.severity, 'warning', 'downgraded, not dropped');
  assert.deepEqual(review.suppressed, []);

  const draft = applyPublishPolicy('draft', [qualityError()]);
  assert.deepEqual(draft.errors, []);
  assert.deepEqual(draft.warnings, []);
  assert.deepEqual(codes(draft.suppressed), ['topic.whyLearnThis.boilerplate']);
});

test('a quality warning is advice at every status it survives', () => {
  assert.deepEqual(codes(applyPublishPolicy('published', [qualityWarning()]).warnings), [
    'resource.url.low_authority',
  ]);
  assert.deepEqual(codes(applyPublishPolicy('review', [qualityWarning()]).warnings), [
    'resource.url.low_authority',
  ]);
  assert.deepEqual(codes(applyPublishPolicy('draft', [qualityWarning()]).suppressed), [
    'resource.url.low_authority',
  ]);
});

test('downgrading in review copies the issue instead of mutating the caller’s array', () => {
  const original = qualityError();
  const { warnings } = applyPublishPolicy('review', [original]);
  assert.equal(original.severity, 'error', 'the input must be left alone');
  assert.notEqual(warnings[0], original);
  assert.equal(warnings[0]?.code, original.code);
  assert.equal(warnings[0]?.path, original.path);
  assert.equal(warnings[0]?.message, original.message);
});

test('every issue lands in exactly one bucket', () => {
  const input = [structuralError(), structuralWarning(), qualityError(), qualityWarning()];
  for (const status of STATUSES) {
    const { errors, warnings, suppressed } = applyPublishPolicy(status, input);
    assert.equal(errors.length + warnings.length + suppressed.length, input.length, status);
  }
});

test('an empty issue list produces three empty buckets', () => {
  assert.deepEqual(applyPublishPolicy('published', []), {
    errors: [],
    warnings: [],
    suppressed: [],
  });
});

/* -------------------------------------------------------------------------- */
/* validateTopic — status resolution                                          */
/* -------------------------------------------------------------------------- */

test('an undeclared status is draft, so new content cannot fail the build by default', () => {
  assert.equal(validateTopic({ title: 'Connection Pooling' }).status, 'draft');
  assert.deepEqual(validateTopic({ title: 'Connection Pooling' }).errors, []);
});

test('defaultStatus raises the bar for a corpus that has opted in', () => {
  const outcome = validateTopic(
    { title: 'Connection Pooling' },
    { defaultStatus: 'published' },
  );
  assert.equal(outcome.status, 'published');
  assert.ok(
    codes(outcome.errors).filter((c) => c === 'topic.missing_field').length >= 8,
    'the full shape is demanded once published',
  );
});

test('an unrecognised status is reported rather than quietly honoured', () => {
  const outcome = validateTopic({ title: 'Connection Pooling', publishStatus: 'live' });
  assert.equal(outcome.status, 'draft', 'an unknown value cannot grant a stricter tier');
  assert.deepEqual(codes(outcome.errors), ['topic.publishStatus.unknown_value']);
});

test('a declared status wins over defaultStatus in both directions', () => {
  assert.equal(
    validateTopic({ title: 'X', publishStatus: 'draft' }, { defaultStatus: 'published' }).status,
    'draft',
  );
  assert.equal(
    validateTopic(publishedTopic(), { defaultStatus: 'draft' }).status,
    'published',
  );
});

test('the path prefix is threaded through to every issue', () => {
  const outcome = validateTopic({ title: 42 }, { path: 'topics.pooling' });
  assert.deepEqual(
    outcome.errors.map((i) => i.path),
    ['topics.pooling.title'],
  );
});

/* -------------------------------------------------------------------------- */
/* validateTopic — validator selection                                        */
/* -------------------------------------------------------------------------- */

test('a draft is checked for structure only, not for completeness', () => {
  const outcome = validateTopic({ title: 'Connection Pooling', resources: [] });
  assert.deepEqual(outcome.errors, [], 'an unfinished draft is allowed to be unfinished');
  assert.deepEqual(outcome.suppressed, [], 'and is not lectured about it either');
});

test('a draft is still rejected for data that would crash the renderer', () => {
  assert.deepEqual(codes(validateTopic({ title: 123 }).errors), ['topic.title.type']);
  assert.deepEqual(codes(validateTopic({}).errors), ['topic.missing_field']);
  assert.deepEqual(codes(validateTopic({ title: 'X', slug: 'Not A Slug' }).errors), [
    'topic.slug.pattern',
  ]);
  assert.deepEqual(codes(validateTopic({ title: 'X', mystery: 1 }).errors), [
    'topic.unknown_field',
  ]);
});

test('a draft resource list is checked for renderability but not for the slot contract', () => {
  const outcome = validateTopic({
    title: 'Connection Pooling',
    resources: [{ type: 'official', title: 'PostgreSQL — Docs', url: 'https://postgresql.org/docs' }],
  });
  assert.deepEqual(outcome.errors, []);
  const broken = validateTopic({ title: 'X', resources: [{ type: 'official', title: 'A Title' }] });
  assert.deepEqual(codes(broken.errors), ['resource.missing_field']);
});

test('promotion to review turns the same content into a worklist', () => {
  const outcome = validateTopic({ title: 'Connection Pooling', publishStatus: 'review' });
  assert.deepEqual(outcome.warnings, [], 'missing fields are structural, so they are errors');
  assert.ok(codes(outcome.errors).includes('topic.missing_field'));
});

test('review downgrades editorial defects while published rejects them', () => {
  const filler = { whyLearnThis: 'This is a foundational concept required for career progression.' };
  // Two independent defects, and both are reported: the sentence is known filler
  // *and* too short. Rules do not short-circuit each other, so a curator sees the
  // whole problem rather than discovering the second one after fixing the first.
  const expected = ['topic.whyLearnThis.boilerplate', 'topic.whyLearnThis.too_few_words'];

  const review = validateTopic(publishedTopic({ ...filler, publishStatus: 'review' }));
  assert.deepEqual(review.errors, []);
  assert.deepEqual(codes(review.warnings), expected);
  assert.ok(review.warnings.every((i) => i.severity === 'warning'));

  const published = validateTopic(publishedTopic(filler));
  assert.deepEqual(codes(published.errors), expected);
});

/* -------------------------------------------------------------------------- */
/* Cross-field rules                                                          */
/* -------------------------------------------------------------------------- */

test('publishing without a slug is refused, and the slug to use is supplied', () => {
  const topic = publishedTopic();
  delete topic.slug;
  const outcome = validateTopic(topic);
  assert.deepEqual(codes(outcome.errors), ['topic.slug.required_for_publish']);
  assert.match(outcome.errors[0]?.hint ?? '', /slug: 'connection-pooling'/);
});

test('a slug with no lexical link to its title is flagged as a copy-paste error', () => {
  const outcome = validateTopic(publishedTopic({ slug: 'graphql-basics' }));
  assert.deepEqual(outcome.errors, []);
  assert.deepEqual(codes(outcome.warnings), ['topic.slug.unrelated_to_title']);
  assert.match(outcome.warnings[0]?.hint ?? '', /connection-pooling/);
});

test('a deliberately shortened slug is accepted', () => {
  for (const slug of ['pooling', 'connection-pooling-postgres', 'db-connection-pooling']) {
    assert.deepEqual(validateTopic(publishedTopic({ slug })).warnings, [], slug);
  }
});

test('two prose fields answering the same question is reported on the later field', () => {
  const topic = publishedTopic();
  const outcome = validateTopic(publishedTopic({ whenIsItUsed: topic.whyLearnThis }));
  assert.deepEqual(codes(outcome.errors), ['topic.prose.duplicated_field']);
  assert.equal(outcome.errors[0]?.path, 'whenIsItUsed');
  assert.match(outcome.errors[0]?.message ?? '', /Identical to `whyLearnThis`/);
});

test('the structure validator does not run cross-field rules', () => {
  const topic = publishedTopic({ slug: 'graphql-basics', publishStatus: 'draft' });
  assert.deepEqual(topicStructureValidator.check(topic, 't'), []);
});

/* -------------------------------------------------------------------------- */
/* slugify                                                                    */
/* -------------------------------------------------------------------------- */

test('slugify survives the punctuation that appears in real technology names', () => {
  assert.equal(slugify('C++'), 'cpp');
  assert.equal(slugify('C#'), 'csharp');
  assert.equal(slugify('Node.js'), 'node-js');
  assert.equal(slugify('CI & CD'), 'ci-and-cd');
  assert.equal(slugify('HTTP/2 Server Push'), 'http-2-server-push');
  assert.equal(slugify('.NET Core'), 'net-core');
});

test('slugify strips diacritics rather than dropping the letter', () => {
  assert.equal(slugify('Café Deployment'), 'cafe-deployment');
  assert.equal(slugify('Naïve Bayes'), 'naive-bayes');
});

test('slugify never emits a leading, trailing or doubled separator', () => {
  assert.equal(slugify('  Leading and trailing  '), 'leading-and-trailing');
  assert.equal(slugify('A -- B'), 'a-b');
  assert.equal(slugify('!!!'), '');
});

test('slugify truncates without leaving a dangling separator', () => {
  const slug = slugify(`${'a'.repeat(71)} bb`);
  assert.equal(slug, 'a'.repeat(71), 'the cut fell on the separator, which is removed');
  assert.equal(slugify('b'.repeat(90)).length, 72);
});

test('slugify is idempotent, so re-slugifying a slug is safe', () => {
  for (const title of ['C++', 'Node.js', 'CI & CD', 'Café Deployment']) {
    const once = slugify(title);
    assert.equal(slugify(once), once, title);
  }
});

/* -------------------------------------------------------------------------- */
/* Small helpers                                                              */
/* -------------------------------------------------------------------------- */

test('isPublished is true only for the explicit published status', () => {
  assert.equal(isPublished({ publishStatus: 'published' }), true);
  assert.equal(isPublished({ publishStatus: 'review' }), false);
  assert.equal(isPublished({ publishStatus: 'draft' }), false);
  assert.equal(isPublished({}), false, 'absence is not publication');
});

test('topicCountValidator accepts a count and rejects anything that is not one', () => {
  assert.deepEqual(topicCountValidator.check(0, 'c'), []);
  assert.deepEqual(topicCountValidator.check(42, 'c'), []);
  assert.deepEqual(codes(topicCountValidator.check(-1, 'c')), ['roadmap.topicCount.too_small']);
  assert.deepEqual(codes(topicCountValidator.check(4.5, 'c')), ['roadmap.topicCount.not_integer']);
  assert.deepEqual(codes(topicCountValidator.check('42', 'c')), ['roadmap.topicCount.type']);
});
