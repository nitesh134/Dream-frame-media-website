export interface WorkVideo {
  title: string;
  youtubeId: string;
  /** Optional long description (e.g. podcast feature) */
  desc?: string;
}

export type WorkVisualType = "youtube" | "shortform" | "ugc" | "podcast";

export const WORK_GALLERY_CATEGORY_ORDER = [
  "YouTube Content",
  "Short-Form Content",
  "UGC Style Videos",
  "Podcast Content",
] as const;

export type WorkGalleryCategory = (typeof WORK_GALLERY_CATEGORY_ORDER)[number];

export interface WorkPortfolioSection {
  galleryTitle: string;
  galleryDescription: string;
  landingCardDescription: string;
  workRoute: string;
  visualType: WorkVisualType;
  videos: WorkVideo[];
}

export const WORK_PORTFOLIO: Record<WorkGalleryCategory, WorkPortfolioSection> = {
  "YouTube Content": {
    galleryTitle: "YouTube Content",
    galleryDescription:
      "Long-form authority content engineered for retention, storytelling, and watch time.",
    landingCardDescription:
      "Long-form storytelling engineered for audience retention and authority positioning.",
    workRoute: "/work/youtube",
    visualType: "youtube",
    videos: [
      { title: "Behind the Brand: The WebBee Global Story", youtubeId: "whqtsndQSJY" },
      { title: "Credit Card Channel Soch by Mohak Mangal", youtubeId: "75tDIk3Temo" },
      { title: "Real Estate Tips", youtubeId: "cCX87blRnJw" },
      { title: "TECH WISER | SONY 1000 XM4 REVIEW", youtubeId: "CuuaSMDg6uY" },
      { title: "Chaco Canyon's Strange Discovery May Rewrite History", youtubeId: "dzFkpJWxAew" },
      {
        title: "This Ancient Ruin Reveals a Rare Astronomical Alignment",
        youtubeId: "GJBLTqWqQY8",
      },
    ],
  },
  "Short-Form Content": {
    galleryTitle: "Short-Form Content",
    galleryDescription:
      "High-retention vertical content optimized for engagement, hooks, and platform-native reach.",
    landingCardDescription:
      "Platform-native vertical content optimized for modern audience behavior.",
    workRoute: "/work/short-form",
    visualType: "shortform",
    videos: [
      { title: "How to increase Immunity", youtubeId: "Sxht0plocp8" },
      { title: "3 Tips to improve healthy hair", youtubeId: "a5MLKnsuxPo" },
      { title: "The truth about Bad Breath", youtubeId: "YeUL1exFqDM" },
      { title: "What a best diet for PCOS", youtubeId: "kvy3Wu2j2oE" },
      { title: "Why lifting weight is Important", youtubeId: "BL5pVLuVBH8" },
      {
        title: "Mindshift from dieting to sustainable lifestyle",
        youtubeId: "qaTsK_16h1w",
      },
    ],
  },
  "UGC Style Videos": {
    galleryTitle: "UGC Style Videos",
    galleryDescription:
      "Authentic creator-style content optimized for relatability, retention, and audience engagement.",
    landingCardDescription:
      "Authentic creator-style content optimized for relatability, retention, and audience engagement.",
    workRoute: "/work/ugc",
    visualType: "ugc",
    videos: [
      { title: "Zeniqua bliss for energy", youtubeId: "HUSuIYipYn0" },
      { title: "Zeniqua bliss_ad", youtubeId: "ee2kCHzHYwo" },
      { title: "ZENIQUA BLISS DIWALI AD", youtubeId: "WLX7bM6xxVc" },
      { title: "Zeni Trim Ad", youtubeId: "doKzmM9LP9o" },
      { title: "Dad & Daughter Zeniqua Trim", youtubeId: "_f16KnFqvbg" },
      { title: "Teeth whitening UGC ad", youtubeId: "IH1AU-83mAM" },
    ],
  },
  "Podcast Content": {
    galleryTitle: "Podcast Content",
    galleryDescription:
      "Long-form conversations transformed into premium visual storytelling ecosystems.",
    landingCardDescription:
      "Long-form conversations transformed into premium visual storytelling ecosystems.",
    workRoute: "/work/podcast",
    visualType: "podcast",
    videos: [
      {
        title: "Story behind unity & earthlings",
        youtubeId: "MJzKMu_4WxE",
        desc: "Strategic podcast editing focused on retention, pacing, cinematic storytelling, and long-form audience engagement.",
      },
    ],
  },
};
