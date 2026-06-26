"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easeStrong = [0.23, 1, 0.32, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function Reveal({ children, delay = 0, className = "", y = 24 }: RevealProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={shouldReduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: easeStrong }}
    >
      {children}
    </motion.div>
  );
}

export function RevealStagger({
  children,
  className = "",
  staggerDelay = 0.07,
  containerDelay = 0,
}: {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  containerDelay?: number;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
            delay: containerDelay + i * staggerDelay,
            ease: easeStrong,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
