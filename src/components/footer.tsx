import Link from "next/link";
import { Map } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-2.5 max-w-xs">
            <Link href="/" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center shrink-0">
                <Map className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-sm tracking-tight">Michi</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visual knowledge graphs for software engineers.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-14">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Explore</span>
              <Link href="/roadmaps" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Roadmaps</Link>
              <Link href="/roadmaps?category=Development" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Development</Link>
              <Link href="/roadmaps?category=AI%20%26%20Data" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI & Data</Link>
              <Link href="/roadmaps?category=Infrastructure" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Infrastructure</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Project</span>
              <a href="https://github.com/udaysharmadev/Michi" target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Michi. Open source and free forever.</span>
        </div>
      </div>
    </footer>
  );
}
