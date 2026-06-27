"use client";

import React from "react";
import { MiniMap } from "@xyflow/react";
import { useRoadmapInteraction } from "./roadmap-context";

export function RoadmapMinimap() {
  const { progressMap } = useRoadmapInteraction();

  return (
    <MiniMap
      nodeColor={(n) => {
        if (n.type === "section") return "#f1f5f9";
        const progress = progressMap[n.id];
        if (progress === "completed") return "#10b981";
        if (progress === "learning") return "#3b82f6";
        if (n.data?.isHighlighted) return "#6366f1";
        return "#cbd5e1";
      }}
      maskColor="rgba(255, 255, 255, 0.6)"
      className="!bg-card !border-2 !border-border !shadow-lg !rounded-2xl overflow-hidden !right-5 !bottom-5 pointer-events-auto"
      zoomable
      pannable
      nodeStrokeWidth={2}
    />
  );
}
