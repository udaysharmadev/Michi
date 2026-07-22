import type { MetadataRoute } from "next";
import { getAllRoadmaps } from "@/data/roadmaps";

export default function sitemap(): MetadataRoute.Sitemap {
  const roadmaps = getAllRoadmaps();
  
  const roadmapEntries: MetadataRoute.Sitemap = roadmaps.map((roadmap) => ({
    url: `https://michi.dev/roadmaps/${roadmap.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://michi.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://michi.dev/roadmaps",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...roadmapEntries,
  ];
}
