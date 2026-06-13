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

export function AiWhatWeBuild() {
  const modules = [
    {
      title: "Founder Onboarding",
      desc: "Business goals, niche positioning, audience psychology, and authority objectives are mapped strategically.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Strategic Content Planning",
      desc: "A complete monthly content strategy built around authority positioning, lead gen, and retention.",
      icon: <BrainCircuit className="w-5 h-5" />,
    },
    {
      title: "AI Clone Setup",
      desc: "Done-for-you AI identity setup including avatar configuration and voice cloning.",
      icon: <Fingerprint className="w-5 h-5" />,
    },
    {
      title: "AI-Assisted Scripting",
      desc: "We create hooks, scripts, authority content angles, and platform-native formats.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "High-Retention Editing",
      desc: "Content is edited using retention psychology, pacing optimization, and subtitle systems.",
      icon: <Scissors className="w-5 h-5" />,
    },
    {
      title: "Omnichannel Repurposing",
      desc: "One idea gets transformed into IG reels, LinkedIn posts, Shorts, and lead magnet snippets.",
      icon: <Repeat className="w-5 h-5" />,
    },
    {
      title: "Posting & Automation",
      desc: "System includes posting workflows, ManyChat automation, CTA integration, and distribution.",
      icon: <Share2 className="w-5 h-5" />,
    },
    {
      title: "Performance Optimization",
      desc: "Monthly review systems focused on retention, reach, engagement, and inbound leads.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What The AI Content System Includes
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl">
            A complete done-for-you media operation designed for busy founders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="p-8 border border-[#E5E5E5] hover:border-black rounded-lg transition-colors bg-[#FAFAFA] group flex flex-col"
            >
              <div className="w-12 h-12 bg-white rounded-md border border-[#E5E5E5] flex items-center justify-center mb-6 text-black group-hover:bg-black group-hover:text-white transition-colors">
                {mod.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{mod.title}</h3>
              <p className="text-[#666666] leading-relaxed flex-grow">
                {mod.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

