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

export function PodcastIncludes() {
  const items = [
    {
      title: "AI-Powered Repurposing",
      icon: <Sparkles className="w-5 h-5" />,
      desc: "Automate transcription, clip identifying, and structural repurposing utilizing modern AI pipelines.",
    },
    {
      title: "Viral Hook Extraction",
      icon: <Scissors className="w-5 h-5" />,
      desc: "Find and extract the most compelling, scroll-stopping 3-second openers to maximize audience retention.",
    },
    {
      title: "Teaser Clips",
      icon: <Video className="w-5 h-5" />,
      desc: "High-impact short-form collateral designed to drive traffic back to the full-length episodes.",
    },
    {
      title: "Audio Enhancement",
      icon: <Headphones className="w-5 h-5" />,
      desc: "Studio-grade noise reduction, equalization, and mastering for a premium listening experience.",
    },
    {
      title: "Text-Based Editing",
      icon: <FileText className="w-5 h-5" />,
      desc: "Convert spoken word into highly readable editorial assets, show notes, and LinkedIn posts.",
    },
    {
      title: "Thumbnail Systems",
      icon: <Image className="w-5 h-5" />,
      desc: "Designed aesthetic frameworks that command attention and drive CTR on visual platforms.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-3xl">
          Comprehensive asset extraction.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {items.map((item, i) => (
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

