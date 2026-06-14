import { Link } from "react-router-dom";
import { BRAND_NAME } from "@/constants/brand";
import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
import { scrollToHash } from "@/utils/dom";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const handleScrollToHash = (hash: string) => {
    if (window.location.pathname === "/") {
      scrollToHash(hash, "smooth");
    }
  };

  return (
    <footer className="bg-[#FAFAFA] border-t border-[#E5E5E5] pt-32 pb-8 px-5 md:px-8 text-sm relative overflow-hidden">
      {/* Top CTA Area */}
      <div className="max-w-7xl mx-auto mb-32 text-center border-b border-[#E5E5E5] pb-32 relative">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
          Ready To Turn Raw Footage Into Premium Content?
        </h2>
        <p className="text-xl md:text-2xl text-[#666666] mb-12 max-w-3xl mx-auto leading-relaxed">
          Tell us what you are creating. We will recommend the right editing
          workflow and provide a clear quote for your project or monthly needs.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 px-8 bg-black text-white rounded-[2px] flex items-center justify-center font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
          >
            Book a Free Call
          </a>
          <Link
            to="/#case-studies"
            onClick={() => handleScrollToHash("#case-studies")}
            className="w-full sm:w-auto h-14 px-8 bg-transparent text-black border border-[#E5E5E5] rounded-[2px] flex items-center justify-center font-bold text-lg hover:bg-white hover:border-[#cccccc] active:scale-[0.98] transition-all"
          >
            View Case Studies
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-32">
          {/* Column 1: Brand */}
          <div className="lg:pr-8">

            <Logo />

            <p className="text-[#666666] leading-relaxed mb-6 text-base">
              YouTube editing, short-form editing, content strategy, and AI
              content systems for founders, creators, and brands.
            </p>
            <div className="text-[10px] uppercase tracking-widest font-bold text-[#999999]">
              6+ Years. 500+ Projects. 200M+ Views.
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-8 border-b border-[#E5E5E5] pb-4">
              Services
            </h4>
            <ul className="space-y-4 text-base font-medium text-[#666666]">
              <li>
                <Link
                  to="/services/youtube-editing"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  YouTube Video Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/short-form-editing"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Short-Form Video Editing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/authority-engine-audit"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  End-to-End Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ai-content-system"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  AI Content System
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-8 border-b border-[#E5E5E5] pb-4">
              Company
            </h4>
            <ul className="space-y-4 text-base font-medium text-[#666666]">
              <li>
                <Link
                  to="/#who-we-are"
                  onClick={() => handleScrollToHash("#who-we-are")}
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#work"
                  onClick={() => handleScrollToHash("#work")}
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/#case-studies"
                  onClick={() => handleScrollToHash("#case-studies")}
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/#faq-section"
                  onClick={() => handleScrollToHash("#faq-section")}
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={STRATEGY_CALL_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-black mb-8 border-b border-[#E5E5E5] pb-4">
              Connect
            </h4>
            <ul className="space-y-4 text-base font-medium text-[#666666]">
              <li>
                <a
                  href="https://www.instagram.com/dream_frame_media/"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dream-frame-media/"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/DreamMedi252"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Dreamframemedia-y7i"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@dreamframemedia.com"
                  className="hover:text-black transition-colors flex items-center gap-2 group -ml-2 p-2 rounded-[2px]"
                >
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 h-px bg-black opacity-0 group-hover:opacity-100"></span>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[#999999] border-t border-[#E5E5E5] pt-8 text-xs font-medium">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights
            reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              onClick={() => window.scrollTo(0, 0)}
              className="hover:text-black transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
