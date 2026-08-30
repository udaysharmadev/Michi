"use client";

import React, { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { CheckCircle2, Clock } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import type { RoadmapContentNode } from "@/data/types";
import { iconMap, difficultyColors } from "@/lib/icon-map";

const progressStyles: Record<string, string> = {
  not_started: "",
  learning:    "border-l-[3px] !border-l-amber-500 bg-amber-500/5",
  completed:   "border-l-[3px] !border-l-emerald-500 bg-emerald-500/5",
};

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

  const isHovered = hoveredNodeId === id;
  const isConnected = hoveredNodeId !== null && connectedNodeIds.has(id);
  const isDimmed = hoveredNodeId !== null && !isHovered && !isConnected;

  let hoverClasses: string;
  if (isHighlighted || isHovered) {
    hoverClasses = "border-primary shadow-lg ring-1 ring-primary/20 -translate-y-[1px] z-20";
  } else if (isConnected) {
    hoverClasses = "border-primary/40 ring-1 ring-primary/10 shadow-md z-10";
  } else if (isDimmed) {
    hoverClasses = "border-border/40 shadow-sm saturate-50 opacity-60 z-0";
  } else {
    hoverClasses = "border-border shadow-sm hover:border-primary/30 hover:shadow-md z-0";
  }

  const IconComponent = data.icon && iconMap[data.icon] ? iconMap[data.icon] : null;

  const sizeClass = data.isLarge
    ? "w-[260px] h-[100px]"
    : "w-[230px] h-[90px]";

  const titleSize = data.isLarge ? "text-[13px]" : "text-[12px]";

  return (
    <div
      onMouseEnter={() => setHoveredNodeId(id)}
      onMouseLeave={() => setHoveredNodeId(null)}
      className={`group ${sizeClass} bg-card text-foreground border rounded-xl flex flex-col justify-between p-3.5 relative cursor-pointer
        transition-all duration-150
        active:scale-[0.98] active:shadow-sm active:duration-[80ms]
        ${hoverClasses} ${progressClass}`}
    >
      <Handle id="left"   type="target" position={Position.Left}   className="w-1.5 h-1.5 !bg-muted-foreground/40 border-none -ml-0.5 opacity-0" />
      <Handle id="top"    type="target" position={Position.Top}    className="w-1.5 h-1.5 !bg-muted-foreground/40 border-none -mt-0.5 opacity-0" />

      {progress === "completed" && (
        <div className="absolute top-2 right-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
        </div>
      )}

      <div className="flex items-start gap-2 min-w-0 pr-3">
        {IconComponent && (
          <div className="shrink-0 mt-0.5">
            <IconComponent className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        )}
        <h3 className={`font-heading ${titleSize} font-bold leading-snug line-clamp-2`}>
          {data.title}
        </h3>
      </div>

      <div className="flex items-center justify-between mt-auto gap-2">
        {viewMode === "detailed" && (
          <>
            <span className={`px-1.5 py-0.5 rounded border text-[9px] font-bold uppercase tracking-wider ${diffClass}`}>
              {data.difficulty || "Beginner"}
            </span>
            {data.estimatedTime && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-muted-foreground">
                <Clock className="w-2.5 h-2.5" />
                {data.estimatedTime}
              </span>
            )}
          </>
        )}
      </div>

      {viewMode === "detailed" && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-2 bg-foreground text-background rounded-lg shadow-xl text-[11px] w-[190px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 pointer-events-none z-50">
          <div className="font-heading font-bold mb-0.5 truncate">{data.title}</div>
          <div className="flex items-center justify-between opacity-70 font-medium">
            <span>{data.difficulty || "Beginner"}</span>
            {data.estimatedTime && <span>{data.estimatedTime}</span>}
          </div>
          {connectedNodeIds.size > 0 && hoveredNodeId === id && (
            <div className="opacity-50 mt-0.5 text-[9px] font-medium">
              {connectedNodeIds.size - 1} related topics
            </div>
          )}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 w-1.5 h-1.5 bg-foreground rotate-45" />
        </div>
      )}

      <Handle id="right"  type="source" position={Position.Right}  className="w-1.5 h-1.5 !bg-muted-foreground/40 border-none -mr-0.5 opacity-0" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="w-1.5 h-1.5 !bg-muted-foreground/40 border-none -mb-0.5 opacity-0" />
    </div>
  );
});

RoadmapNode.displayName = "RoadmapNode";
