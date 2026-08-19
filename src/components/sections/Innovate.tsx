"use client";

import { useEffect, useRef, useState } from "react";
import Image from "@/components/Img";
import { PenTool, Palette, LayoutPanelTop, Rocket } from "lucide-react";
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

/** Replaces the old "20+ Global Awards & Features" tile (client request
 *  2026-08-17 — a claim we can't substantiate). "10+ Websites Launched" is
 *  true today (ten case studies). Other defensible options offered to the
 *  client: "9 Industries Served", "24h Response Time", "100% Hand-Coded". */
function LaunchedCard() {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-black/10 bg-navy px-5 py-4 shadow-[0px_16px_40px_-16px_rgba(0,0,0,0.35)]">
      <div>
        <p className="text-[32px] font-semibold leading-[38px] tracking-[-1.8px] text-white">
          10<span className="text-[#e8c700]">+</span>
        </p>
        <p className="mt-1 text-[13px] leading-[18px] text-white">Websites Launched</p>
      </div>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white">
        <Rocket className="size-5 text-navy" aria-hidden="true" />
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

function BecomeClientButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#contact"
      className={`inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-navy px-6 text-[16px] font-semibold text-white transition-colors hover:bg-navy-deep active:scale-[0.98] ${className}`}
    >
      <span>
        <span className="text-[#e8c700]">+</span> Become a Client
      </span>
      <ArrowUpRight className="size-[18px] text-white" />
    </a>
  );
}

function HeadingBlock({ centered = false, hideCta = false }: { centered?: boolean; hideCta?: boolean }) {
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
      {!hideCta && <BecomeClientButton className={`mt-8 ${centered ? "mx-auto" : ""}`} />}
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
  { key: "awards", node: <LaunchedCard />, width: 250, ax: 30, ay: -300, rot: 3 },
  { key: "helmet", node: <HelmetCard />, width: 200, ax: 470, ay: -70, rot: 4 },
  { key: "quote", node: <QuoteCard />, width: 290, ax: -470, ay: 175, rot: -3 },
  { key: "available", node: <AvailableCard />, width: 240, ax: -60, ay: 320, rot: 2 },
  { key: "trusted", node: <TrustedCard />, width: 280, ax: 450, ay: 205, rot: 5 },
];

const PILE = 0.16; // how close to centre the tiles start before they open out
const CONVERGE_END = 0.6; // progress at which the tiles reach their arranged spots (then hold)

function ScatterTile({ tile, progress }: { tile: Tile; progress: MotionValue<number> }) {
  // piled at centre → arranged spot, then clamped (holds — never flies away)
  const x = useTransform(progress, [0, CONVERGE_END], [tile.ax * PILE, tile.ax]);
  const y = useTransform(progress, [0, CONVERGE_END], [tile.ay * PILE, tile.ay]);
  const scale = useTransform(progress, [0, CONVERGE_END], [0.82, 1]);
  const opacity = useTransform(progress, [0, 0.16], [0, 1]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: tile.width }}>
      <motion.div style={{ x, y, scale, rotate: tile.rot, opacity }}>{tile.node}</motion.div>
    </div>
  );
}

/* ── Mobile (<1024px): pinned list, cards slide in alternately L/R ───────── */

const MOBILE_POINTERS: { key: string; node: React.ReactNode }[] = [
  { key: "brands", node: <BrandsCard /> },
  { key: "launched", node: <LaunchedCard /> },
  { key: "quote", node: <QuoteCard /> },
  { key: "trusted", node: <TrustedCard /> },
];
const MP_START = 0.08; // first card begins here
const MP_STEP = 0.17; // one card per step
const MP_DUR = 0.14; // slide duration of each card (in progress units)
const MP_BTN = [MP_START + MOBILE_POINTERS.length * MP_STEP, MP_START + MOBILE_POINTERS.length * MP_STEP + 0.12] as const;

function SlideInCard({ index, progress, vw, children }: { index: number; progress: MotionValue<number>; vw: number; children: React.ReactNode }) {
  const a = MP_START + index * MP_STEP;
  const from = index % 2 === 0 ? -vw : vw; // even from the left, odd from the right
  const x = useTransform(progress, [a, a + MP_DUR], [from, 0]);
  const opacity = useTransform(progress, [a, a + MP_DUR * 0.6], [0, 1]);
  const rotate = useTransform(progress, [a, a + MP_DUR], [index % 2 === 0 ? -6 : 6, 0]);
  return <motion.div style={{ x, opacity, rotate }}>{children}</motion.div>;
}

function MobileInnovate({ progress, vw, vh }: { progress: MotionValue<number>; vw: number; vh: number }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentH, setContentH] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (contentRef.current) setContentH(contentRef.current.scrollHeight);
    };
    const id = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", measure);
    };
  }, [vw, vh]);
  // Pan the whole layer up as the list grows so the newest card (and finally
  // the button) is on screen. Overflow = content taller than the viewport.
  const overflow = Math.max(0, contentH + 96 + 24 - vh);
  const layerY = useTransform(progress, [MP_START + MP_DUR, MP_BTN[1]], [0, -overflow]);
  const btnY = useTransform(progress, [MP_BTN[0], MP_BTN[1]], [40, 0]);
  const btnOpacity = useTransform(progress, [MP_BTN[0], MP_BTN[1]], [0, 1]);

  return (
    <motion.div ref={contentRef} style={{ y: layerY }} className="absolute inset-x-0 top-0 px-6 pt-[96px]">
      <HeadingBlock hideCta />
      <div className="mt-10 flex flex-col gap-4">
        {MOBILE_POINTERS.map((p, i) => (
          <SlideInCard key={p.key} index={i} progress={progress} vw={vw}>
            {p.node}
          </SlideInCard>
        ))}
      </div>
      <motion.div style={{ y: btnY, opacity: btnOpacity }} className="mt-8 pb-6">
        <BecomeClientButton />
      </motion.div>
    </motion.div>
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
          <LaunchedCard />
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

  // Desktop (≥1024px) gets the pinned scatter; narrower viewports get the
  // pinned slide-in list (MobileInnovate). Only reduced-motion users get the
  // static grid.
  useEffect(() => {
    setEnabled(!reduced);
  }, [reduced]);

  // Tile set switches at the old 1024px fallback boundary — the desktop
  // scatter's ±470px spread needs roughly that much width to breathe.
  const [wide, setWide] = useState(true);
  const [vh, setVh] = useState(800);
  const [vw, setVw] = useState(390);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      setWide(mq.matches);
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    };
    update();
    mq.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const tiles = TILES;

  // Scroll-scrubbed progress over the pinned section — reversible on scroll-up.
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

  if (!enabled) return <StaticInnovate />;

  // Phones / tablets (<1024px): pinned list — heading first, then each stat
  // card slides in alternately from the left and the right as you scroll,
  // and the "Become a Client" button arrives last (client request 2026-08-17).
  if (!wide) {
    return (
      <section ref={sectionRef} className="relative h-[300vh] w-full">
        <div className="sticky top-0 h-screen overflow-hidden">
          <MobileInnovate progress={progress} vw={vw} vh={vh} />
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[175vh] w-full">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="relative mx-auto h-full w-full max-w-[1200px] px-6 lg:px-10">
          {/* Centred heading — always visible so the screen is never blank */}
          <div className="absolute left-1/2 top-1/2 z-20 w-full max-w-[520px] -translate-x-1/2 -translate-y-1/2 px-6">
            <HeadingBlock centered />
          </div>

          {/* Tiles open out from the centre as you scroll in, hold, and reverse on scroll-up */}
          {tiles.map((tile) => (
            <ScatterTile key={tile.key} tile={tile} progress={progress} />
          ))}
        </div>
      </div>
    </section>
  );
}
