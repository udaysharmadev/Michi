"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchModal } from "./search-modal";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, Map, LogIn, LogOut, CloudCheck, RefreshCw } from "lucide-react";
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
    <nav className="sticky top-0 z-[200] w-full bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-foreground hover:opacity-80 transition-opacity">
          <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center shrink-0">
            <Map className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-heading font-bold text-lg tracking-tight">Michi</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150",
                    isActive ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
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

          <div className="flex items-center gap-1.5 border-l border-border pl-5">
            <a
              href="https://github.com/udaysharmadev/Michi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="GitHub Repository"
            >
              <SiGithub className="w-4 h-4" />
            </a>
            <ThemeToggle />

            {isAuthenticated && user ? (
              <div className="relative ml-1" ref={dropdownRef}>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-7 h-7 rounded-md object-cover"
                  />
                  <div className="flex items-center gap-1 pr-1">
                    {syncStatus === "syncing" ? (
                      <RefreshCw className="w-3 h-3 text-amber-500 animate-spin" />
                    ) : (
                      <CloudCheck className="w-3 h-3 text-emerald-500" />
                    )}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-52 p-1.5 rounded-xl border border-border bg-card shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-2 border-b border-border mb-1">
                      <p className="text-xs font-bold text-foreground truncate">{user.name}</p>
                      <p className="text-[11px] text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors cursor-pointer"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer ml-1"
              >
                <LogIn className="w-3 h-3" />
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="w-28 sm:w-44">
            <SearchModal />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-1 duration-200">
          <div className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "text-sm font-medium py-2 transition-colors rounded-lg px-3",
                    isActive ? "text-foreground bg-muted" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="h-px w-full bg-border my-1" />

            {isAuthenticated && user ? (
              <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-card">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt={user.name} className="w-7 h-7 rounded-md object-cover" />
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
                  className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
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
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg text-sm"
              >
                <LogIn className="w-4 h-4" /> Sign In
              </button>
            )}

            <div className="flex items-center justify-between pt-1">
              <a
                href="https://github.com/udaysharmadev/Michi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
