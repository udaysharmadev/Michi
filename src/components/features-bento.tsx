"use client";

import { motion, useReducedMotion } from "motion/react";
import { Map, CheckCircle, Zap } from "lucide-react";

export function FeaturesBento() {
  const reduce = useReducedMotion();

  const stagger = {
    animate: { transition: { staggerChildren: 0.08 } },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section id="features" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="mb-14">
        <h2
          className="font-heading text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-3 text-foreground"
          style={{ textWrap: "balance" }}
        >
          Engineered for clarity.
        </h2>
        <p className="text-muted-foreground text-base max-w-[520px] leading-relaxed">
          Complex engineering disciplines, distilled into navigable, interconnected graphs.
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 auto-rows-[220px]"
      >
        {/* Large feature cell */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="md:col-span-2 md:row-span-2 bg-card rounded-xl border border-border p-7 flex flex-col justify-between hover:border-primary/20 transition-colors"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Map className="w-4.5 h-4.5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-foreground tracking-tight">Visual Knowledge Graphs</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              Every discipline mapped as an interactive graph with exact dependencies and progression paths.
            </p>
          </div>
          <div className="mt-6 border-t border-border pt-5">
            <div className="flex gap-3 items-center">
              <div className="w-20 h-7 border border-border rounded-md flex items-center justify-center text-[11px] font-medium text-muted-foreground">Topics</div>
              <div className="w-6 flex items-center"><div className="w-full h-px bg-border" /></div>
              <div className="w-20 h-7 border border-primary/30 bg-primary/5 rounded-md flex items-center justify-center text-[11px] font-medium text-primary">Resources</div>
            </div>
          </div>
        </motion.div>

        {/* Small cell 1 */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-xl border border-border p-7 flex flex-col justify-between hover:border-primary/20 transition-colors"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <CheckCircle className="w-4.5 h-4.5 text-primary" />
            </div>
            <h3 className="text-base font-bold mb-1.5 text-foreground tracking-tight">Track Progress</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mark topics as learning or completed. Progress saved locally.
            </p>
          </div>
        </motion.div>

        {/* Small cell 2 */}
        <motion.div
          variants={reduce ? undefined : fadeUp}
          className="bg-card rounded-xl border border-border p-7 flex flex-col justify-between hover:border-primary/20 transition-colors"
        >
          <div>
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <Zap className="w-4.5 h-4.5 text-primary" />
            </div>
            <h3 className="text-base font-bold mb-1.5 text-foreground tracking-tight">Curated Resources</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every node links to high-quality, verified material.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
