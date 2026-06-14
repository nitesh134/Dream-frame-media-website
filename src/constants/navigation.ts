import type { LucideIcon } from "lucide-react";
import { Bot, Lightbulb, Play } from "lucide-react";

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
      {
        to: "/services/short-form-editing",
        label: "Short-Form Video Editing",
      },
    ],
  },
  {
    title: "Content Strategy",
    Icon: Lightbulb,
    links: [
      {
        to: "/services/authority-engine-audit",
        label: "End-to-End Content Strategy",
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
  {
    to: "/services/short-form-editing",
    label: "Short-Form Video Editing",
  },
  {
    to: "/services/authority-engine-audit",
    label: "End-to-End Content Strategy",
  },
  { to: "/services/ai-content-system", label: "AI Content System" },
];
