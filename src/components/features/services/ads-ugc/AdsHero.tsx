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

export function AdsHero() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-40 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden bg-white text-black">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-[#666666] tracking-widest mb-6 border border-[#E5E5E5] rounded-[2px] px-3 py-1.5 uppercase bg-[#FAFAFA]">
            <Megaphone className="w-3 h-3" /> Direct Response Creative
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-3xl">
            Performance Creative Built For Conversion.
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] mb-12 leading-relaxed max-w-2xl">
            High-retention ad creatives optimized for paid distribution, CTR,
            and audience engagement.
          </p>
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        <div className="flex-1 w-full lg:w-auto relative hidden md:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-12 aspect-square max-w-[500px] mx-auto border border-[#E5E5E5] rounded-[2px] bg-[#FAFAFA] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-0 right-0 py-2 px-4 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-bl-[2px]">
              ROAS Engineered
            </div>
            <div className="flex items-end gap-2 h-40 mt-8">
              <motion.div
                initial={{ height: "40%" }}
                animate={{ height: ["40%", "45%", "40%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-8 bg-[#E5E5E5] rounded-t-[2px]"
              ></motion.div>
              <motion.div
                initial={{ height: "60%" }}
                animate={{ height: ["60%", "75%", "60%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="w-8 bg-[#cccccc] rounded-t-[2px]"
              ></motion.div>
              <motion.div
                initial={{ height: "30%" }}
                animate={{ height: ["30%", "20%", "30%"] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="w-8 bg-[#E5E5E5] rounded-t-[2px]"
              ></motion.div>
              <motion.div
                initial={{ height: "90%" }}
                animate={{ height: ["90%", "100%", "90%"] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
                className="w-8 bg-black rounded-t-[2px] shadow-[0_0_20px_rgba(0,0,0,0.1)] relative"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap">
                  +340% CTR
                </div>
              </motion.div>
            </div>
            <div className="w-full border-t border-dashed border-[#cccccc] mt-4 pt-4 flex justify-between text-[#999999] text-xs font-mono">
              <span>v1_control</span>
              <span>v2_alt_hook</span>
              <span>v3_fast_pace</span>
              <span className="font-bold text-black border-b border-black">
                v4_winner
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

