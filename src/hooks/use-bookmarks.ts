"use client";

import { useState, useEffect, useCallback } from "react";

const BOOKMARKS_STORAGE_KEY = "michi_bookmarked_roadmaps";

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (saved) {
        setBookmarks(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load bookmarks:", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveBookmarks = (newBookmarks: string[]) => {
    setBookmarks(newBookmarks);
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(newBookmarks));
    } catch (e) {
      console.error("Failed to save bookmarks:", e);
    }
  };

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.includes(slug),
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    (slug: string, e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      setBookmarks((prev) => {
        const next = prev.includes(slug)
          ? prev.filter((s) => s !== slug)
          : [...prev, slug];
        try {
          localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(next));
        } catch (err) {
          console.error(err);
        }
        return next;
      });
    },
    []
  );

  return {
    bookmarks,
    isLoaded,
    isBookmarked,
    toggleBookmark,
  };
}
