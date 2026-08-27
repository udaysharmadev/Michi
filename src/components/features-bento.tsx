"use client";

import { motion, useReducedMotion } from "motion/react";
import { Map, CheckCircle, Zap } from "lucide-react";

export function FeaturesBento() {
  const reduce = useReducedMotion();

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-foreground">
          Engineered for clarity.
        </h2>
        <p className="text-muted-foreground text-lg max-w-[600px]">
          Michi strips away the noise, presenting complex engineering disciplines as navigable, interconnected graphs.
        </p>
      </div>

      <motion.div 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px]"
      >
        {/* Large feature cell */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="md:col-span-2 md:row-span-2 bg-card rounded-xl border border-border p-8 flex flex-col justify-between hover:border-border/80 transition-colors"
        >
          <div>
            <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center mb-6 text-foreground">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground tracking-tight">Visual Knowledge Graphs</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Stop guessing what to learn next. Every discipline is mapped out as an interactive graph, showing exact dependencies and progression paths.
            </p>
          </div>
          {/* Replaced fake glowing rects with a minimal wireframe representation */}
          <div className="mt-8 border-t border-border pt-6">
             <div className="flex gap-4">
               <div className="w-24 h-8 border border-border rounded flex items-center justify-center text-xs text-muted-foreground">Topics</div>
               <div className="w-8 flex items-center"><div className="w-full h-px bg-border" /></div>
               <div className="w-24 h-8 border border-primary/50 bg-primary/5 rounded flex items-center justify-center text-xs text-primary">Resources</div>
             </div>
          </div>
        </motion.div>

        {/* Small cell 1 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-xl border border-border p-8 flex flex-col justify-between hover:border-border/80 transition-colors"
        >
          <div>
            <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center mb-6 text-foreground">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground tracking-tight">Track Momentum</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mark topics as learning or completed. Your progress is saved locally.
            </p>
          </div>
        </motion.div>

        {/* Small cell 2 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-xl border border-border p-8 flex flex-col justify-between hover:border-border/80 transition-colors"
        >
          <div>
            <div className="w-10 h-10 rounded-md bg-muted border border-border flex items-center justify-center mb-6 text-foreground">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground tracking-tight">Curated Resources</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No more outdated tutorials. Every node links to high-quality, verified material.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
