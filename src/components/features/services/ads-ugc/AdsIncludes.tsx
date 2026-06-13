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

export function AdsIncludes() {
  const items = [
    {
      title: "UGC Editing Systems",
      icon: <User className="w-5 h-5" />,
      desc: "Transform raw customer footage into polished, native-feeling direct response ads.",
    },
    {
      title: "Ad Optimization",
      icon: <Target className="w-5 h-5" />,
      desc: "Data-backed editing decisions focused entirely on lowering CPA and boosting conversion rates.",
    },
    {
      title: "AI-Assisted Creative Testing",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "Rapidly generate variations of hooks and CTAs to find the mathematically winning creative.",
    },
    {
      title: "Fast Iteration Workflow",
      icon: <FastForward className="w-5 h-5" />,
      desc: "Quick turnaround times allowing your media buyers to test and scale without operational drag.",
    },
    {
      title: "Brand Consistency",
      icon: <Layers className="w-5 h-5" />,
      desc: "Maintaining your visual identity while adapting to the chaotic nature of native platforms.",
    },
    {
      title: "Funnel Alignment",
      icon: <Filter className="w-5 h-5" />,
      desc: "Creative constructed specifically for where the user sits in the buyer's journey.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
          Creative that scales horizontally.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5E5E5] p-10 hover:border-black transition-colors relative group"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white group-hover:border-black transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#666666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

