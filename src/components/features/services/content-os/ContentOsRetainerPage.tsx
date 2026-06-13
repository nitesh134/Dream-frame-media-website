import { RetainerCTA } from "./RetainerCTA";
import { RetainerDeliverables } from "./RetainerDeliverables";
import { RetainerHero } from "./RetainerHero";
import { RetainerHowItWorks } from "./RetainerHowItWorks";
import { RetainerOverview } from "./RetainerOverview";
import { RetainerProblem } from "./RetainerProblem";

export function ContentOsRetainerPage() {
  return (
    <div className="pt-16 pb-0">
      <RetainerHero />
      <RetainerProblem />
      <RetainerOverview />
      <RetainerHowItWorks />
      <RetainerDeliverables />
      <RetainerCTA />
    </div>
  );
}
