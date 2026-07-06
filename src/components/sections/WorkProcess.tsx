"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

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

/** One card that flips/reveals in as the section scrolls into view (staggered). */
function RevealCard({ step, index, progress }: { step: Step; index: number; progress: MotionValue<number> }) {
  // Stay closed briefly as the section settles in, then reveal on scroll (reverses on scroll-up).
  const delay = 0.16 + index * 0.12;
  const rotateY = useTransform(progress, [delay, delay + 0.3], [78, 0]);
  const opacity = useTransform(progress, [delay, delay + 0.18], [0, 1]);
  const y = useTransform(progress, [delay, delay + 0.3], [46, 0]);

  return (
    <div className={step.offset ? "lg:pt-[60px]" : "lg:pb-[60px]"} style={{ perspective: 1400 }}>
      <motion.div style={{ rotateY, opacity, y, transformOrigin: "bottom center" }} className="h-full">
        {/* Once revealed, the card idly hovers + bounces (each card offset, so they bob independently). */}
        <motion.div
          className="h-full"
          animate={{ y: [0, -12, 0], rotate: [0, -1.1, 0] }}
          transition={{ duration: 2.8 + index * 0.25, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
        >
          <CardInner step={step} />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Blob() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Decorative blurred gold/navy gradient blob behind the cards (Figma node 17:806 background) */}
      <Image src="/figma/work-process-bg.png" alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}

function Heading() {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <p className="text-[14px] leading-[21px] text-[#e8c700]">
        {"//"}
        <span className="text-[#666]"> WORKING PROCESS</span>
      </p>
      <h2 className="text-[40px] font-medium leading-[1.1] tracking-[-1.5px] text-black lg:text-[60px] lg:leading-[72px]">
        Let&rsquo;s See Our Work Process
      </h2>
    </div>
  );
}

export default function WorkProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const animate = !reduced;

  // Scroll-scrubbed over the pinned section, so the reveal plays out over ~2
  // screens of scroll while the section is fully on-screen (and reverses).
  const progress = useMotionValue(0);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      progress.set(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [progress]);

  // Reduced-motion: original static section, no pin.
  if (!animate) {
    return (
      <section className="relative w-full overflow-hidden bg-[#f3f3f5] py-16 lg:py-24">
        <Blob />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
          <Heading />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
            {steps.map((step) => (
              <div key={step.number} className={step.offset ? "lg:pt-[60px]" : "lg:pb-[60px]"}>
                <CardInner step={step} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[150vh] w-full bg-[#f3f3f5]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <Blob />
        <div className="relative flex h-full items-center">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
            {/* Heading — always visible */}
            <Heading />

            {/* Steps — same staggered design, revealed on scroll */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:items-start">
              {steps.map((step, i) => (
                <RevealCard key={step.number} step={step} index={i} progress={progress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
