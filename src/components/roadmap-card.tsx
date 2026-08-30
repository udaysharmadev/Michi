import Link from "next/link";
import { RoadmapMeta } from "@/data/roadmaps";
import { ArrowRight, BarChart, BookOpen, Layers } from "lucide-react";

export function RoadmapCard({ roadmap, className = "" }: { roadmap: RoadmapMeta; className?: string }) {
  return (
    <Link
      href={`/roadmaps/${roadmap.slug}`}
      className={`group relative flex flex-col bg-card rounded-xl border border-border p-5 hover:border-primary/30 hover:shadow-[0_0_0_1px_oklch(0.65_0.2_265/0.08),0_4px_16px_oklch(0.65_0.2_265/0.06)] transition-all duration-200 ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-base font-bold text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">
            {roadmap.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            <Layers className="w-3 h-3" />
            {roadmap.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1 line-clamp-2">
        {roadmap.description}
      </p>

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-md">
            <BarChart className="w-3 h-3" />
            {roadmap.difficulty}
          </span>
          <span className="flex items-center gap-1 bg-muted px-2 py-0.5 rounded-md">
            <BookOpen className="w-3 h-3" />
            {roadmap.estimatedTopics} topics
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-3">
          <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
            Explore
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
