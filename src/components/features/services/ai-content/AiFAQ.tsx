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

export function AiFAQ() {
  const faqs = [
    {
      q: "Do I need to record daily?",
      a: "No. Our system is designed around batch recording and AI cloning, meaning you only need to spend a few hours a month to generate a daily content schedule.",
    },
    {
      q: "How does AI voice cloning work?",
      a: "We train a secure, private AI model on high-quality samples of your voice. This allows us to generate narration for scripts that sounds indistinguishable from your actual voice, maintaining your unique cadence.",
    },
    {
      q: "Is the content still authentic?",
      a: "Yes. The AI scales your distribution and production, but the underlying strategies, ideas, and frameworks come directly from your onboarding and expertise. It's your knowledge, amplified.",
    },
    {
      q: "What platforms are supported?",
      a: "The system creates native content optimized for YouTube, Instagram Reels, TikTok, LinkedIn, and X (Twitter).",
    },
    {
      q: "Do you provide strategy?",
      a: "Strategy is the foundation. Before any AI systems are configured, we map out your audience positioning, content pillars, and conversion funnels.",
    },
    {
      q: "Can AI content be repurposed?",
      a: "Absolutely. Our omnichannel approach means a single long-form video or core concept is programmatically turned into short clips, text posts, threads, and newsletters.",
    },
    {
      q: "How does automation work?",
      a: "We integrate tools like ManyChat and Make to trigger DMs, capture leads, and move viewers from your content into your sales pipelines automatically.",
    },
    {
      q: "Is this suitable for founders?",
      a: "This system is built specifically for founders, executives, and consultants who need to build authority but cannot afford to spend 20 hours a week editing and posting content.",
    },
  ];

  return (
    <section className="py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 border border-[#E5E5E5] rounded-xl bg-white hover:border-black transition-colors group"
            >
              <h3 className="font-bold text-lg mb-3 flex items-start justify-between">
                {faq.q}
              </h3>
              <p className="text-[#666666] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

