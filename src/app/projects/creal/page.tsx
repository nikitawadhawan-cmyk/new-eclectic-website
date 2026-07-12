import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import CrealHero from "@/components/sections/case-study/creal/CrealHero";
import CrealStats from "@/components/sections/case-study/creal/CrealStats";
import CrealShowcase from "@/components/sections/case-study/creal/CrealShowcase";
import CrealProject from "@/components/sections/case-study/creal/CrealProject";
import CrealResults from "@/components/sections/case-study/creal/CrealResults";
import CrealChallenge from "@/components/sections/case-study/creal/CrealChallenge";
import CrealScope from "@/components/sections/case-study/creal/CrealScope";
import CrealHighlights from "@/components/sections/case-study/creal/CrealHighlights";
import CrealProjects from "@/components/sections/case-study/creal/CrealProjects";
import CrealCTA from "@/components/sections/case-study/creal/CrealCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CREAL — Case Study | Eclectic Digital",
  description:
    "A complete Shopify storefront for CREAL — 500+ SKU fine gold and diamond jewellery, with category-led navigation, six-facet smart filtering and conversion features. A case study by Eclectic Digital.",
};

export default function CrealCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* CrealHero is the top hero — rendered without a Reveal wrapper,
            matching the amorada case-study page. Every other section gets a
            subtle fade/slide-up reveal on scroll. */}
        <CrealHero />
        <Reveal>
          <CrealStats />
        </Reveal>
        <Reveal>
          <CrealShowcase />
        </Reveal>
        <Reveal>
          <CrealProject />
        </Reveal>
        <Reveal>
          <CrealResults />
        </Reveal>
        <Reveal>
          <CrealChallenge />
        </Reveal>
        <Reveal>
          <CrealScope />
        </Reveal>
        <Reveal>
          <CrealHighlights />
        </Reveal>
        <Reveal>
          <CrealProjects />
        </Reveal>
        <Reveal>
          <CrealCTA />
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
