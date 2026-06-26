import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 text-gray-900 hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center shrink-0">
                <svg width="15" height="12" viewBox="0 0 18 14" fill="none">
                  <path d="M1 13V1L9 9L17 1V13" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight">Michi</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Visual knowledge graphs for software engineers. Navigate your career with clarity.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Explore</span>
              <Link href="/roadmaps" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">All Roadmaps</Link>
              <Link href="/roadmaps?category=Development" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Development</Link>
              <Link href="/roadmaps?category=AI%20%26%20Data" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">AI & Data</Link>
              <Link href="/roadmaps?category=Infrastructure" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Infrastructure</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Project</span>
              <a href="https://github.com/udaysharmadev/Michi" target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Michi. Open source and free forever.</span>
        </div>
      </div>
    </footer>
  );
}
