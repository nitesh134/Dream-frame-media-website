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

export function RetainerOverview() {
  const steps = [
    {
      title: "Strategy",
      icon: <Target className="w-5 h-5" />,
      desc: "Architecting the narrative",
    },
    {
      title: "Recording",
      icon: <MonitorPlay className="w-5 h-5" />,
      desc: "1 hr guided capture",
    },
    {
      title: "Extraction",
      icon: <Database className="w-5 h-5" />,
      desc: "Mining core insights",
    },
    {
      title: "Repurposing",
      icon: <Workflow className="w-5 h-5" />,
      desc: "Multi-format adaptation",
    },
    {
      title: "Distribution",
      icon: <Globe className="w-5 h-5" />,
      desc: "Omnichannel publishing",
    },
    {
      title: "Optimization",
      icon: <LineChart className="w-5 h-5" />,
      desc: "Data-driven iteration",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-16 border-b border-[#333333] pb-4 max-w-[200px] mx-auto">
          SYSTEM OVERVIEW
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-[#333333] border border-[#333333] mt-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-8 flex flex-col items-center justify-center relative group"
            >
              {i !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-4 h-px bg-[#333333] z-10 pointer-events-none translate-x-1/2"></div>
              )}
              <div className="w-12 h-12 rounded-[2px] bg-[#1a1a1a] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="font-bold mb-2">{step.title}</h4>
              <p className="text-xs text-[#999999]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

