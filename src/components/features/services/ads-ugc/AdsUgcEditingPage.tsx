import { AdsCTA } from "./AdsCTA";
import { AdsHero } from "./AdsHero";
import { AdsHowItWorks } from "./AdsHowItWorks";
import { AdsIncludes } from "./AdsIncludes";

export function AdsUgcEditingPage() {
  return (
    <div className="pt-16 pb-0">
      <AdsHero />
      <AdsIncludes />
      <AdsHowItWorks />
      <AdsCTA />
    </div>
  );
}
