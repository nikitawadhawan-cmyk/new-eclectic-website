"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PenTool, Palette, LayoutPanelTop } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/* ── Designed Figma icons ─────────────────────────────────────────────── */

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 31.8359 31.9572" fill="none" aria-hidden="true" className={className}>
      <path
        d="M14.4257 8.98795V19.9732C14.424 21.5619 13.7946 23.085 12.6755 24.2083C11.5564 25.3317 10.0391 25.9635 8.45642 25.9652C8.19256 25.9652 7.93951 25.8599 7.75293 25.6727C7.56637 25.4854 7.46155 25.2314 7.46155 24.9665C7.46155 24.7017 7.56637 24.4476 7.75293 24.2604C7.93951 24.0731 8.19256 23.9679 8.45642 23.9679C9.51185 23.9679 10.5241 23.547 11.2703 22.7978C12.0167 22.0487 12.4359 21.0327 12.4359 19.9732V18.9746L4.97436 18.9746C4.44665 18.9746 3.94055 18.7641 3.5674 18.3895C3.19425 18.0149 2.98462 17.5069 2.98462 16.9772V8.98795C2.98462 8.45823 3.19425 7.9502 3.5674 7.57563C3.94055 7.20105 4.44665 6.99062 4.97436 6.99062L12.4359 6.99062C12.9636 6.99062 13.4697 7.20105 13.8429 7.57563C14.216 7.9502 14.4257 8.45823 14.4257 8.98795ZM26.8616 6.99062L19.4 6.99062C18.8723 6.99062 18.3662 7.20105 17.9931 7.57563C17.6199 7.9502 17.4103 8.45823 17.4103 8.98795V16.9772C17.4103 17.5069 17.6199 18.0149 17.9931 18.3895C18.3662 18.7641 18.8723 18.9746 19.4 18.9746L26.8616 18.9746V19.9732C26.8616 21.0327 26.4423 22.0487 25.696 22.7978C24.9497 23.547 23.9375 23.9679 22.8821 23.9679C22.6182 23.9679 22.3651 24.0731 22.1786 24.2604C21.9921 24.4476 21.8872 24.7017 21.8872 24.9665C21.8872 25.2314 21.9921 25.4854 22.1786 25.6727C22.3651 25.8599 22.6182 25.9652 22.8821 25.9652C24.4647 25.9635 25.9821 25.3317 27.1011 24.2083C28.2203 23.085 28.8496 21.5619 28.8513 19.9732V8.98795C28.8513 8.45823 28.6417 7.9502 28.2685 7.57563C27.8953 7.20105 27.3892 6.99062 26.8616 6.99062Z"
        fill="#e8c700"
      />
    </svg>
  );
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 23.9679" fill="none" aria-hidden="true" className={className}>
      <path
        d="M21.75 5.99199H19.5V5.24299C19.5 4.84571 19.342 4.46468 19.0607 4.18375C18.7794 3.90283 18.3978 3.745 18 3.745H6C5.60218 3.745 5.22064 3.90283 4.93934 4.18375C4.65804 4.46468 4.5 4.84571 4.5 5.24299V5.99199H2.25C1.85218 5.99199 1.47064 6.14982 1.18934 6.43074C0.908035 6.71167 0.75 7.09269 0.75 7.48998V8.98797C0.75 9.9812 1.14509 10.9338 1.84835 11.6361C2.19657 11.9839 2.60997 12.2597 3.06494 12.4478C3.51991 12.6361 4.00754 12.733 4.5 12.733H4.84219C5.28398 14.1312 6.12634 15.3694 7.26516 16.2948C8.40398 17.22 9.78933 17.7919 11.25 17.9394V20.2229H9C8.80109 20.2229 8.61032 20.3018 8.46967 20.4423C8.32902 20.5827 8.25 20.7733 8.25 20.9719C8.25 21.1705 8.32902 21.3611 8.46967 21.5015C8.61032 21.642 8.80109 21.7209 9 21.7209H15C15.1989 21.7209 15.3897 21.642 15.5303 21.5015C15.671 21.3611 15.75 21.1705 15.75 20.9719C15.75 20.7733 15.671 20.5827 15.5303 20.4423C15.3897 20.3018 15.1989 20.2229 15 20.2229H12.75V17.9366C15.7444 17.6342 18.2288 15.5361 19.1325 12.733H19.5C20.4946 12.733 21.4484 12.3384 22.1516 11.6361C22.8549 10.9338 23.25 9.9812 23.25 8.98797V7.48998C23.25 7.09269 23.092 6.71167 22.8107 6.43074C22.5294 6.14982 22.1478 5.99199 21.75 5.99199ZM4.5 11.235C3.90326 11.235 3.33097 10.9982 2.90901 10.5768C2.48705 10.1554 2.25 9.58391 2.25 8.98797V7.48998H4.5V10.486C4.5 10.7356 4.51219 10.9853 4.53656 11.235H4.5ZM21.75 8.98797C21.75 9.58391 21.5129 10.1554 21.091 10.5768C20.669 10.9982 20.0967 11.235 19.5 11.235H19.4531C19.4839 10.9582 19.4995 10.6801 19.5 10.4017V7.48998H21.75V8.98797Z"
        fill="#2a315f"
      />
    </svg>
  );
}

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 15L15 5M15 5H6.5M15 5V13.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const designIcons = [
  { Icon: Palette, label: "UI design" },
  { Icon: PenTool, label: "Brand design" },
  { Icon: LayoutPanelTop, label: "Web design" },
];

const cardBase = "rounded-2xl border border-black/10 bg-white shadow-[0px_16px_40px_-16px_rgba(0,0,0,0.25)]";

/* ── The six cards (content is identical in scatter + static modes) ─────── */

function BrandsCard() {
  return (
    <div className={`${cardBase} flex items-center justify-between gap-3 px-4 py-3`}>
      <div className="flex items-center -space-x-3">
        {designIcons.map(({ Icon, label }) => (
          <span
            key={label}
            className="flex size-10 items-center justify-center rounded-full bg-navy ring-2 ring-white"
            title={label}
          >
            <Icon className="size-4 text-gold" aria-label={label} />
          </span>
        ))}
      </div>
      <p className="text-[14px] leading-[19px] text-black">50+ Brands Worldwide</p>
    </div>
  );
}

function QuoteCard() {
  return (
    <div className={`${cardBase} flex flex-col gap-6 px-6 py-6`}>
      <QuoteIcon className="size-7" />
      <p className="text-[16px] font-medium leading-[22px] text-black">
        Our platform feels faster, smoother, and just works better and intuitively.
      </p>
      <div>
        <p className="text-[44px] font-semibold leading-[48px] tracking-[-1.8px] text-navy">
          92<span className="text-[#e8c700]">%</span>
        </p>
        <p className="mt-1 text-[14px] leading-[20px] text-[#999]">Client Satisfaction</p>
      </div>
    </div>
  );
}

function HelmetCard() {
  return (
    <div className="flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-[#f3f3f5] shadow-[0px_16px_40px_-16px_rgba(0,0,0,0.25)]">
      <Image
        src="/figma/innovate-helmet.png"
        alt="Person wearing a white helmet with a large golden visor"
        width={992}
        height={1056}
        sizes="260px"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function AwardsCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-navy px-5 py-4 shadow-[0px_16px_40px_-16px_rgba(0,0,0,0.35)]">
      <div>
        <p className="text-[32px] font-semibold leading-[38px] tracking-[-1.8px] text-white">
          20<span className="text-[#e8c700]">+</span>
        </p>
        <p className="mt-1 text-[13px] leading-[18px] text-white">Global Awards &amp; Features</p>
      </div>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">
        <TrophyIcon className="size-5" />
      </span>
    </div>
  );
}

function TrustedCard() {
  return (
    <div className={`${cardBase} flex flex-col gap-6 px-6 py-6`}>
      <p className="text-[16px] font-medium leading-[22px] text-black">
        <span className="text-navy">T</span>rusted by E-commerce and B2B brands from around the world
      </p>
      <div>
        <p className="text-[44px] font-semibold leading-[48px] tracking-[-1.8px] text-navy">
          5K<span className="text-[#e8c700]">+</span>
        </p>
        <p className="mt-1 text-[14px] leading-[20px] text-[#999]">Global Project</p>
      </div>
    </div>
  );
}

function AvailableCard() {
  return (
    <a
      href="#contact"
      className={`${cardBase} flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-neutral-50`}
    >
      <span className="flex items-center gap-3">
        <span className="size-2.5 shrink-0 rounded-full bg-[#e8c700]" />
        <span className="text-[15px] leading-[20px] text-black">Available For Work</span>
      </span>
      <ArrowUpRight className="size-5 text-black" />
    </a>
  );
}

function HeadingBlock({ centered = false }: { centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-[440px] text-center" : "max-w-[640px]"}>
      <p className="text-[14px] leading-[21px] text-navy">
        {"// "}
        <span className="text-[#666]">Featured Work</span>
      </p>
      <h2 className="mt-4 text-[40px] font-medium leading-[1.08] tracking-[-1.5px] text-black lg:text-[58px] lg:leading-[64px]">
        We Strive to Innovate
      </h2>
      <p className={`mt-6 text-[16px] leading-[24px] ${centered ? "mx-auto max-w-[400px]" : "max-w-[532px]"}`}>
        <span className="text-navy">Solid Strategy</span>
        <span className="text-black">
          {" "}
          aligned with business needs and robust data analysis are fundamental ingredients to extract
          actionable insights
        </span>
      </p>
      <a
        href="#contact"
        className={`mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-navy px-6 text-[16px] font-semibold text-white transition-colors hover:bg-navy-deep active:scale-[0.98] ${
          centered ? "mx-auto" : ""
        }`}
      >
        <span>
          <span className="text-[#e8c700]">+</span> Become a Client
        </span>
        <ArrowUpRight className="size-[18px] text-white" />
      </a>
    </div>
  );
}

/* ── Scatter layout (desktop) ─────────────────────────────────────────── */

type Tile = {
  key: string;
  node: React.ReactNode;
  width: number;
  ax: number; // arranged x offset from centre (px)
  ay: number; // arranged y offset from centre (px)
  rot: number;
};

const TILES: Tile[] = [
  { key: "brands", node: <BrandsCard />, width: 250, ax: -420, ay: -250, rot: -4 },
  { key: "awards", node: <AwardsCard />, width: 250, ax: 30, ay: -300, rot: 3 },
  { key: "helmet", node: <HelmetCard />, width: 200, ax: 470, ay: -70, rot: 4 },
  { key: "quote", node: <QuoteCard />, width: 290, ax: -470, ay: 175, rot: -3 },
  { key: "available", node: <AvailableCard />, width: 240, ax: -60, ay: 320, rot: 2 },
  { key: "trusted", node: <TrustedCard />, width: 280, ax: 450, ay: 205, rot: 5 },
];

// piled (near centre) → arranged (readable hold) → scattered (flung out)
const SCATTER_KEYS = [0, 0.3, 0.55, 1] as const;
const PILE = 0.28;
const FLING = 2.6;

function ScatterTile({ tile, progress }: { tile: Tile; progress: MotionValue<number> }) {
  const x = useTransform(progress, [...SCATTER_KEYS], [tile.ax * PILE, tile.ax, tile.ax, tile.ax * FLING]);
  const y = useTransform(progress, [...SCATTER_KEYS], [tile.ay * PILE, tile.ay, tile.ay, tile.ay * FLING]);
  const scale = useTransform(progress, [0, 0.3, 0.6, 1], [0.82, 1, 1, 0.86]);
  const opacity = useTransform(progress, [0, 0.12, 0.82, 0.98], [0, 1, 1, 0]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: tile.width }}>
      <motion.div style={{ x, y, scale, rotate: tile.rot, opacity }}>{tile.node}</motion.div>
    </div>
  );
}

function StaticInnovate() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col gap-8">
          <HeadingBlock />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <BrandsCard />
          <AwardsCard />
          <div className="row-span-2 hidden lg:block">
            <HelmetCard />
          </div>
          <QuoteCard />
          <TrustedCard />
          <AvailableCard />
        </div>
      </div>
    </section>
  );
}

export default function Innovate() {
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

  // The centred heading fades up as tiles converge, then holds.
  const headingOpacity = useTransform(progress, [0, 0.12, 0.9, 1], [0, 1, 1, 0.4]);
  const headingScale = useTransform(progress, [0, 0.12], [0.96, 1]);

  if (!enabled) return <StaticInnovate />;

  return (
    <section ref={sectionRef} className="relative h-[230vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1200px] px-6 lg:px-10">
          {/* Centred heading */}
          <motion.div
            style={{ opacity: headingOpacity, scale: headingScale }}
            className="absolute left-1/2 top-1/2 z-20 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 px-6"
          >
            <HeadingBlock centered />
          </motion.div>

          {/* Scattering tiles */}
          {TILES.map((tile) => (
            <ScatterTile key={tile.key} tile={tile} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
