"use client";

import { motion, useReducedMotion } from "motion/react";

const easeStrong = [0.23, 1, 0.32, 1] as const;

// ── Node positions and data ─────────────────────────────────────────────────
const nodes = [
  { id: "react",   label: "React",       dot: "bg-blue-500",     x: 148, y: 196, isCenter: true  },
  { id: "ts",      label: "TypeScript",  dot: "bg-blue-400",     x: 38,  y: 68,  isCenter: false },
  { id: "node",    label: "Node.js",     dot: "bg-emerald-500",  x: 280, y: 118, isCenter: false },
  { id: "next",    label: "Next.js",     dot: "bg-gray-700",     x: 22,  y: 346, isCenter: false },
  { id: "docker",  label: "Docker",      dot: "bg-sky-500",      x: 278, y: 348, isCenter: false },
  { id: "psql",    label: "PostgreSQL",  dot: "bg-indigo-500",   x: 155, y: 368, isCenter: false },
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
  label: string; dot: string; x: number; y: number; isCenter: boolean;
  floatOffset: number; floatDuration: number; motionDelay: number;
}) {
  return (
    <motion.div
      className={`absolute select-none flex items-center gap-2 ${
        isCenter
          ? "px-5 py-3 bg-gray-900 border-0 rounded-2xl shadow-2xl text-sm font-bold text-white ring-4 ring-gray-900/15 z-10"
          : "px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-800 z-0"
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

  if (shouldReduce) {
    return (
      <div className="relative h-[480px] w-full max-w-[500px]">
        <div className="absolute inset-0 bg-gray-50/80 border border-gray-200 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }} />
          {nodes.map((n) => (
            <div key={n.id} className={`absolute px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 ${n.isCenter ? "bg-gray-900 text-white font-bold px-5 py-3 rounded-2xl shadow-xl" : "bg-white border border-gray-200 text-gray-800 shadow-sm"}`} style={{ left: n.x, top: n.y }}>
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
      className="relative h-[480px] w-full max-w-[500px]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: easeStrong }}
    >
      <div className="absolute inset-0 bg-gray-50/80 border border-gray-200 rounded-3xl overflow-hidden shadow-[0_12px_48px_rgb(0,0,0,0.06)]">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{ backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "22px 22px" }}
        />

        {/* SVG connectors */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          <defs>
            <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
              <polygon points="0 0, 6 2, 0 4" fill="#e2e8f0" />
            </marker>
          </defs>
          {edges.map((edge, i) => (
            <motion.path
              key={i}
              d={edge.d}
              fill="none"
              stroke="#e2e8f0"
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
          className="absolute bottom-5 right-5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm text-[11px] font-semibold text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          30+ roadmaps
        </motion.div>

        {/* Edge vignette */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(249,250,251,0.55) 100%)"
        }} />
      </div>
    </motion.div>
  );
}
