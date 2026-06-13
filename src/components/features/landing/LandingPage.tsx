import { useLocation } from "react-router-dom";
import { useHashScroll } from "@/hooks/useHashScroll";
import { HeroSection } from "@/components/features/landing/HeroSection";
import { TrustedClients } from "@/components/features/landing/TrustedClients";
import { WhoWeAre } from "@/components/features/landing/WhoWeAre";
import { WhyChooseUs } from "@/components/features/landing/WhyChooseUs";
import { ComparisonSection } from "@/components/features/landing/ComparisonSection";
import { ServicesEcosystem } from "@/components/features/landing/ServicesEcosystem";
import { OurWork } from "@/components/features/landing/OurWork";
import { CaseStudies } from "@/components/features/landing/CaseStudies";
import { TestimonialsSection } from "@/components/features/landing/TestimonialsSection";
import { FaqSection } from "@/components/features/landing/FaqSection";

export function LandingPage() {
  const location = useLocation();
  useHashScroll(location);

  return (
    <>
      <HeroSection />
      <TrustedClients />
      <WhoWeAre />
      <WhyChooseUs />
      <ComparisonSection />
      <ServicesEcosystem />
      <OurWork />
      <CaseStudies />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
}
