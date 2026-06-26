"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const ROADMAP_TITLES = [
  "Frontend Developer", "Backend Developer", "Full Stack Developer",
  "AI Engineer", "DevOps Engineer", "Cloud Engineer", "Machine Learning",
  "Cyber Security", "System Design", "iOS Developer", "Android Developer",
  "Data Scientist", "Site Reliability", "Software Architect",
  "LLM Engineer", "Blockchain Developer", "Platform Engineer",
  "MLOps Engineer", "Research Engineer", "Mobile Developer",
];

export function RoadmapMarquee() {
  const shouldReduce = useReducedMotion();

  const items = [...ROADMAP_TITLES, ...ROADMAP_TITLES];

  if (shouldReduce) {
    return (
      <div className="flex flex-wrap gap-3 justify-center py-6">
        {ROADMAP_TITLES.slice(0, 10).map((title) => (
          <span key={title} className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600">
            {title}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((title, i) => (
          <span
            key={i}
            className="shrink-0 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-150 text-sm font-medium text-gray-600 whitespace-nowrap"
          >
            {title}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
