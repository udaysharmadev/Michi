import Link from "next/link";
import { Category } from "@/data/roadmaps";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/roadmaps?category=${category}`}
      className="group flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors"
    >
      <span className="font-medium text-sm text-foreground transition-colors tracking-tight">
        {category}
      </span>
      <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors bg-muted px-2 py-0.5 rounded">
        {count}
      </span>
    </Link>
  );
}
