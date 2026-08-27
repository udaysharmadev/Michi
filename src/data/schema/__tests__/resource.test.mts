/**
 * Resource schema tests.
 *
 * Resources are the product, so this file is deliberately the strictest in the
 * suite. Two things get the most attention:
 *
 *  - **Content addressing.** `resourceId` is written into content files, so the same
 *    page must always produce the same id and two spellings of one page must never
 *    produce two.
 *  - **The seven-slot contract.** A topic that fills three slots with one URL under
 *    three labels presents as complete and delivers one link; that is the failure
 *    these list-level rules exist to make impossible.
 */

import test from 'node:test';
import assert from 'node:assert/strict';

import {
  RESOURCE_ID_PATTERN,
  type Resource,
  banDuplicateUrlsWithinTopic,
  groupBySlot,
  hasConsistentId,
  limitPaywalledResources,
  requireAllSevenSlots,
  requireSourceDiversity,
  resourceId,
  resourceListStructureValidator,
  resourceListValidator,
  resourceValidator,
} from '../resource';
import { RESOURCE_TYPES } from '../resource-type';
import type { Issue } from '../validator';
import { sevenSlots } from './fixtures.mjs';

const codes = (issues: readonly Issue[]): string[] => issues.map((i) => i.code);

/** A resource with nothing wrong with it. Overridden field by field in each test. */
function resource(over: Partial<Resource> = {}): Record<string, unknown> {
  return {
    type: 'article',
    title: 'MDN — Using the Fetch API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/fetch',
    ...over,
  };
}

/* -------------------------------------------------------------------------- */
/* Content addressing                                                        */
/* -------------------------------------------------------------------------- */

test('resourceId is derived from the canonical URL, so one page has one id', () => {
  const id = resourceId('https://developer.mozilla.org/en-US/docs/Web/API/fetch');
  assert.match(id, RESOURCE_ID_PATTERN);
  for (const spelling of [
    'https://developer.mozilla.org/en-US/docs/Web/API/fetch/',
    'http://www.developer.mozilla.org/en-US/docs/Web/API/fetch',
    'https://developer.mozilla.org/en-US/docs/Web/API/fetch?utm_campaign=x',
  ]) {
    assert.equal(resourceId(spelling), id, spelling);
  }
});

test('different pages get different ids', () => {
  assert.notEqual(resourceId('https://react.dev/learn'), resourceId('https://react.dev/reference'));
});

test('resourceId propagates the parse failure rather than inventing an id', () => {
  assert.throws(() => resourceId('mdn.io/fetch'), TypeError);
});

test('hasConsistentId treats an absent id as consistent, not as a defect', () => {
  assert.equal(hasConsistentId({ url: 'https://react.dev/learn' }), true);
});

test('hasConsistentId catches an id that was copied or left behind after an edit', () => {
  const url = 'https://react.dev/learn';
  assert.equal(hasConsistentId({ id: resourceId(url), url }), true);
  assert.equal(hasConsistentId({ id: resourceId('https://react.dev/reference'), url }), false);
  assert.equal(hasConsistentId({ id: 'res_000000000000', url: 'not-a-url' }), false);
});

test('a mismatched id is reported with the id the URL actually implies', () => {
  const url = 'https://react.dev/learn';
  const expected = resourceId(url);
  const issues = resourceValidator.check(
    resource({ url, id: resourceId('https://react.dev/reference') }),
    'r',
  );
  assert.deepEqual(codes(issues), ['resource.id.mismatch']);
  assert.equal(issues[0]?.path, 'r.id');
  assert.match(issues[0]?.hint ?? '', new RegExp(expected));
});

test('an id that is not content-addressed at all fails on its shape', () => {
  assert.deepEqual(codes(resourceValidator.check(resource({ id: 'res_1' }), 'r')), [
    'resource.id.pattern',
  ]);
});

/* -------------------------------------------------------------------------- */
/* Single resource                                                            */
/* -------------------------------------------------------------------------- */

test('a well-formed resource reports nothing', () => {
  assert.deepEqual(resourceValidator.check(resource(), 'r'), []);
});

test('the three load-bearing fields are required', () => {
  const issues = resourceValidator.check({}, 'r');
  assert.deepEqual(codes(issues), [
    'resource.missing_field',
    'resource.missing_field',
    'resource.missing_field',
  ]);
  assert.deepEqual(
    issues.map((i) => i.path),
    ['r.type', 'r.title', 'r.url'],
  );
});

test('an unknown field is an error, because it is data nothing will read', () => {
  const issues = resourceValidator.check(resource({}), 'r');
  assert.deepEqual(issues, []);
  assert.deepEqual(codes(resourceValidator.check({ ...resource(), sectionId: 's1' }, 'r')), [
    'resource.unknown_field',
  ]);
});

test('a title that is really a URL is rejected', () => {
  assert.deepEqual(
    codes(resourceValidator.check(resource({ title: 'https://react.dev/learn' }), 'r')),
    ['resource.title.is_url'],
  );
});

test('a one-word title does not identify a resource', () => {
  assert.deepEqual(codes(resourceValidator.check(resource({ title: 'Fetching' }), 'r')), [
    'resource.title.single_word',
  ]);
});

test('a shouted title is advisory, not fatal', () => {
  const issues = resourceValidator.check(resource({ title: 'USING THE FETCH API' }), 'r');
  assert.deepEqual(codes(issues), ['resource.title.all_caps']);
  assert.equal(issues[0]?.severity, 'warning');
});

test('a generic title is rejected even though it is well-formed English', () => {
  assert.deepEqual(codes(resourceValidator.check(resource({ title: 'Comprehensive Guide' }), 'r')), [
    'resource.title.generic_title',
  ]);
});

test('a URL stored non-canonically is reported with the exact string to store', () => {
  const issues = resourceValidator.check(
    resource({ url: 'https://react.dev/learn?utm_source=newsletter', type: 'official' }),
    'r',
  );
  assert.deepEqual(codes(issues).sort(), [
    'resource.url.not_canonical',
    'resource.url.tracking_params',
  ]);
  const canonical = issues.find((i) => i.code === 'resource.url.not_canonical');
  assert.equal(canonical?.hint, 'Store it as: https://react.dev/learn');
});

test('a trailing slash and a www are left alone, because they resolve as written', () => {
  assert.deepEqual(
    resourceValidator.check(
      resource({ type: 'official', title: 'Rust — Learn', url: 'https://www.rust-lang.org/learn/' }),
      'r',
    ),
    [],
  );
});

test('the video slots require a declared language', () => {
  const issues = resourceValidator.check(
    resource({ type: 'video_en', url: 'https://www.youtube.com/watch?v=abc123', title: 'Fetch in Depth' }),
    'r',
  );
  assert.deepEqual(codes(issues), ['resource.lang.required_for_slot']);
  assert.equal(issues[0]?.path, 'r.lang');
});

test('a language that contradicts its slot is a misfiled resource', () => {
  const issues = resourceValidator.check(
    resource({
      type: 'video_hi',
      url: 'https://www.youtube.com/watch?v=abc123',
      title: 'Fetch in Depth',
      lang: 'en',
    }),
    'r',
  );
  assert.deepEqual(codes(issues), ['resource.lang.slot_mismatch']);
  assert.match(issues[0]?.hint ?? '', /Move it to the matching slot/);
});

test('duration is meaningful for video and meaningless elsewhere', () => {
  assert.deepEqual(
    resourceValidator.check(
      resource({
        type: 'video_en',
        url: 'https://www.youtube.com/watch?v=abc123',
        title: 'Fetch in Depth',
        lang: 'en',
        durationSeconds: 1380,
      }),
      'r',
    ),
    [],
  );
  const issues = resourceValidator.check(resource({ durationSeconds: 1380 }), 'r');
  assert.deepEqual(codes(issues), ['resource.durationSeconds.not_applicable']);
  assert.equal(issues[0]?.severity, 'warning');
});

test('a publication date in the future means a typo or a fabricated citation', () => {
  assert.deepEqual(codes(resourceValidator.check(resource({ publishedAt: '2999-01-01' }), 'r')), [
    'resource.publishedAt.in_future',
  ]);
  assert.deepEqual(resourceValidator.check(resource({ publishedAt: '2019-04-02' }), 'r'), []);
  assert.deepEqual(codes(resourceValidator.check(resource({ publishedAt: '02-04-2019' }), 'r')), [
    'resource.publishedAt.pattern',
  ]);
});

test('a resource the health check found dead cannot pass', () => {
  assert.deepEqual(codes(resourceValidator.check(resource({ health: 'dead' }), 'r')), [
    'resource.health.dead',
  ]);
  assert.deepEqual(resourceValidator.check(resource({ health: 'unknown' }), 'r'), []);
});

/* -------------------------------------------------------------------------- */
/* The seven-slot contract                                                    */
/* -------------------------------------------------------------------------- */

test('a complete seven-slot list passes every rule', () => {
  assert.deepEqual(resourceListValidator.check(sevenSlots(), 'topic.resources'), []);
});

test('missing slots are named, with the acceptance criteria for each', () => {
  const [only] = requireAllSevenSlots(
    [{ type: 'official', title: 'React — Learn', url: 'https://react.dev/learn' }] as Resource[],
    'r',
  );
  assert.equal(only?.code, 'topic.resources.missing_slots');
  assert.match(only?.message ?? '', /Missing 6 of the seven resource slots/);
  for (const type of RESOURCE_TYPES.filter((t) => t !== 'official')) {
    assert.match(only?.hint ?? '', new RegExp(type));
  }
});

test('a slot filled twice is reported once, at the second occurrence', () => {
  const list = sevenSlots();
  list.push({ type: 'article', title: 'CSS Tricks — Fetch', url: 'https://css-tricks.com/fetch' });
  const issues = requireAllSevenSlots(list as unknown as Resource[], 'r');
  assert.deepEqual(codes(issues), ['topic.resources.duplicate_slot']);
  assert.equal(issues[0]?.path, 'r[7]');
  assert.match(issues[0]?.hint ?? '', /Indices: 3, 7/);
});

test('one URL cannot fill several slots, however it is spelled', () => {
  const issues = banDuplicateUrlsWithinTopic(
    [
      { type: 'official', title: 'React — Learn', url: 'https://react.dev/learn' },
      { type: 'article', title: 'React — Learn (again)', url: 'https://www.react.dev/learn/' },
      { type: 'deep_dive', title: 'React — Learn (again)', url: 'https://react.dev/learn?ref=x' },
    ] as Resource[],
    'r',
  );
  assert.deepEqual(codes(issues), [
    'topic.resources.duplicate_url',
    'topic.resources.duplicate_url',
  ]);
  assert.match(issues[0]?.hint ?? '', /official, article, deep_dive/);
});

test('an unparseable URL still participates in duplicate detection', () => {
  const issues = banDuplicateUrlsWithinTopic(
    [
      { type: 'official', title: 'A Title', url: 'not-a-url' },
      { type: 'article', title: 'A Title', url: 'NOT-A-URL' },
    ] as Resource[],
    'r',
  );
  assert.deepEqual(codes(issues), ['topic.resources.duplicate_url']);
});

test('more than one paywalled resource is a warning about the whole list', () => {
  const list = sevenSlots().map((r, i) => (i < 2 ? { ...r, paywalled: true } : r));
  const issues = limitPaywalledResources(list as unknown as Resource[], 'r');
  assert.deepEqual(codes(issues), ['topic.resources.too_many_paywalled']);
  assert.equal(issues[0]?.severity, 'warning');
  assert.deepEqual(limitPaywalledResources(sevenSlots() as unknown as Resource[], 'r'), []);
});

test('a list drawn from one or two hosts is flagged as undiversified', () => {
  const sameHost = Array.from({ length: 4 }, (_, i) => ({
    type: RESOURCE_TYPES[i]!,
    title: `React — Page ${i}`,
    url: `https://react.dev/page-${i}`,
  }));
  const issues = requireSourceDiversity(sameHost as unknown as Resource[], 'r');
  assert.deepEqual(codes(issues), ['topic.resources.low_source_diversity']);
  assert.equal(issues[0]?.severity, 'warning');
  assert.deepEqual(requireSourceDiversity(sevenSlots() as unknown as Resource[], 'r'), []);
});

test('a short list is not judged on diversity', () => {
  const three = sevenSlots()
    .slice(0, 3)
    .map((r) => ({ ...r, url: 'https://react.dev/learn' }));
  assert.deepEqual(requireSourceDiversity(three as unknown as Resource[], 'r'), []);
});

test('the list validator caps length in both directions', () => {
  assert.ok(codes(resourceListValidator.check([], 'r')).includes('topic.resources.too_few'));
  const fifteen = Array.from({ length: 15 }, (_, i) => ({
    type: 'article',
    title: `MDN — Page ${i}`,
    url: `https://developer.mozilla.org/page-${i}`,
  }));
  assert.ok(codes(resourceListValidator.check(fifteen, 'r')).includes('topic.resources.too_many'));
});

/* -------------------------------------------------------------------------- */
/* Structure-only list validator                                              */
/* -------------------------------------------------------------------------- */

test('the structure-only validator accepts an empty list and skips the slot contract', () => {
  assert.deepEqual(resourceListStructureValidator.check([], 'r'), []);
  const partial = [{ type: 'official', title: 'React — Learn', url: 'https://react.dev/learn' }];
  assert.deepEqual(resourceListStructureValidator.check(partial, 'r'), []);
});

test('the structure-only validator still rejects data that cannot be rendered', () => {
  assert.deepEqual(codes(resourceListStructureValidator.check([{ type: 'article' }], 'r')), [
    'resource.missing_field',
    'resource.missing_field',
  ]);
  assert.deepEqual(codes(resourceListStructureValidator.check([{ ...resource(), type: 'blog' }], 'r')), [
    'resource.type.unknown_value',
  ]);
});

test('a draft is exempt from quality rules but not from being addressable', () => {
  // These four codes are the ones the publication policy marks structural, which is
  // a claim about drafts specifically: `published` content is checked by the full
  // validator regardless. If the structure-only path stops running them, every one
  // of those policy entries becomes dead code and the corpus can accumulate URLs
  // that the resource index silently skips.
  const check = (over: Record<string, unknown>): string[] =>
    codes(resourceListStructureValidator.check([{ ...resource(), ...over }], 'r'));

  assert.deepEqual(check({ url: 'not-a-url!!' }), ['resource.url.unparseable']);
  assert.deepEqual(check({ url: 'http://localhost:3000/docs' }), ['resource.url.non_public_host']);
  assert.deepEqual(check({ url: 'https://user:pw@react.dev/learn' }), [
    'resource.url.embedded_credentials',
  ]);
  assert.deepEqual(
    check({ url: 'https://react.dev/learn', id: resourceId('https://react.dev/reference') }),
    ['resource.id.mismatch'],
  );
});

test('the structure-only validator holds its tongue on the editorial rules it owns', () => {
  // The inverse of the rule above, and the reason the two lists are separate: a
  // draft that is merely unpolished must not produce output from these rules.
  const noisy = [
    { type: 'official', title: 'React — Learn', url: 'https://react.dev/learn?utm_source=x' },
    { type: 'video_en', title: 'React — Full Course', url: 'https://www.youtube.com' },
    { type: 'github', title: 'React — Source Code', url: 'http://bit.ly/3xYz' },
  ];
  assert.deepEqual(resourceListStructureValidator.check(noisy, 'r'), []);
  // …while the same three resources are a wall of defects when published.
  assert.ok(codes(resourceListValidator.check(noisy, 'r')).length >= 6);
});

test('title quality is caught by the shape, and left to the policy to silence', () => {
  // Not a hole in the structure/quality split: the title rules live in the object
  // shape, so a draft *does* report them and `applyPublishPolicy` is what suppresses
  // them. Pinned here because the alternative — moving them out of the shape — would
  // look like a tidy-up and would quietly stop published content being checked.
  assert.deepEqual(
    codes(resourceListStructureValidator.check([{ ...resource(), title: 'Comprehensive Guide' }], 'r')),
    ['resource.title.generic_title'],
  );
});

/* -------------------------------------------------------------------------- */
/* groupBySlot                                                                */
/* -------------------------------------------------------------------------- */

test('groupBySlot returns display order and omits slots nobody filled', () => {
  const grouped = groupBySlot([
    { type: 'github', title: 'facebook/react', url: 'https://github.com/facebook/react' },
    { type: 'official', title: 'React — Learn', url: 'https://react.dev/learn' },
  ] as Resource[]);
  assert.deepEqual([...grouped.keys()], ['official', 'github']);
  assert.equal(grouped.size, 2);
});

test('groupBySlot keeps every resource in a doubly-filled slot', () => {
  const grouped = groupBySlot([
    { type: 'article', title: 'One Title', url: 'https://a.example/1' },
    { type: 'article', title: 'Two Title', url: 'https://b.example/2' },
  ] as Resource[]);
  assert.equal(grouped.get('article')?.length, 2);
});
