import React from "react";
import {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
} from "react-icons/si";

// ── Shared icon map (used in roadmap-node, node-details-drawer, command-palette)
export const iconMap: Record<string, React.FC<{ className?: string }>> = {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
};

// ── Shared difficulty badge colors
export const difficultyColors: Record<string, string> = {
  Beginner:     "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  Advanced:     "text-rose-500 bg-rose-500/10 border-rose-500/20",
};

// ── Shared animation easing
export const easeStrong = [0.23, 1, 0.32, 1] as const;
