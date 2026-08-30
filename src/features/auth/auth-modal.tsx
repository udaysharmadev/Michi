"use client";

import React, { useEffect } from "react";
import { useAuth } from "./auth-context";
import { X, Sparkles, Map, ShieldCheck, Cloud, ArrowRight } from "lucide-react";
import { SiGithub, SiGoogle } from "react-icons/si";

export function AuthModal() {
  const { isAuthModalOpen, closeAuthModal, loginWithGithub, loginWithGoogle, loginAsGuest } = useAuth();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isAuthModalOpen) {
        closeAuthModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAuthModalOpen, closeAuthModal]);

  if (!isAuthModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      <div className="relative z-[300] w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200 p-6">
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
            <Map className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-heading text-lg font-bold text-foreground tracking-tight">
            Sign in to Michi
          </h2>
          <p className="text-xs text-muted-foreground mt-1 max-w-xs">
            Sync your roadmap progress across all devices.
          </p>
        </div>

        <div className="space-y-2 mb-5">
          <button
            onClick={loginWithGithub}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            <SiGithub className="w-4 h-4 shrink-0" />
            <span>Continue with GitHub</span>
          </button>

          <button
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 bg-card border border-border text-foreground font-semibold text-sm rounded-lg hover:bg-muted/50 active:scale-[0.98] transition-all cursor-pointer"
          >
            <SiGoogle className="w-4 h-4 shrink-0 text-red-500" />
            <span>Continue with Google</span>
          </button>
        </div>

        <div className="border-t border-border pt-4 space-y-2 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <Cloud className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Automatic cloud sync for all completed topics</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>Free forever with zero spam or tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>Access personal notes on any browser</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-border/50 text-center">
          <button
            onClick={loginAsGuest}
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span>Continue as Guest</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
