"use client";

import React, { useState, useMemo } from "react";
import { getAllRoadmaps, getCategories, Category, Difficulty } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { Search, SlidersHorizontal, X } from "lucide-react";

export default function RoadmapsDiscoveryPage() {
  const allRoadmaps = getAllRoadmaps();
  const categories = getCategories();
  
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "All">("All");
  
  const filteredRoadmaps = useMemo(() => {
    return allRoadmaps.filter(r => {
      const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || 
                          r.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === "All" || r.category === selectedCategory;
      const matchDifficulty = selectedDifficulty === "All" || r.difficulty === selectedDifficulty;
      
      return matchSearch && matchCategory && matchDifficulty;
    });
  }, [allRoadmaps, search, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Discovery
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Explore {allRoadmaps.length} meticulously crafted roadmaps spanning every major discipline in software engineering.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-64 shrink-0 flex flex-col gap-8 sticky top-24">
            <div>
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text"
                  placeholder="Filter roadmaps..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
                />
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Categories</h3>
                {selectedCategory !== "All" && (
                  <button onClick={() => setSelectedCategory("All")} className="text-xs text-gray-500 hover:text-black">Clear</button>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className={`text-left px-3 py-1.5 rounded-md text-sm transition-colors ${selectedCategory === "All" ? "bg-black text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-1.5 rounded-md text-sm transition-colors ${selectedCategory === cat ? "bg-black text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Difficulty</h3>
                {selectedDifficulty !== "All" && (
                  <button onClick={() => setSelectedDifficulty("All")} className="text-xs text-gray-500 hover:text-black">Clear</button>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                {["All", "Beginner", "Intermediate", "Advanced", "All Levels"].map(diff => (
                  <button 
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff as any)}
                    className={`text-left px-3 py-1.5 rounded-md text-sm transition-colors ${selectedDifficulty === diff ? "bg-black text-white font-medium" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <span className="text-sm text-gray-500">
                Showing <strong className="text-gray-900">{filteredRoadmaps.length}</strong> roadmaps
              </span>
              <button className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black md:hidden">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>

            {filteredRoadmaps.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRoadmaps.map(roadmap => (
                  <RoadmapCard key={roadmap.id} roadmap={roadmap} />
                ))}
              </div>
            ) : (
              <div className="py-24 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">No roadmaps found</h3>
                <p className="text-gray-500 max-w-sm">
                  We couldn't find any roadmaps matching your current filters. Try clearing them to see more results.
                </p>
                <button 
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                  }}
                  className="mt-6 text-sm font-medium text-black hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
