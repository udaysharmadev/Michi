"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 hero-grid pointer-events-none -z-10 opacity-60" />
      
      {/* Radial fade at top */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.65_0.2_265/0.08),transparent)] pointer-events-none -z-10 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.65_0.2_265/0.15),transparent)]" />

      <motion.div
        initial="initial"
        animate="animate"
        variants={reduce ? undefined : { animate: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {/* Badge */}
        <motion.div variants={reduce ? undefined : fadeUp} className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs font-semibold text-primary tracking-wide">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Roadmaps v2.0</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={reduce ? undefined : fadeUp}>
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold text-foreground mb-6 tracking-[-0.03em] leading-[1.05]"
            style={{ textWrap: "balance" }}
          >
            Master engineering
            <br />
            <span className="text-primary">without the noise.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.div variants={reduce ? undefined : fadeUp}>
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-[560px] mx-auto leading-relaxed"
            style={{ textWrap: "pretty" }}
          >
            Precise, step-by-step knowledge graphs for every software discipline. Curated resources, zero filler.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={reduce ? undefined : fadeUp} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="#roadmaps"
            className="w-full sm:w-auto h-11 px-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm hover:opacity-90 transition-all group shadow-[0_0_0_0_oklch(0.65_0.2_265/0)] hover:shadow-[0_0_20px_oklch(0.65_0.2_265/0.15)]"
          >
            Explore Roadmaps
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
          <Link
            href="https://github.com/udaysharmadev/Michi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-11 px-7 rounded-lg bg-transparent border border-border text-foreground flex items-center justify-center font-semibold text-sm hover:bg-muted/50 transition-all"
          >
            Star on GitHub
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
