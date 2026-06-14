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

export function AuditHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Brand Analysis",
      desc: "We ingest your current assets, links, and operational context.",
    },
    {
      num: "02",
      title: "Content Opportunity Review",
      desc: "We review your current channels, audience, offer, and strongest opportunities.",
    },
    {
      num: "03",
      title: "Ideas & Messaging",
      desc: "We define content pillars, formats, hooks, and messaging that fit your brand.",
    },
    {
      num: "04",
      title: "Production & Repurposing Plan",
      desc: "We map how ideas move from recording to long-form and short-form content.",
    },
    {
      num: "05",
      title: "Strategy Call & Roadmap",
      desc: "We deliver the plan, priorities, publishing cadence, and recommended next steps.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-black text-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-16 border-b border-[#333333] pb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-4xl font-bold mb-20 max-w-2xl">
          The Operational Sequence.
        </h2>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-[3px] top-4 bottom-4 w-px bg-[#333333] md:hidden"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-12 relative group"
              >
                {i !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 top-20 bottom-[-4rem] w-px bg-[#333333]"></div>
                )}

                <div className="w-8 h-8 rounded-[2px] bg-white text-black flex items-center justify-center font-bold text-sm flex-shrink-0 relative z-10">
                  {step.num}
                </div>
                <div className="flex-1 md:bg-[#0a0a0a] md:p-8 md:border border-[#333333] md:rounded-[2px] group-hover:border-[#666666] transition-colors relative">
                  <div className="hidden md:block absolute right-full top-1/2 w-4 h-px bg-[#333333]"></div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#999999]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
