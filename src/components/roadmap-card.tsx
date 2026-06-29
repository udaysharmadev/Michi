import Link from "next/link";
import { ArrowRight, BookOpen, BarChart } from "lucide-react";
import { RoadmapMeta } from "@/data/roadmaps";

export function RoadmapCard({ roadmap }: { roadmap: RoadmapMeta }) {
  return (
    <Link
      href={`/roadmaps/${roadmap.slug}`}
      className="group flex flex-col p-7 rounded-[2rem] border border-border/60 bg-card
        hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1.5
        dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        active:scale-[0.98] active:shadow-sm
        h-full relative overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute -inset-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none" />
      
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-muted/50 border border-border/50 flex items-center justify-center shadow-inner group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors duration-500">
            <BookOpen className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors duration-500" />
          </div>
          <h3 className="font-heading text-2xl font-black tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-500" style={{ textWrap: "balance" } as React.CSSProperties}>
            {roadmap.title}
          </h3>
        </div>
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-border/80 bg-background text-muted-foreground shrink-0 shadow-sm">
          {roadmap.category}
        </span>
      </div>

      <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed flex-1 relative z-10 font-medium pr-4">
        {roadmap.description}
      </p>

      <div className="mt-auto flex flex-col gap-6 relative z-10">
        <div className="flex items-center gap-2.5 text-xs font-bold text-muted-foreground uppercase tracking-wide">
          <span className="flex items-center gap-1.5 bg-muted/40 px-3 py-1.5 rounded-lg border border-border/50">
            <BarChart className="w-3.5 h-3.5 text-foreground/70" />
            {roadmap.difficulty}
          </span>
          <span className="flex items-center gap-1.5 bg-muted/40 px-3 py-1.5 rounded-lg border border-border/50">
            <BookOpen className="w-3.5 h-3.5 text-foreground/70" />
            {roadmap.estimatedTopics} topics
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-border/40 pt-5">
          <div className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-500">
            Explore Roadmap
          </div>
          <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-500" />
          </div>
        </div>
      </div>
      
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
    </Link>
  );
}
