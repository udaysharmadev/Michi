"use client";

import React, { useState, useMemo } from "react";
import { getAllRoadmaps, getCategories, Category, Difficulty } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { Search, SlidersHorizontal, Map } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";

export default function RoadmapsDiscoveryPage() {
  const allRoadmaps = getAllRoadmaps();
  const categories = getCategories();
  
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "All">("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  
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
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
        <header className="mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ letterSpacing: "-0.03em" }}>
              Discovery
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl font-medium">
              Explore {allRoadmaps.length} meticulously crafted roadmaps spanning every major discipline in software engineering.
            </p>
          </motion.div>
        </header>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Filters Sidebar */}
          <aside className={clsx(
            "w-full md:w-64 shrink-0 flex flex-col gap-8 md:sticky top-24",
            mobileFiltersOpen ? "block" : "hidden md:flex"
          )}>
            <div>
              <div className="relative mb-8 group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder="Filter roadmaps..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
                />
              </div>

              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">Categories</h3>
                {selectedCategory !== "All" && (
                  <button onClick={() => setSelectedCategory("All")} className="text-xs text-primary font-medium hover:underline">Clear</button>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === "All" ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                >
                  All Categories
                </button>
                {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedCategory === cat ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">Difficulty</h3>
                {selectedDifficulty !== "All" && (
                  <button onClick={() => setSelectedDifficulty("All")} className="text-xs text-primary font-medium hover:underline">Clear</button>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                {["All", "Beginner", "Intermediate", "Advanced", "All Levels"].map(diff => (
                  <button 
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff as any)}
                    className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${selectedDifficulty === diff ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <span className="text-sm font-medium text-muted-foreground">
                Showing <strong className="text-foreground">{filteredRoadmaps.length}</strong> roadmaps
              </span>
              <button 
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-muted md:hidden"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>

            {filteredRoadmaps.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 xl:grid-cols-2 gap-6"
              >
                <AnimatePresence mode="popLayout">
                  {filteredRoadmaps.map(roadmap => (
                    <motion.div
                      key={roadmap.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <RoadmapCard roadmap={roadmap} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 flex flex-col items-center justify-center text-center bg-card border border-border rounded-3xl"
              >
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Map className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">No roadmaps found</h3>
                <p className="text-muted-foreground max-w-sm mb-6">
                  We couldn't find any roadmaps matching your current filters. Try clearing them to see more results.
                </p>
                <button 
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                    setSelectedDifficulty("All");
                  }}
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
