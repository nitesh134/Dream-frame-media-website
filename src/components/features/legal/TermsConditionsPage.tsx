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

export function TermsConditionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white text-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-16">
          <div className="text-[10px] font-bold text-[#666666] tracking-widest mb-6 border-b border-[#E5E5E5] pb-4 uppercase">
            LEGAL INFORMATION
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Terms & Conditions.
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
              Welcome to Dream Frame Media. By accessing our website, booking
              our services, or engaging through consultation, you agree to be
              bound by the terms outlined here. If you do not agree with any
              part of these terms, please do not use our services.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              2. Services Overview
            </h2>
            <p className="mb-4">
              Dream Frame Media acts as a Personal Brand Infrastructure company.
              We provide the following categories of service:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>Strategic content planning and audits</li>
              <li>High-end media production and video editing</li>
              <li>AI-powered content systems</li>
              <li>Backend automation infrastructure</li>
              <li>Personal brand growth and positioning consulting</li>
            </ul>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              3. Intellectual Property
            </h2>
            <p>
              All proprietary website content, internal workflows, branding,
              visuals, frameworks, and strategic collateral featured on this
              site belong exclusively to Dream Frame Media unless otherwise
              stated or licensed. Clients retain the rights to the final
              deliverables we produce for their brand according to the terms of
              service.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              4. Client Responsibilities
            </h2>
            <p className="mb-4">
              Successful infrastructure requires active implementation. As a
              client, you are responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>
                Providing necessary assets (raw footage, brand files) promptly
              </li>
              <li>Reviewing and approving stages within agreed timelines</li>
              <li>
                Guaranteeing you hold the legal copyright or permission to any
                materials submitted to us for use
              </li>
            </ul>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              5. Payments & Agreements
            </h2>
            <p>
              Pricing, payment schedules, and exact deliverables are unique to
              each engagement. All such details will be structured and mutually
              agreed upon through separate, explicit proposals, invoices, or
              contracts prior to the commencement of any work.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              6. Revisions & Delivery
            </h2>
            <p>
              Our editing and system-building processes include reasonable
              revisions designed to output the highest quality result. Specific
              review cycles and limitations are detailed within your specific
              project agreement to ensure timely alignment and execution.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              7. Confidentiality
            </h2>
            <p>
              We respect the sensitive nature of business infrastructure. We
              treat all non-public confidential client information, operational
              data, and strategic business data shared during the course of our
              engagement with rigorous discretion.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              8. Limitation of Liability
            </h2>
            <p>
              While our strategies are designed to accelerate growth, Dream
              Frame Media is not liable for indirect business losses, lost
              revenue, external third-party actions, or algorithmic changes that
              may affect your brand reach or engagement outside of our control.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              9. Third-Party Platforms
            </h2>
            <p className="mb-4">
              Our services rely on distributing media across platforms such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#666666] marker:text-[#ccc]">
              <li>YouTube, Instagram, LinkedIn, and Meta properties</li>
              <li>Google and other automation tools</li>
            </ul>
            <p className="mt-4">
              We are not responsible for changes to their interfaces, terms of
              service, policies, or sudden adjustments to their content
              algorithms.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              10. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate services or
              contractual agreements if there are persistent violations of terms
              or a breakdown in mutually professional operations.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              11. Changes To Terms
            </h2>
            <p>
              We may amend these Terms & Conditions over time to reflect newly
              implemented service architectures or legal standard adjustments.
              Your continued engagement of our services moving forward
              acknowledges absolute acceptance of the prevailing terms.
            </p>
          </section>

          <div className="w-full h-px bg-[#F0F0F0]"></div>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">
              12. Contact Information
            </h2>
            <p>
              To request clarification on any of our operational terms, reach
              out at:
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

