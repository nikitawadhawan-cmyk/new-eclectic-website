"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * OurServices — pinned scroll-driven "progress line" section (reference:
 * user's screen recording of a scrollytelling services strip).
 *
 * White band, brand-navy line. The section pins while you scroll:
 * service points appear ONE BY ONE — each new title+description fades in
 * as the navy line grows underneath it (rounded glowing cap, dashed navy
 * dividers at column boundaries) — and the whole track slides left so the
 * newest point is always on screen. Badge + one-line heading stay pinned.
 *
 * Uses the same manual scroll-progress MotionValue pattern as
 * HeroShowcase/Innovate (reliable where useScroll({target}) was flaky).
 * Falls back to a static stacked list on small screens / reduced motion.
 */

type Service = { title: string; desc: string };

const SERVICES: Service[] = [
  {
    title: "Shopify Development",
    desc: "High-converting Shopify and Shopify Plus stores engineered around consumer psychology to turn browsers into buyers.",
  },
  {
    title: "WordPress Development",
    desc: "Fast, secure, easy-to-manage WordPress sites with custom themes — no bloated, cookie-cutter templates.",
  },
  {
    title: "React & Next.js Development",
    desc: "Blazing-fast, scalable web experiences built with React and Next.js for performance that ranks and converts.",
  },
  {
    title: "Web Apps",
    desc: "Custom web applications and dashboards with solid architecture, clean UX, and room to grow.",
  },
  {
    title: "3D Design",
    desc: "Immersive 3D visuals, product renders, and interactive scenes that make your brand impossible to scroll past.",
  },
  {
    title: "UX / UI Consultation",
    desc: "Research-led UX and UI audits that sharpen usability, hierarchy, and flow across your entire product.",
  },
  {
    title: "Landing Pages",
    desc: "Conversion-focused landing pages built around a single, measurable action — designed to capture and convert.",
  },
];

const N = SERVICES.length;
/** column width (px) of each service on the pinned track */
const COL_W = 500;
/** px height of the title area above the line */
const TITLE_H = 128;
/** the line's height */
const LINE_H = 28;

function ServiceColumn({
  index,
  r,
  colW,
}: {
  index: number;
  /** continuous reveal progress in "items" (0..N) */
  r: MotionValue<number>;
  /** responsive column width (500px desktop, viewport-fitted on phones) */
  colW: number;
}) {
  const s = SERVICES[index];
  const opacity = useTransform(r, [index + 0.1, index + 0.5], [0, 1]);
  const y = useTransform(r, [index + 0.1, index + 0.5], [16, 0]);
  return (
    <motion.div
      style={{ opacity, y, left: index * colW, width: colW }}
      className="absolute top-0 pr-8 sm:pr-12"
    >
      <div style={{ height: TITLE_H }} className="flex items-end pb-8">
        <h3 className="text-[24px] font-semibold leading-[1.12] tracking-[-0.3px] text-ink sm:text-[32px]">
          {s.title}
        </h3>
      </div>
      <div style={{ height: LINE_H }} />
      <p className="mt-8 text-[15px] leading-[1.55] tracking-[-0.2px] text-muted sm:text-[17px]">
        {s.desc}
      </p>
    </motion.div>
  );
}

/** Static, un-pinned fallback for mobile / reduced motion. */
function StaticFallback() {
  return (
    <section id="services" className="w-full scroll-mt-24 bg-white py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <Badge />
        <h2 className="mt-6 text-[34px] font-medium leading-[1.16] tracking-[-0.5px] text-ink sm:text-[40px]">
          From Design to Development, Our Services
        </h2>
        <ul className="mt-12 flex flex-col">
          {SERVICES.map((s) => (
            <li key={s.title} className="border-l-2 border-navy py-6 pl-5">
              <h3 className="text-[20px] font-semibold leading-[1.2] tracking-[0.3px] text-ink">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.5] text-muted">
                {s.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <span className="inline-flex w-fit items-center gap-[11px] rounded-full border border-[#dedede] py-[5px] pl-1.5 pr-4">
      <span className="flex size-6 items-center justify-center rounded-full bg-navy text-[12px] font-medium text-white">
        2
      </span>
      <span className="text-[14px] text-ink">Our services</span>
    </span>
  );
}

/* ── Mobile (<640px): vertical timeline ─────────────────────────────────── */

const TL_X = 14; // line centre x (px) inside the list
const TL_DOT = 14; // node diameter
const TL_ANCHOR = 0.36; // keep the active item around this fraction of the viewport height

function TimelineItem({
  index,
  r,
  itemRef,
}: {
  index: number;
  r: MotionValue<number>;
  itemRef: (el: HTMLLIElement | null) => void;
}) {
  const s = SERVICES[index];
  const opacity = useTransform(r, [index + 0.05, index + 0.45], [0.18, 1]);
  const x = useTransform(r, [index + 0.05, index + 0.45], [22, 0]);
  // node: hollow → filled as the line reaches it; glows while it's the newest
  const fill = useTransform(r, [index + 0.25, index + 0.4], ["#ffffff", "#2a315f"]);
  const dotScale = useTransform(r, [index + 0.2, index + 0.45, index + 1.2, index + 1.5], [1, 1.45, 1.45, 1]);
  const glow = useTransform(
    r,
    [index + 0.2, index + 0.45, index + 1.2, index + 1.5],
    ["0 0 0px rgba(42,49,95,0)", "0 0 22px rgba(42,49,95,0.55)", "0 0 22px rgba(42,49,95,0.55)", "0 0 0px rgba(42,49,95,0)"],
  );
  return (
    <li ref={itemRef} className="relative pb-9 pl-11 last:pb-0">
      <motion.span
        style={{ backgroundColor: fill, scale: dotScale, boxShadow: glow, left: TL_X - TL_DOT / 2, width: TL_DOT, height: TL_DOT }}
        className="absolute top-[7px] rounded-full border-2 border-navy"
      />
      <motion.div style={{ opacity, x }}>
        <h3 className="text-[22px] font-semibold leading-[1.15] tracking-[-0.3px] text-ink">{s.title}</h3>
        <p className="mt-2 text-[15px] leading-[1.5] tracking-[-0.2px] text-muted">{s.desc}</p>
      </motion.div>
    </li>
  );
}

function MobileTimeline({ progress, vh }: { progress: MotionValue<number>; vh: number }) {
  const layerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const itemEls = useRef<(HTMLLIElement | null)[]>([]);
  const [geom, setGeom] = useState<{ tops: number[]; listTop: number; listH: number; contentH: number }>({
    tops: SERVICES.map((_, i) => i * 120),
    listTop: 260,
    listH: N * 120,
    contentH: 260 + N * 120,
  });
  useEffect(() => {
    const measure = () => {
      const layer = layerRef.current;
      const list = listRef.current;
      if (!layer || !list) return;
      const lr = layer.getBoundingClientRect();
      const tops = itemEls.current.map((el) => (el ? el.getBoundingClientRect().top - list.getBoundingClientRect().top : 0));
      setGeom({
        tops,
        listTop: list.getBoundingClientRect().top - lr.top,
        listH: list.getBoundingClientRect().height,
        contentH: layer.scrollHeight,
      });
    };
    const id = requestAnimationFrame(measure);
    const late = window.setTimeout(measure, 600); // after webfonts settle
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(late);
      window.removeEventListener("resize", measure);
    };
  }, [vh]);

  // Reveal progress in item units (0..N); the tail of the scroll is a hold.
  const r = useTransform(progress, [0.04, 0.9], [0.35, N], { clamp: true });
  // Continuous y (within the list) of the newest node.
  const nodeY = useTransform(r, (v) => {
    const i = Math.min(N - 1, Math.max(0, Math.floor(v - 0.35)));
    const f = Math.min(1, Math.max(0, v - 0.35 - i));
    const a = geom.tops[i] ?? 0;
    const b = geom.tops[Math.min(N - 1, i + 1)] ?? a;
    return a + (b - a) * f + 14;
  });
  // The navy line grows down to just past the newest node.
  const lineH = useTransform(nodeY, (y) => Math.min(geom.listH, y + 30));
  // Pan the layer so the active node stays near TL_ANCHOR of the viewport,
  // never panning past the end of the content.
  const maxPan = Math.max(0, geom.contentH + 32 - vh); // contentH includes the pb-32 clearance for the floating pill
  const layerY = useTransform(nodeY, (y) => -Math.min(maxPan, Math.max(0, geom.listTop + y - vh * TL_ANCHOR)));

  return (
    <motion.div ref={layerRef} style={{ y: layerY }} className="absolute inset-x-0 top-0 px-6 pb-32 pt-[88px]">
      <div className="flex flex-col gap-5">
        <Badge />
        <h2 className="text-[32px] font-medium leading-[1.12] tracking-[-0.6px] text-ink">
          From Design to Development, Our Services
        </h2>
      </div>
      <ul ref={listRef} className="relative mt-10">
        {/* rail + growing navy line */}
        <div style={{ left: TL_X - 1 }} className="absolute top-2 bottom-2 w-[2px] rounded-full bg-[#e6e6e6]" />
        <motion.div
          style={{ left: TL_X - 2, height: lineH }}
          className="absolute top-2 w-[4px] rounded-full bg-gradient-to-b from-navy-deep to-navy shadow-[0_0_26px_rgba(42,49,95,0.45)]"
        />
        {SERVICES.map((_, i) => (
          <TimelineItem
            key={i}
            index={i}
            r={r}
            itemRef={(el) => {
              itemEls.current[i] = el;
            }}
          />
        ))}
      </ul>
    </motion.div>
  );
}

export default function OurServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(true);

  // Pinned scrollytelling now runs at EVERY viewport width (client request
  // 2026-08-16 — "animations must work on mobile too"). Phones get narrower
  // columns + a gentler zoom via the viewport-tracked params below. Only
  // reduced-motion users get the static list.
  useEffect(() => {
    setEnabled(!reduced);
  }, [reduced]);

  // Viewport width drives the responsive choreography params. Starts at a
  // desktop-ish value for SSR/prerender; corrected on mount.
  const [vw, setVw] = useState(1200);
  const [vh, setVh] = useState(800);
  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Manual scroll progress (0..1 across the pinned span) — same pattern as
  // HeroShowcase; reliable and reversible.
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

  // ── Scroll choreography ─────────────────────────────────────────────
  // p 0→ZOOM_IN_END   : the strip zooms IN on the first point (Shopify).
  // p →REVEAL_END     : points reveal one by one, track slides, all ZOOMED.
  // p →ZOOM_OUT_END   : after the last point (Landing Pages) arrives, the
  //                     strip zooms OUT to the normal full layout.
  // p →1              : brief settled hold, then the section unpins.
  // On narrow screens the column shrinks to fit the viewport and the zoom is
  // gentler so the zoomed column never overflows the screen edges.
  const narrow = vw < 640;
  const colW = narrow ? Math.max(280, Math.min(400, vw - 56)) : COL_W;
  const ZOOM = narrow ? 1.12 : 1.42;
  const ZOOM_IN_END = 0.06;
  const REVEAL_END = 0.8;
  const ZOOM_OUT_END = 0.94;

  // Continuous reveal progress in item units (0..N) — reveal finishes at
  // REVEAL_END so the tail of the scroll is reserved for the zoom-out.
  const r = useTransform(progress, [0.04, REVEAL_END], [0.35, N], {
    clamp: true,
  });

  const rOf = (v: number) =>
    Math.min(
      N,
      Math.max(0.35, 0.35 + ((v - 0.04) * (N - 0.35)) / (REVEAL_END - 0.04)),
    );
  const sOf = (v: number) => {
    if (v <= ZOOM_IN_END) return 1 + (ZOOM - 1) * Math.max(0, v / ZOOM_IN_END);
    if (v < REVEAL_END) return ZOOM;
    if (v >= ZOOM_OUT_END) return 1;
    return ZOOM + (1 - ZOOM) * ((v - REVEAL_END) / (ZOOM_OUT_END - REVEAL_END));
  };

  // Zoom scale on the whole track (transform-origin: left, at the line's y).
  const scale = useTransform(progress, sOf);

  // Track x: while zoomed, keep the newest revealed point centered in the
  // viewport (accounting for scale); during the zoom-out, blend to the
  // normal end-of-strip position.
  const x = useTransform(progress, (v) => {
    if (typeof window === "undefined") return 0;
    const w = window.innerWidth;
    const layoutLeft = Math.max(24, (w - 1120) / 2);
    const s = sOf(v);
    const iCenter = Math.min(N - 1, Math.max(0, rOf(v) - 0.5));
    const centered = w / 2 - layoutLeft - s * (iCenter + 0.5) * colW;
    // Desktop ends showing the last ~2.3 columns; narrow screens end with the
    // final column's right edge tucked to the viewport edge instead.
    const endTarget = narrow ? -(N * colW - (w - 48)) : -(N - 2.3) * colW;
    if (v < REVEAL_END) return centered;
    if (v >= ZOOM_OUT_END) return endTarget;
    const t = (v - REVEAL_END) / (ZOOM_OUT_END - REVEAL_END);
    return centered * (1 - t) + endTarget * t;
  });

  // The navy line grows just ahead of the newest revealed item.
  const lineWidth = useTransform(r, (v) =>
    Math.max(0, Math.min(v + 0.55, N) * colW - 48),
  );

  if (!enabled) return <StaticFallback />;

  // Phones (<640px): vertical timeline (client request 2026-08-17) — the navy
  // line runs DOWN the left edge and grows as you scroll; each service lights
  // up at its node (title + description slide in from the right, the newest
  // node glows) and the layer pans up to keep the active item in view.
  if (narrow) {
    return (
      <section id="services" ref={sectionRef} className="relative h-[420vh] w-full scroll-mt-24 bg-white">
        <div className="sticky top-0 h-screen overflow-hidden">
          <MobileTimeline progress={progress} vh={vh} />
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative h-[500vh] w-full scroll-mt-24 bg-white"
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Pinned header — badge + ONE-LINE heading */}
        <div className="mx-auto w-full max-w-[1200px] px-6 pt-[9vh] lg:px-10">
          <div className="flex flex-col gap-6">
            <Badge />
            <h2 className="whitespace-nowrap text-[clamp(28px,3.4vw,46px)] font-medium leading-[1.16] tracking-[-0.5px] text-ink">
              From Design to Development, Our Services
            </h2>
          </div>
        </div>

        {/* Scroll-driven track — vertically centered in the remaining screen
            space on desktop; on phones it hugs the heading instead (centering
            a 400px track in a tall thin screen left a big empty band). */}
        <div className="flex w-full flex-1 items-start pt-[5vh] sm:items-center sm:pt-0">
          <motion.div
            style={{
              x,
              scale,
              // zoom anchors on the line's vertical position at the track's
              // left edge, so the strip stays visually stable while scaling
              transformOrigin: `0px ${TITLE_H + LINE_H / 2}px`,
              width: N * colW,
              marginLeft: "max(24px, calc((100vw - 1120px) / 2))",
            }}
            className="relative h-[400px] shrink-0"
          >
            {/* the growing navy line */}
            <motion.div
              style={{ width: lineWidth, top: TITLE_H, height: LINE_H }}
              className="absolute left-0 rounded-full bg-gradient-to-r from-navy-deep to-navy shadow-[0_0_46px_rgba(42,49,95,0.45),0_0_110px_rgba(42,49,95,0.22)]"
            />
            {/* dashed dividers at column boundaries */}
            {Array.from({ length: N - 1 }, (_, i) => (
              <div
                key={i}
                style={{ left: (i + 1) * colW, top: TITLE_H - 22, height: 22 + LINE_H }}
                className="absolute w-0 border-l-2 border-dashed border-navy/40"
              />
            ))}
            {/* service points — revealed one by one */}
            {SERVICES.map((_, i) => (
              <ServiceColumn key={i} index={i} r={r} colW={colW} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
