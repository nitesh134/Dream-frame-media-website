import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
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

export function RetainerHero() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-40 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] rounded-[2px] px-3 py-1.5 uppercase bg-[#FAFAFA]">
          Content OS
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-4xl">
          One Recording Session. Endless Distribution.
        </h1>
        <p className="text-xl md:text-2xl text-[#666666] mb-12 leading-relaxed max-w-3xl">
          A fully managed content infrastructure designed to transform your
          expertise into scalable omnichannel authority.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all"
        >
          Book Strategy Call <ArrowRight className="w-5 h-5" />
        </a>

        {/* Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full max-w-5xl relative border border-[#E5E5E5] rounded-[2px] bg-[#FAFAFA] text-left overflow-hidden flex flex-col md:flex-row"
        >
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-[#E5E5E5] bg-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="font-bold">Original Input</div>
                <div className="text-xs text-[#666666]">
                  1 hr strategy & recording
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-gradient-to-r from-black to-transparent my-10 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-black"></div>
            </div>
          </div>
          <div className="flex-1 p-8 md:p-12 bg-[#FAFAFA]">
            <div className="font-bold mb-6 text-sm uppercase tracking-widest text-[#999999]">
              Content Ecosystem Output
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] p-4 text-center">
                <div className="text-xs font-bold text-[#666666]">LinkedIn</div>
                <div className="text-sm font-medium mt-1">
                  Carousels & Posts
                </div>
              </div>
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] p-4 text-center">
                <div className="text-xs font-bold text-[#666666]">YouTube</div>
                <div className="text-sm font-medium mt-1">Long-Form Videos</div>
              </div>
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] p-4 text-center">
                <div className="text-xs font-bold text-[#666666]">
                  Instagram
                </div>
                <div className="text-sm font-medium mt-1">Viral Shorts</div>
              </div>
              <div className="bg-white border border-[#E5E5E5] rounded-[2px] p-4 text-center">
                <div className="text-xs font-bold text-[#666666]">
                  Newsletter
                </div>
                <div className="text-sm font-medium mt-1">Deep Dives</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

