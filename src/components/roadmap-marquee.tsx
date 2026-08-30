"use client";

import { motion, useReducedMotion } from "motion/react";
import { getAllRoadmaps } from "@/data/roadmaps";

const ROADMAP_TITLES = getAllRoadmaps().map((r) => r.title);

export function RoadmapMarquee() {
  const shouldReduce = useReducedMotion();

  const items = [...ROADMAP_TITLES, ...ROADMAP_TITLES];

  if (shouldReduce) {
    return (
      <div className="flex flex-wrap gap-2 justify-center py-5">
        {ROADMAP_TITLES.slice(0, 10).map((title) => (
          <span key={title} className="px-3.5 py-1.5 rounded-md bg-card border border-border text-xs font-medium text-muted-foreground">
            {title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((title, i) => (
          <span
            key={i}
            className="shrink-0 px-4 py-2 rounded-md bg-card border border-border text-xs font-medium text-muted-foreground whitespace-nowrap hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
          >
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
