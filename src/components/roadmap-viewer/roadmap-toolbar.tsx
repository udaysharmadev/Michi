"use client";

import React from "react";
import { useReactFlow, useStore, useNodes } from "@xyflow/react";
import { LayoutGrid, List, Minus, Plus, Maximize, Share2, CheckCheck, RotateCcw } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import { toast } from "sonner";

export function RoadmapToolbar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { viewMode, setViewMode, progressMap, setNodeProgress } = useRoadmapInteraction();

  // Reactive zoom from React Flow store
  const zoom = useStore((s) => s.transform[2]);
  const zoomPercent = Math.round(zoom * 100);
  
  // Calculate Progress
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
    toast.success("All topics marked complete! 🎉");
  };

  const handleReset = () => {
    topicNodes.forEach(n => setNodeProgress(n.id, 'not_started'));
    toast.info("Progress reset.");
  };

  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 pointer-events-auto flex-wrap justify-center px-4">
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
        <div className="px-1.5 text-xs font-bold text-foreground select-none min-w-[3rem] text-center tabular-nums">
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

      {/* Share Button */}
      <button
        onClick={handleShare}
        className="flex items-center gap-1.5 px-3 py-2 bg-primary/10 border border-primary/20 rounded-xl shadow-sm text-xs font-semibold text-primary hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 cursor-pointer"
      >
        <Share2 className="w-3.5 h-3.5" />
        Share
      </button>

      {/* Progress pill */}
      {totalTopics > 0 && (
        <div className="flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-xl shadow-sm text-xs font-semibold text-muted-foreground ml-2">
          <div className="relative w-16 h-1.5 bg-muted rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
              style={{ 
                width: `${progressPercent}%`,
                background: progressPercent === 100 ? '#10b981' : 'linear-gradient(90deg, #6366f1, #10b981)',
              }}
            />
          </div>
          <span className="w-8 tabular-nums">{progressPercent}%</span>
        </div>
      )}

      {/* Quick action buttons */}
      {totalTopics > 0 && (
        <div className="flex items-center bg-card border border-border rounded-xl shadow-sm overflow-hidden">
          <button
            onClick={handleMarkAll}
            title="Mark all topics as complete"
            className="flex items-center gap-1 px-2.5 py-2 text-xs font-semibold text-muted-foreground hover:text-emerald-600 hover:bg-emerald-500/5 transition-colors duration-200 cursor-pointer"
          >
            <CheckCheck className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-4 bg-border" />
          <button
            onClick={handleReset}
            title="Reset all progress"
            className="flex items-center gap-1 px-2.5 py-2 text-xs font-semibold text-muted-foreground hover:text-rose-500 hover:bg-rose-500/5 transition-colors duration-200 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
