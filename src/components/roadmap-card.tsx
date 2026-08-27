import Link from "next/link";
import { RoadmapMeta } from "@/data/roadmaps";
import { ArrowRight, BarChart, BookOpen, Layers } from "lucide-react";

export function RoadmapCard({ roadmap, className = "" }: { roadmap: RoadmapMeta; className?: string }) {
  return (
    <Link 
      href={`/roadmaps/${roadmap.slug}`}
      className={`group relative flex flex-col bg-card rounded-xl border border-border p-6 hover:border-foreground/20 transition-colors ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground tracking-tight mb-1">
            {roadmap.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            {roadmap.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-8 leading-relaxed flex-1">
        {roadmap.description}
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-md border border-border">
            <BarChart className="w-3.5 h-3.5" />
            {roadmap.difficulty}
          </span>
          <span className="flex items-center gap-1.5 bg-muted px-2.5 py-1 rounded-md border border-border">
            <BookOpen className="w-3.5 h-3.5" />
            {roadmap.estimatedTopics} topics
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border pt-4 mt-2">
          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
            Explore Roadmap
          </span>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}
