import { motion } from "motion/react";
import { LANDING_FAQ_ITEMS } from "@/constants/faq";
import { EASE_OUT_EXPO } from "@/constants/motion";
import { FaqItem } from "@/components/features/landing/FaqItem";

export function FaqSection() {
  return (
    <section
      id="faq-section"
      className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="text-center mb-20 md:mb-24"
        >
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] bg-white inline-block px-3 py-1.5 uppercase rounded-[2px] shadow-sm">
            08 // FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8">
            Questions Clients Ask Before Hiring Us.
          </h2>
          <p className="text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto">
            Clear answers about our editing services, workflow, platforms, and
            ongoing content support.
          </p>
        </motion.div>

        <div className="space-y-4">
          {LANDING_FAQ_ITEMS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: EASE_OUT_EXPO,
              }}
            >
              <FaqItem question={faq.q} answer={faq.a} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
