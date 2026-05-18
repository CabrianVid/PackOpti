import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { EUArticle } from "@/components/sections/EUArticle";
import { BenefitsCards } from "@/components/sections/BenefitsCards";
import { Integrations } from "@/components/sections/Integrations";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeatureShowcase />
        <FeaturesGrid />
        <EUArticle />
        <BenefitsCards />
        <Integrations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
