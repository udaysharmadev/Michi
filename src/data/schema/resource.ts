/**
 * The canonical `Resource` schema — the most important type in the codebase.
 *
 * A resource is a promise to a learner: *click this and you will understand the
 * thing*. Everything here exists to make that promise checkable by a machine, so
 * that it cannot be broken by accident, by a generation script, or by a tired
 * curator at 1am.
 *
 * Two ideas do most of the work:
 *
 *  1. **Content addressing.** A resource's id is derived from its canonical URL, so
 *     the same page always has the same id and duplicates are impossible to
 *     represent, not merely discouraged. See {@link resourceId}.
 *
 *  2. **Slot-aware validation.** Each of the seven slots has different acceptance
 *     rules, so a YouTube link in the `official` slot is an error rather than a
 *     matter of taste. See `checkUrlForSlot` in `./sources`.
 *
 * Fields marked "populated by the resource pipeline" are optional today and become
 * required for `published` content once the Phase 2 pipeline runs. They are
 * declared now so that landing the pipeline is not a schema migration.
 */

import {
  type Issue,
  type Rule,
  type Validator,
  arrayOf,
  boolean,
  define,
  enumOf,
  issue,
  joinPath,
  number,
  object,
  optional,
  refine,
  string,
} from './validator';
import { RESOURCE_SLOTS, RESOURCE_TYPES, type ResourceType } from './resource-type';
import { canonicalizeUrl, checkUrlForSlot, checkUrlIsAddressable } from './sources';
import { banBoilerplate, fingerprint } from './boilerplate';
import { shortHash } from './hash';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

/** Outcome of the most recent automated reachability check. */
export type ResourceHealth =
  /** 2xx, and the response looked like the expected content. */
  | 'ok'
  /** Reachable but degraded — a redirect chain, a soft 404, or a slow response. */
  | 'degraded'
  /** 4xx/5xx, DNS failure, or the video/repo has been removed. */
  | 'dead'
  /** Never checked. The state of every resource in the repository today. */
  | 'unknown';

export const RESOURCE_HEALTH_VALUES = ['ok', 'degraded', 'dead', 'unknown'] as const;

/** Language of the resource itself, not of its title. */
export type ResourceLanguage = 'en' | 'hi';

export interface Resource {
  /**
   * Content-addressed identifier, `res_` + 12 base32 chars of sha256(canonicalUrl).
   * Optional until the Phase 2 pipeline backfills the corpus; required for
   * published content thereafter. Never hand-write this — call {@link resourceId}.
   */
  readonly id?: string;
  /** Which of the seven slots this resource fills. */
  readonly type: ResourceType;
  /**
   * The resource's own title, as its publisher wrote it. Not a description of the
   * slot: "MDN — Using the Fetch API", never "Comprehensive Guide".
   */
  readonly title: string;
  /** Absolute https URL, free of tracking parameters. */
  readonly url: string;
  /** Language of the content. Required for the two video slots. */
  readonly lang?: ResourceLanguage;
  /** Publisher, author or channel. Shown in the UI so learners can judge authority. */
  readonly author?: string;
  /** ISO 8601 date (`YYYY-MM-DD`) the resource was published or last substantially updated. */
  readonly publishedAt?: string;
  /** Runtime in seconds, for video resources. Lets the UI show "23 min". */
  readonly durationSeconds?: number;
  /** True when the resource sits behind a hard or metered paywall. Must be declared. */
  readonly paywalled?: boolean;
  /** Populated by the resource pipeline. */
  readonly health?: ResourceHealth;
  /** Populated by the resource pipeline: 0–100 rubric score. Minimum 70 to publish. */
  readonly score?: number;
  /** Populated by the resource pipeline: ISO 8601 timestamp of the last successful check. */
  readonly lastVerified?: string;
  /** Curator note. Never rendered to learners; explains a non-obvious choice. */
  readonly notes?: string;
}

/* -------------------------------------------------------------------------- */
/* Identity                                                                   */
/* -------------------------------------------------------------------------- */

export const RESOURCE_ID_PATTERN = /^res_[0-9abcdefghjkmnpqrstvwxyz]{12}$/;

/**
 * Derives the canonical id for a resource URL.
 *
 * Because the id is a pure function of the *canonical* URL, two curators who add
 * the same article — one with a `?utm_source=` suffix, one with a trailing slash —
 * produce the same id, and the duplicate is caught at validation time instead of
 * shipping as two rows in the same list.
 *
 * @throws {TypeError} if `url` cannot be parsed.
 */
export function resourceId(url: string): string {
  return `res_${shortHash(canonicalizeUrl(url))}`;
}

/** True when `resource.id` matches the id its URL implies. */
export function hasConsistentId(resource: Pick<Resource, 'id' | 'url'>): boolean {
  if (resource.id === undefined) return true;
  try {
    return resource.id === resourceId(resource.url);
  } catch {
    return false;
  }
}

/* -------------------------------------------------------------------------- */
/* Field validators                                                           */
/* -------------------------------------------------------------------------- */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const ISO_TIMESTAMP = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Rejects a title that is really a URL, an id, or a slot label in disguise. */
const titleIsNotAUrl: Rule<string> = (value, path) => {
  if (/^https?:\/\//i.test(value.trim())) {
    return [
      issue(path, 'resource.title.is_url', 'Title is a URL, not a title.', {
        hint: 'Use the page\'s own heading. A learner reads the title before deciding to click.',
        received: value,
      }),
    ];
  }
  return [];
};

/** Rejects SHOUTING and title-less punctuation soup. */
const titleIsWellFormed: Rule<string> = (value, path) => {
  const issues: Issue[] = [];
  const letters = value.replace(/[^\p{L}]/gu, '');
  if (letters.length >= 8 && letters === letters.toUpperCase()) {
    issues.push(
      issue(path, 'resource.title.all_caps', 'Title is entirely upper case.', {
        severity: 'warning',
        hint: 'Match the publisher\'s own capitalisation.',
        received: value,
      }),
    );
  }
  if (fingerprint(value).split(' ').filter(Boolean).length < 2) {
    issues.push(
      issue(path, 'resource.title.single_word', 'A one-word title does not identify a resource.', {
        hint: 'Include the publisher or the subject, e.g. "MDN — Fetch API".',
        received: value,
      }),
    );
  }
  return issues;
};

const resourceTitleValidator = refine(
  string({
    code: 'resource.title',
    minLength: 6,
    maxLength: 180,
  }),
  banBoilerplate({ code: 'resource.title', includeTitleCorpus: true }),
  titleIsNotAUrl,
  titleIsWellFormed,
);

const resourceUrlValidator = string({ code: 'resource.url', minLength: 11, maxLength: 2048 });

/* -------------------------------------------------------------------------- */
/* Resource validator                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Shape of a resource. Declared as `Record<keyof Resource, …>` so that adding a
 * field to the interface without adding a validator is a compile error — the exact
 * gap through which unvalidated data historically arrived.
 */
const resourceShape: Record<keyof Resource, Validator<unknown>> = {
  id: optional(
    string({
      code: 'resource.id',
      pattern: RESOURCE_ID_PATTERN,
      patternLabel: 'a content-addressed id of the form `res_` followed by 12 base32 characters',
    }),
  ),
  type: enumOf(RESOURCE_TYPES, 'resource.type'),
  title: resourceTitleValidator,
  url: resourceUrlValidator,
  lang: optional(enumOf(['en', 'hi'] as const, 'resource.lang')),
  author: optional(string({ code: 'resource.author', minLength: 2, maxLength: 120 })),
  publishedAt: optional(
    string({
      code: 'resource.publishedAt',
      pattern: ISO_DATE,
      patternLabel: 'an ISO 8601 date, `YYYY-MM-DD`',
      minLength: 10,
      maxLength: 10,
    }),
  ),
  durationSeconds: optional(
    number({ code: 'resource.durationSeconds', int: true, min: 1, max: 60 * 60 * 40 }),
  ),
  paywalled: optional(boolean('resource.paywalled')),
  health: optional(enumOf(RESOURCE_HEALTH_VALUES, 'resource.health')),
  score: optional(number({ code: 'resource.score', min: 0, max: 100 })),
  lastVerified: optional(
    string({
      code: 'resource.lastVerified',
      pattern: ISO_TIMESTAMP,
      patternLabel: 'an ISO 8601 timestamp',
    }),
  ),
  notes: optional(string({ code: 'resource.notes', minLength: 3, maxLength: 500 })),
};

/**
 * An id that disagrees with its URL means one of the two was edited in place. Left
 * unchecked this breaks deduplication and progress tracking simultaneously, so it is
 * structural: it applies to a draft exactly as it applies to published content.
 */
const idConsistencyRule: Rule<Resource> = (resource, path) => {
  if (resource.id === undefined) return [];
  if (hasConsistentId(resource)) return [];
  let expected: string;
  try {
    expected = resourceId(resource.url);
  } catch {
    return [];
  }
  return [
    issue(joinPath(path, 'id'), 'resource.id.mismatch', 'Id does not match the id derived from the URL.', {
      hint: `Either the URL changed without re-deriving the id, or the id was copied from another resource. Expected \`${expected}\`.`,
      received: resource.id,
    }),
  ];
};

/**
 * The rules that decide whether a resource is usable *data*, as distinct from data
 * with editorial problems. An unparseable URL, a placeholder host, embedded
 * credentials, a stale id: none of these are opinions about quality, and no
 * publication status makes them acceptable.
 *
 * These are the rules the structure-only validator runs, which is what makes the
 * `unparseable` / `non_public_host` / `embedded_credentials` / `mismatch` entries in
 * the publication policy's structural set mean something for quarantined content.
 */
const resourceStructuralRules: Rule<Resource>[] = [
  (resource, path) => [...checkUrlIsAddressable(resource.url, joinPath(path, 'url')).issues],
  idConsistencyRule,
];

/**
 * Cross-field rules. These are where the slot contract is actually enforced, and
 * they can only run once `type` and `url` are individually known-good.
 *
 * A superset of `resourceStructuralRules`: `checkUrlForSlot` runs the addressability
 * checks itself before it judges the slot, so the two lists are never combined.
 */
const resourceCrossFieldRules: Rule<Resource>[] = [
  // The single highest-value rule in the schema.
  (resource, path) => checkUrlForSlot(resource.url, resource.type, joinPath(path, 'url')),

  // A URL carrying tracking params, a trailing slash or an http scheme is not
  // wrong, but it must be stored canonically or content addressing silently produces
  // duplicate ids. The host is compared as written: see `CanonicalizeOptions.mode`
  // for why storage does not fold `www.` away even though identity does.
  (resource, path) => {
    let canonical: string;
    try {
      canonical = canonicalizeUrl(resource.url, { mode: 'storage' });
    } catch {
      return []; // Already reported by checkUrlForSlot.
    }
    if (canonical !== resource.url) {
      return [
        issue(joinPath(path, 'url'), 'resource.url.not_canonical', 'URL is not in canonical form.', {
          hint: `Store it as: ${canonical}`,
          received: resource.url,
        }),
      ];
    }
    return [];
  },

  idConsistencyRule,

  // The video slots exist to serve two audiences; an undeclared language makes the
  // Hindi slot unverifiable, which is how it silently filled up with English videos.
  (resource, path) => {
    const slot = RESOURCE_SLOTS[resource.type];
    if (slot.requiredLanguage === undefined) return [];
    if (resource.lang === undefined) {
      return [
        issue(joinPath(path, 'lang'), 'resource.lang.required_for_slot', `The \`${resource.type}\` slot requires an explicit \`lang\`.`, {
          hint: `Set \`lang: '${slot.requiredLanguage}'\` after confirming the audio is actually in that language.`,
        }),
      ];
    }
    if (resource.lang !== slot.requiredLanguage) {
      return [
        issue(joinPath(path, 'lang'), 'resource.lang.slot_mismatch', `The \`${resource.type}\` slot requires \`lang: '${slot.requiredLanguage}'\`.`, {
          hint: `This resource declares \`${resource.lang}\`. Move it to the matching slot.`,
          received: resource.lang,
        }),
      ];
    }
    return [];
  },

  // Duration only means something for time-based media.
  (resource, path) => {
    if (resource.durationSeconds === undefined) return [];
    if (resource.type === 'video_en' || resource.type === 'video_hi') return [];
    return [
      issue(joinPath(path, 'durationSeconds'), 'resource.durationSeconds.not_applicable', `\`durationSeconds\` is only meaningful for video slots, not \`${resource.type}\`.`, {
        severity: 'warning',
        hint: 'Remove the field.',
      }),
    ];
  },

  // A resource cannot be publishable and dead at the same time. This rule is inert
  // until the pipeline starts writing health, and becomes the release gate after.
  (resource, path) => {
    if (resource.health === 'dead') {
      return [
        issue(joinPath(path, 'health'), 'resource.health.dead', 'The most recent check found this resource unreachable.', {
          hint: 'Replace it, or find an archived copy and record that URL instead.',
          received: resource.url,
        }),
      ];
    }
    return [];
  },

  // A future publication date means a typo or a fabricated citation.
  (resource, path) => {
    if (resource.publishedAt === undefined) return [];
    // Compared as strings: ISO dates sort lexicographically, and this avoids
    // introducing a clock dependency into a pure validator.
    const today = new Date().toISOString().slice(0, 10);
    if (resource.publishedAt > today) {
      return [
        issue(joinPath(path, 'publishedAt'), 'resource.publishedAt.in_future', 'Publication date is in the future.', {
          hint: 'Check for a transposed year or month.',
          received: resource.publishedAt,
        }),
      ];
    }
    return [];
  },
];

/** Validates a single resource, including all slot and hygiene rules. */
export const resourceValidator: Validator<Resource> = refine(
  object<Resource>('Resource', resourceShape, { code: 'resource', unknownKeys: 'error' }),
  ...resourceCrossFieldRules,
);

/* -------------------------------------------------------------------------- */
/* Resource list validator                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Every published topic fills all seven slots exactly once. Not "at least one
 * resource" — the seven-slot contract is the product, and a topic missing its
 * Hindi video is a topic that fails half its audience.
 */
export const requireAllSevenSlots: Rule<Resource[]> = (resources, path) => {
  const bySlot = new Map<ResourceType, number[]>();
  resources.forEach((resource, index) => {
    const existing = bySlot.get(resource.type);
    if (existing) existing.push(index);
    else bySlot.set(resource.type, [index]);
  });

  const issues: Issue[] = [];
  const missing = RESOURCE_TYPES.filter((type) => !bySlot.has(type));
  if (missing.length > 0) {
    issues.push(
      issue(path, 'topic.resources.missing_slots', `Missing ${missing.length} of the seven resource slots: ${missing.join(', ')}.`, {
        hint: missing
          .map((type) => `${type}: ${RESOURCE_SLOTS[type].acceptanceCriteria}`)
          .join(' | '),
      }),
    );
  }
  for (const [type, indices] of bySlot) {
    if (indices.length > 1) {
      issues.push(
        issue(joinPath(path, indices[1]!), 'topic.resources.duplicate_slot', `The \`${type}\` slot is filled ${indices.length} times.`, {
          hint: `Keep the single best one. Indices: ${indices.join(', ')}.`,
        }),
      );
    }
  }
  return issues;
};

/**
 * Rejects the same URL appearing twice in one topic under different slot labels.
 *
 * This is not hypothetical: 171 topics in this repository point three or more
 * slots at one URL — one page relabelled as documentation, an article, a cheat
 * sheet and a deep dive. It presents as a full resource list and delivers one link.
 */
export const banDuplicateUrlsWithinTopic: Rule<Resource[]> = (resources, path) => {
  const byCanonical = new Map<string, { index: number; type: ResourceType }[]>();
  resources.forEach((resource, index) => {
    let key: string;
    try {
      key = canonicalizeUrl(resource.url);
    } catch {
      key = resource.url.trim().toLowerCase();
    }
    const existing = byCanonical.get(key);
    if (existing) existing.push({ index, type: resource.type });
    else byCanonical.set(key, [{ index, type: resource.type }]);
  });

  const issues: Issue[] = [];
  for (const [url, uses] of byCanonical) {
    if (uses.length < 2) continue;
    const slots = uses.map((u) => u.type).join(', ');
    for (const use of uses.slice(1)) {
      issues.push(
        issue(joinPath(path, use.index), 'topic.resources.duplicate_url', `This URL already fills the \`${uses[0]!.type}\` slot; it cannot also be the \`${use.type}\`.`, {
          hint: `One page cannot be four different kinds of resource. Slots currently sharing it: ${slots}. Find a real resource for this slot.`,
          received: url,
        }),
      );
    }
  }
  return issues;
};

/** Flags a topic whose resource list leans too heavily on paywalled sources. */
export const limitPaywalledResources: Rule<Resource[]> = (resources, path) => {
  const paywalled = resources.filter((r) => r.paywalled === true);
  if (paywalled.length <= 1) return [];
  return [
    issue(path, 'topic.resources.too_many_paywalled', `${paywalled.length} of ${resources.length} resources are paywalled.`, {
      severity: 'warning',
      hint: 'Keep at most one. A learner who hits three paywalls concludes the roadmap is an affiliate funnel.',
    }),
  ];
};

/** Flags a topic whose resources all come from one publisher. */
export const requireSourceDiversity: Rule<Resource[]> = (resources, path) => {
  const hosts = new Set<string>();
  for (const resource of resources) {
    try {
      hosts.add(new URL(canonicalizeUrl(resource.url)).hostname);
    } catch {
      /* reported elsewhere */
    }
  }
  if (resources.length >= 4 && hosts.size <= 2) {
    return [
      issue(path, 'topic.resources.low_source_diversity', `All ${resources.length} resources come from only ${hosts.size} host(s): ${[...hosts].join(', ')}.`, {
        severity: 'warning',
        hint: 'Seven slots exist to give seven perspectives. Draw from independent sources.',
      }),
    ];
  }
  return [];
};

/** The complete resource-list validator used by the topic schema. */
export const resourceListValidator: Validator<Resource[]> = refine(
  arrayOf(resourceValidator, {
    code: 'topic.resources',
    minItems: 1,
    maxItems: 14,
  }),
  requireAllSevenSlots,
  banDuplicateUrlsWithinTopic,
  limitPaywalledResources,
  requireSourceDiversity,
);

/**
 * A structural-only resource-list validator, used for quarantined `draft` topics
 * where the quality rules are known to fail and reporting them would drown the
 * signal from content that is actually meant to be live.
 *
 * "Structural" is not the same as "shape". A draft is exempt from the slot contract,
 * from title quality and from source authority, but not from being addressable: an
 * unparseable URL is skipped by the resource index and a stale id joins to the wrong
 * registry entry, whatever the editorial status says. So the per-resource validator
 * here is the object shape *plus* `resourceStructuralRules`, and the list-level rules
 * — all four of which encode the slot contract — are the part that is dropped.
 */
export const resourceListStructureValidator: Validator<Resource[]> = arrayOf(
  refine(
    object<Resource>('Resource', resourceShape, { code: 'resource', unknownKeys: 'error' }),
    ...resourceStructuralRules,
  ),
  { code: 'topic.resources', minItems: 0, maxItems: 14 },
);

/** Groups a resource list by slot, in canonical display order. Missing slots are absent. */
export function groupBySlot(resources: readonly Resource[]): Map<ResourceType, Resource[]> {
  const grouped = new Map<ResourceType, Resource[]>();
  for (const type of RESOURCE_TYPES) {
    const matching = resources.filter((r) => r.type === type);
    if (matching.length > 0) grouped.set(type, matching);
  }
  return grouped;
}

/** Convenience validator for a bare resource with no enrichment, used in tests. */
export const minimalResourceValidator = define<Pick<Resource, 'type' | 'title' | 'url'>>(
  'MinimalResource',
  (value, path) => resourceValidator.check(value, path),
);
