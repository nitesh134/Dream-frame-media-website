import { useEffect } from "react";
import type { Location } from "react-router-dom";
import { scrollToHash } from "@/utils/dom";

/**
 * When the route has a hash (e.g. `/#work`), scroll to the matching element
 * after a short delay so layout is mounted.
 */
export function useHashScroll(location: Location) {
  useEffect(() => {
    if (!location.hash) return;
    const t = window.setTimeout(() => {
      scrollToHash(location.hash, "smooth");
    }, 100);
    return () => window.clearTimeout(t);
  }, [location]);
}
