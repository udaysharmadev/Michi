import Link from "next/link";
import { Category } from "@/data/roadmaps";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link 
      href={`/roadmaps?category=${category}`}
      className="group flex items-center justify-between p-5 rounded-lg border border-border bg-card hover:border-foreground/20 transition-colors"
    >
      <span className="font-medium text-foreground transition-colors tracking-tight">
        {category}
      </span>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors bg-muted px-2.5 py-1 rounded-md border border-border">
        {count}
      </span>
    </Link>
  );
}
