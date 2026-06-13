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

export function YouTubeIncludes() {
  const items = [
    {
      title: "Motion Graphics",
      icon: <Layers className="w-5 h-5" />,
      desc: "Custom animations, lower thirds, and visual aids that elevate production value and explain complex concepts.",
    },
    {
      title: "CTR-Focused Editing",
      icon: <Target className="w-5 h-5" />,
      desc: "Intros designed specifically to deliver on the thumbnail's promise and hook the viewer instantly.",
    },
    {
      title: "Audio Enhancement",
      icon: <Headphones className="w-5 h-5" />,
      desc: "Professional sound design, mixing, and specialized SFX to create an immersive auditory experience.",
    },
    {
      title: "Thumbnail Systems",
      icon: <Image className="w-5 h-5" />,
      desc: "A/B tested thumbnail designs that compel clicks while maintaining cohesive channel branding.",
    },
    {
      title: "Retention Optimization",
      icon: <Clock className="w-5 h-5" />,
      desc: "Pacing adjustments, pattern interrupts, and B-roll integration that keeps viewers watching until the end.",
    },
    {
      title: "Brand Consistency",
      icon: <PenTool className="w-5 h-5" />,
      desc: "Developing and enforcing a unique visual style guide across your entire content library.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
          Architecting watch time.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 hover:bg-[#FAFAFA] transition-colors relative group"
            >
              <div className="w-10 h-10 rounded-[2px] bg-black text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

