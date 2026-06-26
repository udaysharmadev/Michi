"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

// ── Floating node data ─────────────────────────────────────────────────────
const nodes = [
  { id: "react",   label: "React",      dot: "bg-blue-500",    x: 148, y: 200, z: 10 },
  { id: "ts",      label: "TypeScript", dot: "bg-blue-400",    x: 52,  y: 72,  z: 0  },
  { id: "node",    label: "Node.js",    dot: "bg-emerald-500", x: 282, y: 122, z: 0  },
  { id: "next",    label: "Next.js",    dot: "bg-gray-700",    x: 28,  y: 352, z: 0  },
  { id: "docker",  label: "Docker",     dot: "bg-sky-500",     x: 290, y: 360, z: 0  },
];

// SVG connector paths between nodes (React is center hub)
const edges = [
  { d: "M 178 200 Q 148 140 152 98"  },    // React → TypeScript
  { d: "M 248 200 Q 282 168 320 154" },    // React → Node.js
  { d: "M 148 250 Q 100 310 88 360"  },    // React → Next.js
  { d: "M 248 250 Q 290 310 328 368" },    // React → Docker
];

// ── FloatingNode ────────────────────────────────────────────────────────────
function FloatingNode({
  label,
  dot,
  x,
  y,
  z,
  floatOffset,
  delay,
}: {
  label: string;
  dot: string;
  x: number;
  y: number;
  z: number;
  floatOffset: number;
  delay: number;
}) {
  const isCentral = z === 10;
  return (
    <motion.div
      className={`absolute select-none ${
        isCentral
          ? "px-5 py-3 bg-black border border-black rounded-2xl shadow-lg text-sm font-bold text-white ring-4 ring-black/10"
          : "px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-900"
      } flex items-center gap-2`}
      style={{ left: x, top: y, zIndex: isCentral ? 10 : 1 }}
      animate={{ y: [0, floatOffset, 0] }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className={`w-2 h-2 rounded-full shrink-0 ${dot} ${isCentral ? "animate-pulse" : ""}`} />
      {label}
    </motion.div>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export function HeroCanvasPreview() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    // Accessible static fallback — no motion, all nodes visible
    return (
      <div className="relative h-[480px] w-full max-w-xl">
        <div className="absolute inset-0 bg-gray-50 border border-gray-200 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.05)] overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`absolute px-4 py-2.5 rounded-xl shadow-sm text-sm font-semibold flex items-center gap-2 ${
                node.z === 10
                  ? "bg-black border border-black text-white font-bold rounded-2xl shadow-lg px-5 py-3"
                  : "bg-white border border-gray-200 text-gray-900"
              }`}
              style={{ left: node.x, top: node.y }}
            >
              <div className={`w-2 h-2 rounded-full ${node.dot}`} />
              {node.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative h-[480px] w-full max-w-xl"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="absolute inset-0 bg-gray-50 border border-gray-200 rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.05)] overflow-hidden">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: "radial-gradient(#d1d5db 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }}
        />

        {/* Connector lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {edges.map((edge, i) => (
            <motion.path
              key={i}
              d={edge.d}
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="5 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.23, 1, 0.32, 1] }}
            />
          ))}
        </svg>

        {/* Floating nodes */}
        {nodes.map((node, i) => (
          <FloatingNode
            key={node.id}
            label={node.label}
            dot={node.dot}
            x={node.x}
            y={node.y}
            z={node.z}
            floatOffset={node.z === 10 ? -6 : -4 + (i % 3)}
            delay={i * 0.4}
          />
        ))}

        {/* Fade vignette on edges */}
        <div className="absolute inset-0 rounded-3xl" style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(249,250,251,0.6) 100%)"
        }} />
      </div>
    </motion.div>
  );
}
