import { ShortFormCTA } from "./ShortFormCTA";
import { ShortFormHero } from "./ShortFormHero";
import { ShortFormHowItWorks } from "./ShortFormHowItWorks";
import { ShortFormWhatWeDo } from "./ShortFormWhatWeDo";

export function ShortFormEditingPage() {
  return (
    <div className="pt-16 pb-0">
      <ShortFormHero />
      <ShortFormWhatWeDo />
      <ShortFormHowItWorks />
      <ShortFormCTA />
    </div>
  );
}
