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

export function FounderCTA() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-8 bg-black text-white border-b border-[#333333] relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex w-16 h-16 rounded-[2px] bg-[#1a1a1a] border border-[#333333] items-center justify-center mb-10">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-balance font-bold tracking-tight mb-8">
          Build Authority At Executive Scale.
        </h2>
        <p className="text-xl text-[#999999] mb-12 max-w-2xl mx-auto">
          Partner with us to engineer a compounding media infrastructure that
          drives serious inbound trust.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-[4px] font-bold text-lg hover:bg-[#ccc] transition-colors"
        >
          Book Strategy Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

