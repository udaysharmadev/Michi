"use client";

import React, { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search, Map } from "lucide-react";
import { useRouter } from "next/navigation";
import { getAllRoadmaps } from "@/data/roadmaps";

export function SearchModal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const roadmaps = getAllRoadmaps();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground bg-card border border-border rounded-xl hover:border-primary/40 hover:text-foreground transition-all duration-300 w-full sm:w-80 shadow-sm"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search roadmaps...</span>
        <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded bg-muted/80 px-1.5 font-mono text-[10px] font-medium text-muted-foreground border border-border">
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
        <div className="relative z-[300] w-full max-w-[600px] overflow-hidden rounded-2xl border border-border bg-card shadow-[0_16px_70px_rgb(0,0,0,0.1)] dark:shadow-[0_16px_70px_rgba(255,255,255,0.03)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center border-b border-border px-4 py-4">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <Command.Input 
              placeholder="Type a command or search..." 
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-4 text-sm font-medium"
            />
            <button
              onClick={() => setOpen(false)}
              className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted/50 border border-border rounded-md transition-colors"
            >
              ESC
            </button>
          </div>
          <Command.List className="max-h-[350px] overflow-y-auto p-2">
            <Command.Empty className="py-12 text-center text-sm text-muted-foreground">
              No roadmaps found.
            </Command.Empty>

            <Command.Group heading="Roadmaps" className="px-2 py-2 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
              {roadmaps.map((roadmap) => (
                <Command.Item
                  key={roadmap.id}
                  value={roadmap.title + " " + roadmap.category}
                  onSelect={() => {
                    router.push(`/roadmaps/${roadmap.slug}`);
                    setOpen(false);
                  }}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm aria-selected:bg-primary aria-selected:text-primary-foreground cursor-pointer group transition-colors mt-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center group-aria-selected:bg-primary-foreground/10 group-aria-selected:border-transparent">
                    <Map className="w-4 h-4 text-muted-foreground group-aria-selected:text-primary-foreground" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-foreground group-aria-selected:text-primary-foreground">{roadmap.title}</span>
                    <span className="text-xs text-muted-foreground group-aria-selected:text-primary-foreground/70">{roadmap.category} • {roadmap.difficulty}</span>
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
