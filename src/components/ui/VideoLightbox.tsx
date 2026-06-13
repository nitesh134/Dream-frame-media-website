import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import type { ActiveGalleryVideo } from "@/types/work";
import { EASE_OUT_EXPO } from "@/constants/motion";
import { youtubeEmbedUrl } from "@/utils/youtube";
import { scrollToHash } from "@/utils/dom";

export interface VideoLightboxProps {
  active: ActiveGalleryVideo | null;
  onClose: () => void;
}

export function VideoLightbox({ active, onClose }: VideoLightboxProps) {
  const isVertical = active?.type === "shortform" || active?.type === "ugc";

  useEffect(() => {
    window.scrollTo(0,0);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <button
            type="button"
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-50"
            onClick={onClose}
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
            className={`h-[500px] w-full bg-black overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 ${isVertical ? "max-w-md aspect-[9/16] rounded-2xl" : "max-w-6xl aspect-video rounded-xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={youtubeEmbedUrl(active.youtubeId, true)}
              title={active.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
