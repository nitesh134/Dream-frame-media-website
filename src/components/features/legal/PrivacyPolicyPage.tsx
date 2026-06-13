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

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white text-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-16">
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4 uppercase">
            LEGAL INFORMATION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Privacy Policy.
          </h1>
          <p className="text-lg text-[#666666]">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-12 text-[#333333] text-base md:text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              1. Introduction
            </h2>
            <p>
              Dream Frame Media respects your privacy and is committed to
              protecting the personal information collected through our website
              and services. This policy outlines how we handle the data
              entrusted to us when you interact with our platform.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              To deliver a premium experience, we may collect the following
              information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>Name, email address, and phone number</li>
              <li>Business details and brand assets</li>
              <li>Information provided during strategy call bookings</li>
              <li>Analytics data (such as generalized interaction metrics)</li>
              <li>Basic browser and device information</li>
              <li>Cookies to improve site functionality</li>
            </ul>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              3. How Information Is Used
            </h2>
            <p className="mb-4">
              The information we collect is strictly used to enhance our service
              delivery and operational efficiency. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>Scheduling and confirming strategy calls</li>
              <li>Direct communication and customer support</li>
              <li>Improving our services and infrastructure</li>
              <li>Analytics optimization for a better web experience</li>
              <li>Relevant marketing communication</li>
              <li>General business operations and consulting</li>
            </ul>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              4. Booking & Contact Forms
            </h2>
            <p>
              Information submitted through our consultation forms or booking
              systems is used exclusively to contact you regarding our services,
              prepare for strategic alignments, and maintain professional
              correspondence. We do not sell or rent this information to
              unauthorized data brokers.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              5. Cookies & Analytics
            </h2>
            <p>
              Our website may use cookies and modern analytics tools. These
              technologies exist to improve the user experience, understand how
              visitors interact with our content, and refine our site
              performance over time. You may configure your browser to reject
              cookies, though some interactive elements may function differently
              as a result.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              6. Third-Party Services
            </h2>
            <p className="mb-4">
              We may partner with trusted platforms to facilitate our
              operations. These include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>Google Calendar (for scheduling)</li>
              <li>Google Analytics (for site metrics)</li>
              <li>YouTube & Instagram (for displaying embedded content)</li>
              <li>Secure payment processors</li>
              <li>Workflow automation tools</li>
            </ul>
            <p className="mt-4">
              These third-party platforms govern their own privacy standards and
              data handling practices.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              7. Data Protection
            </h2>
            <p>
              We implement commercially reasonable security measures to protect
              your personal data from unauthorized access, alteration, or
              disclosure. We prioritize keeping our infrastructure secure for
              all client communications and shared assets.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              8. User Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>Request access to stored personal information</li>
              <li>Request the deletion of your data from our systems</li>
              <li>Opt-out of future marketing communications</li>
            </ul>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              9. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect shifts
              in technology, service offerings, or legal requirements. We
              encourage checking this page periodically to stay informed about
              how we protect your information.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              10. Contact Information
            </h2>
            <p>
              For any questions, requests, or privacy concerns, please contact
              us at:
            </p>
            <p className="mt-4 font-bold text-black">
              <a
                href="mailto:contact@dreamframemedia.com"
                className="hover:underline"
              >
                contact@dreamframemedia.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

