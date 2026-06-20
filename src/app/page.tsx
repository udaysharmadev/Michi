import Link from "next/link";
import { getAllRoadmaps, getCategories } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { CategoryCard } from "@/components/category-card";
import { HeroSection } from "@/components/hero";
import { ArrowRight } from "lucide-react";
import { SearchModal } from "@/components/search-modal";

export default function Home() {
  const roadmaps = getAllRoadmaps();
  const categories = getCategories();
  
  // Featured roadmaps (pick top 6)
  const featuredRoadmaps = roadmaps.slice(0, 6);

  // All Roadmaps preview (pick next 12 or so, or just display a selection if the list gets too large)
  // For the MVP, we can display a solid chunk here.
  const allRoadmapsPreview = roadmaps.slice(0, 15);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <HeroSection />

        {/* Featured Roadmaps */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Roadmaps</h2>
              <p className="text-gray-500 mt-2 text-lg">Curated paths to accelerate your career.</p>
            </div>
            <Link href="/roadmaps" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-black transition-colors group">
              View all <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRoadmaps.map(roadmap => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        </section>

        {/* Browse By Category */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Browse by Category</h2>
            <p className="text-gray-500 mt-2 text-lg">Find roadmaps tailored to your specific domain.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => {
              const count = roadmaps.filter(r => r.category === category).length;
              return <CategoryCard key={category} category={category} count={count} />;
            })}
          </div>
        </section>

        {/* All Roadmaps Preview */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-gray-100 mb-12">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Explore Roadmaps</h2>
            <p className="text-gray-500 mt-2 text-lg">A selection of our comprehensive curriculum.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoadmapsPreview.map(roadmap => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link 
              href="/roadmaps" 
              className="px-8 py-4 rounded-xl bg-gray-50 border border-gray-200 text-base font-semibold text-gray-900 hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center gap-2"
            >
              See all {roadmaps.length} roadmaps
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
