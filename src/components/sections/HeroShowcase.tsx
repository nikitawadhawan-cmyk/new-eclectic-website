"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * HeroShowcase — hero + Latest Projects fused into one scroll-scrubbed sequence
 * (replicating the LaunchFolio reference):
 *
 *   scroll 0 .................................. scroll 1
 *   LARGE fanned card stack on the right    →   cards spread + settle into the
 *   hero headline on the left                   2×2 grid; the hero copy SCROLLS
 *                                               UP and past the (sticky) cards;
 *                                               "Latest Projects" rises in.
 *
 * The card layer is sticky (pinned) on a consistent light background — the copy
 * slides up past it, so nothing "fades on a white box". Degrades to a static
 * hero + grid on small screens / reduced-motion.
 */

type Card = {
  title: string;
  lowercase?: boolean;
  subtitle: string;
  href: string;
  bg: string;
  screen: string;
  alt: string;
  z: number;
  xStart: string;
  yStart: string;
  rotStart: number;
  scaleStart: number;
  xEnd: string;
  yEnd: string;
};

const SCALE_END = 0.74; // grid card scale (keeps the 2×2 within one viewport)

const CARDS: Card[] = [
  {
    title: "BVC Logistics",
    subtitle: "Consulting Site",
    href: "#",
    bg: "/figma/lp-bg-1.jpg",
    screen: "/figma/lp-screen-1.jpg",
    alt: "BVC Logistics website — Secure Global Logistics for Gems & Jewellery",
    z: 40,
    xStart: "30%",
    yStart: "2%",
    rotStart: 7,
    scaleStart: 1.04,
    xEnd: "-53%",
    yEnd: "-40%",
  },
  {
    title: "Trippy Tour",
    subtitle: "AI Agency",
    href: "#",
    bg: "/figma/lp-bg-2.jpg",
    screen: "/figma/lp-screen-2.jpg",
    alt: "Trippy Tour website — Explore the World at Your Own Pace",
    z: 30,
    xStart: "18%",
    yStart: "9%",
    rotStart: -7,
    scaleStart: 0.99,
    xEnd: "53%",
    yEnd: "-40%",
  },
  {
    title: "IVVYLISTIC",
    subtitle: "Design studio",
    href: "#",
    bg: "/figma/lp-bg-3.jpg",
    screen: "/figma/lp-screen-3.jpg",
    alt: "IVVYLISTIC website — Get into the world's top MBA program",
    z: 20,
    xStart: "42%",
    yStart: "-6%",
    rotStart: 15,
    scaleStart: 0.96,
    xEnd: "-53%",
    yEnd: "64%",
  },
  {
    title: "amorada",
    lowercase: true,
    subtitle: "Ecommerce Site",
    href: "#",
    bg: "/figma/lp-bg-4.jpg",
    screen: "/figma/lp-screen-4.jpg",
    alt: "Amorada website — Where Comfort Meets Craft",
    z: 10,
    xStart: "51%",
    yStart: "-12%",
    rotStart: 20,
    scaleStart: 0.93,
    xEnd: "53%",
    yEnd: "64%",
  },
];

const MORPH_END = 0.78; // scroll progress at which the grid is fully formed

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5.25 12.75L12.75 5.25M12.75 5.25H5.25M12.75 5.25V12.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CardVisual({ card }: { card: Card }) {
  return (
    <div className="relative aspect-[497/363] w-full overflow-hidden rounded-2xl shadow-[0px_24px_60px_-12px_rgba(0,0,0,0.35)]">
      <Image src={card.bg} alt="" fill sizes="560px" className="object-cover" priority={card.z === 40} />
      <div className="absolute inset-x-[3%] bottom-[9%] top-[9.5%]">
        <div className="relative h-[93%] overflow-hidden rounded-[16px] bg-[#cfcfcf] p-[9px] shadow-[0px_28px_56px_0px_rgba(0,0,0,0.5)]">
          <span className="absolute left-1/2 top-[6px] size-[5px] -translate-x-1/2 rounded-full bg-[#8a8a8a]" />
          <div className="relative mt-[4px] h-[calc(100%-4px)] overflow-hidden rounded-[11px] bg-white">
            <Image src={card.screen} alt={card.alt} fill sizes="520px" className="object-cover object-top" />
          </div>
        </div>
        <div className="mx-auto mt-[1.5%] h-[3%] w-[96%] rounded-b-[16px] rounded-t-[4px] border border-[rgba(168,168,168,0.25)] bg-[#595959]" />
      </div>
    </div>
  );
}

function CardCaption({ card }: { card: Card }) {
  return (
    <div className="mt-3 flex items-center justify-between gap-4">
      <div className="flex flex-col gap-1">
        <p
          className={`text-[16px] font-medium leading-[1.2] tracking-[-0.36px] text-black lg:text-[18px] ${
            card.lowercase ? "lowercase" : ""
          }`}
        >
          {card.title}
        </p>
        <p className="text-[12px] font-semibold tracking-[-0.12px] text-[#545454]">{card.subtitle}</p>
      </div>
      <span className="flex shrink-0 items-center gap-1 text-[12px] font-semibold tracking-[-0.12px] text-[#545454]">
        <ArrowUpRight className="size-[18px] text-navy" />
        View Project
      </span>
    </div>
  );
}

/** One scroll-morphing card: fanned stack → grid cell over [0, MORPH_END]. */
function MorphCard({ card, progress }: { card: Card; progress: MotionValue<number> }) {
  const x = useTransform(progress, [0, MORPH_END], [card.xStart, card.xEnd]);
  const y = useTransform(progress, [0, MORPH_END], [card.yStart, card.yEnd]);
  const rotate = useTransform(progress, [0, MORPH_END], [card.rotStart, 0]);
  const scale = useTransform(progress, [0, MORPH_END], [card.scaleStart, SCALE_END]);
  const captionOpacity = useTransform(progress, [MORPH_END - 0.12, MORPH_END], [0, 1]);

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 w-[68vw] max-w-[520px] -translate-x-1/2 -translate-y-1/2 sm:w-[46vw]"
      style={{ zIndex: card.z }}
    >
      <motion.a href={card.href} className="group pointer-events-auto block" style={{ x, y, rotate, scale }}>
        <CardVisual card={card} />
        <motion.div style={{ opacity: captionOpacity }}>
          <CardCaption card={card} />
        </motion.div>
      </motion.a>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="flex max-w-[496px] flex-col gap-6">
      <h1 className="font-medium tracking-[-1.4px] text-[44px] leading-[42px] sm:text-[56px] sm:leading-[54px] lg:text-[72px] lg:leading-[68.4px] lg:tracking-[-2.16px]">
        <span className="block text-[#828282]">Design that</span>
        <span className="block text-black">delivers results</span>
      </h1>
      <p className="max-w-[390px] text-[17px] leading-[25.2px] tracking-[-0.36px]">
        <span className="font-semibold text-black">
          Strategic design that drives growth, not just looks good .{" "}
        </span>
        <span className="font-normal text-muted">
          We create everything your brand needs to attract customers and turn them into sales.
        </span>
      </p>
      <div>
        <a
          href="#contact"
          className="inline-flex items-center gap-[10px] rounded-[24px] border border-navy bg-navy px-6 py-3 shadow-[0px_9.835px_9.835px_-3px_rgba(0,0,0,0.25),0px_25px_25px_-3.75px_rgba(0,0,0,0.11),0px_0px_0px_1px_#545454] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
        >
          <span className="text-[13.3px] font-semibold tracking-[-0.14px] text-white">Book a call with us</span>
        </a>
      </div>
    </div>
  );
}

/** Static, un-pinned fallback for mobile / reduced-motion. */
function StaticFallback() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:gap-8 lg:py-20">
          <HeroCopy />
          <div className="relative aspect-[497/363] w-full max-w-[460px] justify-self-center">
            <div className="absolute inset-0 rotate-[7deg]">
              <CardVisual card={CARDS[0]} />
            </div>
          </div>
        </div>
        <div className="pb-20 pt-4">
          <h2 className="mb-10 text-center text-[40px] font-medium leading-[1.05] tracking-[-1.2px] lg:text-[56px] lg:tracking-[-1.68px]">
            <span className="text-ink">Latest </span>
            <span className="text-navy">Projects</span>
          </h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2">
            {CARDS.map((card) => (
              <a key={card.title} href={card.href} className="group block">
                <CardVisual card={card} />
                <CardCaption card={card} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HeroShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const update = () => setEnabled(mq.matches && !reduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const measure = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      scrollYProgress.set(p);
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
  }, [scrollYProgress, enabled]);

  // Hero copy SCROLLS UP and past the sticky cards (translate, not a fade-in-place).
  const copyY = useTransform(scrollYProgress, [0, 0.42], ["0vh", "-78vh"]);
  const copyOpacity = useTransform(scrollYProgress, [0.32, 0.44], [1, 0]);
  const copyPointer = useTransform(scrollYProgress, (v) => (v > 0.3 ? "none" : "auto"));

  // "Latest Projects" heading rises up from below as the grid forms.
  const headingY = useTransform(scrollYProgress, [MORPH_END - 0.32, MORPH_END], ["44vh", "0vh"]);
  const headingOpacity = useTransform(scrollYProgress, [MORPH_END - 0.28, MORPH_END - 0.05], [0, 1]);

  if (!enabled) return <StaticFallback />;

  return (
    <section ref={sectionRef} className="relative h-[260vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1200px] px-6 lg:px-10">
          {/* Hero copy — scrolls up and past the cards */}
          <motion.div
            style={{ y: copyY, opacity: copyOpacity, pointerEvents: copyPointer }}
            className="absolute left-6 top-1/2 z-40 -translate-y-1/2 lg:left-10"
          >
            <HeroCopy />
          </motion.div>

          {/* "Latest Projects" heading — rises up from below */}
          <motion.h2
            style={{ y: headingY, opacity: headingOpacity }}
            className="absolute left-1/2 top-[7vh] z-40 w-full -translate-x-1/2 text-center text-[40px] font-medium leading-[1.05] tracking-[-1.2px] lg:text-[56px] lg:tracking-[-1.68px]"
          >
            <span className="text-ink">Latest </span>
            <span className="text-navy">Projects</span>
          </motion.h2>

          {/* Morphing card layer */}
          {CARDS.map((card) => (
            <MorphCard key={card.title} card={card} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
