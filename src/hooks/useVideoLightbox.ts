import { useState } from "react";
import type { ActiveGalleryVideo } from "@/types/work";

export function useVideoLightbox() {
  const [activeVideo, setActiveVideo] = useState<ActiveGalleryVideo | null>(null);
  const close = () => setActiveVideo(null);
  return { activeVideo, setActiveVideo, close };
}
