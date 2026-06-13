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

export function AuditWhoThisIsFor() {
  const who = [
    "Founders stepping into public building.",
    "Coaches hitting a scale ceiling with manual outreach.",
    "Consultants aiming to transition into thought leadership.",
    "Educators building proprietary audience platforms.",
    "Experts scaling online authority.",
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4">
            TARGET DEMOGRAPHIC
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who This Is For
          </h2>
        </div>
        <div className="md:w-2/3 border border-[#E5E5E5] bg-[#FAFAFA] p-10 md:p-16 rounded-[2px]">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {who.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <Target className="w-5 h-5 mt-1 text-black flex-shrink-0" />
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

