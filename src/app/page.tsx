import Link from "next/link";
import { getAllRoadmaps, getCategories } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { Hero } from "@/components/hero";
import { Reveal, RevealStagger } from "@/components/reveal";
import { RoadmapMarquee } from "@/components/roadmap-marquee";
import {
  ArrowRight, Map, Layers, BookOpen, Zap,
  CheckCircle, BarChart3,
} from "lucide-react";
import { FeaturesBento } from "@/components/features-bento";

export default function Home() {
  const roadmaps = getAllRoadmaps();
  const categories = getCategories();
  const featuredRoadmaps = roadmaps.slice(0, 6);

  const categoryMeta: Record<string, { icon: React.ReactNode }> = {
    "Development": { icon: <BookOpen className="w-4 h-4 text-blue-500" /> },
    "AI & Data": { icon: <Zap className="w-4 h-4 text-purple-500" /> },
    "Infrastructure": { icon: <Layers className="w-4 h-4 text-emerald-500" /> },
    "Security": { icon: <CheckCircle className="w-4 h-4 text-rose-500" /> },
    "Architecture": { icon: <BarChart3 className="w-4 h-4 text-amber-500" /> },
    "Research": { icon: <BookOpen className="w-4 h-4 text-indigo-500" /> },
    "Design": { icon: <Layers className="w-4 h-4 text-pink-500" /> },
    "Product": { icon: <Map className="w-4 h-4 text-orange-500" /> },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Stats bar */}
        <div className="border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto px-6 py-7">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: `${roadmaps.length}+`, label: "Roadmaps" },
                  { value: `${categories.length}`, label: "Categories" },
                  { value: "2,000+", label: "Topics covered" },
                  { value: "Free", label: "Always & forever" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-0.5">
                    <span className="font-heading text-2xl md:text-3xl font-extrabold tracking-[-0.03em] text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-b border-border py-4 overflow-hidden bg-background">
          <RoadmapMarquee />
        </div>

        {/* Features */}
        <FeaturesBento />

        {/* Featured Roadmaps */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-border">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
              <div>
                <h2
                  className="font-heading text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-2 text-foreground"
                  style={{ textWrap: "balance" }}
                >
                  Start here
                </h2>
                <p className="text-sm text-muted-foreground">
                  The most popular paths, curated for every level.
                </p>
              </div>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group shrink-0"
              >
                All {roadmaps.length} roadmaps
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
            staggerDelay={0.06}
          >
            {featuredRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </RevealStagger>
        </section>

        {/* Browse by Category */}
        <section className="py-24 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="mb-10">
                <h2
                  className="font-heading text-3xl md:text-4xl font-extrabold tracking-[-0.03em] mb-2 text-foreground"
                  style={{ textWrap: "balance" }}
                >
                  Every discipline.
                </h2>
                <p className="text-sm text-muted-foreground">
                  Michi covers the full spectrum of software engineering roles.
                </p>
              </div>
            </Reveal>

            <RevealStagger
              className="grid grid-cols-2 md:grid-cols-4 gap-2.5"
              staggerDelay={0.04}
            >
              {categories.map((cat) => {
                const count = roadmaps.filter((r) => r.category === cat).length;
                const meta = categoryMeta[cat] ?? { icon: <Layers className="w-4 h-4 text-muted-foreground" /> };
                return (
                  <Link
                    key={cat}
                    href={`/roadmaps?category=${cat}`}
                    className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-[0_0_0_1px_oklch(0.65_0.2_265/0.08)] transition-all duration-200 active:scale-[0.98]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      {meta.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{cat}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5 font-medium">{count} roadmap{count !== 1 ? "s" : ""}</div>
                    </div>
                  </Link>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-background border-t border-border">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <div className="bg-card border border-border rounded-xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-primary/20 transition-colors">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                    Ready to map your path?
                  </h2>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    No account, no paywall. Pick a roadmap and start learning.
                  </p>
                </div>

                <Link
                  href="/roadmaps"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore roadmaps
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
