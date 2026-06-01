"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Resets scroll to the top on pathname change (privacy/terms ↔ home).
 * Anchor jumps within the home page are unaffected (no pathname change).
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}
