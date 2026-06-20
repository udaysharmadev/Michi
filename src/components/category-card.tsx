import Link from "next/link";
import { Category } from "@/data/roadmaps";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link 
      href={`/roadmaps?category=${category}`}
      className="group flex items-center justify-between p-5 rounded-xl border border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 transition-colors"
    >
      <span className="font-medium text-gray-900 group-hover:text-black transition-colors">
        {category}
      </span>
      <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-600 transition-colors bg-white px-2 py-1 rounded-md border border-gray-100">
        {count}
      </span>
    </Link>
  );
}
