import { AuditCTA } from "./AuditCTA";
import { AuditHero } from "./AuditHero";
import { AuditHowItWorks } from "./AuditHowItWorks";
import { AuditIncluded } from "./AuditIncluded";
import { AuditOutcomes } from "./AuditOutcomes";
import { AuditProblem } from "./AuditProblem";
import { AuditWhoThisIsFor } from "./AuditWhoThisIsFor";

export function AuthorityAuditPage() {
  return (
    <div className="pt-16 pb-0">
      <AuditHero />
      <AuditProblem />
      <AuditIncluded />
      <AuditHowItWorks />
      <AuditWhoThisIsFor />
      <AuditOutcomes />
      <AuditCTA />
    </div>
  );
}
