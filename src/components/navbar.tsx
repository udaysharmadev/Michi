"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchModal } from "./search-modal";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Map, ArrowRight, LogIn, LogOut, Cloud, CloudCheck, User, RefreshCw } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useState, useRef, useEffect } from "react";
import { clsx } from "clsx";
import { useAuth } from "@/features/auth/auth-context";
import { useCloudSync } from "@/hooks/use-cloud-sync";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const { user, isAuthenticated, openAuthModal, logout, syncStatus } = useAuth();
  useCloudSync();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Roadmaps", href: "/roadmaps" },
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

            {/* Auth / Profile Area */}
            {isAuthenticated && user ? (
              <div className="relative ml-2" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-xl border border-border hover:border-primary/40 bg-card hover:bg-muted/50 transition-all cursor-pointer"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-7 h-7 rounded-lg object-cover"
                  />
                  <div className="flex items-center gap-1.5 pr-1">
                    {syncStatus === "syncing" ? (
                      <RefreshCw className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                    ) : (
                      <CloudCheck className="w-3.5 h-3.5 text-emerald-500" />
                    )}
                  </div>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 p-2 rounded-2xl border border-border bg-card shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-border mb-1">
                      <p className="text-xs font-bold text-foreground truncate">{user.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                    </div>

                    <div className="px-3 py-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Cloud className="w-3.5 h-3.5 text-primary" /> Cloud Sync
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        Active
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-500 hover:bg-rose-500/10 rounded-xl transition-colors cursor-pointer mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={openAuthModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-foreground text-background hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer ml-2 shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <div className="w-28 sm:w-48">
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
            
            {/* Mobile Auth Button */}
            {isAuthenticated && user ? (
              <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-card">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-lg object-cover" />
                  <div>
                    <p className="text-xs font-bold text-foreground">{user.name}</p>
                    <p className="text-[10px] text-emerald-500 flex items-center gap-1">
                      <CloudCheck className="w-3 h-3" /> Synced
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  openAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-foreground text-background font-semibold rounded-xl"
              >
                <LogIn className="w-4 h-4" /> Sign In
              </button>
            )}

            <div className="flex items-center justify-between pt-2">
              <a 
                href="https://github.com/udaysharmadev/Michi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
              >
                <SiGithub className="w-4 h-4" /> GitHub
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
