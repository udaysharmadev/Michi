import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import {
  Globe, Code2, FileCode2, GitBranch, Layout,
  Database, Palette, Wrench, CheckCircle, Server, Rocket, Box, Lock,
} from "lucide-react";
import type { RoadmapContentNode } from "@/data/types";

// ---------------------------------------------------------------------------
// Section icon resolver
// ---------------------------------------------------------------------------
const SectionIcon = ({ name, className }: { name?: string; className?: string }) => {
  switch (name) {
    case "globe":    return <Globe    className={className} />;
    case "code":     return <Code2    className={className} />;
    case "js":       return <FileCode2 className={className} />;
    case "git":      return <GitBranch className={className} />;
    case "react":    return <Layout   className={className} />;
    case "database": return <Database className={className} />;
    case "palette":  return <Palette  className={className} />;
    case "tool":     return <Wrench   className={className} />;
    case "check":    return <CheckCircle className={className} />;
    case "api":      return <Server   className={className} />;
    case "rocket":   return <Rocket   className={className} />;
    case "box":      return <Box      className={className} />;
    case "lock":     return <Lock     className={className} />;
    default:         return null;
  }
};

// ---------------------------------------------------------------------------
// Color map — border, subtle tinted bg, pill text color
// ---------------------------------------------------------------------------
const colorMap: Record<string, { border: string; bg: string; pillText: string; pillBg: string }> = {
  blue: {
    border:   "border-blue-300/70 dark:border-blue-800/50",
    bg:       "bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-950/20",
    pillText: "text-blue-700 dark:text-blue-400",
    pillBg:   "bg-blue-50 border-blue-200 dark:bg-blue-950/50 dark:border-blue-800",
  },
  green: {
    border:   "border-emerald-300/70 dark:border-emerald-800/50",
    bg:       "bg-gradient-to-br from-emerald-50/30 to-transparent dark:from-emerald-950/20",
    pillText: "text-emerald-700 dark:text-emerald-400",
    pillBg:   "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-800",
  },
  yellow: {
    border:   "border-amber-300/70 dark:border-amber-800/50",
    bg:       "bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-950/20",
    pillText: "text-amber-700 dark:text-amber-400",
    pillBg:   "bg-amber-50 border-amber-200 dark:bg-amber-950/50 dark:border-amber-800",
  },
  purple: {
    border:   "border-purple-300/70 dark:border-purple-800/50",
    bg:       "bg-gradient-to-br from-purple-50/30 to-transparent dark:from-purple-950/20",
    pillText: "text-purple-700 dark:text-purple-400",
    pillBg:   "bg-purple-50 border-purple-200 dark:bg-purple-950/50 dark:border-purple-800",
  },
  red: {
    border:   "border-rose-300/70 dark:border-rose-800/50",
    bg:       "bg-gradient-to-br from-rose-50/30 to-transparent dark:from-rose-950/20",
    pillText: "text-rose-700 dark:text-rose-400",
    pillBg:   "bg-rose-50 border-rose-200 dark:bg-rose-950/50 dark:border-rose-800",
  },
  orange: {
    border:   "border-orange-300/70 dark:border-orange-800/50",
    bg:       "bg-gradient-to-br from-orange-50/30 to-transparent dark:from-orange-950/20",
    pillText: "text-orange-700 dark:text-orange-400",
    pillBg:   "bg-orange-50 border-orange-200 dark:bg-orange-950/50 dark:border-orange-800",
  },
  default: {
    border:   "border-border dark:border-border",
    bg:       "bg-gradient-to-br from-gray-50/30 to-transparent dark:from-gray-950/20",
    pillText: "text-gray-600 dark:text-gray-400",
    pillBg:   "bg-muted/50 border-border dark:bg-muted/30 dark:border-border",
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const RoadmapSection = memo(({ data }: NodeProps<RoadmapContentNode>) => {
  const theme = colorMap[data.color || "default"] ?? colorMap.default;

  return (
    <div
      className={`relative rounded-[20px] border-[1.5px] ${theme.border} ${theme.bg} pointer-events-none`}
      style={{
        width:  data.width  || 400,
        height: data.height || 300,
      }}
    >
      {/* ---- Section pill ---- */}
      <div
        className={`absolute -top-4 left-5 px-3.5 py-1.5 ${theme.pillBg} border rounded-full flex items-center gap-1.5 shadow-sm ${theme.pillText}`}
      >
        {data.sectionIcon && (
          <SectionIcon name={data.sectionIcon} className="w-3.5 h-3.5" />
        )}
        {data.sectionNumber != null && (
          <span className="text-[12px] font-bold opacity-60">{data.sectionNumber}.</span>
        )}
        <span className="text-[13px] font-semibold">
          {data.title}
        </span>
      </div>
    </div>
  );
});

RoadmapSection.displayName = "RoadmapSection";
