import { memo } from "react";
import type { NodeProps } from "@xyflow/react";
import {
  Globe, Code2, FileCode2, GitBranch, Layout,
  Database, Palette, Wrench, CheckCircle, Server, Rocket,
} from "lucide-react";
import type { RoadmapContentNode } from "@/data/types";

// ---------------------------------------------------------------------------
// Section icon resolver
// ---------------------------------------------------------------------------
const SectionIcon = ({ name, className }: { name?: string; className?: string }) => {
  switch (name) {
    case "globe":    return <Globe className={className} />;
    case "code":     return <Code2 className={className} />;
    case "js":       return <FileCode2 className={className} />;
    case "git":      return <GitBranch className={className} />;
    case "react":    return <Layout className={className} />;
    case "database": return <Database className={className} />;
    case "palette":  return <Palette className={className} />;
    case "tool":     return <Wrench className={className} />;
    case "check":    return <CheckCircle className={className} />;
    case "api":      return <Server className={className} />;
    case "rocket":   return <Rocket className={className} />;
    default:         return null;
  }
};

// ---------------------------------------------------------------------------
// Color map
// ---------------------------------------------------------------------------
const colorMap: Record<string, { border: string; bg: string; pillText: string }> = {
  blue: {
    border: "border-blue-400",
    bg: "bg-gradient-to-br from-blue-50/40 to-transparent",
    pillText: "text-blue-600",
  },
  green: {
    border: "border-emerald-400",
    bg: "bg-gradient-to-br from-emerald-50/40 to-transparent",
    pillText: "text-emerald-600",
  },
  yellow: {
    border: "border-amber-400",
    bg: "bg-gradient-to-br from-amber-50/40 to-transparent",
    pillText: "text-amber-600",
  },
  purple: {
    border: "border-purple-400",
    bg: "bg-gradient-to-br from-purple-50/40 to-transparent",
    pillText: "text-purple-600",
  },
  red: {
    border: "border-rose-400",
    bg: "bg-gradient-to-br from-rose-50/40 to-transparent",
    pillText: "text-rose-600",
  },
  orange: {
    border: "border-orange-400",
    bg: "bg-gradient-to-br from-orange-50/40 to-transparent",
    pillText: "text-orange-600",
  },
  default: {
    border: "border-gray-300",
    bg: "bg-gradient-to-br from-gray-50/40 to-transparent",
    pillText: "text-gray-600",
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const RoadmapSection = memo(({ data }: NodeProps<RoadmapContentNode>) => {
  const theme = colorMap[data.color || "default"] ?? colorMap.default;

  return (
    <div
      className={`relative rounded-[32px] border-[1.5px] ${theme.border} ${theme.bg} pointer-events-none transition-all duration-200`}
      style={{
        width: data.width || 400,
        height: data.height || 300,
      }}
    >
      {/* ---- Section pill ---- */}
      <div
        className={`absolute -top-4 left-6 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-bold flex items-center gap-2 shadow-sm ${theme.pillText}`}
      >
        {data.sectionIcon && (
          <SectionIcon name={data.sectionIcon} className="w-4 h-4" />
        )}
        {data.sectionNumber != null && <span>{data.sectionNumber}.</span>}
        <span className="uppercase tracking-widest text-[11px] mt-0.5">
          {data.title}
        </span>
      </div>
    </div>
  );
});

RoadmapSection.displayName = "RoadmapSection";
