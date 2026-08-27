/**
 * The canonical Michi content schema.
 *
 * Everything that decides whether content is fit to publish lives under
 * `src/data/schema/`. Import from this barrel rather than from the individual
 * modules, so that internal reorganisation does not ripple through the app.
 *
 * ```ts
 * import { validateTopic, resourceId, RESOURCE_SLOTS } from '@/data/schema';
 * ```
 *
 * Module map:
 *
 * | module            | responsibility                                              |
 * |-------------------|-------------------------------------------------------------|
 * | `validator`       | dependency-free combinator kernel and issue model           |
 * | `hash`            | SHA-256 + base32, for content-addressed resource ids        |
 * | `resource-type`   | the seven resource slots and their acceptance criteria      |
 * | `sources`         | host authority policy and URL hygiene                      |
 * | `boilerplate`     | known fabricated filler, and corpus-wide duplicate prose    |
 * | `resource`        | the `Resource` schema and seven-slot contract              |
 * | `topic`           | the `Topic` schema and the publication policy              |
 * | `roadmap`         | graph shape and integrity (ids, edges, containment, cycles) |
 * | `corpus`          | whole-repository checks and derived statistics              |
 */

/* -------------------------------------------------------------------------- */
/* Validation kernel                                                          */
/* -------------------------------------------------------------------------- */

export {
  type Infer,
  type Issue,
  type IssuePath,
  type Rule,
  type Severity,
  type UnknownKeyPolicy,
  type ValidationResult,
  type Validator,
  OPTIONAL,
  ValidationError,
  arrayOf,
  boolean,
  define,
  enumOf,
  formatIssue,
  is,
  issue,
  joinPath,
  number,
  object,
  optional,
  parse,
  preview,
  record,
  refine,
  safeParse,
  string,
  union,
  unknown,
} from './validator';

/* -------------------------------------------------------------------------- */
/* Identity                                                                   */
/* -------------------------------------------------------------------------- */

export { sha256, sha256Utf8, shortHash, toBase32, toHex } from './hash';

/* -------------------------------------------------------------------------- */
/* Resources                                                                  */
/* -------------------------------------------------------------------------- */

export {
  RESOURCE_SLOTS,
  RESOURCE_TYPES,
  RESOURCE_TYPE_ORDER,
  type ResourceSlot,
  type ResourceType,
  isResourceType,
} from './resource-type';

export {
  RESOURCE_HEALTH_VALUES,
  RESOURCE_ID_PATTERN,
  type Resource,
  type ResourceHealth,
  type ResourceLanguage,
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
} from './resource';

export {
  CODE_HOSTS,
  KNOWN_OFFICIAL_HOSTS,
  LOW_AUTHORITY_HOSTS,
  NON_PUBLIC_HOSTS,
  PAYWALLED_HOSTS,
  SHORTENER_HOSTS,
  TRACKING_PARAMS,
  VIDEO_HOSTS,
  type HostClassification,
  canonicalizeUrl,
  checkUrlForSlot,
  classifyHost,
  isBareHomepage,
  normalizeHost,
} from './sources';

/* -------------------------------------------------------------------------- */
/* Content quality                                                            */
/* -------------------------------------------------------------------------- */

export {
  BANNED_PATTERNS,
  BANNED_PROSE,
  BANNED_RESOURCE_TITLES,
  DuplicateProseDetector,
  banBoilerplate,
  fingerprint,
  requireSubstance,
} from './boilerplate';

/* -------------------------------------------------------------------------- */
/* Topics                                                                     */
/* -------------------------------------------------------------------------- */

export {
  DIFFICULTIES,
  ENRICHMENT_FIELDS,
  ENRICHMENT_GROUPS,
  PUBLISH_STATUSES,
  SLUG_PATTERN,
  type Difficulty,
  type PolicyOutcome,
  type PublishStatus,
  type Topic,
  type TopicTier,
  applyPublishPolicy,
  isPublished,
  isStructuralIssue,
  slugify,
  topicStructureValidator,
  topicTier,
  topicValidator,
  validateTopic,
} from './topic';

/* -------------------------------------------------------------------------- */
/* Roadmap graphs                                                             */
/* -------------------------------------------------------------------------- */

export {
  NODE_ID_PATTERN,
  ROADMAP_NODE_TYPES,
  SECTION_COLORS,
  type GraphStats,
  type Position,
  type RoadmapEdge,
  type RoadmapGraph,
  type RoadmapNode,
  type RoadmapNodeType,
  type SectionColor,
  type SectionNodeData,
  type TopicNodeData,
  findCycle,
  graphStats,
  longestPath,
  roadmapEdgeValidator,
  roadmapGraphValidator,
  roadmapNodeValidator,
} from './roadmap';

/* -------------------------------------------------------------------------- */
/* Corpus                                                                     */
/* -------------------------------------------------------------------------- */

export {
  type CorpusOptions,
  type CorpusReport,
  type CorpusStats,
  type RoadmapSource,
  type RoadmapStats,
  type SlotCoverage,
  buildResourceIndex,
  sortIssues,
  topicData,
  validateCorpus,
} from './corpus';
