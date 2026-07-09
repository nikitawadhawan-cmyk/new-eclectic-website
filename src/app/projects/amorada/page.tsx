import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import AmoradaHero from "@/components/sections/case-study/amorada/AmoradaHero";
import AmoradaStats from "@/components/sections/case-study/amorada/AmoradaStats";
import AmoradaShowcase from "@/components/sections/case-study/amorada/AmoradaShowcase";
import AmoradaProject from "@/components/sections/case-study/amorada/AmoradaProject";
import AmoradaResults from "@/components/sections/case-study/amorada/AmoradaResults";
import AmoradaChallenge from "@/components/sections/case-study/amorada/AmoradaChallenge";
import AmoradaScope from "@/components/sections/case-study/amorada/AmoradaScope";
import AmoradaHighlights from "@/components/sections/case-study/amorada/AmoradaHighlights";
import AmoradaProjects from "@/components/sections/case-study/amorada/AmoradaProjects";
import AmoradaCTA from "@/components/sections/case-study/amorada/AmoradaCTA";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "amorada — Case Study | Eclectic Digital",
  description:
    "How we designed and built the amorada Shopify store — a craft-led home-linens ecommerce experience where comfort meets craft. Strategy, design, and results.",
};

export default function AmoradaCaseStudy() {
  return (
    <>
      <Header />
      <main>
        {/* AmoradaHero is the top hero — rendered without a Reveal wrapper,
            matching the BVC case-study page. Every other section gets a
            subtle fade/slide-up reveal on scroll. */}
        <AmoradaHero />
        <Reveal>
          <AmoradaStats />
        </Reveal>
        <Reveal>
          <AmoradaShowcase />
        </Reveal>
        <Reveal>
          <AmoradaProject />
        </Reveal>
        <Reveal>
          <AmoradaResults />
        </Reveal>
        <Reveal>
          <AmoradaChallenge />
        </Reveal>
        <Reveal>
          <AmoradaScope />
        </Reveal>
        <Reveal>
          <AmoradaHighlights />
        </Reveal>
        <Reveal>
          <AmoradaProjects />
        </Reveal>
        <Reveal>
          <AmoradaCTA />
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
