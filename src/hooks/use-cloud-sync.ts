"use client";

import { useEffect } from "react";
import { useAuth } from "@/features/auth/auth-context";

export function useCloudSync() {
  const { user, isAuthenticated, setSyncStatus } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !user) return;

    // Background sync simulation / local storage bridge
    setSyncStatus("syncing");
    const timer = setTimeout(() => {
      setSyncStatus("synced");
    }, 800);

    return () => clearTimeout(timer);
  }, [isAuthenticated, user, setSyncStatus]);
}
