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

export function YouTubeHowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Raw Content Upload",
      desc: "Transfer your A-roll, screen recordings, and assets into our secure editorial pipeline.",
    },
    {
      num: "02",
      title: "Story Structuring",
      desc: "Crafting the narrative arc, removing dead air, and front-loading the most valuable insights.",
    },
    {
      num: "03",
      title: "Retention Editing",
      desc: "Injecting strategic visual changes, zoom-ins, and pacing shifts to combat viewer fatigue.",
    },
    {
      num: "04",
      title: "Motion Graphics",
      desc: "Adding bespoke animations, data visualizations, and on-screen text to reinforce key takeaways.",
    },
    {
      num: "05",
      title: "Thumbnail Workflow",
      desc: "Developing high-contrast, curiosity-inducing thumbnails aligned with the video's core premise.",
    },
    {
      num: "06",
      title: "Final Optimization",
      desc: "Audio mastering, color grading, and rendering the final file for 4K YouTube publication.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-8 border-b border-[#E5E5E5] bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-16 border-b border-[#E5E5E5] pb-4">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-24 max-w-2xl">
          The Editorial Engine.
        </h2>
        <div className="relative pt-4">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#E5E5E5] md:left-1/2 md:-translate-x-1/2"></div>
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                key={i}
                className="relative flex flex-col md:flex-row md:justify-between w-full"
              >
                <div className="absolute left-0 md:left-1/2 top-6 md:top-8 w-8 h-8 bg-white border border-black text-black rounded-[2px] flex items-center justify-center font-bold text-sm z-10 md:-translate-x-1/2">
                  {step.num}
                </div>
                <div
                  className={`pl-16 md:pl-0 w-full md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="bg-[#FAFAFA] border border-[#E5E5E5] p-8 md:p-10 rounded-[2px] hover:border-black transition-colors relative group">
                    <div
                      className={`hidden md:block absolute top-[48px] w-[3rem] border-t border-dashed border-[#E5E5E5] group-hover:border-black transition-colors ${i % 2 === 0 ? "-right-[3rem]" : "-left-[3rem]"}`}
                    ></div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-[#666666] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

