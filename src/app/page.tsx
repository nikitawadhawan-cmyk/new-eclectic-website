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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroShowcase />
        <ClientLogos />
        <Innovate />
        <BigQuote />
        <Services />
        <WorkProcess />
        <AboutCaseStudy />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
