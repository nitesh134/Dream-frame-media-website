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

export function FounderHero() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-40 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-6 border border-[#333333] rounded-[2px] px-3 py-1.5 uppercase bg-[#1a1a1a]">
          Founder Infrastructure
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-4xl">
          Executive Infrastructure For Category Leaders.
        </h1>
        <p className="text-xl md:text-2xl text-[#999999] mb-12 leading-relaxed max-w-3xl">
          A complete media and authority ecosystem built for founders scaling
          visibility, trust, and inbound growth.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#E5E5E5] active:scale-[0.98] transition-all"
        >
          Schedule Discovery Call <ArrowRight className="w-5 h-5" />
        </a>

        {/* Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full max-w-5xl relative border border-[#333333] rounded-[2px] bg-[#0a0a0a] p-4 md:p-8 flex flex-col md:flex-row gap-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="flex-1 bg-[#1a1a1a] border border-[#333333] rounded-[2px] p-6 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                Fragmented Approach
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-12 border border-dashed border-[#333333] rounded-[2px] flex items-center justify-center text-[#666666] text-sm">
                Founder as Bottleneck
              </div>
              <div className="h-12 border border-dashed border-[#333333] rounded-[2px] flex items-center justify-center text-[#666666] text-sm">
                Disjointed Distribution
              </div>
              <div className="flex items-center justify-center pt-2">
                <ArrowRight className="w-4 h-4 text-[#333333] rotate-90" />
              </div>
              <div className="h-12 border border-dashed border-red-900/30 bg-red-900/10 rounded-[2px] flex items-center justify-center text-red-500 text-sm font-medium">
                Inconsistent Growth
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center text-[#333333]">
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="flex-1 bg-[#111111] border border-[#333333] rounded-[2px] p-6 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 py-1 px-3 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-bl-[2px]">
              Managed System
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                Executive Infrastructure
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-12 border-l-2 border-white bg-[#1a1a1a] rounded-r-[2px] flex items-center px-4 font-medium text-sm text-white">
                Delegated Authority Capture
              </div>
              <div className="h-12 border-l-2 border-white bg-[#1a1a1a] rounded-r-[2px] flex items-center px-4 font-medium text-sm text-white">
                Omnichannel Sync
              </div>
              <div className="flex items-center justify-center pt-2">
                <ArrowRight className="w-4 h-4 text-[#666666] rotate-90" />
              </div>
              <div className="h-12 border border-[#333333] bg-white text-black rounded-[2px] flex items-center justify-center text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Scalable Inbound Trust
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

