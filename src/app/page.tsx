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
  CheckCircle, Circle, BarChart3,
} from "lucide-react";
import { getCategoryBadgeColors } from "@/lib/colors";
import { FeaturesBento } from "@/components/features-bento";

export default function Home() {
  const roadmaps = getAllRoadmaps();
  const categories = getCategories();
  const featuredRoadmaps = roadmaps.slice(0, 6);

  // ── Category accent map ───────────────────────────────────────────────────
  const categoryMeta: Record<string, { icon: React.ReactNode; }> = {
    "Development":  { icon: <BookOpen  className="w-5 h-5 text-blue-500" /> },
    "AI & Data":    { icon: <Zap       className="w-5 h-5 text-purple-500" /> },
    "Infrastructure":{ icon: <Layers   className="w-5 h-5 text-emerald-500" /> },
    "Security":     { icon: <Circle    className="w-5 h-5 text-rose-500" /> },
    "Architecture": { icon: <BarChart3 className="w-5 h-5 text-amber-500" /> },
    "Research":     { icon: <BookOpen  className="w-5 h-5 text-indigo-500" /> },
    "Design":       { icon: <Layers    className="w-5 h-5 text-pink-500" /> },
    "Product":      { icon: <Map       className="w-5 h-5 text-orange-500" /> },
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <Hero />

        {/* ── Stats bar ──────────────────────────────────────────────── */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Reveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: `${roadmaps.length}+`, label: "Roadmaps" },
                  { value: `${categories.length}`,  label: "Categories" },
                  { value: "2,000+",                label: "Topics covered" },
                  { value: "Free",                  label: "Always & forever" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-heading text-3xl font-extrabold tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Marquee ────────────────────────────────────────────────── */}
        <div className="border-b border-border py-6 overflow-hidden bg-background">
          <RoadmapMarquee />
        </div>

        {/* ── How it works ───────────────────────────────────────────── */}
        <FeaturesBento />

        {/* ── Featured Roadmaps ──────────────────────────────────────── */}
        <section className="py-28 px-6 max-w-7xl mx-auto border-t border-border">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Start here
                </h2>
                <p className="text-lg text-muted-foreground">
                  The most popular paths, curated for every level.
                </p>
              </div>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors duration-150 group shrink-0"
              >
                All {roadmaps.length} roadmaps
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.07}
          >
            {featuredRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </RevealStagger>
        </section>

        {/* ── Browse by Category ─────────────────────────────────────── */}
        <section className="py-28 border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="mb-14">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Every discipline.
                </h2>
                <p className="text-lg text-muted-foreground">
                  Michi covers the full spectrum of software engineering roles.
                </p>
              </div>
            </Reveal>

            <RevealStagger
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              staggerDelay={0.05}
            >
              {categories.map((cat) => {
                const count = roadmaps.filter((r) => r.category === cat).length;
                const meta = categoryMeta[cat] ?? { icon: <Circle className="w-5 h-5 text-muted-foreground" /> };
                return (
                  <Link
                    key={cat}
                    href={`/roadmaps?category=${cat}`}
                    className="group flex flex-col gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center">
                      {meta.icon}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground text-base group-hover:text-primary transition-colors">{cat}</div>
                      <div className="text-xs text-muted-foreground mt-1 font-medium">{count} roadmap{count !== 1 ? "s" : ""}</div>
                    </div>
                  </Link>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* ── CTA section ────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-background relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto relative z-10">
            <Reveal>
              <div className="bg-card border border-border rounded-xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-foreground/20 transition-colors">
                
                <div className="text-center md:text-left relative z-10">
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                    Ready to map your path?
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-md">
                    No account, no paywall. Just pick a roadmap and start learning today.
                  </p>
                </div>
                
                <Link
                  href="/roadmaps"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
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
