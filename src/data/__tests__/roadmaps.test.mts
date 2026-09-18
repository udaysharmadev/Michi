/**
 * Catalogue invariants.
 *
 * The content gate already checks the interesting half of this — that every live slug
 * has a content directory — by loading the whole corpus. These tests cover the half a
 * corpus scan cannot see: that the *shape* of the two-list split still holds. The
 * failure mode is silent. If a planned roadmap drifts back into `roadmaps`, nothing
 * throws; a learner just gets a blank canvas, and the only signal is one gate error in
 * a report of several hundred.
 */

import assert from 'node:assert/strict';
import test from 'node:test';

import {
  getAllRoadmaps,
  getCategories,
  getPlannedRoadmaps,
  getRoadmapBySlug,
  isPlannedRoadmap,
  plannedRoadmaps,
  roadmaps,
} from '../roadmaps';

test('the two lists are disjoint', () => {
  const live = new Set(roadmaps.map((r) => r.slug));
  const overlap = plannedRoadmaps.filter((r) => live.has(r.slug)).map((r) => r.slug);
  assert.deepEqual(overlap, [], 'a roadmap is either live or planned, never both');
});

test('slugs are unique across the whole catalogue', () => {
  const slugs = [...roadmaps, ...plannedRoadmaps].map((r) => r.slug);
  assert.equal(new Set(slugs).size, slugs.length);
});

test('ids are unique across the whole catalogue', () => {
  // Ids are referenced from nothing today, but they are stable handles and a duplicate
  // would make any future join on them silently wrong.
  const ids = [...roadmaps, ...plannedRoadmaps].map((r) => r.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('getRoadmapBySlug refuses to resolve a planned roadmap', () => {
  // This is the whole point of the split: the route must 404 rather than render an
  // empty canvas. Asserted over every planned slug, so adding one cannot skip it.
  for (const planned of plannedRoadmaps) {
    assert.equal(
      getRoadmapBySlug(planned.slug),
      undefined,
      `${planned.slug} is planned but resolvable, so /roadmaps/${planned.slug} would render nothing`,
    );
    assert.equal(isPlannedRoadmap(planned.slug), true);
  }
});

test('getRoadmapBySlug resolves every live roadmap', () => {
  for (const live of roadmaps) {
    assert.equal(getRoadmapBySlug(live.slug)?.slug, live.slug);
    assert.equal(isPlannedRoadmap(live.slug), false);
  }
});

test('getAllRoadmaps and getPlannedRoadmaps do not leak into each other', () => {
  const listed = new Set(getAllRoadmaps().map((r) => r.slug));
  for (const planned of getPlannedRoadmaps()) {
    assert.equal(listed.has(planned.slug), false);
  }
  assert.equal(getAllRoadmaps().length + getPlannedRoadmaps().length, 36);
});

test('every category offered as a filter has at least one roadmap behind it', () => {
  // `getCategories` derives from the live list, so this holds by construction today.
  // It is asserted anyway because the obvious "fix" for a missing category chip is to
  // hardcode the union of the `Category` type, which would put an empty filter back.
  for (const category of getCategories()) {
    assert.ok(
      getAllRoadmaps().some((r) => r.category === category),
      `${category} is offered as a filter but contains nothing`,
    );
  }
});

test('a category whose every roadmap is planned is not offered as a filter', () => {
  // `Research` and `Product` are the live examples: all of their entries are unbuilt. The
  // `Category` type must keep the name — planned entries are typed with it — so the
  // exclusion has to come from the data, and this is the test that says so.
  const liveCategories = new Set(getAllRoadmaps().map((r) => r.category));
  const plannedOnly = new Set(
    getPlannedRoadmaps()
      .map((r) => r.category)
      .filter((category) => !liveCategories.has(category)),
  );
  assert.deepEqual([...plannedOnly].sort(), ['Product', 'Research']);
  assert.equal(getCategories().includes('Research'), false);
  assert.equal(getCategories().includes('Product'), false);
});
