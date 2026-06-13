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

export function AiCTA() {
  return (
    <section className="py-32 px-5 md:px-8 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#333333] to-transparent opacity-50"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-8 border border-[#333333]">
          <Workflow className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Turn Your Expertise Into A Scalable AI Content Engine.
        </h2>
        <p className="text-[#AAAAAA] mb-12 text-xl md:text-2xl max-w-2xl">
          Build authority consistently without becoming trapped in daily content
          creation.
        </p>
        <a
          href={STRATEGY_CALL_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-10 py-5 rounded-md font-bold text-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3"
        >
          Book Strategy Call <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}

