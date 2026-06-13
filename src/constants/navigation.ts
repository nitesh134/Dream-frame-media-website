import type { LucideIcon } from "lucide-react";
import { Bot, Play, Repeat2 } from "lucide-react";

export interface NavServiceLink {
  to: string;
  label: string;
}

export interface NavServiceColumn {
  title: string;
  Icon: LucideIcon;
  links: NavServiceLink[];
}

export const SERVICE_MENU_COLUMNS: NavServiceColumn[] = [
  {
    title: "Video Editing",
    Icon: Play,
    links: [
      { to: "/services/youtube-editing", label: "YouTube Video Editing" },
      { to: "/services/short-form-editing", label: "Reels & Shorts Editing" },
      { to: "/services/podcast-repurposing", label: "Podcast Editing" },
      {
        to: "/services/founder-infrastructure",
        label: "Talking Head Video Editing",
      },
    ],
  },
  {
    title: "Repurposing & Creative",
    Icon: Repeat2,
    links: [
      {
        to: "/services/ads-and-ugc-editing",
        label: "UGC & Ad Creative Editing",
      },
      { to: "/services/content-os", label: "Content Repurposing" },
      {
        to: "/services/authority-engine-audit",
        label: "Content Strategy & Audit",
      },
    ],
  },
  {
    title: "AI Content",
    Icon: Bot,
    links: [{ to: "/services/ai-content-system", label: "AI Content System" }],
  },
];

export const MOBILE_SERVICE_LINKS: NavServiceLink[] = [
  { to: "/services/youtube-editing", label: "YouTube Video Editing" },
  { to: "/services/short-form-editing", label: "Reels & Shorts Editing" },
  { to: "/services/podcast-repurposing", label: "Podcast Editing" },
  {
    to: "/services/founder-infrastructure",
    label: "Talking Head Video Editing",
  },
  {
    to: "/services/ads-and-ugc-editing",
    label: "UGC & Ad Creative Editing",
  },
  { to: "/services/content-os", label: "Content Repurposing" },
  {
    to: "/services/authority-engine-audit",
    label: "Content Strategy & Audit",
  },
  { to: "/services/ai-content-system", label: "AI Content System" },
];
