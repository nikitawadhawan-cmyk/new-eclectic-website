import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import NilHero from "@/components/sections/case-study/nilambar/NilHero";
import NilStats from "@/components/sections/case-study/nilambar/NilStats";
import NilShowcase from "@/components/sections/case-study/nilambar/NilShowcase";
import NilProject from "@/components/sections/case-study/nilambar/NilProject";
import NilResults from "@/components/sections/case-study/nilambar/NilResults";
import NilChallenge from "@/components/sections/case-study/nilambar/NilChallenge";
import NilScope from "@/components/sections/case-study/nilambar/NilScope";
import NilHighlights from "@/components/sections/case-study/nilambar/NilHighlights";
import NilProjects from "@/components/sections/case-study/nilambar/NilProjects";
import NilCTA from "@/components/sections/case-study/nilambar/NilCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Nilambar — Case Study | Eclectic Digital",
  description:
    "A corporate website that unifies Nilambar's real estate development, strategic advisory and startup investment under one confident brand. A case study by Eclectic Digital.",
};

/**
 * /projects/nilambar — Nilambar case study in the SAME design as the sibling
 * case-study pages (each section clones its Ritvaa counterpart), with content
 * from the client's approved copy and imagery from nilambar.co.in.
 */
export default function NilambarCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the sibling case-study pages exactly. */}
        <NilHero />
        <Reveal>
          <NilStats />
        </Reveal>
        <Reveal>
          <NilShowcase />
        </Reveal>
        <Reveal>
          <NilProject />
        </Reveal>
        <Reveal>
          <NilResults />
        </Reveal>
        <Reveal>
          <NilChallenge />
        </Reveal>
        <Reveal>
          <NilScope />
        </Reveal>
        <Reveal>
          <NilHighlights />
        </Reveal>
        <Reveal>
          <NilProjects />
        </Reveal>
        <Reveal>
          <NilCTA />
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
