"use client";

import React, { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { CheckCircle2, Clock } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import type { RoadmapContentNode } from "@/data/types";
import {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
} from "react-icons/si";

// ── Icon map ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
};

// ── Difficulty colors ───────────────────────────────────────────────────────
const difficultyColors: Record<string, string> = {
  Beginner: "text-emerald-600 bg-emerald-50",
  Intermediate: "text-indigo-600 bg-indigo-50",
  Advanced: "text-rose-600 bg-rose-50",
};

// ── Progress border colors ──────────────────────────────────────────────────
const progressStyles: Record<string, string> = {
  not_started: "",
  learning: "border-l-[3px] !border-l-blue-400 bg-blue-50/40",
  completed: "border-l-[3px] !border-l-emerald-500 bg-emerald-50/40",
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
    hoverClasses = "border-blue-400 shadow-lg ring-2 ring-blue-400/30 -translate-y-[2px] z-20";
  } else if (isConnected) {
    hoverClasses = "border-blue-200 ring-1 ring-blue-200/50 shadow-md z-10";
  } else if (isDimmed) {
    hoverClasses = "border-gray-200 shadow-sm saturate-[0.7] z-0";
  } else {
    hoverClasses = "border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md hover:-translate-y-[1px] z-0";
  }

  const IconComponent = data.icon && iconMap[data.icon] ? iconMap[data.icon] : null;

  return (
    <div
      onMouseEnter={() => setHoveredNodeId(id)}
      onMouseLeave={() => setHoveredNodeId(null)}
      className={`group ${data.isLarge ? 'w-[250px] h-[100px]' : 'w-[220px] h-[90px]'} bg-white border rounded-[16px] flex flex-col justify-between p-3.5 relative transition-all duration-200 ease-out cursor-pointer ${hoverClasses} ${progressClass}`}
    >
      {/* Handles */}
      <Handle id="left" type="target" position={Position.Left} className="w-2 h-2 !bg-gray-400 border-none -ml-1 opacity-0" />
      <Handle id="top" type="target" position={Position.Top} className="w-2 h-2 !bg-gray-400 border-none -mt-1 opacity-0" />

      {/* Completed checkmark */}
      {progress === "completed" && (
        <div className="absolute top-2 right-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
        </div>
      )}

      {/* Content */}
      <div className="flex items-start gap-2.5 min-w-0">
        {IconComponent && (
          <div className="shrink-0 mt-0.5">
            <IconComponent className="w-5 h-5 text-gray-700" />
          </div>
        )}
        <h3 className={`${data.isLarge ? 'text-[15px]' : 'text-[13px]'} font-bold text-gray-900 leading-tight line-clamp-2`}>
          {data.title}
        </h3>
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between mt-auto gap-2">
        {viewMode === "detailed" && (
          <>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${diffClass}`}>
              {data.difficulty || "Beginner"}
            </span>
            {data.estimatedTime && (
              <span className="flex items-center gap-1 text-[10px] font-medium text-gray-400">
                <Clock className="w-3 h-3" />
                {data.estimatedTime}
              </span>
            )}
          </>
        )}
      </div>

      {/* Hover tooltip (appears after delay) */}
      {viewMode === "detailed" && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2.5 bg-gray-900 text-white rounded-xl shadow-xl text-xs w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 pointer-events-none z-50">
          <div className="font-bold mb-1 truncate">{data.title}</div>
          <div className="flex items-center justify-between text-gray-300">
            <span>{data.difficulty || "Beginner"}</span>
            {data.estimatedTime && <span>{data.estimatedTime}</span>}
          </div>
          {connectedNodeIds.size > 0 && hoveredNodeId === id && (
            <div className="text-gray-400 mt-1 text-[10px]">
              {connectedNodeIds.size - 1} related topics
            </div>
          )}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      )}

      <Handle id="right" type="source" position={Position.Right} className="w-2 h-2 !bg-gray-400 border-none -mr-1 opacity-0" />
      <Handle id="bottom" type="source" position={Position.Bottom} className="w-2 h-2 !bg-gray-400 border-none -mb-1 opacity-0" />
    </div>
  );
});

RoadmapNode.displayName = "RoadmapNode";
