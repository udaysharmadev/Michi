import Link from "next/link";
import { SearchModal } from "./search-modal";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-[200] w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-gray-900 hover:opacity-80 transition-opacity">
          {/* Michi "M" logomark */}
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13V1L9 9L17 1V13" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight">Michi</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/roadmaps"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-150 active:opacity-70"
          >
            Explore
          </Link>
          <div className="w-48 sm:w-64">
            <SearchModal />
          </div>
        </div>
      </div>
    </nav>
  );
}
