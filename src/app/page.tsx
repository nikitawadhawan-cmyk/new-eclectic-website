import Header from "@/components/sections/Header";
import HeroShowcase from "@/components/sections/HeroShowcase";
import ClientLogos from "@/components/sections/ClientLogos";
import Innovate from "@/components/sections/Innovate";
import BigQuote from "@/components/sections/BigQuote";
import Services from "@/components/sections/Services";
import WorkProcess from "@/components/sections/WorkProcess";
import AboutCaseStudy from "@/components/sections/AboutCaseStudy";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* HeroShowcase, Innovate, WorkProcess have their own scroll animation.
            Every other section gets a subtle fade/slide-up reveal on scroll. */}
        <HeroShowcase />
        <Reveal>
          <ClientLogos />
        </Reveal>
        <Innovate />
        <Reveal>
          <BigQuote />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <WorkProcess />
        <Reveal>
          <AboutCaseStudy />
        </Reveal>
        <Reveal>
          <Pricing />
        </Reveal>
        <Reveal>
          <Testimonials />
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
