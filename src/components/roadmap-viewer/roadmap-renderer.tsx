"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { ReactFlowProvider, Node, Edge, useNodesState, useEdgesState, useReactFlow } from "@xyflow/react";
import { RoadmapCanvas } from "./roadmap-canvas";
import { RoadmapSidebar } from "./roadmap-sidebar";
import { RoadmapToolbar } from "./roadmap-toolbar";
import { CommandPalette } from "./command-palette";
import { NodeDetailsDrawer } from "./node-details-drawer";
import { useLayoutEngine } from "./use-layout";
import { RoadmapInteractionProvider } from "./roadmap-context";
import { RoadmapContentNode, RoadmapContentEdge, TopicData } from "@/data/types";
import { RoadmapMeta } from "@/data/roadmaps";

interface RoadmapRendererProps {
  roadmap: RoadmapMeta;
  initialNodes: RoadmapContentNode[];
  initialEdges: RoadmapContentEdge[];
}

function RoadmapRendererInner({ roadmap, initialNodes, initialEdges }: RoadmapRendererProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [isLayouted, setIsLayouted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const { getLayoutedElements } = useLayoutEngine();
  const { setCenter, getNode } = useReactFlow();
  
  const [selectedNode, setSelectedNode] = useState<Node<TopicData> | null>(null);
  const topicNodesRef = useRef<Node[]>([]);

  // Run layout algorithm synchronously on mount
  useEffect(() => {
    const { layoutedNodes, layoutedEdges } = getLayoutedElements(
      initialNodes as Node[], 
      initialEdges as Edge[],
      roadmap.slug
    );
    topicNodesRef.current = layoutedNodes.filter(n => n.type === 'topic');
    setNodes([...layoutedNodes]);
    setEdges([...layoutedEdges]);
    setIsLayouted(true);
  }, [initialNodes, initialEdges, getLayoutedElements, setNodes, setEdges, roadmap.slug]);

  // Escape key to close drawer
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedNode) {
        handleCloseDrawer();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode]);

  const handleNodeFocus = useCallback((nodeId: string) => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isHighlighted: n.id === nodeId },
      }))
    );

    const targetNode = nodes.find(n => n.id === nodeId && n.type === 'topic');
    if (targetNode) {
      setSelectedNode(targetNode as Node<TopicData>);
      
      const rfNode = getNode(nodeId);
      if (rfNode) {
        const parentNode = rfNode.parentId ? getNode(rfNode.parentId) : null;
        const absX = (rfNode as any).computed?.positionAbsolute?.x ?? (rfNode.position.x + (parentNode?.position.x || 0));
        const absY = (rfNode as any).computed?.positionAbsolute?.y ?? (rfNode.position.y + (parentNode?.position.y || 0));
        setCenter(absX + 110, absY + 45, { zoom: 1.1, duration: 600 });
      }
    }
  }, [nodes, setNodes, getNode, setCenter]);

  const handleNodeSelect = useCallback((node: Node<TopicData> | null) => {
    setSelectedNode(node);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isHighlighted: node ? n.id === node.id : false },
      }))
    );
  }, [setNodes]);

  const handleCloseDrawer = useCallback(() => {
    handleNodeSelect(null);
  }, [handleNodeSelect]);

  if (!isLayouted) {
    return (
      <div className="flex w-full h-full items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-border border-t-foreground rounded-full animate-spin" />
          <span className="text-sm font-medium text-muted-foreground">Mapping knowledge graph...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full h-screen bg-background overflow-hidden">
      
      {/* Sidebar — togglable on mobile */}
      <div className={`
        ${sidebarOpen ? 'w-[320px]' : 'w-0'} 
        shrink-0 h-full border-r border-border shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 bg-card
        transition-[width] duration-300 overflow-hidden
      `}>
        <RoadmapSidebar 
          roadmap={roadmap} 
          nodes={initialNodes} 
          onToggleSidebar={() => setSidebarOpen(s => !s)}
        />
      </div>

      {/* Main Viewport Container */}
      <div className="flex-1 h-full relative flex flex-col min-w-0">
        {/* Mobile sidebar toggle button */}
        {!sidebarOpen && (
          <button
            onClick={() => setSidebarOpen(true)}
            className="absolute top-5 left-5 z-40 p-2 bg-card border border-border rounded-xl shadow-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open sidebar"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        {/* Floating Toolbar */}
        <RoadmapToolbar />
        
        {/* Command Palette */}
        <CommandPalette nodes={initialNodes} onNodeSelect={handleNodeFocus} />
        
        {/* The React Flow Canvas */}
        <div className="flex-1 w-full h-full relative">
          <RoadmapCanvas 
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeSelect={handleNodeSelect}
          />

          {/* Slide-in Details Drawer */}
          <NodeDetailsDrawer 
            nodeData={selectedNode?.data || null}
            nodeId={selectedNode?.id || null}
            onClose={handleCloseDrawer}
            allNodes={initialNodes}
            allEdges={initialEdges}
          />
        </div>
      </div>

    </div>
  );
}

export function RoadmapRenderer({ roadmap, initialNodes, initialEdges }: RoadmapRendererProps) {
  return (
    <ReactFlowProvider>
      <RoadmapInteractionProvider edges={initialEdges as Edge[]} slug={roadmap.slug}>
        <RoadmapRendererInner roadmap={roadmap} initialNodes={initialNodes} initialEdges={initialEdges} />
      </RoadmapInteractionProvider>
    </ReactFlowProvider>
  );
}
