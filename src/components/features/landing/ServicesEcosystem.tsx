import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "YouTube Video Editing",
    desc: "High-retention YouTube editing for founders, coaches, consultants, creators, and brands who want polished long-form videos that build authority and keep viewers watching.",
    link: "/services/youtube-editing",
  },
  {
    title: "Short-Form Video Editing",
    desc: "Fast-paced Reels, Shorts, TikToks, and LinkedIn clips edited with strong hooks, captions, pacing, B-roll, and retention-focused structure.",
    link: "/services/short-form-editing",
  },
  {
    title: "End-to-End Content Strategy",
    desc: "A complete content system covering video ideas, scripting direction, content planning, repurposing structure, posting strategy, and lead-generation content angles.",
    link: "/services/authority-engine-audit",
  },
  {
    title: "AI Content System",
    desc: "AI-powered workflows for scripting, repurposing, avatar videos, content scaling, and faster production without losing brand voice.",
    link: "/services/ai-content-system",
  },
];

export function ServicesEcosystem() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
            04 CORE SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05]">
            A Complete System For Better Content
          </h2>
          <p className="text-xl md:text-2xl text-[#666666] leading-relaxed">
            From strategy and scripting direction to premium long-form,
            short-form, and AI-assisted production, we help you publish
            consistently without building a large in-house team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#E5E5E5]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border-r border-b border-[#E5E5E5]"
            >
              <Link
                to={service.link}
                className="group flex min-h-full flex-col justify-between bg-[#FAFAFA] p-8 sm:p-10 lg:p-12 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"
              >
                <div>
                  <div className="mb-8 font-mono text-sm text-[#999999]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mb-5 text-2xl lg:text-3xl font-bold tracking-tight text-[#1a1a1a]">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-10 flex items-center gap-3 text-sm font-bold text-[#666666] transition-colors group-hover:text-black">
                  Explore Service
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 bg-black text-white font-bold rounded-[4px] hover:bg-black/90 active:scale-[0.98] transition-all gap-3 text-lg"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
