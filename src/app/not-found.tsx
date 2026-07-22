import Link from "next/link";
import { Map, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-muted border border-border flex items-center justify-center">
          <Map className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-3">
          404
        </h1>
        <p className="text-xl font-semibold text-foreground mb-2">
          Page not found
        </p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/roadmaps"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors"
          >
            <Search className="w-4 h-4" />
            Browse Roadmaps
          </Link>
        </div>
      </div>
    </div>
  );
}
