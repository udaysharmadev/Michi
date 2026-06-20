"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { getAllRoadmaps } from "@/data/roadmaps";

export function SearchModal() {
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
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    
    return getAllRoadmaps().filter(r => 
      r.title.toLowerCase().includes(lowerQuery) || 
      r.description.toLowerCase().includes(lowerQuery) ||
      r.category.toLowerCase().includes(lowerQuery)
    ).slice(0, 8);
  }, [query]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-500 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:text-gray-900 transition-colors w-full sm:w-80 shadow-sm"
      >
        <Search className="w-4 h-4" />
        <span className="flex-1 text-left">Search roadmaps...</span>
        <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-xs font-mono bg-gray-50 border border-gray-200 rounded text-gray-400">⌘K</kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-gray-900/20 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh] animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 shrink-0">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            autoFocus
            type="text"
            placeholder="Search roadmaps, categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-400 text-lg font-medium"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 bg-gray-50 border border-gray-200 rounded-md transition-colors"
          >
            ESC
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          {!query.trim() ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 font-medium">Type to search roadmaps...</p>
              <p className="text-sm text-gray-400 mt-1">Search by title, description, or category</p>
            </div>
          ) : (
            <div className="flex flex-col gap-1 p-2">
              {searchResults.length > 0 ? (
                searchResults.map(r => (
                  <Link 
                    key={r.id} 
                    href={`/roadmaps/${r.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-black">{r.title}</div>
                      <div className="text-sm text-gray-500 mt-0.5">{r.category} • {r.difficulty}</div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="py-16 text-center text-gray-500">
                  No roadmaps found for "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
