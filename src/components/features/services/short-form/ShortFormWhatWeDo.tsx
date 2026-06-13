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

export function ShortFormWhatWeDo() {
  const features = [
    {
      title: "Platform-Native Editing",
      icon: <Smartphone className="w-5 h-5" />,
      desc: "Content edited specifically to feel native to TikTok, Reels, and YouTube Shorts.",
    },
    {
      title: "Strategic Hooks",
      icon: <Target className="w-5 h-5" />,
      desc: "Visual and auditory hooks engineered to stop the scroll in the first 3 seconds.",
    },
    {
      title: "Brand Consistency",
      icon: <Layers className="w-5 h-5" />,
      desc: "A unified aesthetic that makes your content instantly recognizable in the feed.",
    },
    {
      title: "CTA Optimization",
      icon: <ArrowRight className="w-5 h-5" />,
      desc: "Clear, frictionless calls-to-action guiding viewers to your funnels.",
    },
    {
      title: "Scroll-Stopping Pacing",
      icon: <Play className="w-5 h-5" />,
      desc: "Dynamic editing that maintains visual momentum and prevents viewer drop-off.",
    },
    {
      title: "ManyChat Integration",
      icon: <MessageCircle className="w-5 h-5" />,
      desc: "Seamless automated DM workflows for lead capture and conversion routing.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
          We don't just add captions. We engineer attention.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] p-10 hover:bg-white transition-colors relative group"
            >
              <div className="w-10 h-10 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

