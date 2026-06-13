import { motion } from "motion/react";
import React from "react";

export function WhyChooseUs() {
  const benefits = [
    {
      num: "01",
      title: "Strategic Editing",
      desc: "Every cut, hook, visual, and transition supports the story and keeps viewers engaged.",
    },
    {
      num: "02",
      title: "Platform-Native Content",
      desc: "Edits tailored for YouTube, Reels, Shorts, TikTok, LinkedIn, podcasts, and paid ads.",
    },
    {
      num: "03",
      title: "Reliable Delivery",
      desc: "A clear, repeatable workflow with consistent quality, communication, and turnaround.",
    },
    {
      num: "04",
      title: "Built For Results",
      desc: "Creative decisions grounded in retention, trust, reach, and business outcomes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-20 border-b border-[#E5E5E5] pb-4">
          02 WHY CHOOSE US
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white p-10 lg:p-12 hover:bg-[#FAFAFA] transition-colors"
            >
              <div className="font-mono text-xl text-[#999999] mb-8">
                {item.num}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#666666] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
