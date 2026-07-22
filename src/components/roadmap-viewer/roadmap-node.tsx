"use client";

import React, { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { CheckCircle2, Clock } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import type { RoadmapContentNode } from "@/data/types";
import { iconMap, difficultyColors } from "@/lib/icon-map";

// ── Progress border colors ──────────────────────────────────────────────────
const progressStyles: Record<string, string> = {
  not_started: "",
  learning:    "border-l-[3px] !border-l-amber-500 bg-amber-500/5",
  completed:   "border-l-[3px] !border-l-emerald-500 bg-emerald-500/5",
};

// ── Component ───────────────────────────────────────────────────────────────
export const RoadmapNode = memo(({ id, data }: NodeProps<RoadmapContentNode>) => {
  const {
    hoveredNodeId,
    setHoveredNodeId,
    connectedNodeIds,
    progressMap,
    viewMode,
  } = useRoadmapInteraction();

  const isHighlighted = data.isHighlighted;
  const progress = progressMap[id] || "not_started";
  const diffClass = difficultyColors[data.difficulty || "Beginner"];
  const progressClass = progressStyles[progress];

  // Hover states
  const isHovered = hoveredNodeId === id;
  const isConnected = hoveredNodeId !== null && connectedNodeIds.has(id);
  const isDimmed = hoveredNodeId !== null && !isHovered && !isConnected;

  // Compute visual classes
  let hoverClasses: string;
  if (isHighlighted || isHovered) {
    hoverClasses = "border-primary shadow-lg ring-1 ring-primary/30 -translate-y-[2px] z-20";
  } else if (isConnected) {
    hoverClasses = "border-primary/50 ring-1 ring-primary/20 shadow-md z-10";
  } else if (isDimmed) {
    hoverClasses = "border-border/50 shadow-sm saturate-50 opacity-60 z-0";
  } else {
    hoverClasses = "border-border shadow-sm hover:border-primary/40 hover:shadow-md hover:-translate-y-[1px] z-0";
  }

  const IconComponent = data.icon && iconMap[data.icon] ? iconMap[data.icon] : null;

  // Size — isLarge nodes (the fullstack prereq links) are bigger
  const sizeClass = data.isLarge
    ? "w-[280px] h-[110px]"
    : "w-[250px] h-[100px]";

  const titleSize = data.isLarge ? "text-[15px]" : "text-[14px]";

  return (
    <div
      onMouseEnter={() => setHoveredNodeId(id)}
      onMouseLeave={() => setHoveredNodeId(null)}
      className={`group ${sizeClass} bg-card text-foreground border rounded-2xl flex flex-col justify-between p-4 relative cursor-pointer
        transition-all duration-200
        active:scale-[0.97] active:shadow-sm active:duration-[80ms]
        ${hoverClasses} ${progressClass}`}
    >
      {/* Handles */}
      <Handle id="left"   type="target" position={Position.Left}   className="w-2 h-2 !bg-muted-foreground border-none -ml-1 opacity-0" />
      <Handle id="top"    type="target" position={Position.Top}    className="w-2 h-2 !bg-muted-foreground border-none -mt-1 opacity-0" />

      {/* Completed checkmark */}
      {progress === "completed" && (
        <div className="absolute top-2.5 right-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        </div>
      )}

      {/* Content */}
      <div className="flex items-start gap-2.5 min-w-0 pr-4">
        {IconComponent && (
          <div className="shrink-0 mt-0.5">
            <IconComponent className="w-[18px] h-[18px] text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        )}
        <h3 className={`font-heading ${titleSize} font-bold leading-snug line-clamp-2`}>
          {data.title}
        </h3>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-auto gap-2">
        {viewMode === "detailed" && (
          <>
            <span className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${diffClass}`}>
              {data.difficulty || "Beginner"}
            </span>
            {data.estimatedTime && (
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                <Clock className="w-3 h-3" />
                {data.estimatedTime}
              </span>
            )}
          </>
        )}
      </div>

      {/* Hover tooltip — appears after delay on detailed mode */}
      {viewMode === "detailed" && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2.5 bg-foreground text-background rounded-xl shadow-xl text-xs w-[210px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 pointer-events-none z-50">
          <div className="font-heading font-bold mb-1 truncate">{data.title}</div>
          <div className="flex items-center justify-between opacity-80 font-medium">
            <span>{data.difficulty || "Beginner"}</span>
            {data.estimatedTime && <span>{data.estimatedTime}</span>}
          </div>
          {connectedNodeIds.size > 0 && hoveredNodeId === id && (
            <div className="opacity-60 mt-1 text-[10px] font-medium">
              {connectedNodeIds.size - 1} related topics
            </div>
          )}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-foreground rotate-45" />
        </div>
      )}

      <Handle id="right"  type="source" position={Position.Right}  className="w-2 h-2 !bg-muted-foreground border-none -mr-1 opacity-0" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="w-2 h-2 !bg-muted-foreground border-none -mb-1 opacity-0" />
    </div>
  );
});

RoadmapNode.displayName = "RoadmapNode";
