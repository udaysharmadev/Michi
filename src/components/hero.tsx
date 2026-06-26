"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { HeroCanvasPreview } from "./hero-canvas-preview";

// Emil strong ease-out curve
const easeStrong = [0.23, 1, 0.32, 1] as const;

const quickAccessPills = [
  { label: "Frontend",         slug: "frontend" },
  { label: "Backend",          slug: "backend" },
  { label: "AI Engineer",      slug: "ai-engineer" },
  { label: "DevOps",           slug: "devops" },
  { label: "Cyber Security",   slug: "cyber-security" },
  { label: "Cloud Engineer",   slug: "cloud" },
  { label: "Research Engineer",slug: "ai-researcher" },
];

// Staggered fade-up variant
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: easeStrong },
});

export function HeroSection() {
  return (
    <section className="relative w-full border-b border-gray-100 overflow-hidden bg-white pt-20 pb-28">
      {/* Very subtle radial bg — just a whisper */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50/80 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Left Column */}
        <div className="flex-1 text-left z-10 w-full">

          <motion.h1
            {...fadeUp(0)}
            className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.05]"
            style={{
              letterSpacing: "-0.03em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            The developer<br />knowledge graph.
          </motion.h1>

          <motion.p
            {...fadeUp(0.07)}
            className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed"
          >
            Navigate modern software engineering. Explore premium, visually-driven roadmaps to accelerate your career.
          </motion.p>

          <motion.div {...fadeUp(0.14)} className="flex flex-wrap gap-2">
            {quickAccessPills.map((pill) => (
              <Link
                key={pill.slug}
                href={`/roadmaps/${pill.slug}`}
                className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700
                  hover:bg-black hover:text-white hover:border-black
                  transition-[background-color,border-color,color] duration-150
                  active:scale-[0.96] active:duration-75"
              >
                {pill.label}
              </Link>
            ))}
            <Link
              href="/roadmaps"
              className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-900
                hover:bg-gray-50 transition-colors duration-150 flex items-center gap-1.5 group"
            >
              View all{" "}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column — animated canvas preview */}
        <div className="hidden lg:flex flex-1 justify-end w-full">
          <HeroCanvasPreview />
        </div>

      </div>
    </section>
  );
}
