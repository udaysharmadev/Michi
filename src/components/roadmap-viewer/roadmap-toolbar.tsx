"use client";

import React from "react";
import { useReactFlow, useStore, useNodes } from "@xyflow/react";
import { LayoutGrid, List, Minus, Plus, Maximize, Share2, CheckCheck, RotateCcw } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import { toast } from "sonner";

export function RoadmapToolbar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { viewMode, setViewMode, progressMap, setNodeProgress } = useRoadmapInteraction();

  const zoom = useStore((s) => s.transform[2]);
  const zoomPercent = Math.round(zoom * 100);

  const nodes = useNodes();
  const topicNodes = nodes.filter(n => n.type === 'topic');

  let completed = 0;
  for (const n of topicNodes) {
    if (progressMap[n.id] === 'completed') completed++;
  }
  const totalTopics = topicNodes.length;
  const progressPercent = totalTopics > 0 ? Math.round((completed / totalTopics) * 100) : 0;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!", {
        description: "You can now share this roadmap with others.",
      });
    }
  };

  const handleMarkAll = () => {
    topicNodes.forEach(n => setNodeProgress(n.id, 'completed'));
    toast.success("All topics marked complete!");
  };

  const handleReset = () => {
    topicNodes.forEach(n => setNodeProgress(n.id, 'not_started'));
    toast.info("Progress reset.");
  };

  return (
    <div
      role="toolbar"
      aria-label="Roadmap Controls"
      className="absolute top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 pointer-events-auto flex-wrap justify-center px-3"
    >
      {/* View Mode */}
      <div className="flex bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => setViewMode("detailed")}
          className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-150 cursor-pointer ${
            viewMode === "detailed"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <LayoutGrid className="w-3 h-3" />
          Detailed
        </button>
        <button
          onClick={() => setViewMode("overview")}
          className={`flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-150 cursor-pointer ${
            viewMode === "overview"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <List className="w-3 h-3" />
          Overview
        </button>
      </div>

      {/* Zoom */}
      <div className="flex items-center bg-card border border-border rounded-lg shadow-sm">
        <button
          onClick={() => zoomOut()}
          className="p-1.5 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
        >
          <Minus className="w-3 h-3" />
        </button>
        <div className="px-1 text-[11px] font-bold text-foreground select-none min-w-[2.5rem] text-center tabular-nums">
          {zoomPercent}%
        </div>
        <button
          onClick={() => zoomIn()}
          className="p-1.5 text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
        >
          <Plus className="w-3 h-3" />
        </button>
      </div>

      {/* Fit */}
      <button
        onClick={() => fitView({ duration: 600, padding: 0.04 })}
        className="flex items-center gap-1 px-2.5 py-1.5 bg-card border border-border rounded-lg shadow-sm text-[11px] font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors cursor-pointer"
      >
        <Maximize className="w-3 h-3" />
        Fit
      </button>

      {/* Share */}
      <button
        onClick={handleShare}
        className="flex items-center gap-1 px-2.5 py-1.5 bg-primary/10 border border-primary/20 rounded-lg shadow-sm text-[11px] font-semibold text-primary hover:bg-primary/20 hover:border-primary/30 transition-all cursor-pointer"
      >
        <Share2 className="w-3 h-3" />
        Share
      </button>

      {/* Progress pill */}
      {totalTopics > 0 && (
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-card border border-border rounded-lg shadow-sm text-[11px] font-semibold text-muted-foreground">
          <div className="relative w-12 h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
              style={{
                width: `${progressPercent}%`,
                background: progressPercent === 100 ? '#10b981' : 'linear-gradient(90deg, oklch(0.65 0.2 265), #10b981)',
              }}
            />
          </div>
          <span className="w-7 tabular-nums">{progressPercent}%</span>
        </div>
      )}

      {/* Quick actions */}
      {totalTopics > 0 && (
        <div className="flex items-center bg-card border border-border rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={handleMarkAll}
            title="Mark all topics as complete"
            className="flex items-center gap-0.5 px-2 py-1.5 text-[11px] font-semibold text-muted-foreground hover:text-emerald-600 hover:bg-emerald-500/5 transition-colors cursor-pointer"
          >
            <CheckCheck className="w-3 h-3" />
          </button>
          <div className="w-px h-3 bg-border" />
          <button
            onClick={handleReset}
            title="Reset all progress"
            className="flex items-center gap-0.5 px-2 py-1.5 text-[11px] font-semibold text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      )}
    </div>
  );
}
