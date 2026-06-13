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

export function AdsHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Creative Brief",
      desc: "Understanding your current CPA goals, target demographic, product messaging, and brand guidelines.",
    },
    {
      num: "02",
      title: "Hook Development",
      desc: "Scripting and cutting multiple 3-second visual/auditory hooks to test against a unified body message.",
    },
    {
      num: "03",
      title: "Editing Workflow",
      desc: "Applying direct-response principles: rapid pacing, pattern interrupts, and psychology-driven text overlays.",
    },
    {
      num: "04",
      title: "Optimization Pass",
      desc: "Trimming the 'fat' from the videos to maintain an aggressive retention curve.",
    },
    {
      num: "05",
      title: "Review & Revisions",
      desc: "Collaborative feedback loop focused on conversion metrics rather than arbitrary aesthetic choices.",
    },
    {
      num: "06",
      title: "Delivery System",
      desc: "Providing organized assets formatted for specific ad accounts (Meta, TikTok, YouTube).",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-16 border-b border-[#333333] pb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-2xl">
          The Performance Workflow.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#333333] border border-[#333333]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] p-10 relative flex flex-col group hover:bg-[#111111] transition-colors"
            >
              <div className="w-12 h-12 flex-shrink-0 border border-[#333333] bg-[#1a1a1a] rounded-[2px] flex items-center justify-center font-bold text-sm mb-8 group-hover:border-white transition-colors">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#999999] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

