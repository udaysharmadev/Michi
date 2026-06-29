"use client";

import React from "react";
import { useReactFlow, useStore, useNodes } from "@xyflow/react";
import { LayoutGrid, List, Minus, Plus, Maximize } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";

export function RoadmapToolbar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { viewMode, setViewMode } = useRoadmapInteraction();

  // Reactive zoom from React Flow store
  const zoom = useStore((s) => s.transform[2]);
  const zoomPercent = Math.round(zoom * 100);
  
  // Calculate Progress
  const nodes = useNodes();
  const topicNodes = nodes.filter(n => n.type === 'topic');
  const { progressMap } = useRoadmapInteraction();
  
  let completed = 0;
  for (const n of topicNodes) {
    if (progressMap[n.id] === 'completed') completed++;
  }
  const totalTopics = topicNodes.length;
  const progressPercent = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 pointer-events-auto">
      {/* View Mode toggle */}
      <div className="flex bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <button
          onClick={() => setViewMode("detailed")}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === "detailed"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          Detailed
        </button>
        <button
          onClick={() => setViewMode("overview")}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === "overview"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <List className="w-3.5 h-3.5" />
          Overview
        </button>
      </div>

      {/* Zoom controls */}
      <div className="flex items-center bg-card border border-border rounded-xl shadow-sm">
        <button
          onClick={() => zoomOut()}
          className="p-2 text-muted-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <div className="px-1.5 text-xs font-bold text-gray-700 select-none min-w-[3rem] text-center tabular-nums">
          {zoomPercent}%
        </div>
        <button
          onClick={() => zoomIn()}
          className="p-2 text-muted-foreground/70 hover:text-foreground transition-colors duration-200 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Fit View */}
      <button
        onClick={() => fitView({ duration: 600, padding: 0.04 })}
        className="flex items-center gap-1.5 px-3 py-2 bg-card border border-border rounded-xl shadow-sm text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200 cursor-pointer"
      >
        <Maximize className="w-3.5 h-3.5" />
        Fit
      </button>

      {/* Progress */}
      {totalTopics > 0 && (
        <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-xl shadow-sm text-xs font-semibold text-muted-foreground ml-2">
          <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-500 transition-all duration-500 ease-out" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="w-8 tabular-nums">{progressPercent}%</span>
        </div>
      )}
    </div>
  );
}
