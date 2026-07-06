import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import CaseHero from "@/components/sections/case-study/CaseHero";
import CaseStats from "@/components/sections/case-study/CaseStats";
import CaseShowcase from "@/components/sections/case-study/CaseShowcase";
import CaseContribution from "@/components/sections/case-study/CaseContribution";
import CaseDeliverables from "@/components/sections/case-study/CaseDeliverables";
import CaseHighlights from "@/components/sections/case-study/CaseHighlights";
import CaseProjects from "@/components/sections/case-study/CaseProjects";
import CaseGallery from "@/components/sections/case-study/CaseGallery";
import CaseCTA from "@/components/sections/case-study/CaseCTA";
import CaseFaq from "@/components/sections/case-study/CaseFaq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "BVC Logistics — Case Study | Eclectic Digital",
  description:
    "How we designed and built the BVC Logistics B2B website — secure global logistics for gems & jewellery. A look at the process, deliverables, and results.",
};

export default function BvcLogisticsCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* CaseHero is the top hero — rendered without a Reveal wrapper,
            matching how HeroShowcase isn't wrapped on the homepage.
            Every other section gets a subtle fade/slide-up reveal on scroll. */}
        <CaseHero />
        <Reveal>
          <CaseStats />
        </Reveal>
        <Reveal>
          <CaseShowcase />
        </Reveal>
        <Reveal>
          <CaseContribution />
        </Reveal>
        <Reveal>
          <CaseDeliverables />
        </Reveal>
        <Reveal>
          <CaseHighlights />
        </Reveal>
        <Reveal>
          <CaseProjects />
        </Reveal>
        <Reveal>
          <CaseGallery />
        </Reveal>
        <Reveal>
          <CaseCTA />
        </Reveal>
        <Reveal>
          <CaseFaq />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
