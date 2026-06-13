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

export function YouTubeCTA() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex w-16 h-16 rounded-[2px] bg-white border border-[#E5E5E5] items-center justify-center mb-10 text-black shadow-sm">
          <Youtube className="w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
          Build Long-Form Authority.
        </h2>
        <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto">
          Create deep, narrative-driven content that builds unbreakable trust
          with your audience.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)]"
        >
          Book Strategy Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

