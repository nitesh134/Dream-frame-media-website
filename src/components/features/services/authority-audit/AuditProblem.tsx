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

export function AuditProblem() {
  const gaps = [
    "Positioning gaps & unclear messaging",
    "Inconsistent publishing systems",
    "Weak omnichannel distribution",
    "Poor CTA infrastructure",
    "Fragmented content workflows",
    "Audience-offer misalignment",
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
          THE REAL ISSUE
        </div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.05]">
              Most Founders Don't Have A Content Problem.
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="text-xl text-[#666666] mb-8 leading-relaxed">
              You don't need more random videos. You need to fix the systemic
              gaps preventing your current output from converting audience into
              capital. We often find:
            </p>
            <ul className="space-y-4">
              {gaps.map((gap, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg font-medium"
                >
                  <X className="w-5 h-5 text-[#999999] mt-0.5 flex-shrink-0" />
                  <span>{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

