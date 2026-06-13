import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { EASE_OUT_EXPO } from "@/constants/motion";

export interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, filter: "blur(8px)", scale: 0.98 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, filter: "blur(4px)", scale: 1.02 }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
