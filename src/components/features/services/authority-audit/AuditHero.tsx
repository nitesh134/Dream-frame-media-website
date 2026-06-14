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

export function AuditHero() {
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
          End-to-End Content Strategy
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-4xl">
          Turn Your Expertise Into A Clear Content Plan.
        </h1>
        <p className="text-xl md:text-2xl text-[#666666] mb-12 leading-relaxed max-w-3xl">
          Video ideas, scripting direction, content planning, repurposing
          structure, posting strategy, and lead-generation angles built around
          your brand.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all"
        >
          Plan Your Content System <ArrowRight className="w-5 h-5" />
        </a>

        {/* Hero Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 w-full max-w-5xl relative border border-[#E5E5E5] rounded-[2px] bg-[#FAFAFA] p-4 md:p-8 flex flex-col md:flex-row gap-8"
        >
          <div className="flex-1 bg-white border border-[#E5E5E5] rounded-[2px] p-6 text-left">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                Current Content
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-12 border border-dashed border-[#CCCCCC] rounded-[2px] flex items-center justify-center text-[#999999] text-sm">
                Fragmented Workflows
              </div>
              <div className="h-12 border border-dashed border-[#CCCCCC] rounded-[2px] flex items-center justify-center text-[#999999] text-sm">
                Unclear Positioning
              </div>
              <div className="h-12 border border-dashed border-[#CCCCCC] rounded-[2px] flex items-center justify-center text-[#999999] text-sm">
                Weak Conversion
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center text-[#CCCCCC]">
            <ArrowRight className="w-6 h-6" />
          </div>
          <div className="flex-1 bg-white border border-[#E5E5E5] rounded-[2px] p-6 text-left shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 py-1 px-3 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-bl-[2px]">
              Optimized
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#999999]">
                Content Strategy
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-12 border-l-2 border-black bg-[#FAFAFA] rounded-r-[2px] flex items-center px-4 font-medium text-sm">
                Publishing Plan
              </div>
              <div className="h-12 border-l-2 border-black bg-[#FAFAFA] rounded-r-[2px] flex items-center px-4 font-medium text-sm">
                Content Pillars
              </div>
              <div className="h-12 border-l-2 border-black bg-[#FAFAFA] rounded-r-[2px] flex items-center px-4 font-medium text-sm">
                Lead-Generation Angles
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
