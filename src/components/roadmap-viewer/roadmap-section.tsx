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
    border:   "border-blue-300/70",
    bg:       "bg-gradient-to-br from-blue-50/30 to-transparent",
    pillText: "text-blue-700",
    pillBg:   "bg-blue-50 border-blue-200",
  },
  green: {
    border:   "border-emerald-300/70",
    bg:       "bg-gradient-to-br from-emerald-50/30 to-transparent",
    pillText: "text-emerald-700",
    pillBg:   "bg-emerald-50 border-emerald-200",
  },
  yellow: {
    border:   "border-amber-300/70",
    bg:       "bg-gradient-to-br from-amber-50/30 to-transparent",
    pillText: "text-amber-700",
    pillBg:   "bg-amber-50 border-amber-200",
  },
  purple: {
    border:   "border-purple-300/70",
    bg:       "bg-gradient-to-br from-purple-50/30 to-transparent",
    pillText: "text-purple-700",
    pillBg:   "bg-purple-50 border-purple-200",
  },
  red: {
    border:   "border-rose-300/70",
    bg:       "bg-gradient-to-br from-rose-50/30 to-transparent",
    pillText: "text-rose-700",
    pillBg:   "bg-rose-50 border-rose-200",
  },
  orange: {
    border:   "border-orange-300/70",
    bg:       "bg-gradient-to-br from-orange-50/30 to-transparent",
    pillText: "text-orange-700",
    pillBg:   "bg-orange-50 border-orange-200",
  },
  default: {
    border:   "border-border",
    bg:       "bg-gradient-to-br from-gray-50/30 to-transparent",
    pillText: "text-gray-600",
    pillBg:   "bg-muted/50 border-border",
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
