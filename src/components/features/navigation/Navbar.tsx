import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  Home,
  Layers,
  LineChart,
  Mail,
  Menu,
  MonitorPlay,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BRAND_NAME } from "@/constants/brand";
import { MOBILE_SERVICE_LINKS, SERVICE_MENU_COLUMNS } from "@/constants/navigation";
import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
import { useScrollToHashOnHome } from "@/hooks/useScrollToHashOnHome";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const handleScrollToHash = useScrollToHashOnHome(location, () =>
    setIsMobileMenuOpen(false),
  );

  const isHomeActive = location.pathname === "/" && !location.hash;
  const isServicesActive = location.pathname.startsWith("/services");
  const isWorkActive =
    location.pathname.startsWith("/work") || location.hash === "#work";
  const isCaseStudiesActive =
    location.pathname.startsWith("/case-studies") ||
    location.hash === "#case-studies";
  const isAboutActive = location.hash === "#who-we-are";
  const isFaqActive = location.hash === "#faq-section";
  const isContactActive = location.hash === "#booking";

  const navItemClass = (isActive: boolean) =>
    `flex items-center gap-1.5 transition-all ${isActive ? "text-black font-bold opacity-100" : "hover:text-black opacity-80 hover:opacity-100"}`;

  const mobileNavItemClass = (isActive: boolean) =>
    `flex items-center justify-between text-lg font-medium transition-all py-4 border-b border-[#E5E5E5] ${isActive ? "text-black font-bold" : "text-[#666666] hover:text-black"}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E5E5E5] transition-all">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between relative">
        
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#666666] h-full">
          {/* <Link to="/" className={navItemClass(isHomeActive)}>
            <Home className="w-4 h-4" /> Home
          </Link> */}
          <div
            className={`h-full flex items-center cursor-pointer group hover:text-black transition-colors ${isServicesActive ? "text-black font-bold opacity-100" : "opacity-80 hover:opacity-100"}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Services{" "}
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </span>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 left-0 right-0 border-b border-[#E5E5E5] bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] cursor-default"
                >
                  <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
                    <div className="grid grid-cols-3 gap-8 lg:gap-12 font-normal">
                      {SERVICE_MENU_COLUMNS.map((col, colIndex) => {
                        const Icon = col.Icon;
                        return (
                          <div
                            key={col.title}
                            className={colIndex > 0 ? "border-l border-[#E5E5E5] pl-12" : ""}
                          >
                            <div className="text-[10px] font-bold text-black tracking-widest uppercase mb-6 flex items-center gap-2">
                              <Icon className="w-4 h-4 shrink-0" />
                              <span className="leading-tight text-left">
                                {col.title.split("\n").map((line, idx) => (
                                  <span key={`${col.title}-${idx}`}>
                                    {idx > 0 ? <br /> : null}
                                    {line}
                                  </span>
                                ))}
                              </span>
                            </div>
                            <ul className="space-y-4">
                              {col.links.map((link) => (
                                <li key={link.to}>
                                  <Link
                                    to={link.to}
                                    className="text-[#666666] hover:text-black transition-colors block"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            to="/#work"
            onClick={() => handleScrollToHash("#work")}
            className={navItemClass(isWorkActive)}
          >
            <MonitorPlay className="w-4 h-4" /> Our Work
          </Link>
          <Link
            to="/#case-studies"
            onClick={() => handleScrollToHash("#case-studies")}
            className={navItemClass(isCaseStudiesActive)}
          >
            <LineChart className="w-4 h-4" /> Case Studies
          </Link>
          <Link
            to="/#who-we-are"
            onClick={() => handleScrollToHash("#who-we-are")}
            className={navItemClass(isAboutActive)}
          >
            <Users className="w-4 h-4" /> About
          </Link>
          {/* <Link
            to="/#faq-section"
            onClick={() => handleScrollToHash("#faq-section")}
            className={navItemClass(isFaqActive)}
          >
            <HelpCircle className="w-4 h-4" /> FAQ
          </Link> */}
          {/* <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={navItemClass(isContactActive)}
          >
            <Mail className="w-4 h-4" /> Contact
          </a> */}
        </nav>
        <div className="flex items-center gap-4 relative z-50">
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex text-[13px] font-medium bg-black text-white px-4 py-2.5 rounded-[4px] hover:bg-black/90 active:scale-[0.98] transition-all items-center gap-2"
          >
            Book a Free Call <ArrowRight className="w-3 h-3" />
          </a>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 border border-[#E5E5E5] rounded-[2px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto pt-6 pb-24 px-5 md:px-8"
          >
            <div className="flex flex-col">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={mobileNavItemClass(isHomeActive)}
              >
                Home <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <div className="py-4 border-b border-[#E5E5E5]">
                <div className="flex justify-between items-center text-lg font-medium text-black mb-4">
                  Services <Layers className="w-5 h-5 text-[#666666]" />
                </div>

                <div className="grid gap-5 font-normal">
                      {SERVICE_MENU_COLUMNS.map((col, colIndex) => {
                        const Icon = col.Icon;
                        return (
                          <div
                            key={col.title}
                            className={colIndex > 0 ? "border-l border-[#E5E5E5] pl-3" : "pl-3"}
                          >
                            <div className="text-[14px] font-bold text-black tracking-widest uppercase mb-3 flex items-center gap-2">
                              <Icon className="w-4 h-4 shrink-0" />
                              <span className="leading-tight text-left">
                                {col.title}
                              </span>
                            </div>
                            <ul className="space-y-4">
                              {col.links.map((link) => (
                                <li key={link.to}>
                                  <Link
                                    to={link.to}
                                    className="text-[#666666] hover:text-black transition-colors block"
                                  >
                                    - {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                {/* <ul className="space-y-4 pl-4 border-l-2 border-[#FAFAFA]">
                  {MOBILE_SERVICE_LINKS.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[#666666] text-base"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>

              <Link
                to="/#work"
                onClick={() => handleScrollToHash("#work")}
                className={mobileNavItemClass(isWorkActive)}
              >
                Our Work <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                to="/#case-studies"
                onClick={() => handleScrollToHash("#case-studies")}
                className={mobileNavItemClass(isCaseStudiesActive)}
              >
                Case Studies <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                to="/#who-we-are"
                onClick={() => handleScrollToHash("#who-we-are")}
                className={mobileNavItemClass(isAboutActive)}
              >
                About <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
              <Link
                to="/#faq-section"
                onClick={() => handleScrollToHash("#faq-section")}
                className={mobileNavItemClass(isFaqActive)}
              >
                FAQ <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>

              <a
                href={STRATEGY_CALL_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 h-14 bg-black text-white font-bold rounded-[2px] active:scale-[0.98] transition-transform"
              >
                Book a Free Call <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
