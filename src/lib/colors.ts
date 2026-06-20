import { Category } from "@/data/roadmaps";

export const getCategoryBadgeColors = (category: Category): string => {
  switch (category) {
    case "Development":
      return "bg-blue-50 text-blue-600 border-blue-100";
    case "AI & Data":
      return "bg-purple-50 text-purple-600 border-purple-100";
    case "Infrastructure":
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    case "Security":
      return "bg-rose-50 text-rose-600 border-rose-100";
    case "Architecture":
      return "bg-amber-50 text-amber-600 border-amber-100";
    case "Research":
      return "bg-indigo-50 text-indigo-600 border-indigo-100";
    case "Design":
      return "bg-pink-50 text-pink-600 border-pink-100";
    case "Product":
      return "bg-orange-50 text-orange-600 border-orange-100";
    default:
      return "bg-gray-50 text-gray-600 border-gray-100";
  }
};
