import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import {
  WORK_GALLERY_CATEGORY_ORDER,
  WORK_PORTFOLIO,
} from "@/constants/workPortfolio";
import { EASE_OUT_EXPO } from "@/constants/motion";
import { youtubeThumbnailUrl } from "@/utils/youtube";

export function OurWork() {
  const works = WORK_GALLERY_CATEGORY_ORDER.map((key) => {
    const p = WORK_PORTFOLIO[key];
    return {
      title: key,
      desc: p.landingCardDescription,
      link: p.workRoute,
      type: p.visualType,
      thumbnails: p.videos.slice(0, 4).map((v) => ({
        id: v.youtubeId,
        title: v.title,
      })),
    };
  });

  return (
    <section
      id="work"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20 text-center"
        >
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] bg-white inline-block px-3 py-1.5 uppercase rounded-[2px] shadow-sm">
            OUR WORK
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.05]">
            Content Designed For Modern Attention.
          </h2>
          <p className="text-xl md:text-2xl text-[#666666] leading-relaxed max-w-3xl mx-auto">
            Explore YouTube videos, reels, UGC ads, and podcasts edited for
            stronger storytelling, retention, and platform-native engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-8 lg:gap-12">
          {works.map((item, i) => (
            <Link to={item.link} key={i} className="group block">
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] p-6 md:p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 ease-[0.22,1,0.36,1] flex flex-col h-full">
                {/* Visual Area */}
                <div className="aspect-[16/9] md:aspect-[3/2] w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-[2px] mb-8 overflow-hidden relative group-hover:border-[#d5d5d5] transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent mix-blend-multiply transition-colors duration-700 ease-[0.22,1,0.36,1] group-hover:from-black/10 group-hover:to-black/5 z-0"></div>

                  {/* Cinematic Video Grid */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.02] z-10 p-4 md:p-8`}
                  >
                    {item.type === "youtube" && (
                      <div className="flex flex-col gap-3 md:gap-4 w-full h-full justify-center">
                        {/* Main Featured Thumbnail */}
                        <div className="relative w-full aspect-[21/9] bg-[#1a1a1a] rounded-[4px] shadow-xl overflow-hidden border border-black/10 transform transition-transform duration-700 ease-[0.22,1,0.36,1]">
                          <img
                            src={youtubeThumbnailUrl(item.thumbnails[0].id, "maxresdefault")}
                            alt={item.thumbnails[0].title}
                            className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700"
                          />
                          <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                          <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between">
                            <h4 className="text-white font-bold text-sm md:text-base leading-tight drop-shadow-md pr-4">
                              {item.thumbnails[0].title}
                            </h4>
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex shrink-0 items-center justify-center border border-white/30 text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                              <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                            </div>
                          </div>
                        </div>

                        {/* Grid for secondary thumbnails */}
                        <div className="grid grid-cols-3 gap-3 md:gap-4">
                          {item.thumbnails
                            .slice(1, 4)
                            .map((thumb: { id: string; title: string }, idx: number) => (
                              <div
                                key={idx}
                                className="relative aspect-video bg-[#1a1a1a] rounded-[4px] shadow-lg overflow-hidden border border-black/10 transition-transform duration-700 hover:-translate-y-1"
                              >
                                <img
                                  src={youtubeThumbnailUrl(thumb.id, "hqdefault")}
                                  alt={thumb.title}
                                  className="w-full h-full object-cover transform scale-[1.03] group-hover:scale-100 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute inset-x-0 bottom-0 p-2 md:p-3">
                                  <h4 className="text-white font-semibold text-[9px] md:text-[11px] leading-tight line-clamp-2 drop-shadow-md opacity-95">
                                    {thumb.title}
                                  </h4>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20">
                                  <Play className="w-2.5 h-2.5 ml-0.5 fill-white" />
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                    {item.type === "podcast" && (
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full aspect-video bg-[#1a1a1a] rounded-[4px] shadow-2xl overflow-hidden border border-black/10 transform transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.03]">
                          <img
                            src={youtubeThumbnailUrl(item.thumbnails[0].id, "maxresdefault")}
                            alt={item.thumbnails[0].title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                              <Play className="w-6 h-6 ml-1 fill-white" />
                            </div>
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                            <h4 className="text-white font-bold text-lg md:text-xl leading-tight drop-shadow-md">
                              {item.thumbnails[0].title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    )}
                    {item.type === "shortform" && (
                      <div className="flex gap-2 md:gap-4 items-center justify-center w-full h-full pt-4">
                        {item.thumbnails
                          .slice(0, 3)
                          .map((thumb: { id: string; title: string }, idx: number) => (
                            <div
                              key={idx}
                              className={`w-1/3 aspect-[9/16] bg-[#1a1a1a] rounded-[4px] shadow-xl border border-black/10 overflow-hidden relative transition-transform duration-700 ease-[0.22,1,0.36,1] ${idx === 0 ? "transform group-hover:-rotate-2 group-hover:-translate-y-2" : idx === 1 ? "transform scale-110 z-10 group-hover:-translate-y-4" : "transform group-hover:rotate-2 group-hover:-translate-y-2"}`}
                            >
                              <img
                                src={youtubeThumbnailUrl(thumb.id, "hqdefault")}
                                alt={thumb.title}
                                className="w-full h-full object-cover origin-center transform scale-[1.3] group-hover:scale-[1.35] transition-transform duration-700"
                                style={{ objectPosition: "center 30%" }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                              <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 flex flex-col justify-end">
                                <h4 className="text-white font-bold text-[8px] md:text-[10px] leading-tight line-clamp-2 drop-shadow-md pb-1">
                                  {thumb.title}
                                </h4>
                              </div>

                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20 z-20">
                                <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                    {item.type === "ugc" && (
                      <div className="flex gap-2 md:gap-4 items-center justify-center w-full h-full pt-4">
                        {item.thumbnails &&
                          item.thumbnails
                            .slice(0, 3)
                            .map((thumb: { id: string; title: string }, idx: number) => (
                              <div
                                key={idx}
                                className={`w-1/3 aspect-[9/16] bg-[#1a1a1a] rounded-[4px] shadow-xl border border-black/10 overflow-hidden relative transition-transform duration-700 ease-[0.22,1,0.36,1] ${idx === 0 ? "transform group-hover:-rotate-2 group-hover:-translate-y-2" : idx === 1 ? "transform scale-110 z-10 group-hover:-translate-y-4" : "transform group-hover:rotate-2 group-hover:-translate-y-2"}`}
                              >
                                <img
                                  src={youtubeThumbnailUrl(thumb.id, "hqdefault")}
                                  alt={thumb.title}
                                  className="w-full h-full object-cover origin-center transform scale-[1.3] group-hover:scale-[1.35] transition-transform duration-700"
                                  style={{ objectPosition: "center 30%" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                                <div className="absolute inset-x-0 bottom-0 p-2 md:p-3 flex flex-col justify-end">
                                  <h4 className="text-white font-bold text-[8px] md:text-[10px] leading-tight line-clamp-2 drop-shadow-md pb-1">
                                    {thumb.title}
                                  </h4>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/20 z-20">
                                  <Play className="w-3.5 h-3.5 ml-0.5 fill-white" />
                                </div>
                              </div>
                            ))}
                      </div>
                    )}
                  </div>

                  {/* Subtle platform indicator / Play button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500 z-20">
                    <Play className="w-5 h-5 ml-1" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a1a1a]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg text-[#666666] leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-3 text-sm font-bold text-[#1a1a1a] transition-colors border-t border-[#E5E5E5] w-full pt-6 group/btn mt-auto">
                    View Work
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
