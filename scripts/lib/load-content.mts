/**
 * Loads every roadmap's content off disk, in the shape the schema expects.
 *
 * ## Why this is shape-detecting rather than name-based
 *
 * The content directories do not agree on their export names. `graph.ts` exports
 * `nodes`/`edges` in eighteen directories, `graphNodes`/`graphEdges` in five, and
 * `fullstackGraphNodes`/`fullstackGraphEdges` in one; `topics.ts` exports `topics`,
 * `topicsData`, `frontendTopics`, `backendTopics` or `fullstackTopics` depending on
 * which generation pass produced it. A loader keyed on names would need a hand-kept
 * table of exceptions, and would go stale the first time someone adds a directory.
 *
 * So modules are identified by *shape* — an array of things with `id` and
 * `position` is the node list, whatever it happens to be called — and every
 * non-canonical name is reported as a warning so the inconsistency gets fixed
 * rather than silently accommodated forever. When detection is ambiguous the loader
 * reports an error instead of guessing; a validator that quietly validated the
 * wrong array would be worse than no validator.
 *
 * ## Registration
 *
 * "Registered" means a learner can actually reach the roadmap, which requires two
 * independent things to be true: `roadmaps.ts` must list the slug (so it appears in
 * the catalogue and `/roadmaps/<slug>` resolves), and `content/registry.ts` must
 * map the slug to its module (so the page has something to render). Those two lists
 * disagree today in both directions, and both directions are reported.
 *
 * Run with `node --import tsx` — not `tsx/esm`, which cannot dynamically import a
 * `.ts` module from an `.mts` entry point.
 */

import { existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { type Issue, type IssuePath, issue, joinPath } from '../../src/data/schema/index';
import type { RoadmapSource } from '../../src/data/schema/index';

/* -------------------------------------------------------------------------- */
/* Locations                                                                  */
/* -------------------------------------------------------------------------- */

const HERE = dirname(fileURLToPath(import.meta.url));

/** Repository root, derived from this file's own location. */
export const REPO_ROOT = join(HERE, '..', '..');

export const CONTENT_ROOT = join(REPO_ROOT, 'src', 'data', 'content');

/**
 * Dynamic-import specifiers are resolved relative to *this* module, so they are
 * built as relative paths rather than from {@link CONTENT_ROOT}. Extensionless on
 * purpose: an explicit `.ts` extension makes tsx load the module as CommonJS, at
 * which point its own extensionless imports fail to resolve.
 */
const importBase = '../../src/data/content';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export interface LoadedRoadmap extends RoadmapSource {
  /** Absolute path to the content directory. */
  readonly directory: string;
  /** The slug `index.ts` declares, which is what the app actually serves. */
  readonly declaredSlug: string | undefined;
  /** Export names the loader resolved, for the naming-consistency report. */
  readonly exports: {
    readonly nodes: string | undefined;
    readonly edges: string | undefined;
    readonly topics: string | undefined;
    readonly content: string | undefined;
  };
  /** True when `content/registry.ts` maps this slug to its module. */
  readonly inContentRegistry: boolean;
  /** True when `roadmaps.ts` lists this slug. */
  readonly inRoadmapRegistry: boolean;
}

export interface ContentLoad {
  readonly sources: readonly LoadedRoadmap[];
  /** Loader-level issues: unreadable modules, ambiguous exports, registry drift. */
  readonly issues: readonly Issue[];
  /** Every slug in the live `roadmaps` array — the ones a learner can open. */
  readonly roadmapSlugs: readonly string[];
  /** Every slug in `plannedRoadmaps`: announced, unbuilt, not routable. */
  readonly plannedSlugs: readonly string[];
  /** Slugs in the live `roadmaps` array with no content directory at all. */
  readonly slugsWithoutContent: readonly string[];
  /** Content directories `registry.ts` never maps, so unreachable by the app. */
  readonly unwiredDirectories: readonly string[];
}

export interface LoadOptions {
  /** Restrict loading to these directory names. Empty or omitted means all. */
  readonly only?: readonly string[];
}

/* -------------------------------------------------------------------------- */
/* Shape detection                                                            */
/* -------------------------------------------------------------------------- */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/** An array of graph nodes: objects carrying both an `id` and a `position`. */
function looksLikeNodeList(value: unknown): boolean {
  if (!Array.isArray(value) || value.length === 0) return false;
  return value.every(
    (item) => isRecord(item) && typeof item['id'] === 'string' && isRecord(item['position']),
  );
}

/** An array of graph edges: objects carrying `id`, `source` and `target`. */
function looksLikeEdgeList(value: unknown): boolean {
  if (!Array.isArray(value)) return false;
  if (value.length === 0) return true; // A roadmap may legitimately have no edges yet.
  return value.every(
    (item) =>
      isRecord(item) &&
      typeof item['source'] === 'string' &&
      typeof item['target'] === 'string',
  );
}

/**
 * Fields that mark an object as topic content.
 *
 * Detection deliberately does *not* key on `title`: `frontend/topics.ts` is typed
 * `Record<string, Partial<TopicData>>` and supplies no titles at all, relying on the
 * graph node's copy. That is a defect the schema reports — but the loader has to be
 * able to load the file in order for it to be reported.
 */
const TOPIC_FIELDS: readonly string[] = [
  'title',
  'description',
  'whyLearnThis',
  'whenIsItUsed',
  'whereIsItUsed',
  'whatComesNext',
  'learningOutcomes',
  'commonMistakes',
  'realWorldApplications',
  'resources',
  'difficulty',
  'estimatedTime',
  'publishStatus',
];

/** A `Record<nodeId, Topic>`: a plain object whose values all carry topic fields. */
function looksLikeTopicRecord(value: unknown): boolean {
  if (!isRecord(value)) return false;
  const values = Object.values(value);
  if (values.length === 0) return false;
  return values.every(
    (item) => isRecord(item) && TOPIC_FIELDS.some((field) => field in item),
  );
}

/** An assembled `RoadmapContent`: `{ slug, nodes, edges }`. */
function looksLikeContent(value: unknown): boolean {
  return (
    isRecord(value) &&
    typeof value['slug'] === 'string' &&
    Array.isArray(value['nodes']) &&
    Array.isArray(value['edges'])
  );
}

interface Detection {
  readonly name: string | undefined;
  readonly value: unknown;
  /** Every export that matched. More than one means the module is ambiguous. */
  readonly candidates: readonly string[];
}

/**
 * Finds the single export of a module matching `predicate`.
 *
 * When several match, `name` is left undefined and every candidate is returned, so
 * the caller can fail loudly. Guessing here would mean validating a different array
 * from the one the app renders.
 */
function detect(module: Record<string, unknown>, predicate: (value: unknown) => boolean): Detection {
  const candidates = Object.keys(module).filter((key) => predicate(module[key]));
  if (candidates.length !== 1) return { name: undefined, value: undefined, candidates };
  const name = candidates[0]!;
  return { name, value: module[name], candidates };
}

/** Canonical export names. Anything else works but is reported for cleanup. */
const CANONICAL_EXPORTS = { nodes: 'nodes', edges: 'edges', topics: 'topics' } as const;

/* -------------------------------------------------------------------------- */
/* Loading                                                                    */
/* -------------------------------------------------------------------------- */

/** Directory names under `src/data/content`, excluding loose files like `registry.ts`. */
export function contentDirectories(): string[] {
  return readdirSync(CONTENT_ROOT)
    .filter((entry) => statSync(join(CONTENT_ROOT, entry)).isDirectory())
    .sort();
}

export async function loadContent(options: LoadOptions = {}): Promise<ContentLoad> {
  const issues: Issue[] = [];
  const sources: LoadedRoadmap[] = [];

  const { live: roadmapSlugs, planned: plannedSlugs } = await loadRoadmapSlugs();
  const getContentBySlug = await loadContentRegistry();

  const only = options.only && options.only.length > 0 ? new Set(options.only) : undefined;
  const directories = contentDirectories().filter((name) => !only || only.has(name));

  if (only) {
    for (const requested of only) {
      if (!existsSync(join(CONTENT_ROOT, requested))) {
        issues.push(
          issue(requested, 'corpus.integrity.unknown_roadmap', `No content directory named \`${requested}\`.`, {
            hint: `Known directories: ${contentDirectories().join(', ')}.`,
          }),
        );
      }
    }
  }

  const unwiredDirectories: string[] = [];

  for (const name of directories) {
    const directory = join(CONTENT_ROOT, name);
    const at: IssuePath = name;

    const graphModule = await importModule(`${importBase}/${name}/graph`, joinPath(at, 'graph.ts'), issues);
    const topicsModule = await importModule(`${importBase}/${name}/topics`, joinPath(at, 'topics.ts'), issues);
    const indexModule = await importModule(`${importBase}/${name}/index`, joinPath(at, 'index.ts'), issues);

    // --- Graph nodes and edges ------------------------------------------------
    const nodes = graphModule
      ? resolve(graphModule, looksLikeNodeList, {
          at: joinPath(at, 'graph.ts'),
          what: 'node list',
          expected: 'an array of `{ id, position, … }`',
          canonical: CANONICAL_EXPORTS.nodes,
          issues,
        })
      : undefined;
    const edges = graphModule
      ? resolve(graphModule, looksLikeEdgeList, {
          at: joinPath(at, 'graph.ts'),
          what: 'edge list',
          expected: 'an array of `{ id, source, target }`',
          canonical: CANONICAL_EXPORTS.edges,
          issues,
        })
      : undefined;

    // --- Topic content --------------------------------------------------------
    const topics = topicsModule
      ? resolve(topicsModule, looksLikeTopicRecord, {
          at: joinPath(at, 'topics.ts'),
          what: 'topic record',
          expected: 'an object keyed by node id whose values carry topic fields',
          canonical: CANONICAL_EXPORTS.topics,
          issues,
        })
      : undefined;

    // --- Declared slug --------------------------------------------------------
    const content = indexModule
      ? resolve(indexModule, looksLikeContent, {
          at: joinPath(at, 'index.ts'),
          what: 'assembled roadmap content',
          expected: 'a `{ slug, nodes, edges }` object',
          issues,
        })
      : undefined;
    const declaredSlug =
      content?.value !== undefined && isRecord(content.value) && typeof content.value['slug'] === 'string'
        ? content.value['slug']
        : undefined;

    // --- Registration ---------------------------------------------------------
    const inRoadmapRegistry = roadmapSlugs.includes(name);
    const wired = declaredSlug !== undefined ? await getContentBySlug(declaredSlug) : null;
    const inContentRegistry = wired !== null;
    if (!inContentRegistry) unwiredDirectories.push(name);

    if (!inContentRegistry && indexModule !== undefined) {
      issues.push(
        issue(joinPath(at, 'index.ts'), 'corpus.unwired_content', 'Content directory is not mapped in `content/registry.ts`, so no route can render it.', {
          severity: 'warning',
          hint: `Add a case for \`${declaredSlug ?? name}\`, or delete the directory. Content that cannot be reached is content that cannot be maintained.`,
        }),
      );
    }
    if (!inRoadmapRegistry) {
      // A planned slug with content is a different mistake from a slug nobody listed:
      // the work is done and the only thing standing between it and a learner is one
      // line moving between two arrays. Saying "add a RoadmapMeta" there would be
      // advice to duplicate an entry that already exists.
      issues.push(
        plannedSlugs.includes(name)
          ? issue(at, 'corpus.planned_roadmap_has_content', 'Listed in `plannedRoadmaps`, but the content directory exists — so nothing links to finished work.', {
              severity: 'warning',
              hint: `Move the \`${name}\` entry from \`plannedRoadmaps\` into \`roadmaps\` in \`src/data/roadmaps.ts\`.`,
            })
          : issue(at, 'corpus.unlisted_roadmap', 'Content directory has no entry in `roadmaps.ts`, so it never appears in the catalogue.', {
              severity: 'warning',
              hint: `Add a \`RoadmapMeta\` with slug \`${name}\`, or remove the directory.`,
            }),
      );
    }

    sources.push({
      slug: name,
      graph: {
        // `graph.ts` carries no slug of its own; the slug the app serves comes from
        // `index.ts`, so that is the one checked against the directory name.
        slug: declaredSlug ?? name,
        nodes: nodes?.value ?? [],
        edges: edges?.value ?? [],
      },
      topics: topics?.value ?? {},
      isRegistered: inRoadmapRegistry && inContentRegistry,
      directory,
      declaredSlug,
      exports: {
        nodes: nodes?.name,
        edges: edges?.name,
        topics: topics?.name,
        content: content?.name,
      },
      inContentRegistry,
      inRoadmapRegistry,
    });
  }

  // --- Registry slugs with nothing behind them --------------------------------
  const loadedSlugs = new Set(contentDirectories());
  const slugsWithoutContent = roadmapSlugs.filter((slug) => !loadedSlugs.has(slug));
  if (!only) {
    for (const slug of slugsWithoutContent) {
      issues.push(
        issue(slug, 'corpus.integrity.listed_without_content', 'Listed in `roadmaps.ts` but has no content directory.', {
          hint: 'The catalogue links to it and the page renders an empty canvas. Move it to a `plannedRoadmaps` list until content exists.',
        }),
      );
    }

    // A slug in both arrays makes every question about it ambiguous — routable or not,
    // in the sitemap or not — and the answer would depend on which list a given call
    // site happened to read. Structural, because no content decision can resolve it.
    for (const slug of plannedSlugs.filter((s) => roadmapSlugs.includes(s))) {
      issues.push(
        issue(slug, 'corpus.integrity.mismatch', 'Listed in both `roadmaps` and `plannedRoadmaps`.', {
          hint: 'A roadmap is either live or planned. Delete whichever entry is stale.',
        }),
      );
    }
  }

  return { sources, issues, roadmapSlugs, plannedSlugs, slugsWithoutContent, unwiredDirectories };
}

/* -------------------------------------------------------------------------- */
/* Module helpers                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Imports a content module, converting a failure into an issue rather than a crash.
 *
 * This is the one place a `catch` is justified: a syntax error in one roadmap must
 * not prevent the other twenty-three from being reported. The error is surfaced in
 * full, never swallowed.
 */
async function importModule(
  specifier: string,
  at: IssuePath,
  issues: Issue[],
): Promise<Record<string, unknown> | undefined> {
  try {
    return (await import(specifier)) as Record<string, unknown>;
  } catch (error) {
    const message = error instanceof Error ? error.message.split('\n')[0]! : String(error);
    issues.push(
      issue(at, 'corpus.integrity.module_load_failed', `Could not import this module: ${message}`, {
        hint: 'Fix the module before anything else; nothing in this roadmap can be validated until it loads.',
      }),
    );
    return undefined;
  }
}

interface ResolveOptions {
  readonly at: IssuePath;
  readonly what: string;
  readonly expected: string;
  readonly canonical?: string;
  readonly issues: Issue[];
}

/** Resolves one export by shape, reporting absence, ambiguity and off-standard names. */
function resolve(
  module: Record<string, unknown>,
  predicate: (value: unknown) => boolean,
  options: ResolveOptions,
): { name: string; value: unknown } | undefined {
  const found = detect(module, predicate);
  if (found.name === undefined) {
    const exported = Object.keys(module).filter((key) => key !== 'default');
    options.issues.push(
      found.candidates.length > 1
        ? issue(options.at, 'corpus.integrity.ambiguous_export', `Several exports look like the ${options.what}: ${found.candidates.join(', ')}.`, {
            hint: `Rename all but one, or export the ${options.what} as \`${options.canonical ?? 'the single canonical name'}\`. The loader will not guess which one the app renders.`,
          })
        : issue(options.at, 'corpus.integrity.missing_export', `No export looks like the ${options.what} (expected ${options.expected}).`, {
            hint: exported.length > 0 ? `Exports found: ${exported.join(', ')}.` : 'This module exports nothing.',
          }),
    );
    return undefined;
  }

  if (options.canonical !== undefined && found.name !== options.canonical) {
    options.issues.push(
      issue(options.at, 'corpus.nonstandard_export_name', `The ${options.what} is exported as \`${found.name}\`.`, {
        severity: 'warning',
        hint: `Rename it to \`${options.canonical}\` so every roadmap looks the same and tooling needs no special cases.`,
        received: found.name,
      }),
    );
  }

  return { name: found.name, value: found.value };
}

/**
 * Reads the catalogue from `roadmaps.ts`.
 *
 * Both lists are read, because the interesting mistakes are about the boundary between
 * them: a slug in neither list has invisible content, a slug in both is ambiguous, and
 * a *planned* slug that has grown a content directory is finished work that nothing
 * links to. Returning `planned` lets those be reported as what they are instead of all
 * collapsing into "not in the catalogue".
 */
async function loadRoadmapSlugs(): Promise<{ live: string[]; planned: string[] }> {
  const catalogue = (await import('../../src/data/roadmaps')) as {
    roadmaps?: readonly { slug: string }[];
    plannedRoadmaps?: readonly { slug: string }[];
  };
  if (!Array.isArray(catalogue.roadmaps)) {
    throw new Error('`src/data/roadmaps.ts` does not export a `roadmaps` array.');
  }
  return {
    live: catalogue.roadmaps.map((entry) => entry.slug),
    // Absent is not an error: a repository with nothing planned is a valid state, and
    // this loader should not require a list to exist just so it can be empty.
    planned: (catalogue.plannedRoadmaps ?? []).map((entry) => entry.slug),
  };
}

/** Loads the content registry's resolver, used to detect unwired directories. */
async function loadContentRegistry(): Promise<(slug: string) => Promise<unknown>> {
  const registry = (await import('../../src/data/content/registry')) as {
    getContentBySlug?: (slug: string) => Promise<unknown>;
  };
  if (typeof registry.getContentBySlug !== 'function') {
    throw new Error('`src/data/content/registry.ts` does not export `getContentBySlug`.');
  }
  return registry.getContentBySlug;
}
