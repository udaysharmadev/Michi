"use client";

export interface AnalyticsEvent {
  id: string;
  type: "roadmap_view" | "topic_click" | "topic_completed" | "bookmark_toggle";
  roadmapSlug: string;
  topicId?: string;
  timestamp: string;
}

const ANALYTICS_STORAGE_KEY = "michi_analytics_events";

export function trackEvent(event: Omit<AnalyticsEvent, "id" | "timestamp">) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

    const newEvent: AnalyticsEvent = {
      ...event,
      id: "evt_" + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toISOString(),
    };

    // Keep last 200 events
    const updated = [newEvent, ...events].slice(0, 200);
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error("Failed to log analytics event:", e);
  }
}

export function getAnalyticsSummary() {
  if (typeof window === "undefined") return { totalViews: 0, totalCompletions: 0, activeStreak: 1 };
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const events: AnalyticsEvent[] = raw ? JSON.parse(raw) : [];

    const totalViews = events.filter((e) => e.type === "roadmap_view").length;
    const totalCompletions = events.filter((e) => e.type === "topic_completed").length;

    return {
      totalViews,
      totalCompletions,
      activeStreak: events.length > 0 ? Math.min(events.length, 7) : 1,
    };
  } catch {
    return { totalViews: 0, totalCompletions: 0, activeStreak: 1 };
  }
}
