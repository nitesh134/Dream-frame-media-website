export interface CaseStudyVideoStat {
  title: string;
  views: string;
}

export interface CaseStudyDetail {
  category: string;
  description: string;
  role: string;
  execution: string[];
  results: string[];
  videos: CaseStudyVideoStat[];
}

export const CASE_STUDIES: Record<string, CaseStudyDetail> = {
  "Zeniqua Bliss": {
    category: "Wellness / Nutraceutical",
    description:
      "Science-backed wellness brand focused on premium short-form educational content. We built a scalable omnichannel authority ecosystem using strategic short-form distribution and AI-powered content workflows.",
    role: "White-label post-production collaboration focused on short-form Instagram and wellness content editing.",
    execution: [
      "Retention-first editing",
      "UGC pacing optimization",
      "Subtitle enhancement",
      "Hook reinforcement",
      "Emotional storytelling",
      "Mobile-first structure",
      "Short-form engagement optimization",
    ],
    results: [
      "8.88M+ Views Generated",
      "High-performing wellness short-form content",
      "Platform-native UGC editing structure",
      "Optimized for retention and engagement",
    ],
    videos: [
      { title: "Gut Health Masterclass", views: "2.3M Views" },
      { title: "Daily Rituals", views: "1.8M Views" },
      { title: "The Science of Sleep", views: "4.7M Views" },
    ],
  },
  Leor: {
    category: "Luxury Aesthetic Clinic",
    description:
      "Premium aesthetic and skincare clinic focused on luxury visual storytelling and beauty-oriented social content.",
    role: "White-label post-production collaboration focused on luxury short-form Instagram content editing.",
    execution: [
      "Premium aesthetic-focused editing",
      "Beauty-oriented pacing",
      "Hook optimization",
      "Emotional visual storytelling",
      "Subtitle integration",
      "High-retention reel structure",
      "Mobile-first engagement formatting",
    ],
    results: [
      "3.21M+ Views Generated",
      "Premium beauty-focused reel ecosystem",
      "High-retention Instagram execution",
      "Optimized storytelling and pacing structure",
    ],
    videos: [
      { title: "The Signature Facial", views: "850K Views" },
      { title: "Laser Toning Real Results", views: "1.2M Views" },
      { title: "Skincare Myths Debunked", views: "1.1M Views" },
    ],
  },
};
