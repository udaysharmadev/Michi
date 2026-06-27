"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { HeroCanvasPreview } from "./hero-canvas-preview";
import { SiReact, SiNodedotjs, SiPython, SiSwift, SiAndroid, SiGithub } from "react-icons/si";

// Emil strong ease-out curve
const easeStrong = [0.23, 1, 0.32, 1] as const;

// Only list roadmaps that ACTUALLY have content for Phase 1
const quickAccessPills = [
  { label: "Frontend", slug: "frontend", icon: <SiReact className="w-3.5 h-3.5" /> },
  { label: "Backend", slug: "backend", icon: <SiNodedotjs className="w-3.5 h-3.5" /> },
  { label: "Full Stack", slug: "fullstack", icon: <SiPython className="w-3.5 h-3.5" /> },
  { label: "Android", slug: "android", icon: <SiAndroid className="w-3.5 h-3.5" /> },
  { label: "iOS", slug: "ios", icon: <SiSwift className="w-3.5 h-3.5" /> },
];

// Staggered fade-up variant
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: easeStrong },
});

export function HeroSection() {
  return (
    <section className="relative w-full border-b border-border overflow-hidden bg-background pt-16 pb-20">
      {/* Background treatment: subtle mesh/grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-[0.08] blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Left Column */}
        <div className="flex-1 text-left z-10 w-full pt-8 md:pt-0">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Open Source Learning</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.05]"
            style={{
              letterSpacing: "-0.03em",
              textWrap: "balance",
            } as React.CSSProperties}
          >
            The Developer <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Knowledge Graph
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            Stop getting lost in scattered tutorials. Master software engineering through curated, interactive visual roadmaps where every topic is a complete learning module.
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/roadmaps"
              className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold
                hover:opacity-90 transition-opacity duration-150 flex items-center gap-2 group active:scale-[0.98]"
            >
              Explore roadmaps
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </Link>
            <a
              href="https://github.com/udaysharmadev/Michi"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold
                hover:bg-muted transition-colors duration-150 flex items-center gap-2 active:scale-[0.98]"
            >
              <SiGithub className="w-4 h-4" />
              Star on GitHub
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Live learning paths</span>
            <div className="flex flex-wrap gap-2">
              {quickAccessPills.map((pill) => (
                <Link
                  key={pill.slug}
                  href={`/roadmaps/${pill.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium text-foreground
                    hover:border-primary hover:text-primary flex items-center gap-1.5
                    transition-[background-color,border-color,color] duration-150
                    active:scale-[0.96]"
                >
                  {pill.icon}
                  {pill.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — animated canvas preview */}
        <div className="flex-1 justify-end w-full h-[320px] md:h-[480px] relative mt-8 md:mt-0">
          <HeroCanvasPreview />
        </div>

      </div>
    </section>
  );
}
