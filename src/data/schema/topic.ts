/**
 * The canonical `Topic` schema, the two content tiers it recognises, and the
 * publication policy that makes both enforceable.
 *
 * ## Two tiers, because the corpus honestly has two shapes
 *
 * 183 of the 506 topics in this repository consist of a title, a one-line
 * description and a hand-picked resource list, and nothing else. Nine roadmaps are
 * written that way throughout — android, ios, mobile, dba, sre, llm, mlops,
 * data-scientist, product-manager. It is terse, but it is real: a specific
 * description and three resources somebody chose. It is not filler.
 *
 * So the schema recognises a **core** tier and an **enriched** tier:
 *
 * | tier       | required                          | renders                        |
 * |------------|-----------------------------------|--------------------------------|
 * | `core`     | `title`, `description`, resources | the node drawer's header       |
 * | `enriched` | core, plus the enrichment groups  | the drawer's prose sections    |
 *
 * The enrichment fields are optional, but *not* lax: when one is present it faces
 * the full quality bar. Absent is a legitimate tier; present-and-boilerplate is a
 * defect. That asymmetry is deliberate, and it is what stops the tier being an
 * escape hatch — the 156 fully-generated topics in this repository have all ten
 * fields, and being complete does not save them.
 *
 * `node-details-drawer.tsx` already renders every enrichment section conditionally,
 * so a core topic produces a short page rather than a page full of empty headings.
 * The tier describes content that exists, not a concession the schema invented.
 *
 * Half a group is the one shape neither tier allows: see
 * {@link ENRICHMENT_GROUPS}.
 *
 * ## The policy is the point
 *
 * A validator that fails the build on every existing defect is a validator that
 * gets switched off in week one. Measured at `published`, *no* topic in this
 * repository currently passes — the floor is three errors, and 350 topics are
 * blocked on resource `lang` values that only the Phase 2 verification pipeline can
 * legitimately supply. A single all-or-nothing gate would leave CI permanently red
 * and teach everyone to ignore it.
 *
 * So validation strictness is a function of {@link PublishStatus}:
 *
 * | status      | structural rules | quality rules | visible to learners |
 * |-------------|------------------|---------------|---------------------|
 * | `published` | as declared      | **error**     | yes                 |
 * | `review`    | as declared      | warning       | no                  |
 * | `draft`     | as declared      | suppressed    | no                  |
 *
 * Structural rules — wrong types, missing required fields, unparseable URLs,
 * dangling graph references — are exempt from the policy at every status, because
 * they crash the renderer rather than merely disappointing a learner. "As declared"
 * means such a rule keeps the severity it chose: exempt from downgrade, but not
 * force-promoted either, so an advisory layout observation stays advisory.
 *
 * The effect is that the gate is absolute for anything a user can reach, while
 * `review` gives curators a complete, honest worklist and `draft` quarantines known
 * bad content without deleting the work. Promotion is one field change, and the
 * gate decides whether it is allowed.
 */

import {
  type Issue,
  type IssuePath,
  type Rule,
  type Validator,
  arrayOf,
  enumOf,
  issue,
  joinPath,
  number,
  object,
  optional,
  refine,
  string,
} from './validator';
import { banBoilerplate, requireSubstance } from './boilerplate';
import {
  type Resource,
  resourceListStructureValidator,
  resourceListValidator,
} from './resource';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Editorial state of a topic.
 *
 * Named `publishStatus` rather than `status` on purpose: `TopicData.status` already
 * exists in this codebase with learner-progress semantics (`"Pending" | "In
 * Progress" | "Completed"`). Two fields called `status` meaning different things,
 * one of which gates publication, is a defect waiting to happen.
 */
export type PublishStatus = 'draft' | 'review' | 'published';

export const PUBLISH_STATUSES = ['draft', 'review', 'published'] as const;

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export const DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'] as const;

/**
 * The pedagogical content of a topic — everything a learner reads.
 *
 * Presentation and graph-layout fields (`icon`, `row`, `col`, `sectionColor`, …)
 * are deliberately *not* here: they belong to the node that renders the topic, not
 * to the knowledge itself. Keeping them apart is what will let the same topic
 * appear in several roadmaps without duplicating its content.
 */
export interface Topic {
  /** URL-safe identifier, unique across the whole corpus. Becomes `/topics/<slug>`. */
  readonly slug?: string;
  /** Human title, as it appears on the canvas node. */
  readonly title: string;
  /** One or two sentences. Shown in search results and the node drawer. */
  readonly description: string;
  /** Editorial state. Determines how strictly this topic is validated. */
  readonly publishStatus?: PublishStatus;
  /** Relative difficulty within its roadmap. */
  readonly difficulty?: Difficulty;
  /** Human-readable study estimate, e.g. `"3 hours"`, `"2 days"`. */
  readonly estimatedTime?: string;

  /** The seven-slot resource list. The core deliverable of every topic. */
  readonly resources: readonly Resource[];

  /* --- Enrichment tier ------------------------------------------------------ */
  /* Optional as a set, but each field faces the full quality bar when present, */
  /* and each group must be filled in whole. See ENRICHMENT_GROUPS.            */

  /** Why a learner should spend time on this. Must be specific to this topic. */
  readonly whyLearnThis?: string;
  /** The situation in which this knowledge is actually applied. */
  readonly whenIsItUsed?: string;
  /** Concrete tools, systems or companies where it shows up. */
  readonly whereIsItUsed?: string;

  /** What the learner will be able to do afterwards. */
  readonly learningOutcomes?: readonly string[];
  /** Specific, observed mistakes — not generic advice. */
  readonly commonMistakes?: readonly string[];
  /** Real systems or problems where this is the deciding knowledge. */
  readonly realWorldApplications?: readonly string[];

  /**
   * The topic to study next. Should name a real topic in the corpus.
   *
   * Not part of a group: it is a single pointer, and a topic at the end of a
   * roadmap legitimately has nothing after it.
   */
  readonly whatComesNext?: string;
}

/* -------------------------------------------------------------------------- */
/* Field validators                                                           */
/* -------------------------------------------------------------------------- */

export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const slugValidator = string({
  code: 'topic.slug',
  pattern: SLUG_PATTERN,
  patternLabel: 'lower-case kebab-case, e.g. `pull-requests`',
  minLength: 2,
  maxLength: 72,
});

/** Builds a prose validator with boilerplate and substance checks attached. */
function prose(
  code: string,
  bounds: { minLength: number; maxLength: number; minWords: number },
): Validator<string> {
  return refine(
    string({ code, minLength: bounds.minLength, maxLength: bounds.maxLength }),
    banBoilerplate({ code }),
    requireSubstance({ code, minWords: bounds.minWords }),
  );
}

/** Builds a validator for a list of short prose items. */
function proseList(
  code: string,
  bounds: {
    minItems: number;
    maxItems: number;
    minLength: number;
    maxLength: number;
    minWords: number;
  },
): Validator<string[]> {
  return arrayOf(prose(`${code}.item`, bounds), {
    code,
    minItems: bounds.minItems,
    maxItems: bounds.maxItems,
    unique: true,
  });
}

/* -------------------------------------------------------------------------- */
/* Shape                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Bounds were calibrated against the topics in this repository that a human
 * actually wrote, so that real content passes and generated filler does not.
 * Tightening them is a content decision and belongs in a commit of its own.
 */
const topicShape: Record<keyof Topic, Validator<unknown>> = {
  slug: optional(slugValidator),
  title: refine(
    string({ code: 'topic.title', minLength: 2, maxLength: 90 }),
    banBoilerplate({ code: 'topic.title', includeTitleCorpus: true, skipPatterns: true }),
  ),
  description: prose('topic.description', { minLength: 20, maxLength: 320, minWords: 5 }),
  publishStatus: optional(enumOf(PUBLISH_STATUSES, 'topic.publishStatus')),
  difficulty: optional(enumOf(DIFFICULTIES, 'topic.difficulty')),
  estimatedTime: optional(string({ code: 'topic.estimatedTime', minLength: 2, maxLength: 40 })),

  // Enrichment tier. `optional` here means "a core topic may omit this", not "this
  // may be sloppy": a present value is refined by exactly the same `prose` rules it
  // faced when it was mandatory. Key order is what fixes issue order, so it is left
  // matching the old shape rather than the interface.
  whyLearnThis: optional(prose('topic.whyLearnThis', { minLength: 60, maxLength: 800, minWords: 12 })),
  whenIsItUsed: optional(prose('topic.whenIsItUsed', { minLength: 30, maxLength: 600, minWords: 7 })),
  whereIsItUsed: optional(prose('topic.whereIsItUsed', { minLength: 20, maxLength: 600, minWords: 4 })),
  whatComesNext: optional(
    refine(
      string({ code: 'topic.whatComesNext', minLength: 3, maxLength: 200 }),
      banBoilerplate({ code: 'topic.whatComesNext' }),
    ),
  ),

  learningOutcomes: optional(
    proseList('topic.learningOutcomes', {
      minItems: 3,
      maxItems: 10,
      minLength: 12,
      maxLength: 220,
      minWords: 3,
    }),
  ),
  commonMistakes: optional(
    proseList('topic.commonMistakes', {
      minItems: 2,
      maxItems: 10,
      minLength: 12,
      maxLength: 260,
      minWords: 3,
    }),
  ),
  realWorldApplications: optional(
    proseList('topic.realWorldApplications', {
      minItems: 2,
      maxItems: 10,
      minLength: 12,
      maxLength: 260,
      minWords: 3,
    }),
  ),

  resources: resourceListValidator,
};

/**
 * Structural-only shape, used to validate quarantined `draft` content.
 *
 * Only `title` is required here, and the difference from {@link topicShape} is the
 * whole point of the two-tier design. A draft is by definition unfinished, so
 * demanding a `whyLearnThis` from it would report 1,300 issues that all say the same
 * thing — "this isn't written yet" — and bury the handful that say "this will crash
 * the renderer". What remains mandatory is what the product cannot function without:
 * a topic with no title has no identity, no page and no node label.
 *
 * Completeness is a *publication* requirement, enforced by {@link topicShape} the
 * moment a topic is promoted to `review`.
 */
const topicStructureShape: Record<keyof Topic, Validator<unknown>> = {
  slug: optional(slugValidator),
  title: string({ code: 'topic.title', minLength: 1, maxLength: 120 }),
  description: optional(string({ code: 'topic.description', minLength: 1, maxLength: 600 })),
  publishStatus: optional(enumOf(PUBLISH_STATUSES, 'topic.publishStatus')),
  difficulty: optional(enumOf(DIFFICULTIES, 'topic.difficulty')),
  estimatedTime: optional(string({ code: 'topic.estimatedTime', minLength: 1, maxLength: 40 })),
  whyLearnThis: optional(string({ code: 'topic.whyLearnThis', minLength: 1, maxLength: 2000 })),
  whenIsItUsed: optional(string({ code: 'topic.whenIsItUsed', minLength: 1, maxLength: 2000 })),
  whereIsItUsed: optional(string({ code: 'topic.whereIsItUsed', minLength: 1, maxLength: 2000 })),
  whatComesNext: optional(string({ code: 'topic.whatComesNext', minLength: 1, maxLength: 400 })),
  learningOutcomes: optional(
    arrayOf(string({ code: 'topic.learningOutcomes.item', minLength: 1, maxLength: 400 }), {
      code: 'topic.learningOutcomes',
      minItems: 0,
      maxItems: 20,
    }),
  ),
  commonMistakes: optional(
    arrayOf(string({ code: 'topic.commonMistakes.item', minLength: 1, maxLength: 400 }), {
      code: 'topic.commonMistakes',
      minItems: 0,
      maxItems: 20,
    }),
  ),
  realWorldApplications: optional(
    arrayOf(string({ code: 'topic.realWorldApplications.item', minLength: 1, maxLength: 400 }), {
      code: 'topic.realWorldApplications',
      minItems: 0,
      maxItems: 20,
    }),
  ),
  resources: optional(resourceListStructureValidator),
};

/* -------------------------------------------------------------------------- */
/* Tiers                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Enrichment fields that must be filled in as a set.
 *
 * Each group is one coherent answer split across fields, and the drawer renders
 * each group as a unit — `whenIsItUsed` and `whereIsItUsed` share a single section.
 * Half a group therefore renders as a section with a hole in it, which reads as a
 * bug rather than as brevity. A core topic that answers none of them reads fine; a
 * topic that answers "why" and then goes quiet on "when" and "where" does not.
 *
 * No topic in the corpus trips this today — the 323 enriched topics all carry all
 * six fields, and the 183 core topics carry none. The rule costs nothing now and
 * exists to stop the tier boundary eroding one field at a time, which is exactly
 * how a two-tier schema decays into an untyped bag of maybes.
 */
export const ENRICHMENT_GROUPS: readonly {
  readonly label: string;
  readonly fields: readonly (keyof Topic)[];
}[] = [
  { label: 'why/when/where', fields: ['whyLearnThis', 'whenIsItUsed', 'whereIsItUsed'] },
  {
    label: 'outcomes/mistakes/applications',
    fields: ['learningOutcomes', 'commonMistakes', 'realWorldApplications'],
  },
];

/** Every field outside the core tier. `whatComesNext` belongs to no group. */
export const ENRICHMENT_FIELDS: readonly (keyof Topic)[] = [
  ...ENRICHMENT_GROUPS.flatMap((group) => group.fields),
  'whatComesNext',
];

/**
 * Which tier a topic occupies.
 *
 * `core` is a complete, publishable topic — not a deficient one. The distinction
 * exists so reporting can say "183 core, 323 enriched" instead of implying that a
 * third of the corpus is unfinished.
 */
export type TopicTier = 'core' | 'enriched';

export function topicTier(topic: Topic): TopicTier {
  return ENRICHMENT_FIELDS.some((field) => topic[field] !== undefined) ? 'enriched' : 'core';
}

/* -------------------------------------------------------------------------- */
/* Cross-field rules                                                          */
/* -------------------------------------------------------------------------- */

/** Cross-field rules that apply to a whole topic. */
const topicCrossFieldRules: Rule<Topic>[] = [
  // Half an enrichment group. See ENRICHMENT_GROUPS for why this is not pedantry.
  (topic, path) => {
    const issues: Issue[] = [];
    for (const group of ENRICHMENT_GROUPS) {
      const missing = group.fields.filter((field) => topic[field] === undefined);
      if (missing.length === 0 || missing.length === group.fields.length) continue;
      const present = group.fields.filter((field) => topic[field] !== undefined);
      issues.push(
        issue(
          joinPath(path, String(missing[0])),
          'topic.enrichment.partial_group',
          `Part of the ${group.label} group is missing: ${missing.join(', ')}.`,
          {
            severity: 'warning',
            hint: `This group is written as a set. Either answer all of ${group.fields.join(', ')}, or remove ${present.join(', ')} and let this be a core topic.`,
          },
        ),
      );
    }
    return issues;
  },

  // A topic whose "why" and "where" are the same sentence has answered one question.
  (topic, path) => {
    const fields: (keyof Topic)[] = ['description', 'whyLearnThis', 'whenIsItUsed', 'whereIsItUsed'];
    const issues: Issue[] = [];
    for (let i = 0; i < fields.length; i++) {
      for (let j = i + 1; j < fields.length; j++) {
        const a = topic[fields[i]!];
        const b = topic[fields[j]!];
        if (typeof a === 'string' && typeof b === 'string' && a.trim() === b.trim() && a.trim() !== '') {
          issues.push(
            issue(joinPath(path, String(fields[j])), 'topic.prose.duplicated_field', `Identical to \`${String(fields[i])}\`.`, {
              hint: 'These fields answer different questions. Answer them separately.',
              received: b,
            }),
          );
        }
      }
    }
    return issues;
  },

  // The slug should be derivable from the title. When it is not, one of the two was
  // copied from a different topic — which then breaks deep links and progress keys.
  (topic, path) => {
    if (topic.slug === undefined) return [];
    const derived = slugify(topic.title);
    if (derived === topic.slug) return [];
    // Tolerate deliberate shortening (`http-caching` for "HTTP Caching Strategies"),
    // flag only slugs with no lexical relationship to the title.
    const slugWords = new Set(topic.slug.split('-'));
    const titleWords = new Set(derived.split('-'));
    const overlap = [...slugWords].filter((w) => titleWords.has(w)).length;
    if (overlap === 0) {
      return [
        issue(joinPath(path, 'slug'), 'topic.slug.unrelated_to_title', 'Slug shares no words with the title.', {
          severity: 'warning',
          hint: `Expected something like \`${derived}\`. A mismatched slug usually means it was copied from another topic.`,
          received: topic.slug,
        }),
      ];
    }
    return [];
  },

  // Publishing requires a slug, because that is the topic's stable public identity.
  (topic, path) => {
    if (topic.publishStatus !== 'published') return [];
    if (topic.slug !== undefined) return [];
    return [
      issue(joinPath(path, 'slug'), 'topic.slug.required_for_publish', 'A published topic must have a slug.', {
        hint: `Add \`slug: '${slugify(topic.title)}'\`. It becomes the permanent URL, so choose it once.`,
      }),
    ];
  },
];

/* -------------------------------------------------------------------------- */
/* Validators                                                                 */
/* -------------------------------------------------------------------------- */

/** Full-strength topic validator: every structural and quality rule. */
export const topicValidator: Validator<Topic> = refine(
  object<Topic>('Topic', topicShape, { code: 'topic', unknownKeys: 'error' }),
  ...topicCrossFieldRules,
);

/** Structure-only topic validator, for quarantined content. */
export const topicStructureValidator: Validator<Topic> = object<Topic>(
  'Topic',
  topicStructureShape,
  { code: 'topic', unknownKeys: 'error' },
);

/* -------------------------------------------------------------------------- */
/* Publication policy                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Issue-code suffixes that indicate a *structural* problem: the data cannot be
 * rendered or safely consumed, regardless of editorial state.
 *
 * Declared as a closed set of structural codes, with everything else treated as a
 * quality rule. That direction matters: a newly added quality rule is
 * automatically subject to the status policy, so adding a rule can never
 * accidentally turn CI red for quarantined content.
 */
const STRUCTURAL_CODE_SUFFIXES: ReadonlySet<string> = new Set([
  'type',
  'missing_field',
  'unknown_field',
  'unknown_value',
  'unparseable',
  'pattern',
  'not_integer',
  'empty',
  'mismatch',
  'non_public_host',
  'embedded_credentials',
]);

/** Code prefixes whose issues are always structural — graph and corpus integrity. */
const STRUCTURAL_CODE_PREFIXES: readonly string[] = ['roadmap.', 'corpus.integrity.'];

export function isStructuralIssue(code: string): boolean {
  if (STRUCTURAL_CODE_PREFIXES.some((prefix) => code.startsWith(prefix))) return true;
  const suffix = code.slice(code.lastIndexOf('.') + 1);
  return STRUCTURAL_CODE_SUFFIXES.has(suffix);
}

export interface PolicyOutcome {
  /** Fails the build. */
  readonly errors: readonly Issue[];
  /** Reported and counted; does not fail the build. */
  readonly warnings: readonly Issue[];
  /** Known-bad quality issues on quarantined content. Reported only in aggregate. */
  readonly suppressed: readonly Issue[];
}

/**
 * Applies the publication policy to a topic's raw issue list.
 *
 * This function is the whole quarantine mechanism. It is small on purpose: the
 * policy should be readable in one screen by anyone deciding whether to promote a
 * topic to `published`.
 */
export function applyPublishPolicy(
  status: PublishStatus,
  issues: readonly Issue[],
): PolicyOutcome {
  const errors: Issue[] = [];
  const warnings: Issue[] = [];
  const suppressed: Issue[] = [];

  for (const item of issues) {
    if (isStructuralIssue(item.code)) {
      // Structural issues are exempt from the status policy — never downgraded,
      // never suppressed. They are not *promoted* either: a structural rule that
      // reports `warning` (an unparented node, a topic with no prerequisites) is
      // making a layout observation, not describing something that breaks.
      if (item.severity === 'warning') warnings.push(item);
      else errors.push(item);
      continue;
    }
    switch (status) {
      case 'published':
        // A rule that reports `warning` is advice and stays advice even when
        // published; only genuine defects become build failures.
        if (item.severity === 'warning') warnings.push(item);
        else errors.push(item);
        break;
      case 'review':
        warnings.push(item.severity === 'warning' ? item : { ...item, severity: 'warning' });
        break;
      case 'draft':
        suppressed.push(item);
        break;
    }
  }

  return { errors, warnings, suppressed };
}

/**
 * Validates a topic under its own publication policy.
 *
 * `draft` topics are checked against the structural schema only — running the
 * quality schema over quarantined content produces thousands of issues that are
 * true, already known, and actively harmful to read.
 */
export function validateTopic(
  topic: unknown,
  options: { path?: IssuePath; defaultStatus?: PublishStatus } = {},
): PolicyOutcome & { readonly status: PublishStatus } {
  const path = options.path ?? '';
  const declared = (topic as { publishStatus?: unknown } | null)?.publishStatus;
  const status: PublishStatus = PUBLISH_STATUSES.includes(declared as PublishStatus)
    ? (declared as PublishStatus)
    : (options.defaultStatus ?? 'draft');

  const validator = status === 'draft' ? topicStructureValidator : topicValidator;
  const outcome = applyPublishPolicy(status, validator.check(topic, path));
  return { ...outcome, status };
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Converts a title to a slug. Deterministic, and the canonical way to propose a
 * slug — never invent one by hand, or the generated and hand-written corpora will
 * disagree about the same topic.
 */
export function slugify(title: string): string {
  return title
    .normalize('NFKD')
    // Escapes, not literal combining marks: those render as mojibake in every
    // diff and do not survive a Unicode normalisation of this file.
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\+\+/g, 'pp') // C++ -> cpp
    .replace(/#/g, 'sharp') // C# -> csharp
    .replace(/\./g, '-') // Node.js -> node-js
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72)
    .replace(/-+$/g, '');
}

/** Convenience: a topic is user-visible only when explicitly published. */
export function isPublished(topic: Pick<Topic, 'publishStatus'>): boolean {
  return topic.publishStatus === 'published';
}

/** Validator for the estimated-topic counts derived from content, used by roadmap metadata. */
export const topicCountValidator = number({ code: 'roadmap.topicCount', int: true, min: 0, max: 1000 });
