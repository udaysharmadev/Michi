/**
 * The seven resource slots — the core product decision of Michi.
 *
 * Every published topic fills all seven. That is deliberate and it is the reason
 * the platform is worth using: a learner does not want "some links", they want the
 * canonical reference, a video in a language they think in, a readable
 * explanation, working code, something to pin to a second monitor, and somewhere
 * to go when they want the real depth. Seven slots, each answering a different
 * question, is the contract.
 *
 * Kept in its own module so that both the schema and the source-policy rules can
 * depend on it without a cycle.
 */

export const RESOURCE_TYPES = [
  'official',
  'video_en',
  'video_hi',
  'article',
  'github',
  'cheat_sheet',
  'deep_dive',
] as const;

export type ResourceType = (typeof RESOURCE_TYPES)[number];

export interface ResourceSlot {
  readonly type: ResourceType;
  /** Label shown in the UI. */
  readonly label: string;
  /** The learner question this slot answers. Drives curation and review. */
  readonly answers: string;
  /** What a curator must verify before this slot can be marked published. */
  readonly acceptanceCriteria: string;
  /** BCP-47 language the resource must be in, when the slot constrains it. */
  readonly requiredLanguage?: 'en' | 'hi';
}

/**
 * Slot definitions. `acceptanceCriteria` is written as an instruction to a human
 * because it is rendered directly in the Phase 2 curation UI — the schema and the
 * review checklist must never drift apart.
 */
export const RESOURCE_SLOTS: Readonly<Record<ResourceType, ResourceSlot>> = {
  official: {
    type: 'official',
    label: 'Official documentation',
    answers: 'What does the thing itself say?',
    acceptanceCriteria:
      'First-party documentation from the vendor, maintainer or standards body. Must deep-link to the relevant page, not the product homepage. Never a tutorial site.',
  },
  video_en: {
    type: 'video_en',
    label: 'Video (English)',
    answers: 'Can someone show me?',
    acceptanceCriteria:
      'A specific English-language video or playlist that covers this topic, not a channel. Published or updated within the currency window for the technology.',
    requiredLanguage: 'en',
  },
  video_hi: {
    type: 'video_hi',
    label: 'Video (Hindi)',
    answers: 'Can someone show me, in Hindi?',
    acceptanceCriteria:
      'A specific Hindi-language video or playlist. Must actually be in Hindi — an English video with a Hindi title does not qualify.',
    requiredLanguage: 'hi',
  },
  article: {
    type: 'article',
    label: 'Article',
    answers: 'Explain it to me in prose.',
    acceptanceCriteria:
      'A single focused written explanation, readable in one sitting, by an identifiable author. Not a link farm, not a paywall, not a listicle.',
  },
  github: {
    type: 'github',
    label: 'Code',
    answers: 'Show me working code.',
    acceptanceCriteria:
      'A specific repository, directory or gist a learner can read or run. Never a `/topics/` tag page or a bare profile.',
  },
  cheat_sheet: {
    type: 'cheat_sheet',
    label: 'Cheat sheet',
    answers: 'What do I keep on my second monitor?',
    acceptanceCriteria:
      'A dense reference — table, one-pager, API index — designed for lookup rather than reading. Must remain useful without surrounding prose.',
  },
  deep_dive: {
    type: 'deep_dive',
    label: 'Deep dive',
    answers: 'I want to actually understand this.',
    acceptanceCriteria:
      'A specification, paper, conference talk, maintainer write-up or book chapter that goes past the surface. Authority required; syndicated blogspam disqualified.',
  },
};

/** Stable display order for the seven slots. */
export const RESOURCE_TYPE_ORDER: Readonly<Record<ResourceType, number>> = Object.freeze(
  Object.fromEntries(RESOURCE_TYPES.map((type, index) => [type, index])) as Record<ResourceType, number>,
);

export function isResourceType(value: unknown): value is ResourceType {
  return typeof value === 'string' && (RESOURCE_TYPES as readonly string[]).includes(value);
}
