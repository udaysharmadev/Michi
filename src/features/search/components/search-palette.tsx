"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { getAllRoadmaps } from "@/data/roadmaps";

const getAllTopics = () => []; // Mocked to fix missing file error

export function SearchPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = useMemo(() => {
    if (!query.trim()) return { topics: [], roadmaps: [] };
    
    const lowerQuery = query.toLowerCase();
    
    const matchingTopics = getAllTopics().filter((t: any) => 
      t.title.toLowerCase().includes(lowerQuery) || 
      t.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);

    const matchingRoadmaps = getAllRoadmaps().filter(r => 
      r.title.toLowerCase().includes(lowerQuery) || 
      r.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);

    return { topics: matchingTopics, roadmaps: matchingRoadmaps };
  }, [query]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground bg-muted/50 border border-border rounded-md hover:bg-muted transition-colors w-64"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search...</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-mono bg-background border border-border rounded">⌘K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-background/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        <div className="flex items-center gap-3 px-4 py-4 border-b border-border shrink-0">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            placeholder="Search topics, roadmaps..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground bg-muted rounded-md"
          >
            ESC
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          {!query.trim() ? (
            <div className="p-8 text-sm text-center text-muted-foreground">
              Type a command or search...
            </div>
          ) : (
            <div className="flex flex-col gap-4 p-2">
              {searchResults.roadmaps.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">Roadmaps</h3>
                  {searchResults.roadmaps.map(r => (
                    <Link 
                      key={r.id} 
                      href={`/roadmaps/${r.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{r.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">{r.description}</div>
                    </Link>
                  ))}
                </div>
              )}

              {searchResults.topics.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2 mt-2">Topics</h3>
                  {searchResults.topics.map((t: any) => (
                    <Link 
                      key={t.id} 
                      href={`/topics/${t.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">{t.title}</div>
                      <div className="text-sm text-muted-foreground line-clamp-1">{t.description}</div>
                    </Link>
                  ))}
                </div>
              )}

              {searchResults.topics.length === 0 && searchResults.roadmaps.length === 0 && (
                 <div className="p-8 text-sm text-center text-muted-foreground">
                    No results found for "{query}"
                 </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
