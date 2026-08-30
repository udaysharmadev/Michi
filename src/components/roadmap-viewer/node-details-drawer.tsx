"use client";

import React, { useMemo, useState } from "react";
import {
  X, Clock, Circle, BookOpen, CheckCircle2,
  ExternalLink, PlayCircle, FileText, ArrowRight, ArrowLeft,
  Lightbulb, Briefcase, Share2, Download, Check
} from "lucide-react";
import { useRoadmapInteraction } from "./roadmap-context";
import { RoadmapContentNode, RoadmapContentEdge, TopicData } from "@/data/types";
import { SiGithub } from "react-icons/si";
import { iconMap, difficultyColors } from "@/lib/icon-map";
import { toast } from "sonner";

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
  const { progressMap, setNodeProgress, notesMap, setNodeNote } = useRoadmapInteraction();

  const prerequisites = useMemo(() => {
    if (!nodeId) return [];
    const sourceIds = allEdges.filter((e) => e.target === nodeId).map((e) => e.source);
    return allNodes.filter((n) => sourceIds.includes(n.id));
  }, [nodeId, allEdges, allNodes]);

  const leadsTo = useMemo(() => {
    if (!nodeId) return [];
    const targetIds = allEdges.filter((e) => e.source === nodeId).map((e) => e.target);
    return allNodes.filter((n) => targetIds.includes(n.id));
  }, [nodeId, allEdges, allNodes]);

  const safeNodeId = nodeId || "";
  const [localNote, setLocalNote] = React.useState(notesMap[safeNodeId] || "");
  const [noteFor, setNoteFor] = React.useState(safeNodeId);
  if (noteFor !== safeNodeId) {
    setNoteFor(safeNodeId);
    setLocalNote(notesMap[safeNodeId] || "");
  }

  React.useEffect(() => {
    if (!safeNodeId) return;
    const timer = setTimeout(() => {
      setNodeNote(safeNodeId, localNote);
    }, 500);
    return () => clearTimeout(timer);
  }, [localNote, safeNodeId, setNodeNote]);

  const [copiedLink, setCopiedLink] = useState(false);
  const copiedTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(
    () => () => {
      if (copiedTimer.current !== null) clearTimeout(copiedTimer.current);
    },
    [],
  );

  if (!nodeData || !nodeId) return null;

  const IconComponent = nodeData.icon && iconMap[nodeData.icon] ? iconMap[nodeData.icon] : null;
  const diffClass = difficultyColors[nodeData.difficulty || "Beginner"];
  const currentProgress = progressMap[nodeId] || "not_started";

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

  const handleShareTopic = async () => {
    if (typeof window === "undefined" || !nodeId) return;
    const url = `${window.location.origin}${window.location.pathname}#${nodeId}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      toast.error("Could not copy the link.", { description: url });
      return;
    }
    setCopiedLink(true);
    if (copiedTimer.current !== null) clearTimeout(copiedTimer.current);
    copiedTimer.current = setTimeout(() => setCopiedLink(false), 2000);
    toast.success("Topic link copied!");
  };

  const handleExportNotes = () => {
    if (typeof window !== "undefined") {
      const content = `# ${nodeData.title}\n\n## Personal Notes\n\n${localNote || "*No notes recorded yet.*"}\n\n---\n*Exported from Michi Roadmap Engine*`;
      const blob = new Blob([content], { type: "text/markdown" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${nodeData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-notes.md`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Notes exported as Markdown!");
    }
  };

  return (
    <aside
      role="dialog"
      aria-label="Topic Details"
      aria-modal="true"
      className="absolute top-0 right-0 h-full w-[420px] max-w-full bg-card border-l border-border shadow-2xl z-50 flex flex-col pointer-events-auto animate-in slide-in-from-right duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border shrink-0 bg-card z-10 sticky top-0">
        <h2 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Topic Details
        </h2>
        <div className="flex items-center gap-1">
          <button
            onClick={handleShareTopic}
            title="Copy link"
            className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors cursor-pointer"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 scroll-smooth">
        {/* Hero */}
        <div className="border-b border-border pb-4 mb-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-11 h-11 shrink-0 flex items-center justify-center bg-muted rounded-xl">
              {IconComponent ? (
                <IconComponent className="w-5 h-5 text-foreground" />
              ) : (
                <div className="w-3.5 h-3.5 rounded-full bg-muted-foreground/20" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-heading text-lg font-bold tracking-tight text-foreground leading-tight mb-1.5">
                {nodeData.title}
              </h1>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider border ${diffClass}`}>
                  {nodeData.difficulty || "Beginner"}
                </span>
                {nodeData.estimatedTime && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground border border-border px-1.5 py-0.5 rounded bg-muted/30">
                    <Clock className="w-2.5 h-2.5" />
                    {nodeData.estimatedTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="border-b border-border pb-4 mb-4">
          <div className="flex gap-1.5">
            {progressConfig.map((cfg) => {
              const isActive = currentProgress === cfg.status;
              const StatusIcon = cfg.icon;
              return (
                <button
                  key={cfg.status}
                  onClick={() => setNodeProgress(nodeId, cfg.status)}
                  className={`flex-1 flex items-center justify-center gap-1 py-2 px-1.5 text-[11px] font-semibold rounded-lg border transition-all duration-150 cursor-pointer ${
                    isActive ? cfg.activeClass : cfg.inactiveClass
                  }`}
                >
                  <StatusIcon className="w-3 h-3" />
                  <span className="truncate">{cfg.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Why Learn This */}
        {nodeData.whyLearnThis && (
          <div className="border-b border-border pb-4 mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">
              Why Learn This?
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {nodeData.whyLearnThis}
            </p>
          </div>
        )}

        {/* Context */}
        {(nodeData.whenIsItUsed || nodeData.whereIsItUsed) && (
          <div className="border-b border-border pb-4 mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Context
            </h3>
            <div className="space-y-2">
              {nodeData.whenIsItUsed && (
                <div>
                  <span className="text-[11px] font-bold text-foreground block mb-0.5">When is it used?</span>
                  <p className="text-xs text-muted-foreground">{nodeData.whenIsItUsed}</p>
                </div>
              )}
              {nodeData.whereIsItUsed && (
                <div>
                  <span className="text-[11px] font-bold text-foreground block mb-0.5">Where is it used?</span>
                  <p className="text-xs text-muted-foreground">{nodeData.whereIsItUsed}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Learning Outcomes */}
        {nodeData.learningOutcomes && nodeData.learningOutcomes.length > 0 && (
          <div className="border-b border-border pb-4 mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Learning Outcomes
            </h3>
            <ul className="space-y-1.5 text-sm text-foreground/80">
              {nodeData.learningOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex gap-2 items-start">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug text-xs">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Real World Applications */}
        {nodeData.realWorldApplications && nodeData.realWorldApplications.length > 0 && (
          <div className="border-b border-border pb-4 mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Real World Applications
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-xs text-muted-foreground">
              {nodeData.realWorldApplications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Common Mistakes */}
        {nodeData.commonMistakes && nodeData.commonMistakes.length > 0 && (
          <div className="border-b border-border pb-4 mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-rose-500 mb-2">
              Common Mistakes
            </h3>
            <ul className="space-y-1 text-xs text-foreground/80">
              {nodeData.commonMistakes.map((mistake, idx) => (
                <li key={idx} className="flex gap-1.5 items-start">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">·</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Graph Context */}
        <div className="border-b border-border pb-4 mb-4 grid grid-cols-2 gap-3">
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1">
              <ArrowLeft className="w-2.5 h-2.5" /> Prerequisites
            </h3>
            {prerequisites.length > 0 ? (
              <div className="flex flex-col gap-1">
                {prerequisites.map((n) => (
                  <span key={n.id} className="text-xs font-semibold text-foreground/80">{n.data.title}</span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground italic">None</p>
            )}
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5 flex items-center gap-1">
              <ArrowRight className="w-2.5 h-2.5" /> Leads To
            </h3>
            {leadsTo.length > 0 ? (
              <div className="flex flex-col gap-1">
                {leadsTo.map((n) => (
                  <span key={n.id} className="text-xs font-semibold text-foreground/80">{n.data.title}</span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-muted-foreground italic">End of path</p>
            )}
          </div>
        </div>

        {/* Resources */}
        {nodeData.resources && nodeData.resources.length > 0 ? (
          <div className="pb-4 mb-4 border-b border-border">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Curated Resources
            </h3>
            <div className="flex flex-col gap-1.5">
              {nodeData.resources.map((res, idx) => {
                const colorClasses = ResourceColor(res.type);
                return (
                  <a
                    key={idx}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 p-2.5 rounded-lg border border-border bg-background hover:border-primary/30 hover:shadow-sm transition-all duration-150"
                  >
                    <div className={`w-8 h-8 shrink-0 flex items-center justify-center rounded-md transition-colors ${colorClasses}`}>
                      <ResourceIcon type={res.type} className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                        {res.title}
                      </div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-0.5">
                        {ResourceLabel(res.type)}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="pb-4 mb-4 border-b border-border">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Curated Resources
            </h3>
            <p className="text-xs text-muted-foreground italic">No resources added yet.</p>
          </div>
        )}

        {/* Notes */}
        <div className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Personal Notes
            </h3>
            {localNote && localNote.trim().length > 0 && (
              <button
                onClick={handleExportNotes}
                className="inline-flex items-center gap-1 text-[10px] font-semibold text-primary hover:underline cursor-pointer"
              >
                <Download className="w-2.5 h-2.5" /> Export .md
              </button>
            )}
          </div>
          <textarea
            value={localNote}
            onChange={(e) => setLocalNote(e.target.value)}
            placeholder="Add your notes for this topic..."
            className="w-full min-h-[120px] p-2.5 text-xs bg-background border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-y text-foreground placeholder:text-muted-foreground/40"
          />
        </div>
      </div>
    </aside>
  );
}
