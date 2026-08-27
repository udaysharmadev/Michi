"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Precision grid background (Linear style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-30" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={reduce ? undefined : { animate: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.div variants={reduce ? undefined : fadeIn} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-muted border border-border text-sm font-medium text-muted-foreground">
            <Terminal className="w-4 h-4" />
            <span>Developer Roadmaps v2.0</span>
          </div>
        </motion.div>

        <motion.div variants={reduce ? undefined : fadeIn}>
          <h1 className="text-5xl md:text-7xl font-semibold text-foreground mb-6 tracking-tight">
            Master engineering <br className="hidden md:block" />
            <span className="text-foreground">without the noise.</span>
          </h1>
        </motion.div>

        <motion.div variants={reduce ? undefined : fadeIn}>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[600px] mx-auto leading-relaxed">
            Michi provides precise, step-by-step knowledge graphs for every software discipline. Curated resources, zero filler.
          </p>
        </motion.div>

        <motion.div variants={reduce ? undefined : fadeIn} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#roadmaps"
            className="w-full sm:w-auto h-11 px-6 rounded-md bg-foreground text-background flex items-center justify-center font-medium hover:bg-foreground/90 transition-colors group"
          >
            Explore Roadmaps
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://github.com/udaysharmadev/Michi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-11 px-6 rounded-md bg-transparent border border-border text-foreground flex items-center justify-center font-medium hover:bg-muted transition-colors"
          >
            Star on GitHub
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
