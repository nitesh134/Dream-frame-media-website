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

export function FounderProblem() {
  const problems = [
    {
      title: "The Operational Bottleneck",
      desc: "You have industry-leading knowledge, but packaging and distributing it eats into time you should be spending running your company.",
    },
    {
      title: "No Scalable Systems",
      desc: "Your authority relies on sporadic bursts of inspiration rather than a dependable, compounding infrastructure.",
    },
    {
      title: "Fragmented Teams",
      desc: "Managing multiple freelancers or inexperienced agencies creates inconsistent messaging and brand dilution.",
    },
    {
      title: "Inconsistent Visibility",
      desc: "Periods of silence disrupt algorithm momentum and break trust with your target market.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
          THE LEADERSHIP TRAP
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Founders Shouldn't Be Content Managers.
            </h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-xl text-[#666666] mb-12 leading-relaxed">
              When a founder tries to run their media ecosystem internally,
              output suffers, quality drops, and the business loses focus. You
              need a dedicated infrastructure designed for executive scale.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {problems.map((problem, i) => (
                <div key={i}>
                  <div className="w-10 h-10 rounded-[2px] bg-white border border-[#E5E5E5] flex items-center justify-center mb-6">
                    <X className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                  <p className="text-[#666666] leading-relaxed">
                    {problem.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

