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

export function RetainerHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Content Strategy Session",
      desc: "Monthly alignment calls to define core themes, offers promoting, and angles for the upcoming production cycle.",
    },
    {
      num: "02",
      title: "Long-Form Recording Session",
      desc: "A streamlined, frictionless recording environment where we guide you through structured formats to maximize yield.",
    },
    {
      num: "03",
      title: "Strategic Content Extraction",
      desc: "Our editors comb through the raw footage to identify the highest-retention moments and core philosophical arguments.",
    },
    {
      num: "04",
      title: "Short-Form Repurposing",
      desc: "Translating those insights into highly engaging vertical video, premium visual carousels, and written frameworks.",
    },
    {
      num: "05",
      title: "Platform Distribution",
      desc: "Native formatting and scheduling across your entire ecosystem, optimized for each platform's specific algorithm.",
    },
    {
      num: "06",
      title: "Analytics & Optimization",
      desc: "Closing the feedback loop by analyzing retention curves, lead flow, and audience sentiment to improve the next batch.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-20 max-w-2xl">
          The Operating Sequence.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#E5E5E5] font-mono tracking-tighter">
                  {step.num}
                </span>
                <div className="h-px bg-[#E5E5E5] flex-1"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-[#666666] leading-relaxed text-lg">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

