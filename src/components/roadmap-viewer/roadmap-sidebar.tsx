"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import {
  ArrowLeft, Map, Activity, Clock, Star, Search,
  BookOpen, CheckCircle2, Circle, BarChart3,
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
}: {
  roadmap: RoadmapMeta;
  nodes: RoadmapContentNode[];
}) {
  const { progressMap, setCommandPaletteOpen } = useRoadmapInteraction();

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

  return (
    <div className="flex flex-col h-full p-6 w-full bg-white relative z-40 overflow-y-auto">
      {/* Header */}
      <Link
        href="/roadmaps"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors duration-150 mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Roadmaps
      </Link>

      <div className="mb-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug">
            {roadmap.title}
          </h1>
          <button className="text-gray-300 hover:text-amber-400 transition-colors duration-150 shrink-0 mt-0.5 cursor-pointer">
            <Star className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          {roadmap.description}
        </p>
      </div>

      {/* ── Stats Grid ────────────────────────────────────────────────── */}
      <div className="border-y border-gray-100 py-4 mb-5 space-y-3.5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium flex items-center gap-2">
            <Map className="w-4 h-4 text-gray-400" /> Total Topics
          </span>
          <span className="font-bold text-base text-gray-900">{stats.total}</span>
        </div>

        {/* Difficulty breakdown */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium flex items-center gap-2">
            <Activity className="w-4 h-4 text-gray-400" /> Difficulty
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="font-semibold text-gray-700">{diffCounts.beginner}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              <span className="font-semibold text-gray-700">{diffCounts.intermediate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="font-semibold text-gray-700">{diffCounts.advanced}</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" /> Est. Completion
          </span>
          <span className="font-bold text-base text-gray-900">{totalHours} hrs</span>
        </div>
      </div>

      {/* ── Progress ──────────────────────────────────────────────────── */}
      <div className="mb-5">
        <div className="flex items-center justify-between text-sm font-semibold text-gray-900 mb-3">
          <span className="flex items-center gap-1.5">
            <BarChart3 className="w-4 h-4 text-gray-400" />
            Your Progress
          </span>
          <span className="text-gray-500 font-bold">{stats.percentage}%</span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-3.5">
          <div
            className="h-full bg-emerald-500 rounded-full transition-[width] duration-500"
            style={{ transitionTimingFunction: "var(--ease-out-strong)", width: `${stats.percentage}%` }}
          />
        </div>

        {/* Status counts */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex items-center gap-1.5 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="text-gray-500">
              <span className="font-bold text-gray-900">{stats.completed}</span> done
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <BookOpen className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="text-gray-500">
              <span className="font-bold text-gray-900">{stats.learning}</span> learning
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Circle className="w-3.5 h-3.5 text-gray-300 shrink-0" />
            <span className="text-gray-500">
              <span className="font-bold text-gray-900">{stats.notStarted}</span> todo
            </span>
          </div>
        </div>
      </div>

      {/* ── Spacer ────────────────────────────────────────────────────── */}
      <div className="flex-1" />

      {/* ── Search shortcut ───────────────────────────────────────────── */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="w-full flex items-center gap-2.5 px-4 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-500 transition-colors duration-150 cursor-pointer"
      >
        <Search className="w-4 h-4 text-gray-400" />
        <span className="flex-1 text-left">Search topics...</span>
        <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[11px] font-mono font-semibold text-gray-400">
          ⌘K
        </kbd>
      </button>
    </div>
  );
}
