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

// ── Helpers ─────────────────────────────────────────────────────────────────
function parseHours(time?: string): number {
  if (!time) return 0;
  const match = time.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

// ── Component ───────────────────────────────────────────────────────────────
export function RoadmapSidebar({
  roadmap,
  nodes,
  onToggleSidebar,
}: {
  roadmap: RoadmapMeta;
  nodes: RoadmapContentNode[];
  onToggleSidebar?: () => void;
}) {
  const { progressMap, setCommandPaletteOpen, setNodeProgress, notesMap } = useRoadmapInteraction();

  const topicNodes = useMemo(
    () => nodes.filter((n) => n.type === "topic"),
    [nodes]
  );

  const topicIds = useMemo(() => topicNodes.map((n) => n.id), [topicNodes]);

  const stats = useMemo(
    () => getProgressStats(progressMap, topicIds),
    [progressMap, topicIds]
  );

  // Difficulty breakdown
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

  // Total estimated time
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
      className="flex flex-col h-full p-6 w-full bg-card relative z-40 overflow-y-auto"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <Link
          href="/roadmaps"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground/70 hover:text-foreground transition-colors duration-150"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Collapse sidebar"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground tracking-tight leading-snug mb-2">
          {roadmap.title}
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {roadmap.description}
        </p>
      </div>

      {/* ── Stats Grid ────────────────────────────────────────────────── */}
      <div className="border-y border-border/50 py-4 mb-5 space-y-3.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium flex items-center gap-2">
            <Map className="w-4 h-4 text-muted-foreground/70" /> Total Topics
          </span>
          <span className="font-bold text-base text-foreground">{stats.total}</span>
        </div>

        {/* Difficulty breakdown */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium flex items-center gap-2">
            <Activity className="w-4 h-4 text-muted-foreground/70" /> Difficulty
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-foreground">{diffCounts.beginner}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <span className="font-semibold text-foreground">{diffCounts.intermediate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="font-semibold text-foreground">{diffCounts.advanced}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground/70" /> Est. Completion
          </span>
          <span className="font-bold text-base text-foreground">{totalHours} hrs</span>
        </div>
      </div>

      {/* ── Progress ──────────────────────────────────────────────────── */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-sm font-semibold text-foreground mb-3">
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-muted-foreground/70" />
            Your Progress
          </span>
          <span className="text-muted-foreground font-bold">{stats.percentage}%</span>
        </div>

        {/* Animated progress bar */}
        <div className="w-full h-2.5 bg-muted rounded-full overflow-hidden mb-3.5">
          <div
            className="h-full rounded-full transition-[width] duration-700 ease-out"
            style={{ 
              width: `${stats.percentage}%`,
              background: stats.percentage === 100 
                ? 'linear-gradient(90deg, #10b981, #059669)'
                : 'linear-gradient(90deg, #6366f1, #10b981)',
            }}
          />
        </div>

        {/* Status counts */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center gap-1.5 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.completed}</span> done
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.learning}</span> learning
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Circle className="w-3.5 h-3.5 text-muted-foreground/50 shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-bold text-foreground">{stats.notStarted}</span> todo
            </span>
          </div>
        </div>
      </div>

      {/* ── Completion milestone message ───────────────────────────────── */}
      {stats.percentage === 100 && (
        <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
          <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 text-center">
            🎉 Roadmap Complete! Amazing work.
          </p>
        </div>
      )}

      {/* ── Quick Actions ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <button
          onClick={handleMarkAllComplete}
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-border text-muted-foreground hover:text-emerald-600 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-200 cursor-pointer"
        >
          <CheckCheck className="w-3.5 h-3.5" /> Mark All Done
        </button>
        <button
          onClick={handleResetProgress}
          className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border border-border text-muted-foreground hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all duration-200 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* ── Spacer ────────────────────────────────────────────────────── */}
      <div className="flex-1" />

      {/* ── Search shortcut ───────────────────────────────────────────── */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="w-full flex items-center gap-2.5 px-4 py-3 bg-muted/50 hover:bg-muted border border-border rounded-xl text-sm text-muted-foreground transition-colors duration-150 cursor-pointer"
      >
        <Search className="w-4 h-4 text-muted-foreground/70" />
        <span className="flex-1 text-left">Search topics...</span>
        <kbd className="px-1.5 py-0.5 bg-card border border-border rounded text-[11px] font-mono font-semibold text-muted-foreground/70">
          ⌘K
        </kbd>
      </button>
    </aside>
  );
}
