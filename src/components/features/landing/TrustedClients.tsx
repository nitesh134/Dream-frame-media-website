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

export function TrustedClients() {
  const clients = [
    { name: "N Logo", src: "/logos/logo_1_n.svg" },
    { name: "Century 21", src: "/logos/century_21.svg" },
    { name: "IU", src: "/logos/iu_logo.svg" },
    { name: "Tag Logo", src: "/logos/tag_logo.svg" },
    { name: "Robs Production", src: "/logos/robs_production.svg" },
    { name: "X Logo", src: "/logos/x_logo.svg" },
    { name: "Jivo", src: "/logos/jivo.svg" },
    { name: "Gargi College", src: "/logos/gargi_college_new.svg" },
  ];

  const LogoRow = ({
    items,
    directionClass,
  }: {
    items: typeof clients;
    directionClass: string;
  }) => (
    <div
      className={`flex whitespace-nowrap items-center w-max ${directionClass}`}
    >
      <div className="flex justify-around min-w-full">
        {items.map((client, i) => (
          <div
            key={i}
            className="px-6 md:px-8 lg:px-12 flex items-center justify-center"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-8 md:h-10 lg:h-12 w-auto max-w-[100px] md:max-w-[130px] object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-around min-w-full">
        {items.map((client, i) => (
          <div
            key={`dup-${i}`}
            className="px-6 md:px-8 lg:px-12 flex items-center justify-center"
          >
            <img
              src={client.src}
              alt={client.name}
              className="h-8 md:h-10 lg:h-12 w-auto max-w-[100px] md:max-w-[130px] object-contain opacity-80 hover:opacity-100 hover:scale-[1.02] transition-all duration-500 ease-out cursor-default"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-6 md:py-8 border-b border-[#E5E5E5] bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 md:px-8 mb-4 md:mb-6 text-center">
        <h2 className="text-[16px] md:text-[22px] font-bold tracking-widest uppercase text-[#1a1a1a] mb-2">
          Trusted By Industry Leaders
        </h2>
        <p className="text-[12px] md:text-[14px] text-[#666666] leading-relaxed font-medium">
          Premium video editing trusted by brands, founders, creators, and
          growing businesses.
        </p>
      </div>

      <div className="relative flex overflow-hidden lg:max-w-[90rem] lg:mx-auto pause-on-hover">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <LogoRow items={clients} directionClass="animate-marquee-left" />
      </div>
    </section>
  );
}
