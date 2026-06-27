"use client";

import React, { useState, useCallback, useEffect } from "react";
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
  
  const { getLayoutedElements } = useLayoutEngine();
  const { setCenter, getNode } = useReactFlow();
  
  const [selectedNode, setSelectedNode] = useState<Node<TopicData> | null>(null);

  // Run layout algorithm on mount
  useEffect(() => {
    const runLayout = async () => {
      const { layoutedNodes, layoutedEdges } = await getLayoutedElements(
        initialNodes as Node[], 
        initialEdges as Edge[]
      );
      setNodes([...layoutedNodes]);
      setEdges([...layoutedEdges]);
      setIsLayouted(true);
    };
    runLayout();
  }, [initialNodes, initialEdges, getLayoutedElements, setNodes, setEdges]);

  const handleNodeFocus = useCallback((nodeId: string) => {
    // Highlight the target node
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isHighlighted: n.id === nodeId },
      }))
    );

    // Find and select the node for the drawer
    const targetNode = nodes.find(n => n.id === nodeId && n.type === 'topic');
    if (targetNode) {
      setSelectedNode(targetNode as Node<TopicData>);
      
      // Fly camera to the node
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
      
      {/* Fixed Sidebar */}
      <div className="w-[320px] shrink-0 h-full border-r border-border shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10 bg-card">
        <RoadmapSidebar roadmap={roadmap} nodes={initialNodes} />
      </div>

      {/* Main Viewport Container */}
      <div className="flex-1 h-full relative flex flex-col">
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
