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

export function AiHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Onboarding",
      desc: "Business goals, audience positioning, and authority objectives are mapped.",
    },
    {
      num: "02",
      title: "Content Strategy",
      desc: "A strategic authority-focused content plan is created.",
    },
    {
      num: "03",
      title: "Clone Setup",
      desc: "AI avatar and voice systems are configured.",
    },
    {
      num: "04",
      title: "Scripting",
      desc: "Hooks, scripts, and content structures are prepared by the team.",
    },
    {
      num: "05",
      title: "Editing & Repurposing",
      desc: "Content is edited into high-retention platform-native formats.",
    },
    {
      num: "06",
      title: "Posting & Distribution",
      desc: "Content gets distributed strategically across multiple platforms.",
    },
  ];

  return (
    <section className="py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How The System Works
          </h2>
          <p className="text-lg text-[#666666]">
            A structured deployment timeline for your AI content engine.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E5E5E5] before:to-transparent">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#F0F0F0] text-black font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#FAFAFA] z-10 transition-colors group-hover:bg-black group-hover:text-white">
                {step.num}
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-lg border border-[#E5E5E5] bg-white transition-colors group-hover:border-black shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-black">{step.title}</h3>
                </div>
                <p className="text-[#666666]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

