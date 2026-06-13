import { STRATEGY_CALL_CALENDAR_URL } from "@/constants/links";
import { motion, AnimatePresence } from "motion/react";
import { CommentIcon } from "./CommentIcon";
import { HeartIcon } from "./HeartIcon";
import { ShareIcon } from "./ShareIcon";
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

export function ShortFormHero() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-40 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#999999] tracking-widest mb-6 border border-[#333333] rounded-[2px] px-3 py-1.5 uppercase bg-[#1a1a1a]">
            <Smartphone className="w-3 h-3" /> Short Form Content Editing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-3xl">
            Short-Form Content Engineered For Attention.
          </h1>
          <p className="text-xl md:text-2xl text-[#999999] mb-12 leading-relaxed max-w-2xl">
            High-retention vertical content optimized for engagement, reach, and
            conversion.
          </p>
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-[#E5E5E5] active:scale-[0.98] transition-all"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="flex-1 w-full lg:w-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[9/16] w-full max-w-[320px] mx-auto border-8 border-[#333333] rounded-[32px] bg-[#0a0a0a] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-[#333333] rounded-full z-20"></div>
            {/* Mock Video Content */}
            <div className="absolute inset-0 bg-[#111111] flex flex-col p-6">
              <div className="flex-1 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
              <div className="space-y-4 relative z-10 bottom-0 mt-auto">
                <div className="text-white font-bold text-sm bg-black/50 backdrop-blur-md p-2 rounded-[4px] inline-block mb-2">
                  Engaging Hook...
                </div>
                <div className="w-3/4 h-2 bg-white/20 rounded-full">
                  <div className="w-1/2 h-full bg-white rounded-full"></div>
                </div>
                <div className="flex justify-between items-center text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold uppercase">
                      DFM
                    </div>
                    <span className="text-xs font-medium">@dreamframe</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <HeartIcon />
                    <CommentIcon />
                    <ShareIcon />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

