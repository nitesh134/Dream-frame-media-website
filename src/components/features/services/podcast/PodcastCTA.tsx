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

export function PodcastCTA() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex w-16 h-16 rounded-[2px] bg-[#FAFAFA] border border-[#E5E5E5] items-center justify-center mb-10 text-black">
          <Headphones className="w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
          Repurpose Content At Scale.
        </h2>
        <p className="text-xl text-[#666666] mb-12 max-w-2xl mx-auto">
          Extract maximum value from every conversation and blanket the feed
          with your expertise.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 rounded-[4px] font-bold text-lg hover:bg-black/90 active:scale-[0.98] transition-all"
        >
          Book Strategy Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

