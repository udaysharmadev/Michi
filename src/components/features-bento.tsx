"use client";

import { motion, useReducedMotion } from "motion/react";
import { Map, CheckCircle, Zap } from "lucide-react";

export function FeaturesBento() {
  const reduce = useReducedMotion();

  const stagger = {
    animate: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section id="features" className="py-28 px-6 max-w-7xl mx-auto border-t border-border/40 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground" style={{ letterSpacing: "-0.02em" }}>
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">Clarity</span> <br className="hidden md:block" /> and Momentum.
          </h2>
          <p className="text-lg text-muted-foreground max-w-[48ch] font-medium">
            Michi strips away the noise, presenting complex engineering disciplines as navigable, beautiful, and interconnected graphs.
          </p>
        </div>
      </div>

      <motion.div 
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[300px]"
      >
        {/* Large feature cell */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="md:col-span-2 md:row-span-2 bg-card rounded-[2rem] border border-border/50 overflow-hidden relative group shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-10 left-10 right-10 z-10">
            <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500">
              <Map className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-3xl font-bold mb-3 text-foreground tracking-tight">Visual Knowledge Graphs</h3>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Stop guessing what to learn next. Every discipline is mapped out as an interactive graph, showing exact dependencies and progression paths.
            </p>
          </div>
          {/* Abstract visual for graph */}
          <div className="absolute bottom-0 right-0 left-10 h-56 border-t border-l border-border bg-background/50 backdrop-blur-sm rounded-tl-3xl overflow-hidden translate-y-12 group-hover:translate-y-6 transition-transform duration-700 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,var(--color-primary)_0%,transparent_50%)] opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700" />
            {/* Mock nodes */}
            <div className="absolute top-10 left-10 w-32 h-12 rounded-xl bg-card border border-border shadow-sm" />
            <div className="absolute top-10 left-52 w-32 h-12 rounded-xl bg-primary/10 border border-primary/20 shadow-sm" />
            <div className="absolute top-32 left-32 w-32 h-12 rounded-xl bg-card border border-border shadow-sm" />
          </div>
        </motion.div>

        {/* Small cell 1 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-[2rem] border border-border/50 p-10 relative overflow-hidden group shadow-sm hover:shadow-lg hover:border-border transition-all duration-500 flex flex-col justify-between"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[50px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-500" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <CheckCircle className="w-6 h-6 text-foreground group-hover:text-emerald-500 transition-colors" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Track your momentum</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mark topics as learning or completed. Your progress is saved locally immediately.
            </p>
          </div>
        </motion.div>

        {/* Small cell 2 */}
        <motion.div 
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-[2rem] border border-border/50 p-10 relative overflow-hidden group shadow-sm hover:shadow-lg hover:border-border transition-all duration-500 flex flex-col justify-between"
        >
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 blur-[50px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500" />
          <div>
            <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-6 h-6 text-foreground group-hover:text-amber-500 transition-colors" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-2">Curated Resources</h3>
            <p className="text-muted-foreground leading-relaxed">
              No more outdated tutorials. Every node links to the highest-quality, hand-picked learning material.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
