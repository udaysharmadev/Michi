"use client";

import React, { useCallback } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  Controls,
  NodeChange,
  EdgeChange,
  Node,
  Edge,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { RoadmapNode } from "./roadmap-node";
import { RoadmapSection } from "./roadmap-section";
import { RoadmapMinimap } from "./roadmap-minimap";
import { RoadmapEdge } from "./roadmap-edge";
import { RoadmapContentNode } from "@/data/types";

const nodeTypes = {
  topic: RoadmapNode as any,
  section: RoadmapSection as any,
};

const edgeTypes = {
  custom: RoadmapEdge,
};

interface RoadmapCanvasProps {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onNodeSelect: (node: Node<RoadmapContentNode["data"]> | null) => void;
}

export function RoadmapCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeSelect,
}: RoadmapCanvasProps) {
  
  const onPaneClick = useCallback(() => {
    onNodeSelect(null);
  }, [onNodeSelect]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.type === "topic") {
        onNodeSelect(node as Node<RoadmapContentNode["data"]>);
      }
    },
    [onNodeSelect]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onPaneClick={onPaneClick}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      elementsSelectable={true}
      defaultViewport={{ x: 50, y: 50, zoom: 1 }}
      fitView
      fitViewOptions={{ padding: 0.04, duration: 800 }}
      minZoom={0.1}
      maxZoom={2}
      className="touch-none bg-transparent"
      defaultEdgeOptions={{
        type: "custom",
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 16,
          height: 16,
          color: "#94a3b8",
        },
      }}
    >
      <Background 
        variant={BackgroundVariant.Dots} 
        gap={32} 
        size={1.5} 
        color="#e2e8f0" 
      />
      
      <Controls 
        className="bg-white border-gray-200 fill-gray-600 shadow-sm !rounded-xl" 
        showInteractive={false}
      />
      
      <RoadmapMinimap />
    </ReactFlow>
  );
}
