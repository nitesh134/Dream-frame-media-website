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

export function PodcastHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Podcast Upload",
      desc: "Submit raw audio and multi-cam video files into our streamlined intake portal.",
    },
    {
      num: "02",
      title: "Strategic Clip Selection",
      desc: "Our editors scan the episode timeline for the most engaging narratives and valuable insights.",
    },
    {
      num: "03",
      title: "Viral Hook Extraction",
      desc: "Crafting custom intro sequences using the most powerful statements to instantly grab viewers.",
    },
    {
      num: "04",
      title: "Editing & Enhancement",
      desc: "Applying color grading, audio mastering, b-roll, motion graphics, and dynamic sub-titling.",
    },
    {
      num: "05",
      title: "Platform Optimization",
      desc: "Formatting the final collateral precisely for YouTube Shorts, Reels, TikTok, and LinkedIn.",
    },
    {
      num: "06",
      title: "Distribution Workflow",
      desc: "Receiving a comprehensive folder structure ready for seamless omnichannel publishing.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-24 max-w-2xl">
          The Editorial Engine.
        </h2>
        <div className="relative pt-4">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#E5E5E5] md:left-1/2 md:-translate-x-1/2"></div>
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={i}
                className="relative flex flex-col md:flex-row md:justify-between w-full"
              >
                <div className="absolute left-0 md:left-1/2 top-6 md:top-8 w-8 h-8 bg-black text-white rounded-[2px] flex items-center justify-center font-bold text-sm z-10 md:-translate-x-1/2 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                  {step.num}
                </div>
                <div
                  className={`pl-16 md:pl-0 w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="bg-white border border-[#E5E5E5] p-8 md:p-10 rounded-[2px] hover:border-black transition-colors relative group shadow-sm z-20">
                    <div
                      className={`hidden md:block absolute top-[48px] w-[3rem] border-t border-dashed border-[#E5E5E5] group-hover:border-black transition-colors ${i % 2 === 0 ? "-right-[3rem]" : "-left-[3rem]"}`}
                    ></div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[#666666] leading-relaxed">
                      {step.desc}
                    </p>
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

