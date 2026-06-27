"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchModal } from "./search-modal";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Map, ArrowRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState } from "react";
import { clsx } from "clsx";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Roadmaps", href: "/roadmaps" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-[200] w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0 text-primary-foreground">
            <Map className="w-5 h-5" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">Michi</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors duration-150 active:scale-95",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="w-48 lg:w-64">
            <SearchModal />
          </div>

          <div className="flex items-center gap-2 border-l border-border pl-6">
            <a 
              href="https://github.com/udaysharmadev/Michi" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-transparent hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub Repository"
            >
              <SiGithub className="w-[1.2rem] h-[1.2rem]" />
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <div className="w-32 sm:w-48">
            <SearchModal />
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-base font-medium py-2 transition-colors",
                    isActive ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="h-px w-full bg-border my-2" />
            <div className="flex items-center justify-between">
              <a 
                href="https://github.com/udaysharmadev/Michi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 text-sm font-bold text-foreground border border-border rounded-xl bg-card hover:bg-muted transition-colors active:scale-[0.98]"
              >
                <span className="flex items-center gap-2"><SiGithub className="w-4 h-4" /> GitHub</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
