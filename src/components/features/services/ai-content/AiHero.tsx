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

export function AiHero() {
  return (
    <section className="pt-24 pb-20 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f0f0] border border-[#e5e5e5] text-sm font-medium mb-8">
          <Bot className="w-4 h-4" /> AI Operations
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8">
          Build A Personal Brand <br className="hidden md:block" />
          System Without <br className="hidden md:block" />
          Recording Daily.
        </h1>
        <p className="text-xl md:text-2xl text-[#666666] max-w-4xl mx-auto mb-10 leading-relaxed">
          We help founders and experts scale authority using AI cloning,
          strategic scripting, high-retention editing, and automated content
          distribution systems.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={STRATEGY_CALL_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Book Strategy Call <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

