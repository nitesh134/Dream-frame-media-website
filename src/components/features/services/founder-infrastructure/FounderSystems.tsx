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

export function FounderSystems() {
  const systems = [
    {
      title: "Executive Ghostwriting",
      desc: "Premium written content capturing your authentic voice for LinkedIn, newsletters, and thought leadership.",
    },
    {
      title: "Webinar Infrastructure",
      desc: "End-to-end setup and management of high-converting live events to showcase your expertise.",
    },
    {
      title: "AI Media Systems",
      desc: "Custom AI workflows that accelerate production and guarantee brand consistency across all touchpoints.",
    },
    {
      title: "Distribution Network",
      desc: "Automated syndication of your core assets to dominate multiple algorithmic feeds simultaneously.",
    },
    {
      title: "Analytics Dashboard",
      desc: "A centralized command center tracking the KPIs that actually matter to your bottom line.",
    },
    {
      title: "Strategic Advisory",
      desc: "Direct access to our leadership team for ongoing positioning adjustments and media consulting.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          THE DELIVERABLES
        </div>
        <h2 className="text-4xl font-bold mb-16">Executive Systems.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {systems.map((system, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] p-10 hover:bg-white transition-colors relative"
            >
              <div className="w-8 h-8 rounded-[2px] bg-black text-white flex items-center justify-center mb-8">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="text-xl font-bold mb-3">{system.title}</h3>
              <p className="text-[#666666] leading-relaxed">{system.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

