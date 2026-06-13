import type { Location } from "react-router-dom";
import { scrollToHash } from "@/utils/dom";

export function useScrollToHashOnHome(location: Location, onNavigate?: () => void) {
  return (hash: string) => {
    onNavigate?.();
    if (location.pathname === "/") {
      scrollToHash(hash, "smooth");
    }
  };
}
