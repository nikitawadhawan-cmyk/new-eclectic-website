import Header from "@/components/sections/Header";
import HeroShowcase from "@/components/sections/HeroShowcase";
import ClientLogos from "@/components/sections/ClientLogos";
import Innovate from "@/components/sections/Innovate";
import OurServices from "@/components/sections/OurServices";
import BigQuote from "@/components/sections/BigQuote";
import Services from "@/components/sections/Services";
import WorkProcess from "@/components/sections/WorkProcess";
import AboutCaseStudy from "@/components/sections/AboutCaseStudy";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/Reveal";
import FlipReveal from "@/components/FlipReveal";

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
          <OurServices />
        </Reveal>
        <FlipReveal>
          <BigQuote />
        </FlipReveal>
        <FlipReveal>
          <Services />
        </FlipReveal>
        <WorkProcess />
        <FlipReveal>
          <AboutCaseStudy />
        </FlipReveal>
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
