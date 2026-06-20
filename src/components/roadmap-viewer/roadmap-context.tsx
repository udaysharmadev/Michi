"use client";

import React, { createContext, useContext, useState, useMemo, useCallback, useEffect, ReactNode } from 'react';
import { Edge } from '@xyflow/react';
import { ProgressStatus, getProgress, setNodeProgress as persistProgress } from './progress-utils';

// ---------- Types ----------
interface AdjacencyData {
  predecessors: Set<string>;
  successors: Set<string>;
  edgeIds: { incoming: Set<string>; outgoing: Set<string> };
}

interface RoadmapInteractionContextType {
  // Hover + path highlighting
  hoveredNodeId: string | null;
  setHoveredNodeId: (id: string | null) => void;
  connectedNodeIds: Set<string>;
  connectedEdgeIds: Set<string>;

  // Progress
  progressMap: Record<string, ProgressStatus>;
  setNodeProgress: (nodeId: string, status: ProgressStatus) => void;

  // View mode
  viewMode: 'detailed' | 'overview';
  setViewMode: (mode: 'detailed' | 'overview') => void;

  // Command palette
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;
}

const EMPTY_SET = new Set<string>();

const RoadmapInteractionContext = createContext<RoadmapInteractionContextType>({
  hoveredNodeId: null,
  setHoveredNodeId: () => {},
  connectedNodeIds: EMPTY_SET,
  connectedEdgeIds: EMPTY_SET,
  progressMap: {},
  setNodeProgress: () => {},
  viewMode: 'detailed',
  setViewMode: () => {},
  commandPaletteOpen: false,
  setCommandPaletteOpen: () => {},
});

export const useRoadmapInteraction = () => useContext(RoadmapInteractionContext);

// ---------- Graph traversal helpers ----------
function buildAdjacencyMap(edges: Edge[]): Map<string, AdjacencyData> {
  const map = new Map<string, AdjacencyData>();

  const ensure = (id: string): AdjacencyData => {
    if (!map.has(id)) {
      map.set(id, {
        predecessors: new Set(),
        successors: new Set(),
        edgeIds: { incoming: new Set(), outgoing: new Set() },
      });
    }
    return map.get(id)!;
  };

  for (const edge of edges) {
    const sourceData = ensure(edge.source);
    const targetData = ensure(edge.target);

    sourceData.successors.add(edge.target);
    sourceData.edgeIds.outgoing.add(edge.id);

    targetData.predecessors.add(edge.source);
    targetData.edgeIds.incoming.add(edge.id);
  }

  return map;
}

function getConnectedPath(
  nodeId: string,
  adjacencyMap: Map<string, AdjacencyData>
): { nodeIds: Set<string>; edgeIds: Set<string> } {
  const nodeIds = new Set<string>();
  const edgeIds = new Set<string>();

  // BFS backwards (predecessors)
  const backQueue = [nodeId];
  while (backQueue.length > 0) {
    const current = backQueue.shift()!;
    if (nodeIds.has(current) && current !== nodeId) continue;
    nodeIds.add(current);
    const data = adjacencyMap.get(current);
    if (data) {
      for (const edgeId of data.edgeIds.incoming) edgeIds.add(edgeId);
      for (const pred of data.predecessors) {
        if (!nodeIds.has(pred)) backQueue.push(pred);
      }
    }
  }

  // BFS forwards (successors)
  const forwardQueue = [nodeId];
  const visitedForward = new Set<string>();
  while (forwardQueue.length > 0) {
    const current = forwardQueue.shift()!;
    if (visitedForward.has(current) && current !== nodeId) continue;
    visitedForward.add(current);
    nodeIds.add(current);
    const data = adjacencyMap.get(current);
    if (data) {
      for (const edgeId of data.edgeIds.outgoing) edgeIds.add(edgeId);
      for (const succ of data.successors) {
        if (!visitedForward.has(succ)) forwardQueue.push(succ);
      }
    }
  }

  return { nodeIds, edgeIds };
}

// ---------- Provider ----------
interface ProviderProps {
  children: ReactNode;
  edges: Edge[];
  slug: string;
}

export function RoadmapInteractionProvider({ children, edges, slug }: ProviderProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [progressMap, setProgressMap] = useState<Record<string, ProgressStatus>>({});
  const [viewMode, setViewMode] = useState<'detailed' | 'overview'>('detailed');
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Load progress from localStorage on mount
  useEffect(() => {
    setProgressMap(getProgress(slug));
  }, [slug]);

  // Build adjacency map once when edges change
  const adjacencyMap = useMemo(() => buildAdjacencyMap(edges), [edges]);

  // Compute connected path when hovered node changes
  const { connectedNodeIds, connectedEdgeIds } = useMemo(() => {
    if (!hoveredNodeId) return { connectedNodeIds: EMPTY_SET, connectedEdgeIds: EMPTY_SET };
    const result = getConnectedPath(hoveredNodeId, adjacencyMap);
    return { connectedNodeIds: result.nodeIds, connectedEdgeIds: result.edgeIds };
  }, [hoveredNodeId, adjacencyMap]);

  const setNodeProgress = useCallback((nodeId: string, status: ProgressStatus) => {
    const updated = persistProgress(slug, nodeId, status);
    setProgressMap(updated);
  }, [slug]);

  const value = useMemo(() => ({
    hoveredNodeId,
    setHoveredNodeId,
    connectedNodeIds,
    connectedEdgeIds,
    progressMap,
    setNodeProgress,
    viewMode,
    setViewMode,
    commandPaletteOpen,
    setCommandPaletteOpen,
  }), [hoveredNodeId, connectedNodeIds, connectedEdgeIds, progressMap, setNodeProgress, viewMode, commandPaletteOpen]);

  return (
    <RoadmapInteractionContext.Provider value={value}>
      {children}
    </RoadmapInteractionContext.Provider>
  );
}
