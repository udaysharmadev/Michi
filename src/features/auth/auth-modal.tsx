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
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-200" 
        onClick={closeAuthModal} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div className="relative z-[300] w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl animate-in zoom-in-95 duration-200 p-6 sm:p-8">
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4 text-primary shadow-sm">
            <Map className="w-7 h-7" />
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-foreground tracking-tight">
            Sign in to Michi
          </h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xs">
            Sync your roadmap progress across all devices and save your personal notes in the cloud.
          </p>
        </div>

        {/* Auth Provider Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={loginWithGithub}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-foreground text-background font-semibold rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            <SiGithub className="w-5 h-5 shrink-0" />
            <span>Continue with GitHub</span>
          </button>

          <button
            onClick={loginWithGoogle}
            className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-card border border-border text-foreground font-semibold rounded-2xl hover:bg-muted/50 active:scale-[0.98] transition-all shadow-sm cursor-pointer"
          >
            <SiGoogle className="w-5 h-5 shrink-0 text-red-500" />
            <span>Continue with Google</span>
          </button>
        </div>

        {/* Feature Highlights */}
        <div className="border-t border-border pt-5 space-y-2.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <Cloud className="w-4 h-4 text-primary shrink-0" />
            <span>Automatic cloud sync for all completed topics</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Free forever with zero spam or tracking</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Access personal notes on any browser</span>
          </div>
        </div>

        {/* Guest Mode Footer */}
        <div className="mt-6 pt-4 border-t border-border/50 text-center">
          <button
            onClick={loginAsGuest}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span>Continue as Guest</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
