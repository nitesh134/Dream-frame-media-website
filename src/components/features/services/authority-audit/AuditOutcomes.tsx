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

export function AuditOutcomes() {
  const outcomes = [
    {
      title: "Clarity",
      desc: "Absolute certainty on what to post, where to post it, and why.",
    },
    {
      title: "Leverage",
      desc: "Systems that maximize the output of every hour you spend on content.",
    },
    {
      title: "Conversion",
      desc: "A pipeline engineered to turn passive viewers into active buyers.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4 max-w-[200px] mx-auto">
          STRATEGIC OUTCOMES
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((item, i) => (
            <div key={i} className="p-8">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-[#666666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

