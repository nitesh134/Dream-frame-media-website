import { AiCTA } from "./AiCTA";
import { AiFAQ } from "./AiFAQ";
import { AiHero } from "./AiHero";
import { AiHowItWorks } from "./AiHowItWorks";
import { AiPositioning } from "./AiPositioning";
import { AiWhatWeBuild } from "./AiWhatWeBuild";

export function AIContentSystemPage() {
  return (
    <div className="pt-16 pb-0 bg-white">
      <AiHero />
      <AiWhatWeBuild />
      <AiPositioning />
      <AiHowItWorks />
      <AiFAQ />
      <AiCTA />
    </div>
  );
}
