import { motion } from "motion/react";
import { Layers } from "lucide-react";
import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48 border-b border-[#E5E5E5] relative overflow-hidden bg-[#FAFAFA] flex flex-col items-center">
      {/* Abstract Background Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Floating lines / background motion */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none opacity-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border border-black/5 rounded-full absolute"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          className="w-[1200px] h-[1200px] border border-black/5 rounded-full absolute"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA]"></div>
      </div>

      <div className="max-w-5xl  mx-auto relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8 md:mb-10 border border-[#E5E5E5] bg-white px-4 py-2 rounded-full shadow-sm"
        >
          <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#1a1a1a]">
            Premium Video Editing Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 md:mb-10 text-center text-black"
        >
          Premium Video Editing That <br className="hidden sm:block" /> Turns
          Content Into Growth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg sm:text-[19px] md:text-2xl text-[#666666] font-medium leading-relaxed max-w-3xl text-center mb-12 md:mb-16"
        >
          We edit YouTube videos, reels, podcasts, talking-head content, and ad
          creatives for founders, creators, clinics, wellness brands, and
          service businesses. One reliable team, from raw footage to
          platform-ready content.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 bg-black text-white rounded-[2px] flex items-center justify-center gap-2 font-bold text-base sm:text-lg hover:bg-black/90 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all transform hover:-translate-y-1"
          >
            Book a Free Call
          </a>
          <a
            href="#case-studies"
            className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-10 bg-transparent text-black border border-[#E5E5E5] rounded-[2px] flex items-center justify-center font-bold text-base sm:text-lg hover:bg-white hover:border-[#cccccc] hover:shadow-sm active:scale-[0.98] transition-all"
          >
            View Case Studies
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-3 w-full max-w-3xl mt-14 md:mt-20 border-y border-[#E5E5E5]"
        >
          {[
            ["6+", "Years Experience"],
            ["500+", "Projects Delivered"],
            ["200M+", "Views Generated"],
          ].map(([value, label], index) => (
            <div
              key={label}
              className={`py-6 md:py-8 px-2 text-center ${
                index > 0 ? "border-l border-[#E5E5E5]" : ""
              }`}
            >
              <div className="text-2xl md:text-4xl font-bold tracking-tight text-black">
                {value}
              </div>
              <div className="mt-2 text-[9px] md:text-xs font-bold uppercase tracking-widest text-[#666666]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating editorial elements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute top-10 -left-60 bg-white border border-[#E5E5E5] px-4 py-3 rounded-[2px] shadow-sm items-center gap-3 backdrop-blur-md"
        >
          <Layers className="w-4 h-4 text-[#999999]" />
          <div className="text-[10px] font-mono text-[#666666] uppercase tracking-widest">
            YouTube, Reels & Podcasts
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex absolute top-40 -right-32 bg-white border border-[#E5E5E5] px-4 py-3 rounded-[2px] shadow-sm items-center gap-3 backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
          <div className="text-[10px] font-mono text-[#666666] uppercase tracking-widest">
            Ready To Publish
          </div>
        </motion.div>
      </div>
    </section>
  );
}
