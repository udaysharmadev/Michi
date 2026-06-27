import Link from "next/link";
import { Map } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center shrink-0 text-primary-foreground">
                <Map className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-base tracking-tight">Michi</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Visual knowledge graphs for software engineers. Navigate your career with clarity.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="font-heading text-xs font-bold text-foreground uppercase tracking-wide">Explore</span>
              <Link href="/roadmaps" className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">All Roadmaps</Link>
              <Link href="/roadmaps?category=Development" className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">Development</Link>
              <Link href="/roadmaps?category=AI%20%26%20Data" className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">AI & Data</Link>
              <Link href="/roadmaps?category=Infrastructure" className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">Infrastructure</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-heading text-xs font-bold text-foreground uppercase tracking-wide">Project</span>
              <a href="https://github.com/udaysharmadev/Michi" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
          <span>© {new Date().getFullYear()} Michi. Open source and free forever.</span>
        </div>
      </div>
    </footer>
  );
}
