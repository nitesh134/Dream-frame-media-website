import { motion } from "motion/react";
import {
  ArrowRight,
} from "lucide-react";
import React from "react";
import {
  Link,
} from "react-router-dom";

export function CaseStudies() {
  const cases = [
    {
      brand: "Zeniqua Bliss",
      category: "Wellness / Nutraceutical",
      description:
        "Science-backed wellness brand focused on premium short-form educational content.",
      link: "/case-studies/zeniqua-bliss",
    },
    {
      brand: "Leor",
      category: "Luxury Aesthetic Clinic",
      description:
        "Luxury skincare and aesthetic clinic using high-retention short-form storytelling.",
      link: "/case-studies/leor",
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] bg-white inline-block px-3 py-1.5 uppercase rounded-[2px] shadow-sm">
            CASE STUDIES
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl leading-[1.05]">
            Real Brands, Real Results
          </h2>
          <p className="text-xl text-[#666666] leading-relaxed max-w-2xl">
            See how focused editing and creative strategy helped brands improve
            content quality, engagement, visibility, and results.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:gap-12 md:gap-16">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                to={item.link}
                className="block bg-white border border-[#E5E5E5] p-10 md:p-14 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(10,10,10,0.12)] transition-all duration-700 ease-[0.22,1,0.36,1] hover:-translate-y-1 hover:border-[#cccccc] rounded-[2px] group relative overflow-hidden"
              >
                {/* Subtle hover gleam effect */}
                <div className="absolute top-0 bottom-0 left-0 w-0 group-hover:w-full bg-gradient-to-r from-transparent via-black/[0.02] to-transparent transition-all duration-[1.2s] ease-[0.22,1,0.36,1] z-0 pointer-events-none"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 relative z-10 w-full h-full">
                  <div className="flex-1 max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold text-[#1a1a1a] uppercase tracking-widest border border-[#E5E5E5] bg-[#FAFAFA] px-3 py-1.5 rounded-[2px]">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 group-hover:text-black transition-colors">
                      {item.brand}
                    </h3>
                    <p className="text-[#666666] text-xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-4 px-8 py-5 border border-[#E5E5E5] rounded-[2px] bg-[#FAFAFA] text-[#1a1a1a] font-bold text-sm transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:shadow-lg mt-4 md:mt-0">
                    View Case Study
                    <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
