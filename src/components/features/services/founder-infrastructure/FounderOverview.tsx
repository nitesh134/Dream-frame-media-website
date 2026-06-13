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

export function FounderOverview() {
  const pillars = [
    {
      title: "Executive Strategy",
      icon: <Target className="w-6 h-6" />,
      desc: "Positioning narrative and category design.",
    },
    {
      title: "Media Systems",
      icon: <Layers className="w-6 h-6" />,
      desc: "High-yield recording pipelines.",
    },
    {
      title: "Omnichannel Sync",
      icon: <Globe className="w-6 h-6" />,
      desc: "Multi-platform algorithm optimization.",
    },
    {
      title: "AI Workflows",
      icon: <Zap className="w-6 h-6" />,
      desc: "Automated scaling mechanisms.",
    },
    {
      title: "Webinar Infrastructure",
      icon: <MonitorPlay className="w-6 h-6" />,
      desc: "Conversion-optimized live events.",
    },
    {
      title: "Lead Systems",
      icon: <Users className="w-6 h-6" />,
      desc: "Qualification and nurturing flows.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4 text-center">
          THE ECOSYSTEM
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 text-center max-w-3xl mx-auto">
          An Elite Authority Infrastructure Built for Scale.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="border border-[#E5E5E5] bg-[#FAFAFA] p-10 rounded-[2px] hover:border-black transition-colors group"
            >
              <div className="w-12 h-12 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
              <p className="text-[#666666]">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

