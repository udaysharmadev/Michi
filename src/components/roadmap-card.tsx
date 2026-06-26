import Link from "next/link";
import { ArrowRight, BookOpen, BarChart } from "lucide-react";
import { RoadmapMeta } from "@/data/roadmaps";
import { getCategoryBadgeColors } from "@/lib/colors";

export function RoadmapCard({ roadmap }: { roadmap: RoadmapMeta }) {
  const badgeColors = getCategoryBadgeColors(roadmap.category);

  return (
    <Link
      href={`/roadmaps/${roadmap.slug}`}
      className="group flex flex-col p-8 rounded-2xl border border-gray-200 bg-white
        hover:border-gray-300 hover:shadow-md hover:-translate-y-[2px]
        transition-[transform,box-shadow,border-color] duration-200
        active:scale-[0.98] active:shadow-sm active:duration-75
        h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-snug group-hover:text-black transition-colors" style={{ textWrap: "balance" } as React.CSSProperties}>
          {roadmap.title}
        </h3>
        {!['frontend', 'backend', 'fullstack'].includes(roadmap.slug) && (
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border shrink-0 ml-3 ${badgeColors}`}>
            {roadmap.category}
          </span>
        )}
      </div>

      <p className="text-gray-500 mb-8 text-sm leading-relaxed flex-1">
        {roadmap.description}
      </p>

      <div className="mt-auto flex flex-col gap-6">
        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
          <span className="flex items-center gap-1.5">
            <BarChart className="w-4 h-4" />
            {roadmap.difficulty}
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            {roadmap.estimatedTopics} topics
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm font-semibold text-gray-500 group-hover:text-black transition-colors duration-150 pt-4 border-t border-gray-100">
          View Roadmap
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150" />
        </div>
      </div>
    </Link>
  );
}
