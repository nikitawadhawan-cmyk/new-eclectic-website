import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import PmoHero from "@/components/sections/case-study/peakmode/PmoHero";
import PmoStats from "@/components/sections/case-study/peakmode/PmoStats";
import PmoShowcase from "@/components/sections/case-study/peakmode/PmoShowcase";
import PmoProject from "@/components/sections/case-study/peakmode/PmoProject";
import PmoResults from "@/components/sections/case-study/peakmode/PmoResults";
import PmoChallenge from "@/components/sections/case-study/peakmode/PmoChallenge";
import PmoScope from "@/components/sections/case-study/peakmode/PmoScope";
import PmoHighlights from "@/components/sections/case-study/peakmode/PmoHighlights";
import PmoProjects from "@/components/sections/case-study/peakmode/PmoProjects";
import PmoCTA from "@/components/sections/case-study/peakmode/PmoCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Peak Mode On — Case Study | Eclectic Digital",
  description:
    "Complete Shopify e-commerce store for Ayurvedic wellness brand Peak Mode On, built from the ground up with a custom Dosha quiz and educational content. A case study by Eclectic Digital.",
};

/**
 * /projects/peak-mode-on — Peak Mode On case study in the SAME design as
 * /projects/amorada and /projects/ritvaa (each section clones its Ritvaa
 * counterpart), with content from the client's approved copy and imagery
 * from peakmodeon.com.
 */
export default function PeakModeOnCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the amorada/ritvaa pages exactly. */}
        <PmoHero />
        <Reveal>
          <PmoStats />
        </Reveal>
        <Reveal>
          <PmoShowcase />
        </Reveal>
        <Reveal>
          <PmoProject />
        </Reveal>
        <Reveal>
          <PmoResults />
        </Reveal>
        <Reveal>
          <PmoChallenge />
        </Reveal>
        <Reveal>
          <PmoScope />
        </Reveal>
        <Reveal>
          <PmoHighlights />
        </Reveal>
        <Reveal>
          <PmoProjects />
        </Reveal>
        <Reveal>
          <PmoCTA />
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
