import Link from "next/link";
import { Map, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-sm">
        <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-muted border border-border flex items-center justify-center">
          <Map className="w-7 h-7 text-muted-foreground" />
        </div>
        <h1 className="font-heading text-4xl font-extrabold text-foreground mb-2 tracking-tight">
          404
        </h1>
        <p className="text-base font-semibold text-foreground mb-1.5">
          Page not found
        </p>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-muted transition-colors"
          >
            <Search className="w-3.5 h-3.5" />
            Browse Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}
