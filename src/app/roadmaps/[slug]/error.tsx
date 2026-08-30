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
      <div className="text-center max-w-sm">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
          <AlertTriangle className="w-7 h-7 text-rose-500" />
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2 tracking-tight">
          Couldn&apos;t load this roadmap
        </h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Something went wrong while loading the roadmap. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Try Again
          </button>
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            All Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}
