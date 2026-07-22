"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Star } from "lucide-react";
import { motion } from "motion/react";
import { HeroCanvasPreview } from "./hero-canvas-preview";
import { SiReact, SiNodedotjs, SiPython, SiSwift, SiAndroid, SiGithub } from "react-icons/si";

const easeStrong = [0.23, 1, 0.32, 1] as const;

const quickAccessPills = [
  { label: "Frontend", slug: "frontend", icon: <SiReact className="w-3.5 h-3.5 text-sky-400" /> },
  { label: "Backend", slug: "backend", icon: <SiNodedotjs className="w-3.5 h-3.5 text-green-500" /> },
  { label: "Full Stack", slug: "fullstack", icon: <SiPython className="w-3.5 h-3.5 text-yellow-500" /> },
  { label: "Android", slug: "android", icon: <SiAndroid className="w-3.5 h-3.5 text-emerald-500" /> },
  { label: "iOS", slug: "ios", icon: <SiSwift className="w-3.5 h-3.5 text-orange-500" /> },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeStrong },
});

export function HeroSection() {
  return (
    <section className="relative w-full border-b border-border overflow-hidden bg-background pt-20 pb-28">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 -z-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 -z-10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="flex-1 text-left z-10 w-full pt-8 md:pt-0">
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/40 backdrop-blur-md border border-primary/20 text-primary text-sm font-bold tracking-wide shadow-sm mb-8">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>Premium Developer Roadmaps</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.1] tracking-tight"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Navigate the {" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-primary">
                Complexity
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -z-0 blur-sm rounded-full" />
            </span>
            <br className="hidden sm:block" />
            of Engineering.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium"
          >
            Stop getting lost in scattered tutorials. Master software engineering through beautifully curated, interactive visual roadmaps where every topic is a complete learning module.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/roadmaps"
              className="px-8 py-4 rounded-xl bg-foreground text-background font-bold text-lg
                hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.98] dark:bg-primary dark:text-primary-foreground dark:hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)]"
            >
              Start Exploring
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="https://github.com/udaysharmadev/Michi"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-xl bg-card/40 backdrop-blur-md border border-border text-foreground font-bold text-lg
                hover:bg-muted/80 hover:border-foreground/20 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] shadow-sm"
            >
              <SiGithub className="w-5 h-5" />
              View on GitHub
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex flex-col gap-4">
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Jump into popular paths</span>
            <div className="flex flex-wrap gap-3">
              {quickAccessPills.map((pill) => (
                <Link
                  key={pill.slug}
                  href={`/roadmaps/${pill.slug}`}
                  className="px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border text-sm font-semibold text-foreground
                    hover:border-primary/50 hover:bg-primary/5 flex items-center gap-2 shadow-sm
                    transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  {pill.icon}
                  {pill.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — animated canvas preview */}
        <div className="flex-1 w-full h-[400px] lg:h-[600px] relative mt-12 lg:mt-0 perspective-1000">
          <motion.div 
            {...fadeUp(0.3)}
            className="w-full h-full relative"
          >
            {/* Glossy overlay effect for the graph container */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent z-20 pointer-events-none rounded-3xl" />
            <div className="absolute inset-0 border border-white/10 dark:border-white/5 rounded-3xl z-20 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]" />
            
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-card transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-y-0 hover:rotate-x-0">
              <HeroCanvasPreview />
            </div>
            
            {/* Shadow under the 3D element */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/20 blur-2xl rounded-full" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
