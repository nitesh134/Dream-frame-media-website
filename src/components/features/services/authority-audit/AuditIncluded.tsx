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

export function AuditIncluded() {
  const cards = [
    {
      title: "Video Ideas",
      desc: "Content topics shaped around your expertise, audience questions, and business goals.",
    },
    {
      title: "Scripting Direction",
      desc: "Clear hooks, structures, talking points, and calls to action for stronger videos.",
    },
    {
      title: "Content Planning",
      desc: "A practical publishing plan that balances authority, reach, trust, and conversion.",
    },
    {
      title: "Repurposing Structure",
      desc: "A system for turning every long-form recording into useful short-form content.",
    },
    {
      title: "Posting Strategy",
      desc: "Platform-specific recommendations for cadence, formats, and distribution.",
    },
    {
      title: "Lead-Generation Angles",
      desc: "Content themes and calls to action that connect attention to your offer.",
    },
    {
      title: "Production Roadmap",
      desc: "A repeatable workflow your team can follow from idea through publishing.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          WHAT IS INCLUDED
        </div>
        <h2 className="text-4xl font-bold mb-16">Your Content System.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5] border border-[#E5E5E5]">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#FAFAFA] p-10 py-12 hover:bg-white transition-colors"
            >
              <div className="w-8 h-8 rounded-[2px] bg-black text-white flex items-center justify-center font-mono text-xs mb-8">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-[#666666] leading-relaxed">{card.desc}</p>
            </div>
          ))}
          <div className="bg-[#FAFAFA] p-10 hidden lg:block"></div>
          <div className="bg-[#FAFAFA] p-10 hidden md:block lg:hidden"></div>
        </div>
      </div>
    </section>
  );
}
