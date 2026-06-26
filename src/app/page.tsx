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
  const categoryMeta: Record<string, { icon: React.ReactNode; accent: string; bg: string }> = {
    "Development":  { icon: <BookOpen  className="w-5 h-5" />, accent: "text-blue-600",   bg: "bg-blue-50 border-blue-100" },
    "AI & Data":    { icon: <Zap       className="w-5 h-5" />, accent: "text-purple-600", bg: "bg-purple-50 border-purple-100" },
    "Infrastructure":{ icon: <Layers   className="w-5 h-5" />, accent: "text-emerald-600",bg: "bg-emerald-50 border-emerald-100" },
    "Security":     { icon: <Circle    className="w-5 h-5" />, accent: "text-rose-600",   bg: "bg-rose-50 border-rose-100" },
    "Architecture": { icon: <BarChart3 className="w-5 h-5" />, accent: "text-amber-600",  bg: "bg-amber-50 border-amber-100" },
    "Research":     { icon: <BookOpen  className="w-5 h-5" />, accent: "text-indigo-600", bg: "bg-indigo-50 border-indigo-100" },
    "Design":       { icon: <Layers    className="w-5 h-5" />, accent: "text-pink-600",   bg: "bg-pink-50 border-pink-100" },
    "Product":      { icon: <Map       className="w-5 h-5" />, accent: "text-orange-600", bg: "bg-orange-50 border-orange-100" },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <HeroSection />

        {/* ── Stats bar ──────────────────────────────────────────────── */}
        <div className="border-b border-gray-100">
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
                    <span className="text-3xl font-extrabold text-gray-900 tracking-tight" style={{ letterSpacing: "-0.03em" }}>
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Marquee ────────────────────────────────────────────────── */}
        <div className="border-b border-gray-100 py-6 overflow-hidden">
          <RoadmapMarquee />
        </div>

        {/* ── How it works ───────────────────────────────────────────── */}
        <section className="py-28 px-6 max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
                From zero to fluent,<br />systematically.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg">
                Michi turns complex engineering disciplines into clear, visual paths you can actually follow.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="flex flex-col gap-5">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-black text-gray-100 leading-none select-none">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Featured Roadmaps ──────────────────────────────────────── */}
        <section className="py-28 px-6 max-w-7xl mx-auto border-t border-gray-100">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Start here
                </h2>
                <p className="text-lg text-gray-500">
                  The most popular paths, curated for every level.
                </p>
              </div>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-black transition-colors duration-150 group shrink-0"
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

        {/* ── Browse by Category — full-width tile layout ────────────── */}
        <section className="py-28 border-t border-gray-100 bg-gray-50/60">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="mb-14">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-3" style={{ letterSpacing: "-0.02em" }}>
                  Every discipline.
                </h2>
                <p className="text-lg text-gray-500">
                  Michi covers the full spectrum of software engineering roles.
                </p>
              </div>
            </Reveal>

            <RevealStagger
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
              staggerDelay={0.05}
            >
              {categories.map((cat) => {
                const count = roadmaps.filter((r) => r.category === cat).length;
                const meta = categoryMeta[cat] ?? { icon: <Circle className="w-5 h-5" />, accent: "text-gray-600", bg: "bg-white border-gray-200" };
                return (
                  <Link
                    key={cat}
                    href={`/roadmaps?category=${cat}`}
                    className={`group flex flex-col gap-3 p-5 rounded-2xl border ${meta.bg} hover:shadow-md hover:-translate-y-[2px] transition-[transform,box-shadow] duration-200 active:scale-[0.98]`}
                  >
                    <div className={`${meta.accent}`}>{meta.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm group-hover:text-black transition-colors">{cat}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{count} roadmap{count !== 1 ? "s" : ""}</div>
                    </div>
                  </Link>
                );
              })}
            </RevealStagger>
          </div>
        </section>

        {/* ── CTA section ────────────────────────────────────────────── */}
        <section className="py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-gray-900 rounded-3xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight" style={{ letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
                    Ready to map your path?
                  </h2>
                  <p className="text-gray-400 text-lg max-w-md">
                    No account, no paywall. Just pick a roadmap and start learning.
                  </p>
                </div>
                <Link
                  href="/roadmaps"
                  className="shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-white rounded-2xl text-base font-bold text-gray-900 hover:bg-gray-100 transition-colors duration-150 active:scale-[0.97] active:duration-75 group"
                >
                  Explore roadmaps
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-150" />
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
