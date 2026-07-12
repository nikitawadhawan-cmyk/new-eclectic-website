import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import LuluHero from "@/components/sections/case-study/lulu/LuluHero";
import LuluStats from "@/components/sections/case-study/lulu/LuluStats";
import LuluShowcase from "@/components/sections/case-study/lulu/LuluShowcase";
import LuluProject from "@/components/sections/case-study/lulu/LuluProject";
import LuluResults from "@/components/sections/case-study/lulu/LuluResults";
import LuluChallenge from "@/components/sections/case-study/lulu/LuluChallenge";
import LuluScope from "@/components/sections/case-study/lulu/LuluScope";
import LuluHighlights from "@/components/sections/case-study/lulu/LuluHighlights";
import LuluProjects from "@/components/sections/case-study/lulu/LuluProjects";
import LuluCTA from "@/components/sections/case-study/lulu/LuluCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Lulu & Daisy — Case Study | Eclectic Digital",
  description:
    "A 100% custom, hand-coded Shopify Online Store 2.0 theme for Lulu & Daisy, a premium fresh dog food brand — pixel-matched to a bespoke editorial design. A case study by Eclectic Digital.",
};

export default function LuluDaisyCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* LuluHero is the top hero — rendered without a Reveal wrapper,
            matching the amorada case-study page. Every other section gets a
            subtle fade/slide-up reveal on scroll. */}
        <LuluHero />
        <Reveal>
          <LuluStats />
        </Reveal>
        <Reveal>
          <LuluShowcase />
        </Reveal>
        <Reveal>
          <LuluProject />
        </Reveal>
        <Reveal>
          <LuluResults />
        </Reveal>
        <Reveal>
          <LuluChallenge />
        </Reveal>
        <Reveal>
          <LuluScope />
        </Reveal>
        <Reveal>
          <LuluHighlights />
        </Reveal>
        <Reveal>
          <LuluProjects />
        </Reveal>
        <Reveal>
          <LuluCTA />
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
