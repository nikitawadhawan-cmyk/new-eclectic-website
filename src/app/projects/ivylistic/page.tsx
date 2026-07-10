import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import IvyHero from "@/components/sections/case-study/ivylistic/IvyHero";
import IvyStats from "@/components/sections/case-study/ivylistic/IvyStats";
import IvyShowcase from "@/components/sections/case-study/ivylistic/IvyShowcase";
import IvyProject from "@/components/sections/case-study/ivylistic/IvyProject";
import IvyResults from "@/components/sections/case-study/ivylistic/IvyResults";
import IvyChallenge from "@/components/sections/case-study/ivylistic/IvyChallenge";
import IvyScope from "@/components/sections/case-study/ivylistic/IvyScope";
import IvyHighlights from "@/components/sections/case-study/ivylistic/IvyHighlights";
import IvyProjects from "@/components/sections/case-study/ivylistic/IvyProjects";
import IvyCTA from "@/components/sections/case-study/ivylistic/IvyCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ivylistic — Case Study | Eclectic Digital",
  description:
    "A strategy-led brand website for Ivylistic, an MBA, MiM and MS admissions consultancy — built to earn trust and convert free profile evaluations. A case study by Eclectic Digital.",
};

/**
 * /projects/ivylistic — Ivylistic case study in the SAME design as the
 * sibling case-study pages (each section clones its Ritvaa counterpart),
 * with content from the client's approved copy and imagery from
 * ivylistic.com.
 */
export default function IvylisticCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the sibling case-study pages exactly. */}
        <IvyHero />
        <Reveal>
          <IvyStats />
        </Reveal>
        <Reveal>
          <IvyShowcase />
        </Reveal>
        <Reveal>
          <IvyProject />
        </Reveal>
        <Reveal>
          <IvyResults />
        </Reveal>
        <Reveal>
          <IvyChallenge />
        </Reveal>
        <Reveal>
          <IvyScope />
        </Reveal>
        <Reveal>
          <IvyHighlights />
        </Reveal>
        <Reveal>
          <IvyProjects />
        </Reveal>
        <Reveal>
          <IvyCTA />
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
