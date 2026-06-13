import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /title: "Short-Form Content",[\s]*desc: "Platform-native vertical content optimized for modern audience behavior.",[\s]*link: "\/work\/short-form",[\s]*type: "shortform",[\s]*thumbnails: \[1, 2, 3, 4\]/,
  `title: "Short-Form Content", 
      desc: "Platform-native vertical content optimized for modern audience behavior.",
      link: "/work/short-form",
      type: "shortform",
      thumbnails: [
        { id: "Sxht0plocp8", title: "How to increase Immunity" },
        { id: "a5MLKnsuxPo", title: "3 Tips to improve healthy hair" },
        { id: "YeUL1exFqDM", title: "The truth about Bad Breath" },
        { id: "kvy3Wu2j2oE", title: "What a best diet for PCOS" }
      ]`
);

content = content.replace(
  /videos: \[\s*\{ title: "3 Tips for Better Hooks", youtubeId: "" \},\s*\{ title: "Why Your Content Fails", youtubeId: "" \},\s*\{ title: "The 10-Minute Workflow", youtubeId: "" \},\s*\{ title: "Stop Doing This on IG", youtubeId: "" \},\s*\{ title: "How to Script Shorts", youtubeId: "" \},\s*\{ title: "The Perfect Lighting Setup", youtubeId: "" \}\s*\]/,
  `videos: [
        { title: "How to increase Immunity", youtubeId: "Sxht0plocp8" },
        { title: "3 Tips to improve healthy hair", youtubeId: "a5MLKnsuxPo" },
        { title: "The truth about Bad Breath", youtubeId: "YeUL1exFqDM" },
        { title: "What a best diet for PCOS", youtubeId: "kvy3Wu2j2oE" },
        { title: "Why lifting weight is Important", youtubeId: "BL5pVLuVBH8" },
        { title: "Mindshift from dieting to sustainable lifestyle", youtubeId: "qaTsK_16h1w" }
      ]`
);

fs.writeFileSync('src/App.tsx', content);
