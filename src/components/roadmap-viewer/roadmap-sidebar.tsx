"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft, Map, Activity, Clock, Search,
  BookOpen, CheckCircle2, Circle, BarChart3,
  ChevronLeft, RotateCcw, CheckCheck,
} from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import { getProgressStats } from "./progress-utils";
import type { RoadmapContentNode } from "@/data/types";
import { RoadmapMeta } from "@/data/roadmaps";

function parseHours(time?: string): number {
  if (!time) return 0;
  const match = time.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function RoadmapSidebar({
  roadmap,
  nodes,
  onToggleSidebar,
}: {
  roadmap: RoadmapMeta;
  nodes: RoadmapContentNode[];
  onToggleSidebar?: () => void;
}) {
  const { progressMap, setCommandPaletteOpen, setNodeProgress } = useRoadmapInteraction();

  const topicNodes = useMemo(
    () => nodes.filter((n) => n.type === "topic"),
    [nodes]
  );

  const topicIds = useMemo(() => topicNodes.map((n) => n.id), [topicNodes]);

  const stats = useMemo(
    () => getProgressStats(progressMap, topicIds),
    [progressMap, topicIds]
  );

  const diffCounts = useMemo(() => {
    let beginner = 0, intermediate = 0, advanced = 0;
    for (const n of topicNodes) {
      const d = n.data.difficulty;
      if (d === "Intermediate") intermediate++;
      else if (d === "Advanced") advanced++;
      else beginner++;
    }
    return { beginner, intermediate, advanced };
  }, [topicNodes]);

  const totalHours = useMemo(() => {
    let total = 0;
    for (const n of topicNodes) total += parseHours(n.data.estimatedTime);
    return total;
  }, [topicNodes]);

  const handleMarkAllComplete = () => {
    topicIds.forEach(id => setNodeProgress(id, 'completed'));
  };

  const handleResetProgress = () => {
    topicIds.forEach(id => setNodeProgress(id, 'not_started'));
  };

  return (
    <aside
      role="region"
      aria-label="Roadmap Overview"
      className="flex flex-col h-full p-5 w-full bg-card relative z-40 overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/roadmaps"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="mb-5">
        <h1 className="text-lg font-bold text-foreground tracking-tight leading-snug mb-1.5">
          {roadmap.title}
        </h1>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {roadmap.description}
        </p>
      </div>

      {/* Stats */}
      <div className="border-y border-border py-3 mb-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-medium flex items-center gap-1.5">
            <Map className="w-3.5 h-3.5 text-muted-foreground/60" /> Total Topics
          </span>
          <span className="font-bold text-foreground">{stats.total}</span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-medium flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-muted-foreground/60" /> Difficulty
          </span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-semibold text-foreground">{diffCounts.beginner}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="font-semibold text-foreground">{diffCounts.intermediate}</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-400" />
              <span className="font-semibold text-foreground">{diffCounts.advanced}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground font-medium flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-muted-foreground/60" /> Est. Completion
          </span>
          <span className="font-bold text-foreground">{totalHours} hrs</span>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs font-semibold text-foreground mb-2">
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-3.5 h-3.5 text-muted-foreground/60" />
            Your Progress
          </span>
          <span className="text-muted-foreground font-bold">{stats.percentage}%</span>
        </div>

        <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden mb-3">
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{
              width: `${stats.percentage}%`,
              background: stats.percentage === 100
                ? 'linear-gradient(90deg, #10b981, #059669)'
                : 'linear-gradient(90deg, oklch(0.65 0.2 265), #10b981)',
            }}
          />
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          <div className="flex items-center gap-1 text-[11px]">
            <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.completed}</span> done
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <BookOpen className="w-3 h-3 text-blue-500 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.learning}</span> learning
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <Circle className="w-3 h-3 text-muted-foreground/40 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.notStarted}</span> todo
            </span>
          </div>
        </div>
      </div>

      {/* Completion message */}
      {stats.percentage === 100 && (
        <div className="mb-3 p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
          <p className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 text-center">
            Roadmap Complete! Amazing work.
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-1.5 mb-4">
        <button
          onClick={handleMarkAllComplete}
          className="flex items-center justify-center gap-1 px-2 py-1.5 text-[11px] font-semibold rounded-md border border-border text-muted-foreground hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all cursor-pointer"
        >
          <CheckCheck className="w-3 h-3" /> Mark All Done
        </button>
        <button
          onClick={handleResetProgress}
          className="flex items-center justify-center gap-1 px-2 py-1.5 text-[11px] font-semibold rounded-md border border-border text-muted-foreground hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" /> Reset
        </button>
      </div>

      <div className="flex-1" />

      {/* Search shortcut */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="w-full flex items-center gap-2 px-3 py-2 bg-muted/50 hover:bg-muted border border-border rounded-lg text-xs text-muted-foreground transition-colors cursor-pointer"
      >
        <Search className="w-3.5 h-3.5 text-muted-foreground/60" />
        <span className="flex-1 text-left">Search topics...</span>
        <kbd className="px-1 py-0.5 bg-card border border-border rounded text-[10px] font-mono font-semibold text-muted-foreground/60">
          ⌘K
        </kbd>
      </button>
    </aside>
  );
}
