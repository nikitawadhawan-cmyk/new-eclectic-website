import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import RitvaaHero from "@/components/sections/case-study/ritvaa/RitvaaHero";
import RitvaaStats from "@/components/sections/case-study/ritvaa/RitvaaStats";
import RitvaaShowcase from "@/components/sections/case-study/ritvaa/RitvaaShowcase";
import RitvaaProject from "@/components/sections/case-study/ritvaa/RitvaaProject";
import RitvaaResults from "@/components/sections/case-study/ritvaa/RitvaaResults";
import RitvaaChallenge from "@/components/sections/case-study/ritvaa/RitvaaChallenge";
import RitvaaScope from "@/components/sections/case-study/ritvaa/RitvaaScope";
import RitvaaHighlights from "@/components/sections/case-study/ritvaa/RitvaaHighlights";
import RitvaaProjects from "@/components/sections/case-study/ritvaa/RitvaaProjects";
import RitvaaCTA from "@/components/sections/case-study/ritvaa/RitvaaCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Ritvaa — Case Study | Eclectic Digital",
  description:
    "An elegant Shopify e-commerce platform for Ritvaa's SmartGold jewellery and mangalsutra collections, built around trust, tradition and a lifetime buyback guarantee. A case study by Eclectic Digital.",
};

/**
 * /projects/ritvaa — Ritvaa case study in the SAME design as
 * /projects/amorada (each section clones its amorada counterpart), with
 * content from the client's approved copy and imagery from ritvaa.in.
 */
export default function RitvaaCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* Hero unwrapped (top hero), everything else in Reveal — matching
            the amorada page exactly. */}
        <RitvaaHero />
        <Reveal>
          <RitvaaStats />
        </Reveal>
        <Reveal>
          <RitvaaShowcase />
        </Reveal>
        <Reveal>
          <RitvaaProject />
        </Reveal>
        <Reveal>
          <RitvaaResults />
        </Reveal>
        <Reveal>
          <RitvaaChallenge />
        </Reveal>
        <Reveal>
          <RitvaaScope />
        </Reveal>
        <Reveal>
          <RitvaaHighlights />
        </Reveal>
        <Reveal>
          <RitvaaProjects />
        </Reveal>
        <Reveal>
          <RitvaaCTA />
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
