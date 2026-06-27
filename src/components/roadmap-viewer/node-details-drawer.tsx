"use client";

import React, { useMemo } from "react";
import {
  X, Clock, Circle, BookOpen, CheckCircle2,
  ExternalLink, PlayCircle, FileText, ArrowRight, ArrowLeft,
  AlertTriangle, Lightbulb, Briefcase, Globe
} from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import { RoadmapContentNode, RoadmapContentEdge, TopicData } from "@/data/types";
import {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
} from "react-icons/si";

// ── Icon map ────────────────────────────────────────────────────────────────
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  SiJavascript, SiGit, SiGithub, SiTypescript, SiReact,
  SiVuedotjs, SiAngular, SiSvelte, SiNextdotjs, SiRedux,
  SiTailwindcss, SiSass, SiVite, SiWebpack, SiEslint,
  SiPrettier, SiJest, SiCypress, SiGraphql, SiHtml5, SiCss,
};

// ── Difficulty badge colors ─────────────────────────────────────────────────
const difficultyColors: Record<string, string> = {
  Beginner: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
  Advanced: "text-rose-500 bg-rose-500/10 border-rose-500/20",
};

// ── Progress status config ──────────────────────────────────────────────────
const progressConfig = [
  {
    status: "not_started" as const,
    label: "Not Started",
    icon: Circle,
    activeClass: "bg-primary text-primary-foreground border-primary",
    inactiveClass: "bg-background text-muted-foreground border-border hover:border-primary/50 hover:bg-muted",
  },
  {
    status: "learning" as const,
    label: "Learning",
    icon: BookOpen,
    activeClass: "bg-amber-500 text-background border-amber-500",
    inactiveClass: "bg-background text-muted-foreground border-border hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-500",
  },
  {
    status: "completed" as const,
    label: "Completed",
    icon: CheckCircle2,
    activeClass: "bg-emerald-500 text-background border-emerald-500",
    inactiveClass: "bg-background text-muted-foreground border-border hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-500",
  },
] as const;

// ── Props ───────────────────────────────────────────────────────────────────
interface NodeDetailsDrawerProps {
  nodeData: TopicData | null;
  nodeId: string | null;
  onClose: () => void;
  allNodes: RoadmapContentNode[];
  allEdges: RoadmapContentEdge[];
}

export function NodeDetailsDrawer({
  nodeData,
  nodeId,
  onClose,
  allNodes,
  allEdges,
}: NodeDetailsDrawerProps) {
  const { progressMap, setNodeProgress } = useRoadmapInteraction();

  // ── Compute prerequisites (edges where target === nodeId) ───────────────
  const prerequisites = useMemo(() => {
    if (!nodeId) return [];
    const sourceIds = allEdges
      .filter((e) => e.target === nodeId)
      .map((e) => e.source);
    return allNodes.filter((n) => sourceIds.includes(n.id));
  }, [nodeId, allEdges, allNodes]);

  // ── Compute "leads to" (edges where source === nodeId) ─────────────────
  const leadsTo = useMemo(() => {
    if (!nodeId) return [];
    const targetIds = allEdges
      .filter((e) => e.source === nodeId)
      .map((e) => e.target);
    return allNodes.filter((n) => targetIds.includes(n.id));
  }, [nodeId, allEdges, allNodes]);

  if (!nodeData || !nodeId) return null;

  const IconComponent = nodeData.icon && iconMap[nodeData.icon] ? iconMap[nodeData.icon] : null;
  const diffClass = difficultyColors[nodeData.difficulty || "Beginner"];
  const currentProgress = progressMap[nodeId] || "not_started";

  // ── Resource Icon Resolver ──────────────────────────────────────────────────
  const ResourceIcon = ({ type, className }: { type: string; className?: string }) => {
    switch (type) {
      case 'official': return <BookOpen className={className} />;
      case 'video_en': return <PlayCircle className={className} />;
      case 'video_hi': return <PlayCircle className={className} />;
      case 'article': return <FileText className={className} />;
      case 'github': return <SiGithub className={className} />;
      case 'cheat_sheet': return <Lightbulb className={className} />;
      case 'deep_dive': return <Briefcase className={className} />;
      default: return <ExternalLink className={className} />;
    }
  };

  const ResourceColor = (type: string) => {
    switch (type) {
      case 'video_en':
      case 'video_hi': return "bg-red-500/10 group-hover:bg-red-500/20 text-red-500";
      case 'official': return "bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-500";
      case 'github': return "bg-foreground/10 group-hover:bg-foreground/20 text-foreground";
      case 'cheat_sheet': return "bg-yellow-500/10 group-hover:bg-yellow-500/20 text-yellow-600";
      case 'deep_dive': return "bg-purple-500/10 group-hover:bg-purple-500/20 text-purple-500";
      default: return "bg-primary/10 group-hover:bg-primary/20 text-primary";
    }
  };

  const ResourceLabel = (type: string) => {
    switch (type) {
      case 'video_en': return "Video (EN)";
      case 'video_hi': return "Video (HI)";
      case 'official': return "Official Docs";
      case 'article': return "Article";
      case 'github': return "GitHub Repo";
      case 'cheat_sheet': return "Cheat Sheet";
      case 'deep_dive': return "Deep Dive";
      default: return "Resource";
    }
  };

  return (
    <div className="absolute top-0 right-0 h-full w-[460px] bg-card border-l border-border shadow-2xl z-50 flex flex-col pointer-events-auto animate-in slide-in-from-right duration-200">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-card z-10 sticky top-0 shadow-sm">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          Knowledge Entity
        </h2>
        <button
          onClick={onClose}
          className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── Scrollable Content ─────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
        {/* ─── 1. Hero ─────────────────────────────────────────────────── */}
        <div className="border-b border-border pb-5 mb-5">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-muted/50 border border-border rounded-2xl shadow-sm">
              {IconComponent ? (
                <IconComponent className="w-7 h-7 text-foreground" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-muted-foreground/30" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading text-2xl font-black tracking-tight text-foreground leading-tight mb-2">
                {nodeData.title}
              </h1>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${diffClass}`}>
                  {nodeData.difficulty || "Beginner"}
                </span>
                {nodeData.estimatedTime && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 rounded-full bg-muted/30">
                    <Clock className="w-3 h-3" />
                    {nodeData.estimatedTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ─── 2. Progress Status ──────────────────────────────────────── */}
        <div className="border-b border-border pb-5 mb-5">
          <div className="flex gap-2">
            {progressConfig.map((cfg) => {
              const isActive = currentProgress === cfg.status;
              const StatusIcon = cfg.icon;
              return (
                <button
                  key={cfg.status}
                  onClick={() => setNodeProgress(nodeId, cfg.status)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
                    isActive ? cfg.activeClass : cfg.inactiveClass
                  }`}
                >
                  <StatusIcon className="w-3.5 h-3.5" />
                  <span className="truncate">{cfg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── 3. Why Learn This? ──────────────────────────────────────── */}
        {nodeData.whyLearnThis && (
          <div className="border-b border-border pb-5 mb-5 bg-primary/5 -mx-6 px-6 py-4 border-t">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-primary mb-2 flex items-center gap-1.5">
              Why Learn This?
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              {nodeData.whyLearnThis}
            </p>
          </div>
        )}

        {/* ─── 4. Context (When/Where) ─────────────────────────────────── */}
        {(nodeData.whenIsItUsed || nodeData.whereIsItUsed) && (
          <div className="border-b border-border pb-5 mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Context
            </h3>
            <div className="space-y-3">
              {nodeData.whenIsItUsed && (
                <div>
                  <span className="text-xs font-bold text-foreground block mb-1">When is it used?</span>
                  <p className="text-sm text-muted-foreground font-medium">{nodeData.whenIsItUsed}</p>
                </div>
              )}
              {nodeData.whereIsItUsed && (
                <div>
                  <span className="text-xs font-bold text-foreground block mb-1">Where is it used?</span>
                  <p className="text-sm text-muted-foreground font-medium">{nodeData.whereIsItUsed}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ─── 5. Learning Outcomes ────────────────────────────────────── */}
        {nodeData.learningOutcomes && nodeData.learningOutcomes.length > 0 && (
          <div className="border-b border-border pb-5 mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Learning Outcomes
            </h3>
            <ul className="space-y-2.5 text-sm text-foreground/80 font-medium">
              {nodeData.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-2.5 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ─── 6. Real World Applications ──────────────────────────────── */}
        {nodeData.realWorldApplications && nodeData.realWorldApplications.length > 0 && (
          <div className="border-b border-border pb-5 mb-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-1.5">
              Real World Applications
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground font-medium">
              {nodeData.realWorldApplications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ─── 7. Common Mistakes ──────────────────────────────────────── */}
        {nodeData.commonMistakes && nodeData.commonMistakes.length > 0 && (
          <div className="border-b border-border pb-5 mb-5 bg-rose-500/5 -mx-6 px-6 py-4 border-t">
            <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-rose-500 mb-3 flex items-center gap-1.5">
              Common Mistakes
            </h3>
            <ul className="space-y-2 text-sm text-foreground/80 font-medium">
              {nodeData.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ─── 8. Graph Context (Prereqs / Leads To) ───────────────────── */}
        <div className="border-b border-border pb-5 mb-5 grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Prerequisites
            </h3>
            {prerequisites.length > 0 ? (
              <div className="flex flex-col gap-1.5">
                {prerequisites.map((n) => (
                  <span key={n.id} className="text-sm font-semibold text-foreground/90">{n.data.title}</span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic font-medium">None</p>
            )}
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" /> Leads To
            </h3>
            {leadsTo.length > 0 ? (
              <div className="flex flex-col gap-1.5">
                {leadsTo.map((n) => (
                  <span key={n.id} className="text-sm font-semibold text-foreground/90">{n.data.title}</span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground italic font-medium">End of path</p>
            )}
          </div>
        </div>

        {/* ─── 9. Resources ────────────────────────────────────────────── */}
        {nodeData.resources && nodeData.resources.length > 0 ? (
          <div className="pb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Curated Resources
            </h3>
            <div className="flex flex-col gap-2.5">
              {nodeData.resources.map((res, idx) => {
                const colorClasses = ResourceColor(res.type);
                return (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-lg transition-colors duration-200 ${colorClasses}`}>
                      <ResourceIcon type={res.type} className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {res.title}
                      </div>
                      <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                        {ResourceLabel(res.type)}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="pb-4">
             <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Curated Resources
            </h3>
            <p className="text-sm text-muted-foreground italic font-medium">No resources added yet.</p>
          </div>
        )}

      </div>
    </div>
  );
}
