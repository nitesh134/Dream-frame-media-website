import { motion } from "motion/react";

export function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
              01 WHO WE ARE
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
              Your Video Editing Partner
            </h2>
          </div>
        </div>
        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 text-xl text-[#666666] leading-relaxed max-w-none"
          >
            <p className="text-3xl font-medium text-black mb-4 leading-snug tracking-tight">
              A premium video editing agency for brands that need consistent,
              high-quality content without building an in-house post-production
              team.
            </p>
            <p>
              We work with founders, coaches, consultants, creators, clinics,
              wellness brands, and service businesses. Our team handles{" "}
              <strong className="text-black font-bold">
                editing, pacing, motion graphics, sound design, and repurposing
              </strong>
              .
            </p>
            <p>
              With 6+ years of experience and 500+ completed projects, we know
              how to turn rough recordings into clear stories people want to
              watch, trust, and share.
            </p>
            <p>
              Whether you need a single campaign or an ongoing content partner,
              you get a dependable workflow, responsive communication, and
              platform-ready videos from one team.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
