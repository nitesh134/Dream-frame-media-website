import { motion } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { WorkGalleryCategory } from "@/constants/workPortfolio";
import { WORK_PORTFOLIO } from "@/constants/workPortfolio";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { useVideoLightbox } from "@/hooks/useVideoLightbox";
import { youtubeThumbnailUrl } from "@/utils/youtube";

export interface WorkGalleryPageProps {
  category: string;
}

export function WorkGalleryPage({ category }: WorkGalleryPageProps) {
  const { activeVideo, setActiveVideo, close } = useVideoLightbox();
  const galleryData = WORK_PORTFOLIO[category as WorkGalleryCategory];

  if (!galleryData) return null;

  const first = galleryData.videos[0];

  return (
    <div className="pt-24 md:pt-32 pb-32 md:pb-40 px-5 md:px-8 min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#666666] hover:text-black transition-colors mb-12 md:mb-16"
        >
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </Link>

        <div className="mb-16 md:mb-24 text-center">
          <div className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest border border-[#E5E5E5] bg-white px-3 py-1.5 rounded-[2px] shadow-sm inline-block mb-6">
            WORK GALLERY
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-6 md:mb-8">
            {galleryData.galleryTitle}
          </h1>
          <p className="text-lg md:text-2xl text-[#666666] leading-relaxed max-w-3xl mx-auto">
            {galleryData.galleryDescription}
          </p>
        </div>

        {galleryData.visualType === "podcast" && galleryData.videos.length === 1 ? (
          <div className="max-w-5xl mx-auto">
            <div
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-2xl transition-all duration-700 ease-[0.22,1,0.36,1] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
              onClick={() =>
                setActiveVideo({
                  title: first.title,
                  youtubeId: first.youtubeId,
                  type: "podcast",
                })
              }
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={youtubeThumbnailUrl(first.youtubeId, "maxresdefault")}
                  alt={first.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white shadow-2xl transform scale-90 group-hover:scale-100 transition-all duration-700">
                    <Play className="w-10 h-10 ml-1 fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 bg-white">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1a1a1a]">
                      {first.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl">
                      {first.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-8 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-[2px] hover:bg-[#222222] transition-colors shrink-0"
                  >
                    Watch Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16 ${galleryData.visualType === "youtube" || galleryData.visualType === "podcast" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}
          >
            {galleryData.videos.map((vid, idx) => (
              <div
                key={idx}
                className="group relative cursor-pointer"
                onClick={() => {
                  if (vid.youtubeId) {
                    setActiveVideo({
                      title: vid.title,
                      youtubeId: vid.youtubeId,
                      type: galleryData.visualType,
                    });
                  }
                }}
              >
                <div
                  className={`w-full bg-[#EAEAEA] rounded-[2px] mb-4 overflow-hidden border border-[#E5E5E5] relative transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:border-[#d5d5d5] ${galleryData.visualType === "youtube" || galleryData.visualType === "podcast" ? "aspect-video" : "aspect-[9/16]"}`}
                >
                  {vid.youtubeId ? (
                    <img
                      src={youtubeThumbnailUrl(vid.youtubeId, "hqdefault")}
                      alt={vid.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.35] ${galleryData.visualType === "shortform" || galleryData.visualType === "ugc" ? "scale-[1.3]" : "group-hover:scale-[1.05]"}`}
                      style={{ objectPosition: "center 30%" }}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E5E5E5]"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-[0_0_30px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <Play className="w-6 h-6 ml-1 fill-white" />
                    </div>
                  </div>
                </div>

                <div className="px-1 mt-6 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-1">
                  <h4 className="font-bold text-[#1a1a1a] text-lg md:text-xl leading-tight mb-2 max-w-[90%]">
                    {vid.title}
                  </h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#999999] flex items-center gap-2">
                    <Play className="w-3 h-3" /> Watch Video
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <VideoLightbox active={activeVideo} onClose={close} />
    </div>
  );
}
