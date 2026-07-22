"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, RotateCcw } from "lucide-react";

export default function RoadmapError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-rose-500" />
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground mb-3">
          Couldn't load this roadmap
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Something went wrong while loading the roadmap. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}
