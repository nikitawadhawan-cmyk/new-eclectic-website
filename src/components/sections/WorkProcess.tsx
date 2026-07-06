"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type Step = {
  number: string;
  numberColor: "gold" | "navy";
  title: string;
  titleAccent: boolean;
  description: string;
};

const steps: Step[] = [
  {
    number: "1",
    numberColor: "navy",
    title: "Discovery",
    titleAccent: false,
    description: "We dive deep into your brand, audience, and goals to set the foundation.",
  },
  {
    number: "2",
    numberColor: "gold",
    title: "Strategy & Design",
    titleAccent: true,
    description: "We craft a clear direction and design experiences that align creativity with results.",
  },
  {
    number: "3",
    numberColor: "navy",
    title: "Build & Launch",
    titleAccent: false,
    description: "Our team brings the vision to life with precision, testing every detail.",
  },
  {
    number: "4",
    numberColor: "gold",
    title: "Optimize & Scale",
    titleAccent: false,
    description: "We measure performance, refine continuously, and help your product grow.",
  },
];

const CARD_W = 230;
const CARD_H = 330;

function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M7 3h26a5 5 0 0 1 5 5v13a5 5 0 0 1-5 5H14l-5.5 6.5V26H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Z"
        fill="none"
        stroke="#e8c700"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="14.6" y="7.5" width="2.8" height="14.5" rx="1.4" fill="#e8c700" />
      <rect x="21.6" y="7.5" width="2.8" height="14.5" rx="1.4" fill="#e8c700" />
      <rect x="9.5" y="11.6" width="20" height="2.8" rx="1.4" fill="#fff" />
      <rect x="9.5" y="16.6" width="20" height="2.8" rx="1.4" fill="#fff" />
    </svg>
  );
}

function CardFront({ step }: { step: Step }) {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-white px-5 pb-5 pt-4 shadow-[0px_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <span
        className={`text-center text-[120px] font-normal leading-[0.95] ${
          step.numberColor === "gold" ? "text-[#e8c700]" : "text-[#2a315f]"
        }`}
      >
        {step.number}
      </span>
      <div className="mt-auto flex flex-col gap-1.5">
        <p
          className={`text-[19px] leading-[1.2] ${
            step.titleAccent ? "font-semibold text-[#2a315f]" : "font-medium text-black"
          }`}
        >
          {step.title}
        </p>
        <p className="text-[13px] leading-[18px] text-[#555]">{step.description}</p>
      </div>
    </div>
  );
}

function CardBack() {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-navy-deep shadow-[0px_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex h-[calc(100%-24px)] w-[calc(100%-24px)] flex-col items-center justify-center gap-3 rounded-xl border border-[#e8c700]/30">
        <LogoMark className="size-12" />
        <span className="text-[11px] font-semibold tracking-[0.3em] text-[#e8c700]/70">ECLECTIC</span>
      </div>
    </div>
  );
}

/** One dealing + flipping card, scrubbed by scroll progress. */
function FlipCard({ step, index, progress }: { step: Step; index: number; progress: MotionValue<number> }) {
  const targetX = (index - 1.5) * 258;
  const targetY = index % 2 === 0 ? 22 : -22;
  const targetTilt = (index - 1.5) * 4;

  // Deal out from centre into a fanned row.
  const x = useTransform(progress, [0.03, 0.42], [0, targetX]);
  const y = useTransform(progress, [0.03, 0.42], [0, targetY]);
  const rotate = useTransform(progress, [0.03, 0.42], [(index - 1.5) * 12, targetTilt]);
  const scale = useTransform(progress, [0, 0.42], [0.72, 1]);
  const opacity = useTransform(progress, [0, 0.12], [0, 1]);

  // Then flip (back → front), staggered per card.
  const flipStart = 0.46 + index * 0.05;
  const rotateY = useTransform(progress, [flipStart, flipStart + 0.26], [180, 0]);

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: CARD_W, height: CARD_H }}
    >
      <motion.div className="h-full w-full" style={{ x, y, scale, rotate, opacity }}>
        <div className="h-full w-full" style={{ perspective: 1400 }}>
          <motion.div className="relative h-full w-full" style={{ rotateY, transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
              <CardFront step={step} />
            </div>
            <div
              className="absolute inset-0"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <CardBack />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function StaticWorkProcess() {
  return (
    <section className="w-full bg-navy py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-[14px] leading-[21px] text-[#e8c700]">
            {"//"}
            <span className="text-white/60"> WORKING PROCESS</span>
          </p>
          <h2 className="text-[40px] font-medium leading-[1.1] tracking-[-1.5px] text-white lg:text-[56px]">
            Let&rsquo;s See Our Work Process
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="mx-auto w-full max-w-[260px]" style={{ aspectRatio: `${CARD_W}/${CARD_H}` }}>
              <CardFront step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
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

  const headingY = useTransform(progress, [0, 0.4], [0, -30]);

  if (!enabled) return <StaticWorkProcess />;

  return (
    <section ref={sectionRef} className="relative h-[220vh] w-full bg-navy">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1200px] px-6 lg:px-10">
          {/* Heading (stays at the top of the scene) */}
          <motion.div style={{ y: headingY }} className="absolute left-1/2 top-[9vh] w-full -translate-x-1/2 text-center">
            <p className="text-[14px] leading-[21px] text-[#e8c700]">
              {"//"}
              <span className="text-white/60"> WORKING PROCESS</span>
            </p>
            <h2 className="mt-3 text-[40px] font-medium leading-[1.1] tracking-[-1.5px] text-white lg:text-[56px]">
              Let&rsquo;s See Our Work Process
            </h2>
          </motion.div>

          {/* Dealing / flipping cards, centred slightly below the heading */}
          <div className="absolute left-0 top-[58%] w-full">
            {steps.map((step, i) => (
              <FlipCard key={step.number} step={step} index={i} progress={progress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
