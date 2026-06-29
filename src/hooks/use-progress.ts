"use client";

import { useState, useEffect } from "react";

export type TopicStatus = "idle" | "in-progress" | "completed";

export interface RoadmapProgress {
  [roadmapSlug: string]: {
    [topicId: string]: TopicStatus;
  };
}

const STORAGE_KEY = "roadmaps-progress-v1";

export function useProgress() {
  const [progress, setProgress] = useState<RoadmapProgress>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load progress from local storage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
      } catch (e) {
        console.error("Failed to save progress to local storage", e);
      }
    }
  }, [progress, isLoaded]);

  const updateTopicStatus = (slug: string, topicId: string, status: TopicStatus) => {
    setProgress((prev) => {
      const roadmapData = prev[slug] || {};
      
      // If setting to idle, we can remove the key to save space
      if (status === "idle") {
        const newRoadmapData = { ...roadmapData };
        delete newRoadmapData[topicId];
        
        return {
          ...prev,
          [slug]: newRoadmapData,
        };
      }
      
      return {
        ...prev,
        [slug]: {
          ...roadmapData,
          [topicId]: status,
        },
      };
    });
  };

  const getTopicStatus = (slug: string, topicId: string): TopicStatus => {
    return progress[slug]?.[topicId] || "idle";
  };

  const getRoadmapProgress = (slug: string, totalTopics: number) => {
    const roadmapData = progress[slug] || {};
    const completedCount = Object.values(roadmapData).filter(status => status === "completed").length;
    const inProgressCount = Object.values(roadmapData).filter(status => status === "in-progress").length;
    
    let percentage = 0;
    if (totalTopics > 0) {
      percentage = Math.round((completedCount / totalTopics) * 100);
    }
    
    return {
      completedCount,
      inProgressCount,
      percentage,
      totalTopics
    };
  };

  return {
    progress,
    isLoaded,
    updateTopicStatus,
    getTopicStatus,
    getRoadmapProgress
  };
}
