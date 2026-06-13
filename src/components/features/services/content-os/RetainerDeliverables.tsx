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

export function RetainerDeliverables() {
  const items = [
    {
      title: "LinkedIn Authority Positioning",
      desc: "Text posts & visual carousels.",
    },
    { title: "YouTube Ecosystem", desc: "Long-form narrative videos." },
    { title: "Instagram Reels", desc: "High-retention vertical shorts." },
    {
      title: "Lead Magnet Infrastructure",
      desc: "Assets that capture email addresses.",
    },
    { title: "CTA Optimization", desc: "Strategic routing to your offers." },
    { title: "Analytics Dashboard", desc: "Real-time performance telemetry." },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          DELIVERABLES
        </div>
        <h2 className="text-4xl font-bold mb-16">Omnichannel Output.</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 py-12 hover:bg-[#FAFAFA] transition-colors relative group"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#FAFAFA] border border-[#E5E5E5] flex items-center justify-center mb-8">
                <Check className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-[#666666]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

