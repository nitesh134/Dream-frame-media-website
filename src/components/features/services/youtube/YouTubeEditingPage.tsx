import { YouTubeCTA } from "./YouTubeCTA";
import { YouTubeHero } from "./YouTubeHero";
import { YouTubeHowItWorks } from "./YouTubeHowItWorks";
import { YouTubeIncludes } from "./YouTubeIncludes";

export function YouTubeEditingPage() {
  return (
    <div className="pt-16 pb-0">
      <YouTubeHero />
      <YouTubeIncludes />
      <YouTubeHowItWorks />
      <YouTubeCTA />
    </div>
  );
}
