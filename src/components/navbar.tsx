import Link from "next/link";
import { SearchModal } from "./search-modal";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-gray-900 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none tracking-tighter">R</span>
          </div>
          <span className="font-semibold text-lg tracking-tight">Roadmaps</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/roadmaps" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
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
