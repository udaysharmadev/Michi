"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  provider: "github" | "google" | "guest";
}

export type SyncStatus = "synced" | "syncing" | "offline" | "idle";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  syncStatus: SyncStatus;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithGithub: () => void;
  loginWithGoogle: () => void;
  loginAsGuest: () => void;
  logout: () => void;
  setSyncStatus: (status: SyncStatus) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  isAuthModalOpen: false,
  syncStatus: "idle",
  openAuthModal: () => {},
  closeAuthModal: () => {},
  loginWithGithub: () => {},
  loginWithGoogle: () => {},
  loginAsGuest: () => {},
  logout: () => {},
  setSyncStatus: () => {},
});

const USER_STORAGE_KEY = "michi_user_profile";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>("idle");

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setSyncStatus("synced");
      }
    } catch (e) {
      console.error("Failed to load user session:", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveUserSession = (profile: UserProfile | null) => {
    setUser(profile);
    if (profile) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(profile));
      setSyncStatus("synced");
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
      setSyncStatus("idle");
    }
  };

  const openAuthModal = useCallback(() => setIsAuthModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsAuthModalOpen(false), []);

  const loginWithGithub = useCallback(() => {
    setSyncStatus("syncing");
    // Simulated OAuth authentication for demo / offline fallback
    setTimeout(() => {
      const githubUser: UserProfile = {
        id: "usr_gh_" + Math.random().toString(36).substring(2, 9),
        name: "Developer",
        email: "developer@github.com",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        provider: "github",
      };
      saveUserSession(githubUser);
      setIsAuthModalOpen(false);
    }, 600);
  }, []);

  const loginWithGoogle = useCallback(() => {
    setSyncStatus("syncing");
    setTimeout(() => {
      const googleUser: UserProfile = {
        id: "usr_gg_" + Math.random().toString(36).substring(2, 9),
        name: "Google Dev",
        email: "dev@gmail.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        provider: "google",
      };
      saveUserSession(googleUser);
      setIsAuthModalOpen(false);
    }, 600);
  }, []);

  const loginAsGuest = useCallback(() => {
    setIsAuthModalOpen(false);
  }, []);

  const logout = useCallback(() => {
    saveUserSession(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        isAuthModalOpen,
        syncStatus,
        openAuthModal,
        closeAuthModal,
        loginWithGithub,
        loginWithGoogle,
        loginAsGuest,
        logout,
        setSyncStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
