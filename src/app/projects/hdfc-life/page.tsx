import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import HdfcHero from "@/components/sections/case-study/hdfclife/HdfcHero";
import HdfcStats from "@/components/sections/case-study/hdfclife/HdfcStats";
import HdfcShowcase from "@/components/sections/case-study/hdfclife/HdfcShowcase";
import HdfcProject from "@/components/sections/case-study/hdfclife/HdfcProject";
import HdfcResults from "@/components/sections/case-study/hdfclife/HdfcResults";
import HdfcChallenge from "@/components/sections/case-study/hdfclife/HdfcChallenge";
import HdfcScope from "@/components/sections/case-study/hdfclife/HdfcScope";
import HdfcHighlights from "@/components/sections/case-study/hdfclife/HdfcHighlights";
import HdfcProjects from "@/components/sections/case-study/hdfclife/HdfcProjects";
import HdfcCTA from "@/components/sections/case-study/hdfclife/HdfcCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "HDFC Life — Case Study | Eclectic Digital",
  description:
    "A single-purpose, high-conversion landing page that turns awareness traffic into qualified insurance-agent leads for HDFC Life. A performance marketing case study by Eclectic Digital.",
};

/**
 * /projects/hdfc-life — HDFC Life case study in the SAME design as the
 * sibling case-study pages (each section clones its Ritvaa counterpart),
 * with content from the client's approved copy and imagery from
 * hdfclife.com. NOTE: the hero's live-site link is a placeholder pending
 * the real campaign landing-page URL from the client.
 */
export default function HdfcLifeCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the sibling case-study pages exactly. */}
        <HdfcHero />
        <Reveal>
          <HdfcStats />
        </Reveal>
        <Reveal>
          <HdfcShowcase />
        </Reveal>
        <Reveal>
          <HdfcProject />
        </Reveal>
        <Reveal>
          <HdfcResults />
        </Reveal>
        <Reveal>
          <HdfcChallenge />
        </Reveal>
        <Reveal>
          <HdfcScope />
        </Reveal>
        <Reveal>
          <HdfcHighlights />
        </Reveal>
        <Reveal>
          <HdfcProjects />
        </Reveal>
        <Reveal>
          <HdfcCTA />
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
