"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, Command, CornerDownLeft, ArrowUp, ArrowDown } from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import type { RoadmapContentNode } from "@/data/types";
import { iconMap, difficultyColors } from "@/lib/icon-map";

interface CommandPaletteProps {
  nodes: RoadmapContentNode[];
  onNodeSelect: (nodeId: string) => void;
}

export function CommandPalette({ nodes, onNodeSelect }: CommandPaletteProps) {
  const { commandPaletteOpen, setCommandPaletteOpen } = useRoadmapInteraction();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const topicNodes = nodes.filter((n) => n.type === "topic");

  const results = query.trim()
    ? topicNodes.filter((n) =>
        n.data.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === "Escape" && commandPaletteOpen) {
        e.preventDefault();
        setCommandPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [commandPaletteOpen, setCommandPaletteOpen]);

  useEffect(() => {
    if (commandPaletteOpen) {
      setQuery("");
      setActiveIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [commandPaletteOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.children[activeIndex] as HTMLElement;
      active?.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  const handleSelect = useCallback(
    (nodeId: string) => {
      setCommandPaletteOpen(false);
      setQuery("");
      onNodeSelect(nodeId);
    },
    [setCommandPaletteOpen, onNodeSelect]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        handleSelect(results[activeIndex].id);
      }
    },
    [results, activeIndex, handleSelect]
  );

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] animate-in fade-in duration-150"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-lg bg-card rounded-xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 fade-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border/50">
          <Search className="w-4 h-4 text-muted-foreground/60 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search topics..."
            className="flex-1 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[9px] font-semibold text-muted-foreground/60 bg-muted rounded border border-border">
            ESC
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[350px] overflow-y-auto">
          {query.trim() === "" ? (
            <div className="px-4 py-10 text-center">
              <Command className="w-6 h-6 text-muted-foreground/30 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground/60">Start typing to search topics...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <Search className="w-6 h-6 text-muted-foreground/30 mx-auto mb-2" />
              <p className="text-xs text-muted-foreground/60">No topics found for &ldquo;{query}&rdquo;</p>
            </div>
          ) : (
            results.map((node, idx) => {
              const Icon = node.data.icon && iconMap[node.data.icon] ? iconMap[node.data.icon] : null;
              const diffClass = difficultyColors[node.data.difficulty || "Beginner"];
              const isActive = idx === activeIndex;

              return (
                <button
                  key={node.id}
                  onClick={() => handleSelect(node.id)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-left transition-colors duration-100 cursor-pointer ${
                    isActive ? "bg-muted/50" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="w-7 h-7 shrink-0 flex items-center justify-center bg-muted rounded-lg">
                    {Icon ? (
                      <Icon className="w-3.5 h-3.5 text-muted-foreground" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-foreground truncate">
                      {node.data.title}
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-1 py-0.5 rounded ${diffClass}`}>
                        {node.data.difficulty || "Beginner"}
                      </span>
                      {node.data.estimatedTime && (
                        <span className="text-[9px] text-muted-foreground/60">{node.data.estimatedTime}</span>
                      )}
                    </div>
                  </div>

                  {isActive && (
                    <CornerDownLeft className="w-3 h-3 text-muted-foreground/60 shrink-0" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {results.length > 0 && (
          <div className="flex items-center gap-3 px-4 py-2 border-t border-border/50 text-[9px] text-muted-foreground/60">
            <span className="flex items-center gap-1">
              <ArrowUp className="w-2.5 h-2.5" />
              <ArrowDown className="w-2.5 h-2.5" />
              navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft className="w-2.5 h-2.5" />
              select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 py-0.5 bg-muted rounded font-mono">esc</kbd>
              close
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
