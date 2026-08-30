"use client";

import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search, Map } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { getAllRoadmaps } from "@/data/roadmaps";

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const roadmaps = getAllRoadmaps();
  const isOnViewer = pathname?.startsWith("/roadmaps/") && pathname !== "/roadmaps";

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if (isOnViewer) return;
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOnViewer]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground bg-card border border-border rounded-lg hover:border-primary/30 hover:text-foreground transition-all duration-200 w-full sm:w-full shadow-sm"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="flex-1 text-left">Search roadmaps...</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground border border-border">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[300] flex items-start justify-center pt-[15vh] sm:pt-[20vh]"
      >
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md" aria-hidden="true" onClick={() => setOpen(false)} />
        <div className="relative z-[300] w-full max-w-[560px] overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center border-b border-border px-4 py-3">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <Command.Input
              placeholder="Search roadmaps..."
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-3 text-sm font-medium"
            />
            <button
              onClick={() => setOpen(false)}
              className="px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground hover:text-foreground bg-muted border border-border rounded transition-colors"
            >
              ESC
            </button>
          </div>
          <Command.List className="max-h-[320px] overflow-y-auto p-1.5">
            <Command.Empty className="py-10 text-center text-sm text-muted-foreground">
              No roadmaps found.
            </Command.Empty>

            <Command.Group heading="Roadmaps" className="px-2 py-1.5 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              {roadmaps.map((roadmap) => (
                <Command.Item
                  key={roadmap.id}
                  value={roadmap.title + " " + roadmap.category}
                  onSelect={() => {
                    router.push(`/roadmaps/${roadmap.slug}`);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm aria-selected:bg-muted cursor-pointer group transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-muted border border-border flex items-center justify-center group-aria-selected:bg-primary/10 group-aria-selected:border-primary/20 shrink-0">
                    <Map className="w-3.5 h-3.5 text-muted-foreground group-aria-selected:text-primary" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-foreground truncate group-aria-selected:text-primary">{roadmap.title}</span>
                    <span className="text-[11px] text-muted-foreground">{roadmap.category} · {roadmap.difficulty}</span>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </div>
      </Command.Dialog>
    </>
  );
}
