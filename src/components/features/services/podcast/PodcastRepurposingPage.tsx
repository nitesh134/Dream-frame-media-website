import { PodcastCTA } from "./PodcastCTA";
import { PodcastHero } from "./PodcastHero";
import { PodcastHowItWorks } from "./PodcastHowItWorks";
import { PodcastIncludes } from "./PodcastIncludes";

export function PodcastRepurposingPage() {
  return (
    <div className="pt-16 pb-0">
      <PodcastHero />
      <PodcastIncludes />
      <PodcastHowItWorks />
      <PodcastCTA />
    </div>
  );
}
