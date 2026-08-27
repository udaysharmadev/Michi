/**
 * The canonical roadmap-graph schema and its integrity rules.
 *
 * A roadmap is a *view*: a positioned graph of section containers and topic nodes,
 * plus prerequisite edges. The knowledge lives in `topics.ts`; this file governs the
 * structure that renders it.
 *
 * Graph integrity is treated as structural — always an error, at every publication
 * status — because these defects do not merely disappoint a learner, they break the
 * canvas. An edge pointing at a node that does not exist, or a `parentId` naming a
 * topic instead of a section, produces a React Flow render error or a silently
 * misplaced node, and there is no editorial state in which that is acceptable.
 *
 * ## Known migration this schema enforces
 *
 * Ten roadmaps in this repository still carry an earlier shape: a root node with
 * `type: "roadmap"` and node data keyed `label` instead of `title`. There is no
 * renderer registered for `type: "roadmap"` in `roadmap-canvas.tsx`, so those nodes
 * render as unstyled defaults, and `label` is read by nothing at all. The rules
 * below name both defects explicitly with the migration to apply, rather than
 * failing with a generic "unknown field".
 */

import {
  type Issue,
  type IssuePath,
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
import { DIFFICULTIES, SLUG_PATTERN } from './topic';

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type RoadmapNodeType = 'topic' | 'section';

export const ROADMAP_NODE_TYPES = ['topic', 'section'] as const;

/** The six palette colours the canvas knows how to render. */
export const SECTION_COLORS = ['blue', 'green', 'yellow', 'purple', 'red', 'orange'] as const;

export type SectionColor = (typeof SECTION_COLORS)[number];

export interface Position {
  readonly x: number;
  readonly y: number;
}

/**
 * Presentation data on a topic node. Pedagogical content is *not* here — it is
 * merged in from `topics.ts` at module load, keyed by node id.
 */
export interface TopicNodeData {
  readonly title: string;
  readonly description?: string;
  readonly slug?: string;
  readonly difficulty?: (typeof DIFFICULTIES)[number];
  readonly icon?: string;
  readonly estimatedTime?: string;
  readonly sectionColor?: SectionColor;
  /** Grid row within the parent section. Consumed by `use-layout.ts`. */
  readonly row?: number;
  /** Grid column within the parent section. */
  readonly col?: number;
  readonly isHighlighted?: boolean;
  readonly isLarge?: boolean;
  /** Slug of another roadmap this topic hands off to. */
  readonly linkTo?: string;
}

/** Presentation data on a section container. */
export interface SectionNodeData {
  readonly title: string;
  readonly description?: string;
  readonly color?: SectionColor;
  readonly sectionNumber?: number;
  readonly sectionIcon?: string;
  /** Set by the layout pass; hand-authored values are overwritten. */
  readonly width?: number;
  readonly height?: number;
}

export interface RoadmapNode {
  readonly id: string;
  readonly type: RoadmapNodeType;
  readonly position: Position;
  readonly data: TopicNodeData | SectionNodeData;
  /** Id of the containing section node. Topics inside a section must set this. */
  readonly parentId?: string;
  /** React Flow containment. Always `"parent"` when `parentId` is set. */
  readonly extent?: 'parent';
}

export interface RoadmapEdge {
  readonly id: string;
  readonly source: string;
  readonly target: string;
  readonly type?: 'default' | 'smoothstep' | 'step' | 'straight' | 'custom';
  readonly animated?: boolean;
  readonly sourceHandle?: string;
  readonly targetHandle?: string;
}

export interface RoadmapGraph {
  readonly slug: string;
  readonly nodes: readonly RoadmapNode[];
  readonly edges: readonly RoadmapEdge[];
}

/* -------------------------------------------------------------------------- */
/* Node id and field validators                                              */
/* -------------------------------------------------------------------------- */

/**
 * Node ids appear in progress keys, bookmark records and deep links, so they are
 * effectively permanent. Restricted to a conservative character set.
 */
export const NODE_ID_PATTERN = /^[a-z0-9][a-z0-9_-]{0,63}$/i;

const nodeIdValidator = string({
  code: 'roadmap.node.id',
  pattern: NODE_ID_PATTERN,
  patternLabel: 'alphanumeric with `_` or `-`, up to 64 characters',
  minLength: 1,
  maxLength: 64,
});

const positionValidator = object<Position>(
  'Position',
  {
    x: number({ code: 'roadmap.node.position.x', min: -100_000, max: 100_000 }),
    y: number({ code: 'roadmap.node.position.y', min: -100_000, max: 100_000 }),
  },
  { code: 'roadmap.node.position', unknownKeys: 'error' },
);

const topicNodeDataShape: Record<keyof TopicNodeData, Validator<unknown>> = {
  title: string({ code: 'roadmap.node.data.title', minLength: 1, maxLength: 90 }),
  description: optional(string({ code: 'roadmap.node.data.description', minLength: 1, maxLength: 400 })),
  slug: optional(
    string({
      code: 'roadmap.node.data.slug',
      pattern: SLUG_PATTERN,
      patternLabel: 'lower-case kebab-case',
      minLength: 2,
      maxLength: 72,
    }),
  ),
  difficulty: optional(enumOf(DIFFICULTIES, 'roadmap.node.data.difficulty')),
  icon: optional(string({ code: 'roadmap.node.data.icon', minLength: 2, maxLength: 60 })),
  estimatedTime: optional(string({ code: 'roadmap.node.data.estimatedTime', minLength: 1, maxLength: 40 })),
  sectionColor: optional(enumOf(SECTION_COLORS, 'roadmap.node.data.sectionColor')),
  row: optional(number({ code: 'roadmap.node.data.row', int: true, min: 0, max: 200 })),
  col: optional(number({ code: 'roadmap.node.data.col', int: true, min: 0, max: 200 })),
  isHighlighted: optional(boolean('roadmap.node.data.isHighlighted')),
  isLarge: optional(boolean('roadmap.node.data.isLarge')),
  linkTo: optional(
    string({
      code: 'roadmap.node.data.linkTo',
      pattern: SLUG_PATTERN,
      patternLabel: 'a roadmap slug in kebab-case',
      minLength: 2,
      maxLength: 72,
    }),
  ),
};

const sectionNodeDataShape: Record<keyof SectionNodeData, Validator<unknown>> = {
  title: string({ code: 'roadmap.node.data.title', minLength: 1, maxLength: 120 }),
  description: optional(string({ code: 'roadmap.node.data.description', minLength: 1, maxLength: 400 })),
  color: optional(enumOf(SECTION_COLORS, 'roadmap.node.data.color')),
  sectionNumber: optional(number({ code: 'roadmap.node.data.sectionNumber', int: true, min: 0, max: 200 })),
  sectionIcon: optional(string({ code: 'roadmap.node.data.sectionIcon', minLength: 2, maxLength: 60 })),
  width: optional(number({ code: 'roadmap.node.data.width', min: 1, max: 100_000 })),
  height: optional(number({ code: 'roadmap.node.data.height', min: 1, max: 100_000 })),
};

const topicNodeDataValidator = object<TopicNodeData>('TopicNodeData', topicNodeDataShape, {
  code: 'roadmap.node.data',
  unknownKeys: 'error',
});

const sectionNodeDataValidator = object<SectionNodeData>('SectionNodeData', sectionNodeDataShape, {
  code: 'roadmap.node.data',
  unknownKeys: 'error',
});

/* -------------------------------------------------------------------------- */
/* Node validator                                                             */
/* -------------------------------------------------------------------------- */

/**
 * Explains the legacy shapes rather than reporting them as generic unknown fields,
 * so that a curator hitting this for the first time knows exactly what to change.
 */
function checkLegacyNodeShape(node: Record<string, unknown>, path: IssuePath): Issue[] {
  const issues: Issue[] = [];
  if (node['type'] === 'roadmap') {
    issues.push(
      issue(joinPath(path, 'type'), 'roadmap.node.legacy_root_node', 'Node type `"roadmap"` is from a superseded shape and has no renderer.', {
        hint: '`roadmap-canvas.tsx` registers renderers for `topic` and `section` only, so this node draws as an unstyled default. Delete it — the roadmap title comes from `roadmaps.ts`.',
      }),
    );
  }
  const data = node['data'];
  if (typeof data === 'object' && data !== null && 'label' in data) {
    issues.push(
      issue(joinPath(joinPath(path, 'data'), 'label'), 'roadmap.node.legacy_label_field', 'Node data uses `label`, which nothing reads.', {
        hint: 'Rename `label` to `title`. Every renderer and the search index read `data.title`.',
        received: (data as { label?: unknown }).label,
      }),
    );
  }
  return issues;
}

const nodeBaseShape: Record<'id' | 'type' | 'position' | 'parentId' | 'extent', Validator<unknown>> = {
  id: nodeIdValidator,
  type: enumOf(ROADMAP_NODE_TYPES, 'roadmap.node.type'),
  position: positionValidator,
  parentId: optional(nodeIdValidator),
  extent: optional(enumOf(['parent'] as const, 'roadmap.node.extent')),
};

/**
 * Validates a node, dispatching on `type` so that error messages name the right
 * shape. A generic union would report "matched neither TopicNode nor SectionNode",
 * which tells a curator nothing.
 */
export const roadmapNodeValidator: Validator<RoadmapNode> = define<RoadmapNode>(
  'RoadmapNode',
  (value, path) => {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
      return [issue(path, 'roadmap.node.type', 'Expected a RoadmapNode object.', { received: value })];
    }
    const node = value as Record<string, unknown>;
    const legacy = checkLegacyNodeShape(node, path);
    if (legacy.length > 0) return legacy;

    const dataValidator = node['type'] === 'section' ? sectionNodeDataValidator : topicNodeDataValidator;
    const shape: Record<string, Validator<unknown>> = { ...nodeBaseShape, data: dataValidator };
    const issues = object<RoadmapNode>('RoadmapNode', shape, {
      code: 'roadmap.node',
      unknownKeys: 'error',
    }).check(value, path);

    // Containment must be declared consistently or React Flow positions the node
    // in absolute canvas space while the layout pass treats it as relative.
    const hasParent = typeof node['parentId'] === 'string' && node['parentId'] !== '';
    if (hasParent && node['extent'] !== 'parent') {
      issues.push(
        issue(joinPath(path, 'extent'), 'roadmap.node.missing_extent', 'Node sets `parentId` but not `extent: "parent"`.', {
          hint: 'Without `extent`, React Flow reads `position` as absolute and the node escapes its section.',
        }),
      );
    }
    if (!hasParent && node['extent'] === 'parent') {
      issues.push(
        issue(joinPath(path, 'extent'), 'roadmap.node.extent_without_parent', 'Node sets `extent: "parent"` but has no `parentId`.', {
          hint: 'Remove `extent`, or set the containing section id.',
        }),
      );
    }
    if (node['type'] === 'section' && hasParent) {
      issues.push(
        issue(joinPath(path, 'parentId'), 'roadmap.node.nested_section', 'Sections cannot be nested.', {
          hint: 'The layout engine assumes a two-level graph: sections contain topics.',
          received: node['parentId'],
        }),
      );
    }
    return issues;
  },
);

/* -------------------------------------------------------------------------- */
/* Edge validator                                                             */
/* -------------------------------------------------------------------------- */

const edgeShape: Record<keyof RoadmapEdge, Validator<unknown>> = {
  id: string({
    code: 'roadmap.edge.id',
    pattern: /^[a-z0-9][a-z0-9_-]{0,143}$/i,
    patternLabel: 'alphanumeric with `_` or `-`',
    minLength: 1,
    maxLength: 144,
  }),
  source: nodeIdValidator,
  target: nodeIdValidator,
  type: optional(enumOf(['default', 'smoothstep', 'step', 'straight', 'custom'] as const, 'roadmap.edge.type')),
  animated: optional(boolean('roadmap.edge.animated')),
  sourceHandle: optional(string({ code: 'roadmap.edge.sourceHandle', minLength: 1, maxLength: 40 })),
  targetHandle: optional(string({ code: 'roadmap.edge.targetHandle', minLength: 1, maxLength: 40 })),
};

export const roadmapEdgeValidator: Validator<RoadmapEdge> = refine(
  object<RoadmapEdge>('RoadmapEdge', edgeShape, { code: 'roadmap.edge', unknownKeys: 'error' }),
  (edge, path) =>
    edge.source === edge.target
      ? [
          issue(path, 'roadmap.edge.self_loop', 'Edge connects a node to itself.', {
            hint: 'A topic cannot be its own prerequisite.',
            received: edge.source,
          }),
        ]
      : [],
);

/* -------------------------------------------------------------------------- */
/* Graph integrity                                                            */
/* -------------------------------------------------------------------------- */

/** Every graph-level rule. All produce `roadmap.*` codes, hence always structural. */
const graphRules: Rule<RoadmapGraph>[] = [
  // --- Identity -----------------------------------------------------------
  (graph, path) => {
    const seen = new Map<string, number>();
    const issues: Issue[] = [];
    graph.nodes.forEach((node, index) => {
      const first = seen.get(node.id);
      if (first !== undefined) {
        issues.push(
          issue(joinPath(joinPath(path, 'nodes'), index), 'roadmap.duplicate_node_id', `Node id \`${node.id}\` is already used at index ${first}.`, {
            hint: 'Ids key progress, bookmarks and deep links. A collision silently merges two topics\' state.',
          }),
        );
      } else {
        seen.set(node.id, index);
      }
    });
    return issues;
  },

  (graph, path) => {
    const seen = new Map<string, number>();
    const issues: Issue[] = [];
    graph.edges.forEach((edge, index) => {
      const first = seen.get(edge.id);
      if (first !== undefined) {
        issues.push(
          issue(joinPath(joinPath(path, 'edges'), index), 'roadmap.duplicate_edge_id', `Edge id \`${edge.id}\` is already used at index ${first}.`, {
            hint: 'React Flow drops duplicate keys, so one of these edges never renders.',
          }),
        );
      } else {
        seen.set(edge.id, index);
      }
    });
    return issues;
  },

  // --- Referential integrity ----------------------------------------------
  (graph, path) => {
    const ids = new Set(graph.nodes.map((n) => n.id));
    const issues: Issue[] = [];
    graph.edges.forEach((edge, index) => {
      const at = joinPath(joinPath(path, 'edges'), index);
      if (!ids.has(edge.source)) {
        issues.push(
          issue(joinPath(at, 'source'), 'roadmap.dangling_edge_source', `Edge source \`${edge.source}\` does not exist.`, {
            hint: 'Either the node was renamed or removed. React Flow throws on unresolved endpoints.',
          }),
        );
      }
      if (!ids.has(edge.target)) {
        issues.push(
          issue(joinPath(at, 'target'), 'roadmap.dangling_edge_target', `Edge target \`${edge.target}\` does not exist.`, {
            hint: 'Either the node was renamed or removed. React Flow throws on unresolved endpoints.',
          }),
        );
      }
    });
    return issues;
  },

  (graph, path) => {
    const sectionIds = new Set(graph.nodes.filter((n) => n.type === 'section').map((n) => n.id));
    const allIds = new Set(graph.nodes.map((n) => n.id));
    const issues: Issue[] = [];
    graph.nodes.forEach((node, index) => {
      if (node.parentId === undefined) return;
      const at = joinPath(joinPath(joinPath(path, 'nodes'), index), 'parentId');
      if (!allIds.has(node.parentId)) {
        issues.push(
          issue(at, 'roadmap.dangling_parent', `\`parentId\` \`${node.parentId}\` does not exist.`, {
            hint: 'The node will render at absolute coordinates, usually on top of the header.',
          }),
        );
      } else if (!sectionIds.has(node.parentId)) {
        issues.push(
          issue(at, 'roadmap.parent_not_a_section', `\`parentId\` \`${node.parentId}\` is a topic, not a section.`, {
            hint: 'Only section nodes can contain other nodes.',
          }),
        );
      }
    });
    return issues;
  },

  // --- Prerequisite ordering ----------------------------------------------
  (graph, path) => {
    const cycle = findCycle(graph);
    if (cycle === undefined) return [];
    return [
      issue(joinPath(path, 'edges'), 'roadmap.prerequisite_cycle', `Prerequisite edges form a cycle: ${cycle.join(' → ')}.`, {
        hint: 'A cycle means no valid study order exists, and any topological layout or "what can I learn next" query will hang or return nothing.',
      }),
    ];
  },

  // --- Duplicate connections ----------------------------------------------
  (graph, path) => {
    const seen = new Map<string, number>();
    const issues: Issue[] = [];
    graph.edges.forEach((edge, index) => {
      // Separated by an escaped NUL, which no node id can contain, so `a` + `\0b` cannot
      // collide with `a\0` + `b`. Written as an escape rather than a literal byte so
      // this file stays text -- and stays greppable.
      const key = `${edge.source}\u0000${edge.target}`;
      const first = seen.get(key);
      if (first !== undefined) {
        issues.push(
          issue(joinPath(joinPath(path, 'edges'), index), 'roadmap.duplicate_connection', `\`${edge.source}\` → \`${edge.target}\` is already connected at index ${first}.`, {
            severity: 'warning',
            hint: 'Two edges between the same pair draw on top of each other.',
          }),
        );
      } else {
        seen.set(key, index);
      }
    });
    return issues;
  },

  // --- Slug uniqueness within the roadmap ---------------------------------
  (graph, path) => {
    const seen = new Map<string, string>();
    const issues: Issue[] = [];
    graph.nodes.forEach((node, index) => {
      const slug = (node.data as TopicNodeData).slug;
      if (slug === undefined) return;
      const first = seen.get(slug);
      if (first !== undefined) {
        issues.push(
          issue(joinPath(joinPath(joinPath(path, 'nodes'), index), 'slug'), 'roadmap.duplicate_slug', `Slug \`${slug}\` is already used by node \`${first}\`.`, {
            hint: 'Slugs become permanent URLs; two topics cannot share one.',
          }),
        );
      } else {
        seen.set(slug, node.id);
      }
    });
    return issues;
  },

  // --- Shape expectations (warnings: real content sometimes departs) -------
  (graph, path) => {
    const childCount = new Map<string, number>();
    for (const node of graph.nodes) {
      if (node.parentId !== undefined) {
        childCount.set(node.parentId, (childCount.get(node.parentId) ?? 0) + 1);
      }
    }
    const issues: Issue[] = [];
    graph.nodes.forEach((node, index) => {
      if (node.type !== 'section') return;
      if ((childCount.get(node.id) ?? 0) > 0) return;
      issues.push(
        issue(joinPath(joinPath(path, 'nodes'), index), 'roadmap.empty_section', `Section \`${node.id}\` contains no topics.`, {
          severity: 'warning',
          hint: 'It renders as a fixed 400x300 empty box. Either fill it or remove it.',
        }),
      );
    });
    return issues;
  },

  (graph, path) => {
    const issues: Issue[] = [];
    const sectionCount = graph.nodes.filter((n) => n.type === 'section').length;
    if (sectionCount === 0) return issues;
    graph.nodes.forEach((node, index) => {
      if (node.type !== 'topic' || node.parentId !== undefined) return;
      issues.push(
        issue(joinPath(joinPath(path, 'nodes'), index), 'roadmap.unparented_topic', `Topic \`${node.id}\` sits outside every section.`, {
          severity: 'warning',
          hint: 'The layout engine skips unparented topics and keeps their hand-written coordinates, so they drift as sections resize.',
        }),
      );
    });
    return issues;
  },

  (graph, path) => {
    // A topic with no edges at all never appears in a prerequisite path, so
    // "what should I learn next" can never surface it.
    const connected = new Set<string>();
    for (const edge of graph.edges) {
      connected.add(edge.source);
      connected.add(edge.target);
    }
    const topics = graph.nodes.filter((n) => n.type === 'topic');
    const isolated = topics.filter((n) => !connected.has(n.id));
    if (isolated.length === 0 || graph.edges.length === 0) return [];
    if (isolated.length === topics.length) {
      return [
        issue(joinPath(path, 'edges'), 'roadmap.no_topic_edges', 'No prerequisite edge touches any topic node.', {
          severity: 'warning',
          hint: 'Without topic-level edges the roadmap is a list with boxes drawn round it.',
        }),
      ];
    }
    return [
      issue(joinPath(path, 'nodes'), 'roadmap.isolated_topics', `${isolated.length} topic(s) have no prerequisite edges: ${isolated.slice(0, 8).map((n) => n.id).join(', ')}${isolated.length > 8 ? ', …' : ''}.`, {
        severity: 'warning',
        hint: 'Connect them, or accept that they will never appear in a suggested study order.',
      }),
    ];
  },
];

/**
 * Finds one prerequisite cycle, if any exists, using an iterative depth-first
 * search. Iterative rather than recursive because a 700-node graph on a deep chain
 * would risk a stack overflow during `next build`.
 *
 * Only topic-to-topic edges are considered; section containment is expressed by
 * `parentId`, not by edges.
 */
export function findCycle(graph: RoadmapGraph): string[] | undefined {
  const adjacency = new Map<string, string[]>();
  for (const edge of graph.edges) {
    const list = adjacency.get(edge.source);
    if (list) list.push(edge.target);
    else adjacency.set(edge.source, [edge.target]);
  }

  const UNVISITED = 0;
  const IN_PROGRESS = 1;
  const DONE = 2;
  const state = new Map<string, number>();
  for (const node of graph.nodes) state.set(node.id, UNVISITED);

  for (const start of graph.nodes) {
    if (state.get(start.id) !== UNVISITED) continue;

    // Explicit stack of (node, index-of-next-neighbour-to-visit).
    const stack: { id: string; next: number }[] = [{ id: start.id, next: 0 }];
    state.set(start.id, IN_PROGRESS);

    while (stack.length > 0) {
      const frame = stack[stack.length - 1]!;
      const neighbours = adjacency.get(frame.id) ?? [];
      if (frame.next >= neighbours.length) {
        state.set(frame.id, DONE);
        stack.pop();
        continue;
      }
      const neighbour = neighbours[frame.next++]!;
      const neighbourState = state.get(neighbour);
      if (neighbourState === IN_PROGRESS) {
        // Found a back edge: the cycle is the stack from `neighbour` onwards.
        const from = stack.findIndex((f) => f.id === neighbour);
        return [...stack.slice(from).map((f) => f.id), neighbour];
      }
      if (neighbourState === UNVISITED) {
        state.set(neighbour, IN_PROGRESS);
        stack.push({ id: neighbour, next: 0 });
      }
      // DONE, or an unknown id already reported as a dangling edge — skip.
    }
  }
  return undefined;
}

/* -------------------------------------------------------------------------- */
/* Graph validator                                                            */
/* -------------------------------------------------------------------------- */

const graphShape: Record<keyof RoadmapGraph, Validator<unknown>> = {
  slug: string({
    code: 'roadmap.slug',
    pattern: SLUG_PATTERN,
    patternLabel: 'lower-case kebab-case',
    minLength: 2,
    maxLength: 72,
  }),
  nodes: arrayOf(roadmapNodeValidator, { code: 'roadmap.nodes', minItems: 1, maxItems: 2000 }),
  edges: arrayOf(roadmapEdgeValidator, { code: 'roadmap.edges', minItems: 0, maxItems: 5000 }),
};

export const roadmapGraphValidator: Validator<RoadmapGraph> = refine(
  object<RoadmapGraph>('RoadmapGraph', graphShape, { code: 'roadmap', unknownKeys: 'error' }),
  ...graphRules,
);

/* -------------------------------------------------------------------------- */
/* Derived facts                                                              */
/* -------------------------------------------------------------------------- */

export interface GraphStats {
  readonly topicCount: number;
  readonly sectionCount: number;
  readonly edgeCount: number;
  readonly maxDepth: number;
}

/** Counts what a roadmap actually contains. Used to replace hand-typed estimates. */
export function graphStats(graph: RoadmapGraph): GraphStats {
  const topics = graph.nodes.filter((n) => n.type === 'topic');
  const sections = graph.nodes.filter((n) => n.type === 'section');
  return {
    topicCount: topics.length,
    sectionCount: sections.length,
    edgeCount: graph.edges.length,
    maxDepth: longestPath(graph),
  };
}

/**
 * Length of the longest prerequisite chain, i.e. how many topics deep the roadmap
 * goes. Returns 0 for a graph with a cycle, since no such path is defined.
 *
 * Recursion depth here is bounded by the longest chain rather than by node count
 * in practice (roadmaps run tens of topics deep, not hundreds), so a memoized
 * recursive walk is safe and considerably clearer than an explicit stack.
 */
export function longestPath(graph: RoadmapGraph): number {
  if (findCycle(graph) !== undefined) return 0;
  const adjacency = new Map<string, string[]>();
  for (const edge of graph.edges) {
    const list = adjacency.get(edge.source);
    if (list) list.push(edge.target);
    else adjacency.set(edge.source, [edge.target]);
  }
  const memo = new Map<string, number>();
  const depthOf = (id: string): number => {
    const cached = memo.get(id);
    if (cached !== undefined) return cached;
    memo.set(id, 1); // Guard; the graph is known acyclic here.
    let best = 1;
    for (const next of adjacency.get(id) ?? []) best = Math.max(best, 1 + depthOf(next));
    memo.set(id, best);
    return best;
  };
  let longest = 0;
  for (const node of graph.nodes) {
    if (node.type !== 'topic') continue;
    longest = Math.max(longest, depthOf(node.id));
  }
  return longest;
}
