"use client";

import { motion, useReducedMotion } from "motion/react";
import { Map, CheckCircle, Zap } from "lucide-react";

export function FeaturesBento() {
  const reduce = useReducedMotion();

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border/50">
      <div className="mb-16">
        <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ letterSpacing: "-0.02em" }}>
          Engineered for <br className="hidden md:block" /> clarity and momentum.
        </h2>
        <p className="text-lg text-muted-foreground max-w-[45ch]">
          Michi strips away the noise, presenting complex engineering disciplines as navigable, interconnected graphs.
        </p>
      </div>

      <motion.div 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[280px]"
      >
        {/* Large feature cell */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="md:col-span-2 md:row-span-2 bg-card rounded-3xl border border-border overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-8 left-8 right-8 z-10">
            <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
              <Map className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2">Visual Knowledge Graphs</h3>
            <p className="text-muted-foreground max-w-sm">
              Stop guessing what to learn next. Every discipline is mapped out as an interactive graph, showing exact dependencies and progression paths.
            </p>
          </div>
          {/* Abstract visual for graph */}
          <div className="absolute bottom-0 right-0 left-8 h-48 border-t border-l border-border bg-background rounded-tl-2xl overflow-hidden opacity-50 translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-primary)_0%,transparent_50%)] opacity-[0.03]" />
          </div>
        </motion.div>

        {/* Small cell 1 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-3xl border border-border p-8 relative overflow-hidden group"
        >
          <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center mb-4">
            <CheckCircle className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="font-heading text-lg font-bold mb-2">Track your momentum</h3>
          <p className="text-sm text-muted-foreground">
            Mark topics as learning or completed. Your progress is saved locally immediately.
          </p>
        </motion.div>

        {/* Small cell 2 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-3xl border border-border p-8 relative overflow-hidden group"
        >
          <div className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center mb-4">
            <Zap className="w-5 h-5 text-foreground" />
          </div>
          <h3 className="font-heading text-lg font-bold mb-2">Curated Resources</h3>
          <p className="text-sm text-muted-foreground">
            No more outdated tutorials. Every node links to the highest-quality, hand-picked learning material.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
