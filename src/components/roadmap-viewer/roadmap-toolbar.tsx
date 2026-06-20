"use client";

import React from "react";
import { useReactFlow, useStore } from "@xyflow/react";
import { LayoutGrid, List, Minus, Plus, Maximize } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";

export function RoadmapToolbar() {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { viewMode, setViewMode } = useRoadmapInteraction();

  // Reactive zoom from React Flow store
  const zoom = useStore((s) => s.transform[2]);
  const zoomPercent = Math.round(zoom * 100);

  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2.5 pointer-events-auto">
      {/* View Mode toggle */}
      <div className="flex bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <button
          onClick={() => setViewMode("detailed")}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === "detailed"
              ? "bg-gray-900 text-white"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          Detailed
        </button>
        <button
          onClick={() => setViewMode("overview")}
          className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
            viewMode === "overview"
              ? "bg-gray-900 text-white"
              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <List className="w-3.5 h-3.5" />
          Overview
        </button>
      </div>

      {/* Zoom controls */}
      <div className="flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
        <button
          onClick={() => zoomOut()}
          className="p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <div className="px-1.5 text-xs font-bold text-gray-700 select-none min-w-[3rem] text-center tabular-nums">
          {zoomPercent}%
        </div>
        <button
          onClick={() => zoomIn()}
          className="p-2 text-gray-400 hover:text-gray-900 transition-colors duration-200 cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Fit View */}
      <button
        onClick={() => fitView({ duration: 600, padding: 0.04 })}
        className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-xs font-semibold text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
      >
        <Maximize className="w-3.5 h-3.5" />
        Fit
      </button>
    </div>
  );
}
