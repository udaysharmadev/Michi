import Link from "next/link";
import { ArrowRight, Box, Compass, Map } from "lucide-react";

export function HeroSection() {
  const quickAccessPills = [
    { label: "Frontend", slug: "frontend" },
    { label: "Backend", slug: "backend" },
    { label: "AI Engineer", slug: "ai-engineer" },
    { label: "DevOps", slug: "devops" },
    { label: "Cyber Security", slug: "cyber-security" },
    { label: "Cloud Engineer", slug: "cloud" },
    { label: "Research Engineer", slug: "ai-researcher" },
  ];

  return (
    <section className="relative w-full border-b border-gray-100 overflow-hidden bg-white pt-24 pb-32">
      {/* Background Subtle Gradient (Very light, Vercel style) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-50 via-white to-white pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Content */}
        <div className="flex-1 text-left z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm font-medium text-gray-600 mb-8">
            <Compass className="w-4 h-4 text-gray-400" />
            Discover your path
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.1]">
            The developer <br /> knowledge graph.
          </h1>
          
          <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed">
            Navigate the complexity of modern software engineering. Explore premium, visually-driven roadmaps to accelerate your career.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12 text-sm font-medium text-gray-400">
            <span className="flex items-center gap-2">
              <Map className="w-4 h-4 text-gray-300" /> 30+ Roadmaps
            </span>
            <span className="flex items-center gap-2">
              <Box className="w-4 h-4 text-gray-300" /> 8 Categories
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Access</span>
            <div className="flex flex-wrap gap-2">
              {quickAccessPills.map((pill) => (
                <Link
                  key={pill.slug}
                  href={`/roadmaps/${pill.slug}`}
                  className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                  {pill.label}
                </Link>
              ))}
              <Link
                href="/roadmaps"
                className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-1.5 group"
              >
                View all <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Static Graph Preview */}
        <div className="hidden lg:block relative flex-1 h-[500px] w-full max-w-xl select-none">
          {/* Decorative container */}
          <div className="absolute inset-0 bg-gray-50 border border-gray-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
            
            {/* Dot Pattern Background */}
            <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#d1d5db 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" style={{ strokeDasharray: "4 4" }}>
              <path d="M 120 100 Q 200 100 200 220" fill="none" stroke="#d1d5db" strokeWidth="2" />
              <path d="M 200 280 Q 200 400 320 400" fill="none" stroke="#d1d5db" strokeWidth="2" />
              <path d="M 200 280 Q 200 400 80 400" fill="none" stroke="#d1d5db" strokeWidth="2" />
              <path d="M 320 150 Q 320 220 200 220" fill="none" stroke="#d1d5db" strokeWidth="2" />
            </svg>

            {/* Nodes */}
            <div className="absolute top-[70px] left-[40px] px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> JavaScript
            </div>

            <div className="absolute top-[120px] left-[260px] px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> TypeScript
            </div>

            <div className="absolute top-[220px] left-[150px] px-5 py-3 bg-black border border-black rounded-xl shadow-md text-sm font-bold text-white flex items-center gap-2 ring-4 ring-black/5 z-10">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div> React
            </div>

            <div className="absolute top-[370px] left-[30px] px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> Next.js
            </div>

            <div className="absolute top-[370px] left-[270px] px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-semibold text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div> React Native
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
