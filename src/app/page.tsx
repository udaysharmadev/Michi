import Link from "next/link";
import { getAllRoadmaps, getCategories } from "@/data/roadmaps";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RoadmapCard } from "@/components/roadmap-card";
import { HeroSection } from "@/components/hero";
import { Reveal, RevealStagger } from "@/components/reveal";
import { RoadmapMarquee } from "@/components/roadmap-marquee";
import {
  ArrowRight, Map, Layers, BookOpen, Zap,
  CheckCircle, Circle, BarChart3,
} from "lucide-react";
import { getCategoryBadgeColors } from "@/lib/colors";

export default function Home() {
  const roadmaps = getAllRoadmaps();
  const categories = getCategories();
  const featuredRoadmaps = roadmaps.slice(0, 6);

  // ── How it works steps ────────────────────────────────────────────────────
  const steps = [
    {
      num: "01",
      title: "Pick a path",
      body: "Browse 30+ curated roadmaps across development, AI, infrastructure, and more. Filter by difficulty or domain.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      num: "02",
      title: "Follow the graph",
      body: "Each roadmap is an interactive knowledge graph. See exactly how topics connect, and what to learn next.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      num: "03",
      title: "Track your progress",
      body: "Mark topics as learning or done. Your progress is saved locally — no account required.",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

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
        <HeroSection />

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
        <section className="py-28 px-6 max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-4" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
                From zero to fluent,<br />systematically.
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg">
                Michi turns complex engineering disciplines into clear, visual paths you can actually follow.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="flex flex-col gap-5 relative p-6 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-lg shadow-primary/20">
                      {step.icon}
                    </div>
                    <span className="font-heading text-5xl font-black text-muted/30 leading-none select-none absolute top-4 right-6 pointer-events-none">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mt-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

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
        <section className="py-28 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="relative overflow-hidden bg-foreground rounded-[2rem] px-10 py-16 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none" />
                
                <div className="text-center md:text-left relative z-10">
                  <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-background mb-4 leading-tight" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
                    Ready to map your path?
                  </h2>
                  <p className="text-muted text-lg max-w-md font-medium">
                    No account, no paywall. Just pick a roadmap and start learning.
                  </p>
                </div>
                <Link
                  href="/roadmaps"
                  className="relative z-10 shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-background rounded-2xl text-base font-bold text-foreground hover:scale-105 transition-all duration-200 active:scale-[0.97] group shadow-xl"
                >
                  Explore roadmaps
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
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
