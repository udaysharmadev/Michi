/**
 * Corpus-level integrity tests.
 *
 * These are the rules that catch the defects no single-file check can see: content
 * wired to the wrong node, a slug claimed twice, one URL standing in as the resource
 * for the whole corpus. Every one of them corresponds to a defect measured in this
 * repository, so each test names the fault it is guarding against.
 *
 * The first test is the most important in the whole suite. `validateCorpus` over a
 * clean, hand-written roadmap must return **nothing** — no errors, no warnings, no
 * suppressed issues. If it cannot, the published tier is unreachable and the gate is
 * not a gate, it is a permanent red light that everyone learns to ignore.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  type RoadmapSource,
  buildResourceIndex,
  sortIssues,
  topicData,
  validateCorpus,
} from '../corpus';
import { RESOURCE_ID_PATTERN } from '../resource';
import { RESOURCE_TYPES } from '../resource-type';
import { issue } from '../validator';
import { publishedTopic, sevenSlots } from './fixtures.mjs';

const codes = (report: { errors: readonly { code: string }[] }): string[] =>
  report.errors.map((i) => i.code);

/* -------------------------------------------------------------------------- */
/* Fixtures                                                                   */
/* -------------------------------------------------------------------------- */

const section = (): Record<string, unknown> => ({
  id: 'fundamentals',
  type: 'section',
  position: { x: 0, y: 0 },
  data: { title: 'Fundamentals', color: 'blue', sectionNumber: 1 },
});

const topicNode = (id: string, title: string): Record<string, unknown> => ({
  id,
  type: 'topic',
  position: { x: 40, y: 80 },
  parentId: 'fundamentals',
  extent: 'parent',
  data: { title, difficulty: 'Intermediate' },
});

/** One section, one topic, no edges: the smallest graph with nothing wrong with it. */
function oneTopicSource(over: Partial<RoadmapSource> = {}): RoadmapSource {
  return {
    slug: 'databases',
    graph: { slug: 'databases', nodes: [section(), topicNode('pooling', 'Connection Pooling')], edges: [] },
    topics: { pooling: publishedTopic() },
    isRegistered: true,
    ...over,
  } as RoadmapSource;
}

/**
 * Two published topics joined by one prerequisite edge.
 *
 * Both carry the same prose and the same seven URLs, which is legal at the default
 * thresholds — a canonical reference does serve more than one topic — and is what
 * makes this fixture useful for testing where those thresholds actually bite.
 */
function twoTopicSource(over: Partial<RoadmapSource> = {}): RoadmapSource {
  return {
    slug: 'databases',
    graph: {
      slug: 'databases',
      nodes: [
        section(),
        topicNode('pooling', 'Connection Pooling'),
        topicNode('indexes', 'Database Indexes'),
      ],
      edges: [{ id: 'e-pooling-indexes', source: 'pooling', target: 'indexes' }],
    },
    topics: {
      pooling: publishedTopic(),
      indexes: publishedTopic({ slug: 'database-indexes', title: 'Database Indexes' }),
    },
    isRegistered: true,
    ...over,
  } as RoadmapSource;
}

/* -------------------------------------------------------------------------- */
/* The clean corpus                                                           */
/* -------------------------------------------------------------------------- */

test('a clean roadmap produces no errors, no warnings and nothing suppressed', () => {
  const report = validateCorpus([oneTopicSource()]);
  assert.deepEqual(report.errors, [], 'errors');
  assert.deepEqual(report.warnings, [], 'warnings');
  assert.equal(report.suppressedTotal, 0);
  assert.equal(report.suppressedByCode.size, 0);
});

test('a clean two-topic roadmap with a prerequisite edge is also silent', () => {
  const report = validateCorpus([twoTopicSource()]);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.warnings, []);
});

test('the same content in two roadmaps stays clean, because slugs differ per roadmap', () => {
  const report = validateCorpus([
    oneTopicSource(),
    oneTopicSource({
      slug: 'backend',
      graph: {
        slug: 'backend',
        nodes: [section(), topicNode('pool', 'Pooling in Practice')],
        edges: [],
      },
      topics: { pool: publishedTopic({ slug: 'pooling-in-practice', title: 'Pooling in Practice' }) },
    }),
  ]);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.warnings, []);
});

/* -------------------------------------------------------------------------- */
/* Graph ↔ content correspondence                                             */
/* -------------------------------------------------------------------------- */

test('content attached to the wrong node is an error, not a formatting note', () => {
  // The measured defect: 64 topic records in this repository describe a different
  // subject from the node they render under, so the learner clicks one thing and
  // reads another.
  const source = oneTopicSource();
  (source.graph as { nodes: Record<string, unknown>[] }).nodes[1] = topicNode('pooling', 'Microservices');
  const report = validateCorpus([source]);
  assert.deepEqual(codes(report), ['corpus.integrity.title_mismatch']);
  assert.equal(report.errors[0]?.path, 'databases.topics.pooling.title');
  assert.match(report.errors[0]?.message ?? '', /titled `Connection Pooling`.*labelled `Microservices`/);
});

test('a title differing only in punctuation or case is a warning with the fix in it', () => {
  const source = oneTopicSource();
  (source.graph as { nodes: Record<string, unknown>[] }).nodes[1] = topicNode(
    'pooling',
    'connection-pooling',
  );
  const report = validateCorpus([source]);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.warnings.map((i) => i.code),
    ['corpus.title_formatting_mismatch'],
  );
  assert.match(report.warnings[0]?.hint ?? '', /Adopt the node's form: `connection-pooling`/);
});

test('"Hashing & Salting" and "Hashing And Salting" are recognised as the same title', () => {
  const source = oneTopicSource({
    graph: { slug: 'databases', nodes: [section(), topicNode('pooling', 'Hashing And Salting')], edges: [] },
    topics: { pooling: publishedTopic({ title: 'Hashing & Salting', slug: 'hashing-and-salting' }) },
  });
  const report = validateCorpus([source]);
  assert.deepEqual(report.errors, [], 'this is a generation artefact, not miswired content');
  assert.deepEqual(
    report.warnings.map((i) => i.code),
    ['corpus.title_formatting_mismatch'],
  );
});

test('a canvas node with no content is an error, because the drawer opens empty', () => {
  const source = oneTopicSource();
  (source.graph as { nodes: Record<string, unknown>[] }).nodes.push(
    topicNode('indexes', 'Database Indexes'),
  );
  const report = validateCorpus([source]);
  assert.deepEqual(codes(report), ['corpus.integrity.node_without_content']);
  assert.match(report.errors[0]?.message ?? '', /1 topic node\(s\) have no entry.*indexes/);
});

test('content with no canvas node is a warning, because it is written but unreachable', () => {
  const source = oneTopicSource({
    topics: { pooling: publishedTopic(), orphan: publishedTopic({ slug: 'orphan-topic', title: 'Orphan Topic' }) },
  });
  const report = validateCorpus([source]);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.warnings.map((i) => i.code),
    ['corpus.orphaned_content'],
  );
});

test('a graph whose declared slug is not its directory is an error', () => {
  const source = oneTopicSource({
    graph: { slug: 'postgres', nodes: [section(), topicNode('pooling', 'Connection Pooling')], edges: [] },
  });
  assert.ok(codes(validateCorpus([source])).includes('roadmap.slug_directory_mismatch'));
});

test('a topics export that is not a record is reported instead of being skipped', () => {
  const report = validateCorpus([oneTopicSource({ topics: [publishedTopic()] })]);
  assert.ok(codes(report).includes('corpus.integrity.topics_not_a_record'));
  assert.equal(report.stats.totalTopicRecords, 0);
});

test('an unusable graph is reported and does not abort the rest of the corpus', () => {
  const report = validateCorpus([
    oneTopicSource({ slug: 'broken', graph: null, topics: {} }),
    oneTopicSource(),
  ]);
  assert.ok(codes(report).some((c) => c.startsWith('roadmap.')));
  assert.equal(report.stats.roadmaps[0]?.topicNodes, 0, 'no stats invented for a missing graph');
  assert.equal(report.stats.roadmaps[1]?.topicNodes, 1, 'the clean roadmap was still measured');
});

/* -------------------------------------------------------------------------- */
/* Global uniqueness                                                          */
/* -------------------------------------------------------------------------- */

test('a slug claimed twice is an error naming the topic that claimed it first', () => {
  // Four slugs in this repository are claimed by two roadmaps each; whichever loses
  // becomes unreachable at `/topics/<slug>`.
  const report = validateCorpus([
    oneTopicSource(),
    oneTopicSource({
      slug: 'backend',
      graph: { slug: 'backend', nodes: [section(), topicNode('pool', 'Connection Pooling')], edges: [] },
      topics: { pool: publishedTopic() },
    }),
  ]);
  assert.deepEqual(codes(report), ['corpus.integrity.duplicate_slug']);
  assert.equal(report.errors[0]?.path, 'backend.topics.pool.slug');
  assert.match(report.errors[0]?.message ?? '', /already used by `databases\.topics\.pooling`/);
});

/* -------------------------------------------------------------------------- */
/* Resource over-reuse                                                        */
/* -------------------------------------------------------------------------- */

test('a URL cited by more topics than the threshold allows is an error', () => {
  // The measured defect: one `https://github.com` serving as the code resource for
  // 93 topics. Both fixture topics cite all seven URLs, so at a threshold of one
  // every URL is over-reused.
  const report = validateCorpus([twoTopicSource()], { maxUrlReuse: 1 });
  const overused = report.errors.filter((i) => i.code === 'corpus.overused_url');
  assert.equal(overused.length, 7);
  assert.match(overused[0]?.message ?? '', /the resource for 2 different topics/);
});

test('the default threshold tolerates a genuinely canonical reference', () => {
  assert.deepEqual(validateCorpus([twoTopicSource()]).errors, []);
});

test('quarantined content does not count towards URL over-reuse', () => {
  // Draft topics are known-bad by definition. Counting them would make the rule
  // permanently red and hide the reuse happening in content claiming to be finished.
  const source = twoTopicSource();
  (source.topics as Record<string, Record<string, unknown>>)['indexes']!['publishStatus'] = 'draft';
  const report = validateCorpus([source], { maxUrlReuse: 1 });
  assert.deepEqual(
    report.errors.filter((i) => i.code === 'corpus.overused_url'),
    [],
  );
  assert.equal(report.stats.totalResourceRefs, 14, 'but the statistics still count them');
});

/* -------------------------------------------------------------------------- */
/* Cross-corpus prose reuse                                                   */
/* -------------------------------------------------------------------------- */

test('prose repeated across topics is an error even when it is not known filler', () => {
  const report = validateCorpus([twoTopicSource()], { maxProseReuse: 2 });
  const duplicated = report.errors.filter((i) => i.code === 'corpus.duplicate_prose');
  assert.ok(duplicated.length >= 4, `expected several, got ${duplicated.length}`);
  assert.match(duplicated[0]?.message ?? '', /appears in 2 places/);
});

test('quarantined content does not count towards prose reuse either', () => {
  const source = twoTopicSource();
  (source.topics as Record<string, Record<string, unknown>>)['indexes']!['publishStatus'] = 'draft';
  const report = validateCorpus([source], { maxProseReuse: 2 });
  assert.deepEqual(
    report.errors.filter((i) => i.code === 'corpus.duplicate_prose'),
    [],
  );
});

/* -------------------------------------------------------------------------- */
/* whatComesNext resolution                                                   */
/* -------------------------------------------------------------------------- */

test('whatComesNext resolves against any topic title in the corpus, in any order', () => {
  const source = twoTopicSource();
  // Points forward, at a topic validated later in the same pass — resolution happens
  // in a second pass precisely so that authoring order does not matter.
  (source.topics as Record<string, Record<string, unknown>>)['pooling']!['whatComesNext'] =
    'Database Indexes';
  assert.deepEqual(validateCorpus([source]).warnings, []);
});

test('whatComesNext naming nothing in the corpus is a warning, not a silent dead end', () => {
  const source = oneTopicSource();
  (source.topics as Record<string, Record<string, unknown>>)['pooling']!['whatComesNext'] = 'Sharding';
  const report = validateCorpus([source]);
  assert.deepEqual(report.errors, []);
  assert.deepEqual(
    report.warnings.map((i) => i.code),
    ['corpus.unresolved_next_topic'],
  );
  assert.equal(report.warnings[0]?.path, 'databases.topics.pooling.whatComesNext');
});

test('whatComesNext matching a title through punctuation or case still resolves', () => {
  const source = twoTopicSource();
  (source.topics as Record<string, Record<string, unknown>>)['pooling']!['whatComesNext'] =
    'database indexes';
  assert.deepEqual(validateCorpus([source]).warnings, []);
});

/* -------------------------------------------------------------------------- */
/* Quarantine                                                                 */
/* -------------------------------------------------------------------------- */

test('a draft topic is validated for structure only and its defects are aggregated', () => {
  const report = validateCorpus([
    oneTopicSource({
      topics: {
        pooling: {
          title: 'Connection Pooling',
          publishStatus: 'draft',
          resources: [
            { type: 'official', title: 'Documentation', url: 'https://www.postgresql.org/docs' },
            { type: 'article', title: 'Comprehensive Guide', url: 'https://www.w3schools.com/sql' },
          ],
        },
      },
    }),
  ]);
  assert.deepEqual(report.errors, [], 'a draft is allowed to be unfinished');
  assert.deepEqual(report.warnings, [], 'and its editorial defects are not reported inline');
  // The counts are a floor, not an inventory. Both titles are generic and one is a
  // single word, so those rules — which live in the object shape — run and are then
  // suppressed. The URL-authority judgement on w3schools is never *made*: it is a
  // cross-field rule the structure-only validator does not run at all. So
  // `suppressedByCode` answers "what did we choose not to show", not "what is wrong
  // with this draft"; only promotion to review can answer the second question.
  assert.deepEqual(
    [...report.suppressedByCode.entries()],
    [
      ['resource.title.generic_title', 2],
      ['resource.title.single_word', 1],
    ],
  );
  assert.equal(report.suppressedTotal, 3);
});

test('a draft is still not allowed to break the canvas', () => {
  const report = validateCorpus([
    oneTopicSource({
      topics: { pooling: { title: 'Connection Pooling', publishStatus: 'draft', slug: 'Not A Slug' } },
    }),
  ]);
  assert.deepEqual(codes(report), ['topic.slug.pattern']);
});

test('promoting the same content to review turns the aggregate into a worklist', () => {
  const topics = {
    pooling: {
      title: 'Connection Pooling',
      publishStatus: 'review',
      resources: [{ type: 'official', title: 'Documentation', url: 'https://www.postgresql.org/docs' }],
    },
  };
  const report = validateCorpus([oneTopicSource({ topics })]);
  assert.equal(report.suppressedTotal, 0, 'nothing is hidden once a topic claims to be finishing');
  assert.ok(report.warnings.some((i) => i.code === 'resource.title.generic_title'));
  assert.ok(
    report.errors.some((i) => i.code === 'topic.missing_field'),
    'structural gaps stay errors regardless of status',
  );
});

test('defaultStatus governs topics that declare no status', () => {
  const topics = { pooling: { title: 'Connection Pooling' } };
  assert.equal(validateCorpus([oneTopicSource({ topics })]).stats.byStatus.draft, 1);
  assert.equal(
    validateCorpus([oneTopicSource({ topics })], { defaultStatus: 'review' }).stats.byStatus.review,
    1,
  );
});

/* -------------------------------------------------------------------------- */
/* Statistics                                                                 */
/* -------------------------------------------------------------------------- */

test('statistics describe the corpus as it is, independently of the rules', () => {
  const report = validateCorpus([twoTopicSource()]);
  const [only] = report.stats.roadmaps;
  assert.equal(only?.slug, 'databases');
  assert.equal(only?.isRegistered, true);
  assert.equal(only?.topicNodes, 2);
  assert.equal(only?.sectionNodes, 1);
  assert.equal(only?.edges, 1);
  assert.equal(only?.maxDepth, 2, 'a two-topic chain is two deep');
  assert.equal(only?.topicRecords, 2);
  assert.deepEqual(only?.byStatus, { draft: 0, review: 0, published: 2 });
  assert.equal(only?.resourceRefs, 14);
  assert.equal(only?.distinctResourceUrls, 7, 'both topics cite the same seven pages');
});

test('slot coverage reports the fill rate of each of the seven slots', () => {
  const report = validateCorpus([oneTopicSource()]);
  const coverage = report.stats.roadmaps[0]?.slotCoverage ?? [];
  assert.deepEqual(
    coverage.map((c) => c.type),
    [...RESOURCE_TYPES],
    'reported in canonical slot order',
  );
  for (const slot of coverage) {
    assert.equal(slot.filled, 1, slot.type);
    assert.equal(slot.total, 1, slot.type);
  }
});

test('slot coverage counts a topic once per slot, however many resources it files there', () => {
  const doubled = [...sevenSlots(), { type: 'article', title: 'Brandur — Postgres Weekly', url: 'https://brandur.org/nanoglyphs' }];
  const report = validateCorpus([
    oneTopicSource({ topics: { pooling: publishedTopic({ resources: doubled }) } }),
  ]);
  const article = report.stats.roadmaps[0]?.slotCoverage.find((c) => c.type === 'article');
  assert.equal(article?.filled, 1, 'one topic filling `article` twice is still one topic');
  assert.equal(report.stats.totalResourceRefs, 8);
});

test('corpus totals aggregate across roadmaps', () => {
  const report = validateCorpus([
    oneTopicSource(),
    oneTopicSource({
      slug: 'backend',
      graph: { slug: 'backend', nodes: [section(), topicNode('pool', 'Pooling in Practice')], edges: [] },
      topics: { pool: publishedTopic({ slug: 'pooling-in-practice', title: 'Pooling in Practice' }) },
    }),
  ]);
  assert.equal(report.stats.totalTopicNodes, 2);
  assert.equal(report.stats.totalTopicRecords, 2);
  assert.equal(report.stats.totalResourceRefs, 14);
  assert.equal(report.stats.distinctResourceUrls, 7);
  assert.deepEqual(report.stats.byStatus, { draft: 0, review: 0, published: 2 });
});

test('reusedUrls lists every shared page, ordered by how widely it is shared', () => {
  const report = validateCorpus([twoTopicSource()]);
  assert.equal(report.stats.reusedUrls.length, 7);
  for (const entry of report.stats.reusedUrls) assert.equal(entry.count, 2);
  const counts = report.stats.reusedUrls.map((r) => r.count);
  assert.deepEqual(counts, [...counts].sort((a, b) => b - a), 'descending by count');
});

/* -------------------------------------------------------------------------- */
/* Determinism                                                               */
/* -------------------------------------------------------------------------- */

test('issues are sorted by path then code, so CI output diffs cleanly', () => {
  const sorted = sortIssues([
    issue('b.topics.x', 'z.code', 'later path'),
    issue('a.topics.x', 'z.code', 'earlier path'),
    issue('a.topics.x', 'a.code', 'same path, earlier code'),
  ]);
  assert.deepEqual(
    sorted.map((i) => `${i.path} ${i.code}`),
    ['a.topics.x a.code', 'a.topics.x z.code', 'b.topics.x z.code'],
  );
});

test('the same corpus validated twice produces byte-identical issue lists', () => {
  const first = validateCorpus([twoTopicSource()], { maxUrlReuse: 1, maxProseReuse: 2 });
  const second = validateCorpus([twoTopicSource()], { maxUrlReuse: 1, maxProseReuse: 2 });
  assert.deepEqual(first.errors, second.errors);
  assert.deepEqual(first.warnings, second.warnings);
});

/* -------------------------------------------------------------------------- */
/* buildResourceIndex                                                         */
/* -------------------------------------------------------------------------- */

test('the resource index is derived from content, one entry per canonical URL', () => {
  const index = buildResourceIndex([twoTopicSource()]);
  assert.equal(index.size, 7);
  const entry = index.get('https://github.com/pgbouncer/pgbouncer');
  assert.deepEqual(entry?.usedBy, ['databases/pooling', 'databases/indexes']);
  assert.deepEqual([...(entry?.types ?? [])], ['github']);
  assert.match(entry?.id ?? '', RESOURCE_ID_PATTERN);
});

test('two spellings of one page collapse to a single index entry', () => {
  const source = oneTopicSource({
    topics: {
      pooling: publishedTopic({
        resources: [
          { type: 'official', title: 'PostgreSQL — Docs', url: 'https://www.postgresql.org/docs/current/' },
          { type: 'article', title: 'PostgreSQL — Docs Again', url: 'http://postgresql.org/docs/current?utm_source=x' },
        ],
      }),
    },
  });
  const index = buildResourceIndex([source]);
  assert.equal(index.size, 1, 'www, scheme, trailing slash and tracking are all noise');
  assert.deepEqual([...(index.values().next().value?.types ?? [])].sort(), ['article', 'official']);
});

test('the index skips resources it cannot address rather than throwing', () => {
  const source = oneTopicSource({
    topics: {
      pooling: publishedTopic({
        resources: [{ type: 'official', title: 'A Broken Link', url: 'not-a-url' }],
      }),
    },
  });
  assert.equal(buildResourceIndex([source]).size, 0);
});

/* -------------------------------------------------------------------------- */
/* topicData                                                                  */
/* -------------------------------------------------------------------------- */

test('topicData narrows only when a title is actually present', () => {
  assert.equal(topicData({ title: 'Connection Pooling' })?.title, 'Connection Pooling');
  assert.equal(topicData({ label: 'Connection Pooling' }), undefined, 'the legacy shape is not a topic');
  assert.equal(topicData(null), undefined);
  assert.equal(topicData([{ title: 'x' }]), undefined);
});
