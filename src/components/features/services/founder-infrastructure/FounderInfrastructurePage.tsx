import { FounderCTA } from "./FounderCTA";
import { FounderHero } from "./FounderHero";
import { FounderHowItWorks } from "./FounderHowItWorks";
import { FounderOverview } from "./FounderOverview";
import { FounderProblem } from "./FounderProblem";
import { FounderSystems } from "./FounderSystems";

export function FounderInfrastructurePage() {
  return (
    <div className="pt-16 pb-0">
      <FounderHero />
      <FounderProblem />
      <FounderOverview />
      <FounderHowItWorks />
      <FounderSystems />
      <FounderCTA />
    </div>
  );
}
