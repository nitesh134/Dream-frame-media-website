import {
  Check,
  X
} from "lucide-react";
import React from "react";

export function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 md:mb-20 border-b border-[#E5E5E5] pb-4 uppercase">
          03 WHY DREAM FRAME MEDIA
        </div>

        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-6 md:mb-8 leading-[1.1]">
            More Than Polished Edits.
            <br className="hidden md:block" /> A Better Content Partner.
          </h2>
          <p className="text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl">
            Premium craft matters, but so do consistency, platform fit, and
            business results. We bring all four into one editing workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative lg:px-4">
          {/* Other Agencies */}
          <div className="bg-[#F5F5F5] border border-[#E5E5E5] p-10 md:p-14 rounded-[2px] relative group transition-all duration-500 hover:border-[#D1D5DB]">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3 text-[#1a1a1a]">
              Other Agencies
            </h3>
            <p className="text-[#666666] leading-relaxed mb-10 text-sm md:text-base border-b border-[#E5E5E5] pb-8">
              A basic editing vendor may deliver a finished file without
              understanding your audience, offer, or publishing goals.
            </p>
            <ul className="space-y-6">
              {[
                "One-size-fits-all editing",
                "Random effects without purpose",
                "Weak hooks and slow pacing",
                "No platform-specific formatting",
                "Inconsistent visual quality",
                "Limited repurposing support",
                "Unclear revision process",
                "Editing without audience context",
                "No continuity across content",
                "Reactive project delivery",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[#666666] group-hover:text-[#333333] transition-colors"
                >
                  <X className="w-5 h-5 text-[#999999] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dream Frame Media */}
          <div className="bg-white border-2 border-[#1a1a1a] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-14 rounded-[2px] relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4">
              <div className="bg-black text-white text-[10px] uppercase font-bold tracking-widest py-2 px-4 shadow-lg">
                The Premium Partner
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 flex items-center gap-3 text-[#1a1a1a]">
              Dream Frame Media
            </h3>
            <p className="text-[#666666] leading-relaxed mb-10 text-sm md:text-base border-b border-[#E5E5E5] pb-8">
              We combine premium post-production with content strategy and a
              dependable workflow built around your brand.
            </p>
            <ul className="space-y-6">
              {[
                "Retention-focused storytelling",
                "Premium motion and sound design",
                "Platform-native deliverables",
                "YouTube, short-form, podcasts, and ads",
                "Conversion-aware creative choices",
                "Consistent brand presentation",
                "Long-form to short-form repurposing",
                "Clear feedback and revisions",
                "Scalable monthly production",
                "Performance-informed iteration",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[#1a1a1a] transition-colors"
                >
                  <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
