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

export function AuditIncluded() {
  const cards = [
    {
      title: "Content Funnel Analysis",
      desc: "We map your current top, middle, and bottom of funnel content to identify leakage points.",
    },
    {
      title: "Positioning Breakdown",
      desc: "Tearing down your market message to ensure you occupy a unique category of one.",
    },
    {
      title: "Audience Gap Mapping",
      desc: "Analyzing the disconnect between who consumes your content and who actually buys.",
    },
    {
      title: "CTA Optimization",
      desc: "Restructuring how you capture attention and route it to your owned audience platforms.",
    },
    {
      title: "Offer Diagnosis",
      desc: "Evaluating how effectively your personal brand connects to your backend monetization.",
    },
    {
      title: "Growth Roadmap",
      desc: "A phased operational plan to transition from haphazard posting to systematic growth.",
    },
    {
      title: "Authority Strategy Insights",
      desc: "Executive-level frameworks tailored specifically to your industry and status.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          WHAT IS INCLUDED
        </div>
        <h2 className="text-4xl font-bold mb-16">The Audit Components.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] p-10 py-12 hover:bg-white transition-colors"
            >
              <div className="w-8 h-8 rounded-[2px] bg-black text-white flex items-center justify-center font-mono text-xs mb-8">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-[#666666] leading-relaxed">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#FAFAFA] p-10 hidden lg:block"></div>
          <div className="bg-[#FAFAFA] p-10 hidden md:block lg:hidden"></div>
        </div>
      </div>
    </section>
  );
}

