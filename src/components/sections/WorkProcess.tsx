"use client";

import { useEffect, useRef, useState } from "react";
import Image from "@/components/Img";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  backOut,
  type MotionValue,
} from "framer-motion";

/**
 * WorkProcess — "Let's See Our Work Process" step cards.
 *
 * Pinned scroll-triggered reveal (reference: osmo-stacking-sticky-cards-
 * bounce demo video, adapted): the section pins while you scroll and each
 * step card bounces into its OWN grid slot one at a time (box 1, then box 2,
 * then box 3...) — but unlike a literal card stack, cards never cover each
 * other. Layout/spacing is the original staggered 4-column grid; once a card
 * has entered it keeps the idle hover/bob it always had.
 *
 * Uses the same manual scroll-progress MotionValue pattern as
 * HeroShowcase/OurServices (reliable where useScroll({target}) was flaky).
 * Falls back to the original static flip-in grid on small screens / reduced
 * motion (pinned/sticky sections don't work well below ~1024px).
 */

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

/** Decorative blurred gold/navy gradient blob behind the cards (Figma node 17:806 background). */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image src="/figma/work-process-bg.png" alt="" fill sizes="100vw" className="object-cover" />
    </div>
  );
}

/**
 * One card in the flip-in grid — used only by the static fallback. Flips in
 * (3D) as it scrolls into view, then idly hovers + bounces. No pin / no
 * scroll math, so it behaves the same at any viewport height.
 */
function RevealCard({ step, index, offset }: { step: Step; index: number; offset: boolean }) {
  return (
    <div className={offset ? "lg:pt-[60px]" : "lg:pb-[60px]"} style={{ perspective: 1400 }}>
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

/** Static, un-pinned fallback for small screens / reduced motion — original staggered grid. */
function StaticFallback() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f3f3f5] py-16 lg:py-24">
      <Backdrop />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <Heading />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
          {steps.map((step, i) => (
            <RevealCard key={step.number} step={step} index={i} offset={step.offset} />
          ))}
        </div>
      </div>
    </section>
  );
}

const N = steps.length;
const SEG = 1 / N;
/** fraction of a card's own segment spent bouncing in */
const ENTER_FRAC = 0.6;
/** overshoot "bounce" easing — see osmo-stacking-sticky-cards-bounce reference */
const BOUNCE = backOut;

/**
 * One card in the pinned grid — sits in its OWN grid cell the whole time
 * (same markup/position as the static RevealCard) and only animates its own
 * enter transform off a shared scroll-progress segment, so by the time all N
 * segments have played every card is settled side by side, none covering
 * another. Once settled it keeps the same idle bob RevealCard always had.
 */
function ScrollCard({
  step,
  index,
  offset,
  progress,
}: {
  step: Step;
  index: number;
  offset: boolean;
  progress: MotionValue<number>;
}) {
  const dir = index % 2 === 0 ? 1 : -1;
  const segStart = index * SEG;
  const enterEnd = segStart + SEG * ENTER_FRAC;

  const inputs = [segStart, enterEnd];
  const y = useTransform(progress, inputs, ["48px", "0px"], { ease: [BOUNCE] });
  const rotate = useTransform(progress, inputs, [dir * 10, 0], { ease: [BOUNCE] });
  const scale = useTransform(progress, inputs, [0.88, 1], { ease: [BOUNCE] });
  const opacity = useTransform(progress, inputs, [0, 1]);

  return (
    <div className={offset ? "lg:pt-[60px]" : "lg:pb-[60px]"} style={{ perspective: 1400 }}>
      <motion.div className="h-full" style={{ y, rotate, scale, opacity, transformOrigin: "bottom center" }}>
        {/* Idle hover/bounce once revealed — plain CSS on a nested element so
            it composes with (doesn't fight) the scroll-driven transform above. */}
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
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setEnabled(mq.matches && !reduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  // Manual scroll progress (0..1 across the pinned span) — same pattern as
  // HeroShowcase/OurServices; reliable and reversible.
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
  }, [progress, enabled]);

  if (!enabled) return <StaticFallback />;

  return (
    // Buffer of the section's own background above/below the pinned span —
    // otherwise it butts straight up against BigQuote's and OurWork's edges
    // with no breathing room.
    <div className="bg-[#f3f3f5] pb-16 pt-16 lg:pb-24 lg:pt-24">
      <section ref={sectionRef} className="relative h-[360vh] w-full">
        <Backdrop />
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6 py-[8vh] lg:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <Heading />
            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:items-start">
              {steps.map((step, i) => (
                <ScrollCard key={step.number} step={step} index={i} offset={step.offset} progress={progress} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
