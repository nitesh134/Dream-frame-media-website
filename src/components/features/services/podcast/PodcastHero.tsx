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

export function PodcastHero() {
  return (
    <section className="pt-32 pb-24 px-5 md:px-8 md:pt-40 md:pb-32 border-b border-[#E5E5E5] relative overflow-hidden bg-[#FAFAFA]">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      ></div>
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="flex items-center gap-2 text-[10px] font-bold text-[#666666] tracking-widest mb-8 border border-[#E5E5E5] rounded-[2px] px-3 py-1.5 uppercase bg-white shadow-sm">
            <Mic className="w-3 h-3" /> Podcast Production
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8 leading-[1.05] max-w-4xl mx-auto">
            Turn Conversations Into Authority Assets.
          </h1>
          <p className="text-xl md:text-2xl text-[#666666] mb-12 leading-relaxed max-w-3xl mx-auto">
            Transform long-form podcasts into a scalable multi-platform content
            ecosystem.
          </p>
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all"
          >
            Book Strategy Call <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

