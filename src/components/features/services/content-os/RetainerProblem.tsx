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

export function RetainerProblem() {
  const issues = [
    {
      title: "Founder Dependency",
      desc: "If you stop producing, the entire content machine halts.",
    },
    {
      title: "Inconsistent Posting",
      desc: "Erratic publishing schedules that kill algorithmic momentum.",
    },
    {
      title: "No Repurposing System",
      desc: "Valuable long-form ideas dying after one low-effort post.",
    },
    {
      title: "Poor Platform Optimization",
      desc: "Using the exact same format across fundamentally different platforms.",
    },
    {
      title: "Weak Content Operations",
      desc: "Managing 5 different freelancers instead of focusing on your business.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
              OPERATIONAL BOTTLENECKS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Most Content Systems Break At Scale.
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl text-[#666666] mb-12 leading-relaxed">
              True scale requires decoupling your personal time from your media
              output. You bring the raw expertise; we provide the operational
              infrastructure to amplify it.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {issues.map((issue, i) => (
                <div key={i} className="flex gap-4">
                  <X className="w-5 h-5 text-[#ccc] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">{issue.title}</h4>
                    <p className="text-[#666666]">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

