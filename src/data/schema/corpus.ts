/**
 * Corpus-wide validation — the checks that can only be made by looking at every
 * roadmap at once.
 *
 * Per-topic validation catches a bad resource. Only corpus validation catches the
 * failure mode that actually shipped here: content that is individually plausible
 * and collectively fabricated. `https://github.com` used as the code resource for
 * 93 different topics passes every per-topic rule. So does the same four-sentence
 * pedagogical body pasted into 156 topics. Both are only visible from above.
 *
 * This module is a pure function over already-loaded data, so it is fully testable
 * without touching the filesystem; loading is the script's job.
 */

import {
  type Issue,
  type IssuePath,
  issue,
  joinPath,
} from './validator';
import { DuplicateProseDetector, fingerprint } from './boilerplate';
import {
  type PublishStatus,
  type Topic,
  applyPublishPolicy,
  validateTopic,
} from './topic';
import {
  type RoadmapGraph,
  type TopicNodeData,
  graphStats,
  roadmapGraphValidator,
} from './roadmap';
import { type Resource, resourceId } from './resource';
import { RESOURCE_TYPES, type ResourceType } from './resource-type';
import { canonicalizeUrl } from './sources';

/* -------------------------------------------------------------------------- */
/* Inputs                                                                     */
/* -------------------------------------------------------------------------- */

/** One roadmap's raw, unvalidated content as loaded from disk. */
export interface RoadmapSource {
  /** Directory / route slug, e.g. `frontend`. */
  readonly slug: string;
  /** Contents of `graph.ts` — `{ slug, nodes, edges }`. */
  readonly graph: unknown;
  /** Contents of `topics.ts` — a `Record<nodeId, Topic>`. */
  readonly topics: unknown;
  /** True when `roadmaps.ts` lists this slug, i.e. it is routable. */
  readonly isRegistered: boolean;
}

/* -------------------------------------------------------------------------- */
/* Outputs                                                                    */
/* -------------------------------------------------------------------------- */

export interface SlotCoverage {
  readonly type: ResourceType;
  /** Topics whose resource list fills this slot at least once. */
  readonly filled: number;
  /** Topics that should fill it — i.e. every topic with any content. */
  readonly total: number;
}

export interface RoadmapStats {
  readonly slug: string;
  readonly isRegistered: boolean;
  readonly topicNodes: number;
  readonly sectionNodes: number;
  readonly edges: number;
  readonly maxDepth: number;
  /** Topic content records present in `topics.ts`. */
  readonly topicRecords: number;
  readonly byStatus: Readonly<Record<PublishStatus, number>>;
  readonly resourceRefs: number;
  readonly distinctResourceUrls: number;
  readonly slotCoverage: readonly SlotCoverage[];
  readonly errorCount: number;
  readonly warningCount: number;
  readonly suppressedCount: number;
}

export interface CorpusStats {
  readonly roadmaps: readonly RoadmapStats[];
  readonly totalTopicNodes: number;
  readonly totalTopicRecords: number;
  readonly byStatus: Readonly<Record<PublishStatus, number>>;
  readonly totalResourceRefs: number;
  readonly distinctResourceUrls: number;
  /** Resource URLs referenced by more than one topic, and how many. */
  readonly reusedUrls: readonly { readonly url: string; readonly count: number }[];
}

export interface CorpusReport {
  readonly errors: readonly Issue[];
  readonly warnings: readonly Issue[];
  /** Quality issues on quarantined `draft` content, aggregated by code. */
  readonly suppressedByCode: ReadonlyMap<string, number>;
  readonly suppressedTotal: number;
  readonly stats: CorpusStats;
}

/* -------------------------------------------------------------------------- */
/* Policy knobs                                                               */
/* -------------------------------------------------------------------------- */

export interface CorpusOptions {
  /**
   * How many distinct topics may share one resource URL before it is treated as
   * filler rather than a genuinely broadly-applicable reference.
   *
   * Three is deliberate: a canonical reference (the HTTP spec, the Git book) really
   * does serve several topics. Ten topics citing one page is a generation artefact.
   */
  readonly maxUrlReuse?: number;
  /** How many topics may share an identical prose sentence. */
  readonly maxProseReuse?: number;
  /** Status assumed when a topic does not declare one. */
  readonly defaultStatus?: PublishStatus;
}

const DEFAULTS = {
  maxUrlReuse: 3,
  maxProseReuse: 3,
  defaultStatus: 'draft' as PublishStatus,
};

/* -------------------------------------------------------------------------- */
/* Validation                                                                 */
/* -------------------------------------------------------------------------- */

/** Fields whose prose is compared across the whole corpus for accidental reuse. */
const PROSE_FIELDS = [
  'whyLearnThis',
  'whenIsItUsed',
  'whereIsItUsed',
  'description',
] as const satisfies readonly (keyof Topic)[];

const PROSE_LIST_FIELDS = [
  'learningOutcomes',
  'commonMistakes',
  'realWorldApplications',
] as const satisfies readonly (keyof Topic)[];

export function validateCorpus(
  sources: readonly RoadmapSource[],
  options: CorpusOptions = {},
): CorpusReport {
  const maxUrlReuse = options.maxUrlReuse ?? DEFAULTS.maxUrlReuse;
  const defaultStatus = options.defaultStatus ?? DEFAULTS.defaultStatus;

  const errors: Issue[] = [];
  const warnings: Issue[] = [];
  const suppressedByCode = new Map<string, number>();
  let suppressedTotal = 0;

  const proseDetector = new DuplicateProseDetector(options.maxProseReuse ?? DEFAULTS.maxProseReuse);
  /** canonical url -> the topic paths that reference it, across the whole corpus */
  const urlUsage = new Map<string, IssuePath[]>();
  /** As above, restricted to topics that are not quarantined as `draft`. */
  const liveUrlUsage = new Map<string, IssuePath[]>();
  /** slug -> first path that claimed it, for global uniqueness */
  const slugOwners = new Map<string, IssuePath>();
  /** Every topic title in the corpus, for resolving `whatComesNext`. */
  const titleIndex = new Map<string, string>();
  const roadmapStats: RoadmapStats[] = [];
  const corpusByStatus: Record<PublishStatus, number> = { draft: 0, review: 0, published: 0 };

  /** Routes each issue to the errors or warnings bucket by its own severity. */
  const collect = (items: readonly Issue[]): void => {
    for (const item of items) {
      if (item.severity === 'error') errors.push(item);
      else warnings.push(item);
    }
  };

  // ---- Pass 1: per roadmap ------------------------------------------------
  for (const source of sources) {
    const base: IssuePath = source.slug;
    let graphErrorCount = 0;
    let graphWarningCount = 0;
    let suppressedHere = 0;

    // --- Graph -----------------------------------------------------------
    const graphIssues = roadmapGraphValidator.check(source.graph, joinPath(base, 'graph'));
    // Graph codes are all `roadmap.*`, so the policy classes them as structural.
    const graphOutcome = applyPublishPolicy('published', graphIssues);
    collect(graphOutcome.errors);
    collect(graphOutcome.warnings);
    graphErrorCount += graphOutcome.errors.length;
    graphWarningCount += graphOutcome.warnings.length;

    const graph = isGraph(source.graph) ? source.graph : undefined;
    const stats = graph ? graphStats(graph) : { topicCount: 0, sectionCount: 0, edgeCount: 0, maxDepth: 0 };

    // Declared slug must match the directory it lives in, or the registry resolves
    // one roadmap and renders another.
    if (graph && graph.slug !== source.slug) {
      errors.push(
        issue(joinPath(joinPath(base, 'graph'), 'slug'), 'roadmap.slug_directory_mismatch', `Graph declares slug \`${graph.slug}\` but lives in directory \`${source.slug}\`.`, {
          hint: 'The directory name is the route. Make them agree.',
          received: graph.slug,
        }),
      );
      graphErrorCount++;
    }

    // --- Topic records ---------------------------------------------------
    const topicRecords = isRecord(source.topics) ? source.topics : {};
    if (!isRecord(source.topics)) {
      errors.push(
        issue(joinPath(base, 'topics'), 'corpus.integrity.topics_not_a_record', 'Expected `topics` to be an object keyed by node id.', {
          received: source.topics,
        }),
      );
      graphErrorCount++;
    }

    const byStatus: Record<PublishStatus, number> = { draft: 0, review: 0, published: 0 };
    const urlsHere = new Set<string>();
    let resourceRefs = 0;
    const slotFilled = new Map<ResourceType, number>();
    let topicsWithResources = 0;

    for (const [nodeId, raw] of Object.entries(topicRecords)) {
      const at = joinPath(joinPath(base, 'topics'), nodeId);
      const outcome = validateTopic(raw, { path: at, defaultStatus });
      byStatus[outcome.status]++;
      corpusByStatus[outcome.status]++;
      collect(outcome.errors);
      collect(outcome.warnings);
      graphErrorCount += outcome.errors.length;
      graphWarningCount += outcome.warnings.length;
      for (const item of outcome.suppressed) {
        suppressedByCode.set(item.code, (suppressedByCode.get(item.code) ?? 0) + 1);
        suppressedTotal++;
        suppressedHere++;
      }

      if (!isRecord(raw)) continue;
      const topic = raw as unknown as Topic;

      // Global slug uniqueness. Two topics sharing a slug means one of them is
      // unreachable once `/topics/[slug]` exists.
      if (typeof topic.slug === 'string') {
        const owner = slugOwners.get(topic.slug);
        if (owner !== undefined) {
          errors.push(
            issue(joinPath(at, 'slug'), 'corpus.integrity.duplicate_slug', `Slug \`${topic.slug}\` is already used by \`${owner}\`.`, {
              hint: 'Slugs are global public URLs. Disambiguate one of them, e.g. `caching-http` vs `caching-database`.',
            }),
          );
          graphErrorCount++;
        } else {
          slugOwners.set(topic.slug, at);
        }
      }

      if (typeof topic.title === 'string') {
        titleIndex.set(fingerprint(topic.title), at);
      }

      // Feed the cross-corpus prose detector — but only from content that is meant
      // to go live. Draft topics are quarantined precisely because their prose is
      // known-bad; counting them would make the corpus rules permanently red and
      // would drown out the signal these rules exist to give: prose being reused
      // across topics that are *claiming to be finished*.
      if (outcome.status !== 'draft') {
        for (const field of PROSE_FIELDS) {
          const value = topic[field];
          if (typeof value === 'string') proseDetector.add(value, joinPath(at, field));
        }
        for (const field of PROSE_LIST_FIELDS) {
          const list = topic[field];
          if (!Array.isArray(list)) continue;
          list.forEach((item, index) => {
            if (typeof item === 'string') proseDetector.add(item, joinPath(joinPath(at, field), index));
          });
        }
      }

      // Resource accounting. Statistics count every topic, because the report should
      // describe the corpus honestly; the over-reuse *rule* only considers live
      // content, for the same reason as the prose detector above.
      const resources = Array.isArray(topic.resources) ? (topic.resources as Resource[]) : [];
      if (resources.length > 0) topicsWithResources++;
      const seenSlots = new Set<ResourceType>();
      for (const resource of resources) {
        if (typeof resource?.url !== 'string') continue;
        resourceRefs++;
        let canonical: string;
        try {
          canonical = canonicalizeUrl(resource.url);
        } catch {
          continue; // Already reported per-resource.
        }
        urlsHere.add(canonical);
        const allUses = urlUsage.get(canonical);
        if (allUses) allUses.push(at);
        else urlUsage.set(canonical, [at]);
        if (outcome.status !== 'draft') {
          const liveUses = liveUrlUsage.get(canonical);
          if (liveUses) liveUses.push(at);
          else liveUrlUsage.set(canonical, [at]);
        }
        if (resource.type !== undefined && !seenSlots.has(resource.type)) {
          seenSlots.add(resource.type);
          slotFilled.set(resource.type, (slotFilled.get(resource.type) ?? 0) + 1);
        }
      }
    }

    // --- Graph <-> content correspondence --------------------------------
    if (graph) {
      const topicNodeIds = new Set(graph.nodes.filter((n) => n.type === 'topic').map((n) => n.id));
      const recordIds = new Set(Object.keys(topicRecords));

      // The title is currently stored twice — on the node for rendering, and in the
      // topic record as the topic's own identity. Until the node's copy is derived
      // rather than duplicated, the two must agree, or the canvas and the topic page
      // disagree about what the learner is looking at.
      //
      // Two very different faults hide in this one comparison, so they get separate
      // codes. "Http Https" against "HTTP / HTTPS" is a formatting artefact of a
      // generation pass — annoying, mechanical to fix, harmless. "Serverless
      // Architecture" against a node labelled "Microservices" means the content is
      // wired to the wrong node, and the learner is reading about something they did
      // not click on. Reporting both as one code would let sixty real defects hide
      // behind twenty cosmetic ones.
      for (const node of graph.nodes) {
        if (node.type !== 'topic') continue;
        const record = topicRecords[node.id];
        if (!isRecord(record)) continue;
        const nodeTitle = (node.data as { title?: unknown }).title;
        const topicTitle = record['title'];
        if (typeof nodeTitle !== 'string' || typeof topicTitle !== 'string') continue;
        if (nodeTitle.trim() === topicTitle.trim()) continue;
        const at = joinPath(joinPath(joinPath(base, 'topics'), node.id), 'title');
        if (sameWords(nodeTitle, topicTitle)) {
          warnings.push(
            issue(at, 'corpus.title_formatting_mismatch', `Topic title \`${topicTitle}\` differs from the node title \`${nodeTitle}\` only in punctuation or case.`, {
              severity: 'warning',
              hint: `Adopt the node's form: \`${nodeTitle}\`. Titles are rendered in both places and readers notice the inconsistency.`,
              received: topicTitle,
            }),
          );
          graphWarningCount++;
        } else {
          errors.push(
            issue(at, 'corpus.integrity.title_mismatch', `Topic content titled \`${topicTitle}\` is attached to a node labelled \`${nodeTitle}\`.`, {
              hint: 'These are different subjects, so the content is wired to the wrong node — the learner clicks one thing and reads another. Check whether a whole section is shifted by one.',
              received: topicTitle,
            }),
          );
          graphErrorCount++;
        }
      }

      const nodesWithoutContent = [...topicNodeIds].filter((id) => !recordIds.has(id));
      if (nodesWithoutContent.length > 0) {
        errors.push(
          issue(joinPath(base, 'topics'), 'corpus.integrity.node_without_content', `${nodesWithoutContent.length} topic node(s) have no entry in \`topics.ts\`: ${nodesWithoutContent.slice(0, 10).join(', ')}${nodesWithoutContent.length > 10 ? ', …' : ''}.`, {
            hint: 'These nodes render on the canvas with a title and an empty drawer — the worst possible outcome, because the learner clicks expecting content.',
          }),
        );
        graphErrorCount++;
      }

      const contentWithoutNode = [...recordIds].filter((id) => !topicNodeIds.has(id));
      if (contentWithoutNode.length > 0) {
        warnings.push(
          issue(joinPath(base, 'topics'), 'corpus.orphaned_content', `${contentWithoutNode.length} topic record(s) have no node on the canvas: ${contentWithoutNode.slice(0, 10).join(', ')}${contentWithoutNode.length > 10 ? ', …' : ''}.`, {
            severity: 'warning',
            hint: 'The content is written but unreachable. Add the node, or delete the record.',
          }),
        );
        graphWarningCount++;
      }
    }

    roadmapStats.push({
      slug: source.slug,
      isRegistered: source.isRegistered,
      topicNodes: stats.topicCount,
      sectionNodes: stats.sectionCount,
      edges: stats.edgeCount,
      maxDepth: stats.maxDepth,
      topicRecords: Object.keys(topicRecords).length,
      byStatus,
      resourceRefs,
      distinctResourceUrls: urlsHere.size,
      slotCoverage: RESOURCE_TYPES.map((type) => ({
        type,
        filled: slotFilled.get(type) ?? 0,
        total: topicsWithResources,
      })),
      errorCount: graphErrorCount,
      warningCount: graphWarningCount,
      suppressedCount: suppressedHere,
    });
  }

  // ---- Pass 2: cross-corpus ----------------------------------------------

  // Over-reused resource URLs. This is the check that would have caught
  // `https://github.com` standing in as the code resource for 93 topics.
  const reusedUrls: { url: string; count: number }[] = [];
  for (const [url, uses] of urlUsage) {
    if (uses.length > 1) reusedUrls.push({ url, count: uses.length });
  }
  for (const [url, uses] of liveUrlUsage) {
    if (uses.length <= maxUrlReuse) continue;
    const distinct = [...new Set(uses)];
    if (distinct.length <= maxUrlReuse) continue;
    errors.push(
      issue(distinct[0]!, 'corpus.overused_url', `This URL is the resource for ${distinct.length} different topics.`, {
        hint: `One page cannot be the best resource for ${distinct.length} topics. Locations: ${distinct.slice(0, 6).join(', ')}${distinct.length > 6 ? `, +${distinct.length - 6} more` : ''}.`,
        received: url,
      }),
    );
  }
  reusedUrls.sort((a, b) => b.count - a.count || a.url.localeCompare(b.url));

  // Prose repeated across topics, whether or not it is in the known-filler corpus.
  for (const item of proseDetector.report()) {
    errors.push(item);
  }

  // `whatComesNext` should name a real topic. A dangling pointer is a dead end in
  // the learning path, invisible until a learner follows it.
  for (const source of sources) {
    const topicRecords = isRecord(source.topics) ? source.topics : {};
    for (const [nodeId, raw] of Object.entries(topicRecords)) {
      if (!isRecord(raw)) continue;
      const next = (raw as { whatComesNext?: unknown }).whatComesNext;
      if (typeof next !== 'string' || next.trim() === '') continue;
      if (titleIndex.has(fingerprint(next))) continue;
      warnings.push(
        issue(joinPath(joinPath(joinPath(source.slug, 'topics'), nodeId), 'whatComesNext'), 'corpus.unresolved_next_topic', 'Does not name any topic in the corpus.', {
          severity: 'warning',
          hint: 'Point at a real topic title so the learning path can be walked programmatically, or drop the field.',
          received: next,
        }),
      );
    }
  }

  const distinctUrls = urlUsage.size;
  const totals = roadmapStats.reduce(
    (acc, r) => ({
      topicNodes: acc.topicNodes + r.topicNodes,
      topicRecords: acc.topicRecords + r.topicRecords,
      resourceRefs: acc.resourceRefs + r.resourceRefs,
    }),
    { topicNodes: 0, topicRecords: 0, resourceRefs: 0 },
  );

  return {
    errors: sortIssues(errors),
    warnings: sortIssues(warnings),
    suppressedByCode,
    suppressedTotal,
    stats: {
      roadmaps: roadmapStats,
      totalTopicNodes: totals.topicNodes,
      totalTopicRecords: totals.topicRecords,
      byStatus: corpusByStatus,
      totalResourceRefs: totals.resourceRefs,
      distinctResourceUrls: distinctUrls,
      reusedUrls,
    },
  };
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isGraph(value: unknown): value is RoadmapGraph {
  return (
    isRecord(value) &&
    typeof value['slug'] === 'string' &&
    Array.isArray(value['nodes']) &&
    Array.isArray(value['edges'])
  );
}

/**
 * True when two titles name the same thing and differ only in punctuation or case.
 *
 * `&` and `/` are spelled out first, because the generation pass that produced much
 * of this corpus turned "Hashing & Salting" into "Hashing And Salting" — the same
 * title, not a different one.
 */
function sameWords(a: string, b: string): boolean {
  const squash = (text: string): string =>
    text
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[/|]/g, ' ')
      .replace(/[^a-z0-9]+/g, '');
  return squash(a) === squash(b);
}

/** Deterministic ordering so CI output diffs cleanly between runs. */
export function sortIssues(issues: readonly Issue[]): Issue[] {
  return [...issues].sort((a, b) => a.path.localeCompare(b.path) || a.code.localeCompare(b.code));
}

/**
 * Builds the global resource registry the Phase 2 pipeline will own: one entry per
 * distinct canonical URL, with the topics that reference it. Produced here so that
 * the registry can never drift from the content — it is derived, not maintained.
 */
export function buildResourceIndex(
  sources: readonly RoadmapSource[],
): Map<string, { readonly id: string; readonly url: string; readonly usedBy: string[]; readonly types: Set<ResourceType> }> {
  const index = new Map<string, { id: string; url: string; usedBy: string[]; types: Set<ResourceType> }>();
  for (const source of sources) {
    const topics = isRecord(source.topics) ? source.topics : {};
    for (const [nodeId, raw] of Object.entries(topics)) {
      if (!isRecord(raw)) continue;
      const resources = (raw as { resources?: unknown }).resources;
      if (!Array.isArray(resources)) continue;
      for (const resource of resources as Resource[]) {
        if (typeof resource?.url !== 'string') continue;
        let canonical: string;
        let id: string;
        try {
          canonical = canonicalizeUrl(resource.url);
          id = resourceId(resource.url);
        } catch {
          continue;
        }
        const existing = index.get(canonical);
        const reference = `${source.slug}/${nodeId}`;
        if (existing) {
          existing.usedBy.push(reference);
          if (resource.type) existing.types.add(resource.type);
        } else {
          index.set(canonical, {
            id,
            url: canonical,
            usedBy: [reference],
            types: new Set(resource.type ? [resource.type] : []),
          });
        }
      }
    }
  }
  return index;
}

/** Node data narrowed to a topic node, for callers reading slugs off the graph. */
export function topicData(data: unknown): TopicNodeData | undefined {
  return isRecord(data) && typeof data['title'] === 'string' ? (data as unknown as TopicNodeData) : undefined;
}
