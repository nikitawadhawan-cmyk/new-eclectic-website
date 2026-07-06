"use client";

import Image from "@/components/Img";
import { motion, useReducedMotion } from "framer-motion";

type Step = {
  number: string;
  /* gold (#e8c700) or navy (#2a315f) for the big numeral */
  numberColor: "gold" | "navy";
  title: string;
  /* Figma: card 2's title is semibold navy; the others are medium black */
  titleAccent: boolean;
  description: string;
  /* Figma staggers alternate cards down by 60px on desktop */
  offset: boolean;
};

const steps: Step[] = [
  {
    number: "1",
    numberColor: "navy",
    title: "Discovery",
    titleAccent: false,
    description: "We dive deep into your brand, audience, and goals to",
    offset: true,
  },
  {
    number: "2",
    numberColor: "gold",
    title: "Strategy & Design",
    titleAccent: true,
    description: "We craft a clear direction and design experiences that align creativity",
    offset: false,
  },
  {
    number: "3",
    numberColor: "navy",
    title: "Build & Launch",
    titleAccent: false,
    description: "Our team brings the vision to life with precision, testing every detail.",
    offset: true,
  },
  {
    number: "4",
    numberColor: "gold",
    title: "Optimize & Scale",
    titleAccent: false,
    description: "We measure performance, refine continuously, and help your product",
    offset: false,
  },
];

/** The card face — identical markup to the original design. */
function CardInner({ step }: { step: Step }) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white px-6 pb-6 pt-10">
      {/* Big numeral */}
      <div className="flex items-center justify-center">
        <span
          className={`text-[160px] font-normal leading-[0.9] lg:text-[250px] lg:leading-[250px] ${
            step.numberColor === "gold" ? "text-[#e8c700]" : "text-[#2a315f]"
          }`}
        >
          {step.number}
        </span>
      </div>

      {/* Title + description */}
      <div className="mt-8 flex flex-col gap-2 lg:mt-[114px]">
        <p
          className={`text-[24px] leading-[28.8px] ${
            step.titleAccent ? "font-semibold text-[#2a315f]" : "font-medium text-black"
          }`}
        >
          {step.title}
        </p>
        <p className="text-[16px] leading-[24px] text-black">{step.description}</p>
      </div>
    </div>
  );
}

/**
 * One card: flips in (3D) as it scrolls into view, then idly hovers + bounces.
 * No pin / no scroll math, so it behaves the same at any viewport height and
 * never shows a blank "closed" state.
 */
function RevealCard({ step, index }: { step: Step; index: number }) {
  return (
    <div className={step.offset ? "lg:pt-[60px]" : "lg:pb-[60px]"} style={{ perspective: 1400 }}>
      <motion.div
        className="h-full"
        style={{ transformOrigin: "bottom center" }}
        initial={{ opacity: 0, rotateY: 70, y: 44 }}
        whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: index * 0.11 }}
      >
        {/* Idle hover/bounce once revealed — plain CSS so it doesn't interfere
            with the whileInView flip on the parent (each card offset to bob independently). */}
        <div
          className="bob h-full"
          style={{ animation: `bob ${2.8 + index * 0.25}s ease-in-out ${index * 0.3}s infinite` }}
        >
          <CardInner step={step} />
        </div>
      </motion.div>
    </div>
  );
}

export default function WorkProcess() {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <section className="relative w-full overflow-hidden bg-[#f3f3f5] py-16 lg:py-24">
      {/* Decorative blurred gold/navy gradient blob behind the cards (Figma node 17:806 background) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image src="/figma/work-process-bg.png" alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] leading-[21px] text-[#e8c700]">
            {"//"}
            <span className="text-[#666]"> WORKING PROCESS</span>
          </p>
          <h2 className="text-[40px] font-medium leading-[1.1] tracking-[-1.5px] text-black lg:text-[60px] lg:leading-[72px]">
            Let&rsquo;s See Our Work Process
          </h2>
        </div>

        {/* Steps — original staggered design; each card flips in on scroll. */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
          {steps.map((step, i) =>
            animate ? (
              <RevealCard key={step.number} step={step} index={i} />
            ) : (
              <div key={step.number} className={step.offset ? "lg:pt-[60px]" : "lg:pb-[60px]"}>
                <CardInner step={step} />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
