import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import BvcHero from "@/components/sections/case-study/bvc/BvcHero";
import BvcStats from "@/components/sections/case-study/bvc/BvcStats";
import BvcShowcase from "@/components/sections/case-study/bvc/BvcShowcase";
import BvcProject from "@/components/sections/case-study/bvc/BvcProject";
import BvcResults from "@/components/sections/case-study/bvc/BvcResults";
import BvcChallenge from "@/components/sections/case-study/bvc/BvcChallenge";
import BvcScope from "@/components/sections/case-study/bvc/BvcScope";
import BvcHighlights from "@/components/sections/case-study/bvc/BvcHighlights";
import BvcProjects from "@/components/sections/case-study/bvc/BvcProjects";
import BvcCTA from "@/components/sections/case-study/bvc/BvcCTA";
import Faq from "@/components/sections/Faq";
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
        {/* BvcHero is the top hero — rendered without a Reveal wrapper,
            matching the amorada case-study page. Every other section gets a
            subtle fade/slide-up reveal on scroll. */}
        <BvcHero />
        <Reveal>
          <BvcStats />
        </Reveal>
        <Reveal>
          <BvcShowcase />
        </Reveal>
        <Reveal>
          <BvcProject />
        </Reveal>
        <Reveal>
          <BvcResults />
        </Reveal>
        <Reveal>
          <BvcChallenge />
        </Reveal>
        <Reveal>
          <BvcScope />
        </Reveal>
        <Reveal>
          <BvcHighlights />
        </Reveal>
        <Reveal>
          <BvcProjects />
        </Reveal>
        <Reveal>
          <BvcCTA />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
