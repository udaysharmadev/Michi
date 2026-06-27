"use client";

import { motion, useReducedMotion } from "motion/react";
import { getAllRoadmaps } from "@/data/roadmaps";

const easeStrong = [0.23, 1, 0.32, 1] as const;

// ── Node positions and data ─────────────────────────────────────────────────
const nodes = [
  { id: "react",   label: "React",       dot: "bg-blue-500",     x: "29.6%", y: "40.8%", isCenter: true  },
  { id: "ts",      label: "TypeScript",  dot: "bg-blue-400",     x: "7.6%",  y: "14.1%", isCenter: false },
  { id: "node",    label: "Node.js",     dot: "bg-emerald-500",  x: "56%",   y: "24.5%", isCenter: false },
  { id: "next",    label: "Next.js",     dot: "bg-gray-700",     x: "4.4%",  y: "72%",   isCenter: false },
  { id: "docker",  label: "Docker",      dot: "bg-sky-500",      x: "55.6%", y: "72.5%", isCenter: false },
  { id: "psql",    label: "PostgreSQL",  dot: "bg-indigo-500",   x: "31%",   y: "76.6%", isCenter: false },
];

const edges = [
  { d: "M 192 196 Q 160 148 136 106" },
  { d: "M 248 210 Q 292 178 318 158" },
  { d: "M 148 246 Q 100 308 84 350"  },
  { d: "M 248 252 Q 296 316 322 356" },
  { d: "M 200 256 Q 200 320 218 370" },
];

const floatOffsets = [0, -7, -5, -9, -6, -4];
const floatDurations = [5.5, 4.2, 6.1, 4.8, 5.0, 6.4];

// ── Node component ──────────────────────────────────────────────────────────
function NodeCard({
  label, dot, x, y, isCenter, floatOffset, floatDuration, motionDelay,
}: {
  label: string; dot: string; x: string; y: string; isCenter: boolean;
  floatOffset: number; floatDuration: number; motionDelay: number;
}) {
  return (
    <motion.div
      className={`absolute select-none flex items-center gap-2 ${
        isCenter
          ? "px-5 py-3 bg-foreground border-0 rounded-2xl shadow-2xl text-sm font-bold text-background ring-4 ring-foreground/10 z-10"
          : "px-4 py-2.5 bg-card border border-border rounded-xl shadow-sm text-sm font-semibold text-card-foreground z-0"
      }`}
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, floatOffset, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: motionDelay, ease: easeStrong },
        scale:   { duration: 0.5, delay: motionDelay, ease: easeStrong },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: motionDelay + 0.5,
        },
      }}
    >
      <div className={`w-2 h-2 rounded-full shrink-0 ${dot} ${isCenter ? "animate-pulse" : ""}`} />
      {label}
    </motion.div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export function HeroCanvasPreview() {
  const shouldReduce = useReducedMotion();
  const roadmaps = getAllRoadmaps();

  if (shouldReduce) {
    return (
      <div className="relative w-full h-full min-h-[320px] max-w-[500px] ml-auto">
        <div className="absolute inset-0 bg-muted/30 border border-border rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
          {nodes.map((n) => (
            <div key={n.id} className={`absolute px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${n.isCenter ? "bg-foreground text-background font-bold px-5 py-3 rounded-2xl shadow-xl" : "bg-card border border-border text-card-foreground shadow-sm"}`} style={{ left: n.x, top: n.y }}>
              <div className={`w-2 h-2 rounded-full ${n.dot}`} />
              {n.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-full h-full min-h-[320px] max-w-[500px] ml-auto"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: easeStrong }}
    >
      <div className="absolute inset-0 bg-muted/20 border border-border rounded-3xl overflow-hidden shadow-2xl">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-20 text-foreground"
          style={{ backgroundImage: "radial-gradient(currentColor 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
        />

        {/* SVG connectors */}
        <svg viewBox="0 0 500 480" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" className="fill-border" />
            </marker>
          </defs>
          {edges.map((edge, i) => (
            <motion.path
              key={i}
              d={edge.d}
              fill="none"
              className="stroke-border"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6 + i * 0.12, ease: easeStrong }}
            />
          ))}
        </svg>

        {/* Floating nodes */}
        {nodes.map((node, i) => (
          <NodeCard
            key={node.id}
            {...node}
            floatOffset={floatOffsets[i]}
            floatDuration={floatDurations[i]}
            motionDelay={0.3 + i * 0.1}
          />
        ))}

        {/* Bottom badge */}
        <motion.div
          className="absolute bottom-5 right-5 px-3 py-1.5 bg-card border border-border rounded-lg shadow-sm text-[11px] font-semibold text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          {roadmaps.length} roadmaps
        </motion.div>

        {/* Edge vignette */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_120%)] opacity-50" />
      </div>
    </motion.div>
  );
}
