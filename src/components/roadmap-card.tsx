import Link from "next/link";
import { ArrowRight, BookOpen, BarChart } from "lucide-react";
import { RoadmapMeta } from "@/data/roadmaps";

export function RoadmapCard({ roadmap }: { roadmap: RoadmapMeta }) {
  return (
    <Link
      href={`/roadmaps/${roadmap.slug}`}
      className="group flex flex-col p-6 rounded-3xl border border-border bg-card
        hover:border-foreground/20 hover:shadow-2xl hover:-translate-y-1
        transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)]
        active:scale-[0.98] active:shadow-sm
        h-full relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4 relative z-10">
        <h3 className="font-heading text-2xl font-bold text-foreground tracking-tight leading-snug group-hover:text-primary transition-colors duration-300" style={{ textWrap: "balance" } as React.CSSProperties}>
          {roadmap.title}
        </h3>
        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-border bg-background text-muted-foreground shrink-0 ml-3 shadow-sm">
          {roadmap.category}
        </span>
      </div>

      <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed flex-1 relative z-10 font-medium">
        {roadmap.description}
      </p>

      <div className="mt-auto flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-xl border border-border shadow-sm">
            <BarChart className="w-3.5 h-3.5 text-foreground" />
            {roadmap.difficulty}
          </span>
          <span className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-xl border border-border shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-foreground" />
            {roadmap.estimatedTopics} topics
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 pt-5 border-t border-border/40">
          View Roadmap
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
        </div>
      </div>
      
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </Link>
  );
}
