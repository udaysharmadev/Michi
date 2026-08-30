"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { getAllRoadmaps, getCategories, Category, Difficulty } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { Search, SlidersHorizontal, Map, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx } from "clsx";
import { useBookmarks } from "@/hooks/use-bookmarks";

function RoadmapsDiscoveryContent() {
  const allRoadmaps = getAllRoadmaps();
  const categories = getCategories();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { bookmarks, isLoaded: bookmarksLoaded } = useBookmarks();

  const categoryParam = searchParams.get("category");
  const initialCategory = categories.includes(categoryParam as Category) ? (categoryParam as Category) : "All";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All" | "Favorites">(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | "All">("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (selectedCategory !== "All" && selectedCategory !== "Favorites") {
      params.set("category", selectedCategory);
    } else {
      params.delete("category");
    }

    const newSearch = params.toString();
    const currentSearch = searchParams.toString();
    if (newSearch !== currentSearch) {
      router.replace(`${pathname}${newSearch ? `?${newSearch}` : ""}`, { scroll: false });
    }
  }, [selectedCategory, pathname, router, searchParams]);

  const filteredRoadmaps = useMemo(() => {
    return allRoadmaps.filter(r => {
      const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
                          r.description.toLowerCase().includes(search.toLowerCase());

      let matchCategory = true;
      if (selectedCategory === "Favorites") {
        matchCategory = bookmarks.includes(r.slug);
      } else if (selectedCategory !== "All") {
        matchCategory = r.category === selectedCategory;
      }

      const matchDifficulty = selectedDifficulty === "All" || r.difficulty === selectedDifficulty;

      return matchSearch && matchCategory && matchDifficulty;
    });
  }, [allRoadmaps, search, selectedCategory, selectedDifficulty, bookmarks]);

  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 md:py-16 relative z-10">
      <header className="mb-10 md:mb-14">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1
            className="font-heading text-4xl md:text-5xl font-extrabold tracking-[-0.03em] mb-3 text-foreground"
            style={{ textWrap: "balance" }}
          >
            Discovery
          </h1>
          <p className="text-base text-muted-foreground max-w-xl">
            Explore {allRoadmaps.length} meticulously crafted roadmaps spanning every major discipline.
          </p>
        </motion.div>
      </header>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Filters Sidebar */}
        <aside className={clsx(
          "w-full md:w-56 shrink-0 flex flex-col gap-6 md:sticky top-20",
          mobileFiltersOpen ? "block" : "hidden md:flex"
        )}>
          <div>
            <div className="relative mb-6 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Filter roadmaps..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Categories</h3>
              {selectedCategory !== "All" && (
                <button onClick={() => setSelectedCategory("All")} className="text-[11px] text-primary font-medium hover:underline">Clear</button>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => setSelectedCategory("All")}
                className={clsx(
                  "text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                  selectedCategory === "All" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                All Categories
              </button>

              {bookmarksLoaded && bookmarks.length > 0 && (
                <button
                  onClick={() => setSelectedCategory("Favorites")}
                  className={clsx(
                    "flex items-center justify-between text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                    selectedCategory === "Favorites" ? "bg-amber-500 text-white font-bold" : "text-amber-500 hover:bg-amber-500/10"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-current" /> Favorites
                  </span>
                  <span className="text-[10px] px-1 py-0.5 rounded bg-background/20 font-bold">{bookmarks.length}</span>
                </button>
              )}

              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={clsx(
                    "text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                    selectedCategory === cat ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Difficulty</h3>
              {selectedDifficulty !== "All" && (
                <button onClick={() => setSelectedDifficulty("All")} className="text-[11px] text-primary font-medium hover:underline">Clear</button>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              {["All", "Beginner", "Intermediate", "Advanced", "All Levels"].map(diff => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff as "All" | Difficulty)}
                  className={clsx(
                    "text-left px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                    selectedDifficulty === diff ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-border">
            <span className="text-xs font-medium text-muted-foreground">
              Showing <strong className="text-foreground">{filteredRoadmaps.length}</strong> roadmaps
            </span>
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border bg-card text-xs font-medium text-foreground hover:bg-muted md:hidden"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" /> Filters
            </button>
          </div>

          {filteredRoadmaps.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredRoadmaps.map((roadmap) => (
                  <motion.div
                    key={roadmap.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
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
              className="py-20 flex flex-col items-center justify-center text-center bg-card border border-border rounded-xl"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                <Map className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-1.5 tracking-tight">No roadmaps found</h3>
              <p className="text-muted-foreground text-sm max-w-xs mb-5">
                {selectedCategory === "Favorites"
                  ? "You haven't bookmarked any roadmaps yet."
                  : "Try clearing your filters to see more results."}
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All");
                  setSelectedDifficulty("All");
                }}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

export default function RoadmapsDiscoveryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      <Navbar />

      <Suspense fallback={<div className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 md:py-16 min-h-[50vh]" />}>
        <RoadmapsDiscoveryContent />
      </Suspense>

      <Footer />
    </div>
  );
}
