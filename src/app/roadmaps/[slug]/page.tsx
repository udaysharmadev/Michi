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

  // Fetch static content dynamically
  const roadmapContent = await getContentBySlug(slug);

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden text-foreground">
      {roadmapContent ? (
        // Render Interactive Viewer Engine
        <main className="flex-1 w-full relative">
          <RoadmapRenderer 
            roadmap={roadmap}
            initialNodes={roadmapContent.nodes} 
            initialEdges={roadmapContent.edges} 
          />
        </main>
      ) : (
        // Render Coming Soon Placeholder for other slugs
        <div className="h-full flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-6 bg-background">
            <div className="w-full max-w-2xl flex flex-col items-center text-center p-12 rounded-3xl border border-dashed border-border bg-muted/20">
              <div className="w-16 h-16 bg-card shadow-sm border border-border rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-muted-foreground/50" />
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-foreground mb-4">{roadmap.title} Engine Coming Soon</h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                We are currently mapping the knowledge graph for this discipline. It will feature approximately {roadmap.estimatedTopics} deep-dive topics on an expansive horizontal canvas.
              </p>
              <Link 
                href="/roadmaps" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4" /> Explore Available Roadmaps
              </Link>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
