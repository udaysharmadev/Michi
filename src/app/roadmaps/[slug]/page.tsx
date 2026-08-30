import { notFound } from "next/navigation";
import { getRoadmapBySlug, getAllRoadmaps } from "@/data/roadmaps";
import { getContentBySlug } from "@/data/content/registry";
import { Navbar } from "@/components/navbar";
import { RoadmapRenderer } from "@/components/roadmap-viewer/roadmap-renderer";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";

interface RoadmapPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const roadmaps = getAllRoadmaps();
  return roadmaps.map((r) => ({
    slug: r.slug,
  }));
}

export default async function RoadmapPreviewPage({ params }: RoadmapPageProps) {
  const { slug } = await params;
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) {
    notFound();
  }

  const roadmapContent = await getContentBySlug(slug);

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden text-foreground">
      {roadmapContent ? (
        <main className="flex-1 w-full relative">
          <RoadmapRenderer
            roadmap={roadmap}
            initialNodes={roadmapContent.nodes}
            initialEdges={roadmapContent.edges}
          />
        </main>
      ) : (
        <div className="h-full flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 bg-background">
            <div className="w-full max-w-md flex flex-col items-center text-center p-10 rounded-xl border border-dashed border-border bg-muted/20">
              <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-muted-foreground/50" />
              </div>
              <h2 className="font-heading text-xl font-bold text-foreground mb-2 tracking-tight">
                {roadmap.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Coming soon. This roadmap will feature approximately {roadmap.estimatedTopics} deep-dive topics.
              </p>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Explore Roadmaps
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
