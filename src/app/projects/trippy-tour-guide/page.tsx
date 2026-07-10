import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import TtgHero from "@/components/sections/case-study/trippytour/TtgHero";
import TtgStats from "@/components/sections/case-study/trippytour/TtgStats";
import TtgShowcase from "@/components/sections/case-study/trippytour/TtgShowcase";
import TtgProject from "@/components/sections/case-study/trippytour/TtgProject";
import TtgResults from "@/components/sections/case-study/trippytour/TtgResults";
import TtgChallenge from "@/components/sections/case-study/trippytour/TtgChallenge";
import TtgScope from "@/components/sections/case-study/trippytour/TtgScope";
import TtgHighlights from "@/components/sections/case-study/trippytour/TtgHighlights";
import TtgProjects from "@/components/sections/case-study/trippytour/TtgProjects";
import TtgCTA from "@/components/sections/case-study/trippytour/TtgCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Trippy Tour Guide — Case Study | Eclectic Digital",
  description:
    "A discovery-led website for Trippy Tour Guide — GPS-activated, self-guided audio tours across 50+ destinations. Built to drive tour sales and app downloads. A case study by Eclectic Digital.",
};

/**
 * /projects/trippy-tour-guide — Trippy Tour Guide case study in the SAME
 * design as the amorada/ritvaa/peak-mode-on pages (each section clones its
 * Ritvaa counterpart), with content from the client's approved copy and
 * imagery from trippytourguide.com.
 */
export default function TrippyTourGuideCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the sibling case-study pages exactly. */}
        <TtgHero />
        <Reveal>
          <TtgStats />
        </Reveal>
        <Reveal>
          <TtgShowcase />
        </Reveal>
        <Reveal>
          <TtgProject />
        </Reveal>
        <Reveal>
          <TtgResults />
        </Reveal>
        <Reveal>
          <TtgChallenge />
        </Reveal>
        <Reveal>
          <TtgScope />
        </Reveal>
        <Reveal>
          <TtgHighlights />
        </Reveal>
        <Reveal>
          <TtgProjects />
        </Reveal>
        <Reveal>
          <TtgCTA />
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
