import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
import { motion } from "motion/react";
import {
  ArrowRight,
} from "lucide-react";
import React from "react";
import {
  Link,
} from "react-router-dom";

export function ServicesEcosystem() {
  const ecosystem = [
    {
      category: "Long-Form Video Editing",
      description:
        "Polished, retention-focused edits that make expertise clear and compelling.",
      services: [
        {
          title: "YouTube Video Editing",
          desc: "Story-led long-form editing built to improve clarity, watch time, and channel quality.",
          link: "/services/youtube-editing",
        },
        {
          title: "Podcast Editing",
          desc: "Professional audio and video podcast edits, ready for YouTube and podcast platforms.",
          link: "/services/podcast-repurposing",
        },
        {
          title: "Talking Head Video Editing",
          desc: "Clean, premium edits for founders, coaches, consultants, clinics, and expert-led brands.",
          link: "/services/founder-infrastructure",
        },
      ],
    },
    {
      category: "Short-Form & Performance",
      description:
        "Fast-paced, platform-native content designed to earn attention and drive action.",
      services: [
        {
          title: "Reels & Shorts Editing",
          desc: "High-retention vertical videos for Instagram, YouTube, TikTok, and LinkedIn.",
          link: "/services/short-form-editing",
        },
        {
          title: "UGC & Ad Creative Editing",
          desc: "Direct-response edits with stronger hooks, pacing, proof, and calls to action.",
          link: "/services/ads-and-ugc-editing",
        },
        {
          title: "Content Repurposing",
          desc: "Turn podcasts, webinars, and long videos into a consistent library of social content.",
          link: "/services/content-os",
        },
      ],
    },
    {
      category: "AI Content",
      description: "Practical AI workflows that help your team create and repurpose more efficiently.",
      services: [
        {
          title: "AI Content System",
          desc: "A tailored workflow for scripting, repurposing, and scaling content without losing your voice.",
          link: "/services/ai-content-system",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
              04 VIDEO EDITING SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05]">
              Everything You Need To Publish Better Video
            </h2>
            <p className="text-2xl text-[#666666] leading-relaxed">
              Send us your raw footage. We turn it into polished long-form
              videos, short-form clips, podcasts, and ad creatives built for
              the platforms where your audience already spends time.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-l border-r border-[#E5E5E5]">
          {ecosystem.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row border-b border-[#E5E5E5]"
            >
              {/* Category Info */}
              <div className="lg:w-1/3 p-10 lg:p-12 lg:border-r border-[#E5E5E5] bg-[#FAFAFA]">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {section.category}
                </h3>
                <p className="text-[#666666] leading-relaxed mb-8">
                  {section.description}
                </p>
                <div className="w-12 h-[1px] bg-black"></div>
              </div>

              {/* Services List */}
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 relative">
                {section.services.map((service, sIdx) => (
                  <Link
                    key={sIdx}
                    to={service.link}
                    className={`group block p-10 lg:p-12 transition-all duration-500 ease-out relative bg-[#FAFAFA] hover:bg-white hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:z-10 ${
                      sIdx % 2 !== 0 ? "md:border-l border-[#E5E5E5]" : ""
                    } ${
                      sIdx > 1
                        ? "border-t border-[#E5E5E5]"
                        : sIdx === 1
                          ? "border-t md:border-t-0 border-[#E5E5E5]"
                          : ""
                    }`}
                  >
                    <div className="flex flex-col h-full justify-between items-start">
                      <div>
                        <h4 className="text-xl font-bold mb-3 pr-8 text-[#1a1a1a] group-hover:text-black transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-[#666666] leading-relaxed mb-8">
                          {service.desc}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-[#666666] group-hover:text-black transition-colors">
                        Explore Service{" "}
                        <ArrowRight className="w-4 h-4 transition-all duration-500 ease-out group-hover:translate-x-2" />
                      </div>
                    </div>
                    {/* Soft border glow on hover */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-black/5 transition-colors duration-500 pointer-events-none" />
                  </Link>
                ))}
                {/* Fill empty grid cell if odd number of services */}
                {section.services.length % 2 !== 0 && (
                  <div className="hidden md:block border-t md:border-l border-[#E5E5E5] bg-[#FAFAFA]"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
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
