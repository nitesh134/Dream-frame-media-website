import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Layout,
  Star,
  BarChart3,
  Database,
  Globe,
  Settings,
  Users,
  Workflow,
  Check,
  CheckCheck,
  X,
  ChevronDown,
  Play,
  Mail,
  User,
  Building,
  MessageSquare,
  Layers,
  MonitorPlay,
  LineChart,
  HelpCircle,
  Search,
  Target,
  Zap,
  LayoutTemplate,
  Smartphone,
  Video,
  Share2,
  MessageCircle,
  Eye,
  Mic,
  Sparkles,
  Scissors,
  Headphones,
  FileText,
  Image,
  Megaphone,
  FastForward,
  Repeat,
  Filter,
  Link2,
  Youtube,
  Clock,
  PenTool,
  Bot,
  Cpu,
  Network,
  Activity,
  Fingerprint,
  BrainCircuit,
  Map,
  Home,
  Menu,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Link,
  useLocation,
} from "react-router-dom";

export function ShortFormHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Content Strategy & Positioning",
      desc: "Analyze the founder's niche, audience behavior, content goals, positioning gaps, and platform strategy before editing begins.",
      items: [
        "Audience targeting",
        "Content direction",
        "Platform optimization",
        "Authority positioning",
        "Content themes",
        "Viral topic planning",
      ],
    },
    {
      num: "02",
      title: "Content Intake & Clip Selection",
      desc: "Review long-form recordings, podcasts, webinars, or raw footage to identify high-retention content opportunities.",
    },
    {
      num: "03",
      title: "Strategic Hook Development",
      desc: "Craft scroll-stopping hooks and opening sequences designed to maximize retention and audience attention.",
    },
    {
      num: "04",
      title: "Platform-Native Editing Workflow",
      desc: "Edit content specifically for Instagram Reels, YouTube Shorts, TikTok, and LinkedIn using platform-native pacing and audience behavior patterns.",
    },
    {
      num: "05",
      title: "CTA Integration & Brand Consistency",
      desc: "Integrate strategic CTAs, maintain brand identity, and optimize content for inbound engagement and conversions.",
    },
    {
      num: "06",
      title: "Review, Optimization & Distribution Support",
      desc: "Final optimization, revision process, performance refinement, and content delivery structured for omnichannel publishing workflows.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-black text-white overflow-hidden relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-16 border-b border-[#333333] pb-4">
          THE CONTENT SYSTEM
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-24 max-w-3xl">
          A Premium Authority Infrastructure.
        </h2>

        <div className="relative pt-4">
          {/* Central vertical line */}
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#333333] md:left-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={i}
                className="relative flex flex-col md:flex-row md:justify-between w-full"
              >
                {/* Number indicator */}
                <div className="absolute left-0 md:left-1/2 top-6 md:top-8 w-8 h-8 bg-white text-black rounded-[2px] flex items-center justify-center font-bold text-sm z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  {step.num}
                </div>

                {/* Content */}
                <div
                  className={`pl-16 md:pl-0 w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="bg-[#0a0a0a] border border-[#333333] p-8 md:p-10 rounded-[2px] hover:border-[#666666] transition-colors relative group">
                    {/* Decorative horizontal line crossing to the number */}
                    <div
                      className={`hidden md:block absolute top-[48px] w-[3rem] border-t border-dashed border-[#333333] group-hover:border-[#666666] transition-colors ${i % 2 === 0 ? "-right-[3rem]" : "-left-[3rem]"}`}
                    ></div>

                    <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-4 uppercase">
                      Phase {step.num}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[#999999] leading-relaxed mb-6">
                      {step.desc}
                    </p>

                    {step.items && step.items.length > 0 && (
                      <div className="grid sm:grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-[#333333]">
                        {step.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full border border-[#666666]"></div>
                            <span className="text-xs text-[#cccccc] font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

