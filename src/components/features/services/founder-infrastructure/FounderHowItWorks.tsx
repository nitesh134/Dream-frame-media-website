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

export function FounderHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Executive Positioning Strategy",
      desc: "We map your unique insights against market gaps to establish a category-of-one narrative.",
    },
    {
      num: "02",
      title: "Authority Ecosystem Planning",
      desc: "Designing the specific architecture of platforms, formats, and funnels to support your brand.",
    },
    {
      num: "03",
      title: "Media Infrastructure Setup",
      desc: "Deploying automated workflows, recording studios, and content management systems.",
    },
    {
      num: "04",
      title: "Content Production Workflow",
      desc: "A frictionless capture process where we extract your expertise with minimal time investment.",
    },
    {
      num: "05",
      title: "AI Automation Integration",
      desc: "Implementing proprietary AI tools to scale editing, distribution, and engagement.",
    },
    {
      num: "06",
      title: "Inbound Lead Optimization",
      desc: "Connecting your media views to measurable business outcomes through strategic routing.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold text-[#999999] tracking-widest mb-16 border-b border-[#333333] pb-4">
          IMPLEMENTATION
        </div>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight sticky top-24">
              The Integration Sequence.
            </h2>
          </div>
          <div className="lg:w-2/3">
            <div className="space-y-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="w-12 h-12 flex-shrink-0 border border-[#333333] rounded-full flex items-center justify-center font-mono text-sm text-[#999999] group-hover:border-white group-hover:text-white transition-colors">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[#999999] text-lg leading-relaxed">
                      {step.desc}
                    </p>
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

