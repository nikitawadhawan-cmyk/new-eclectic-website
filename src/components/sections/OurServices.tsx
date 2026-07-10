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
}: {
  index: number;
  /** continuous reveal progress in "items" (0..N) */
  r: MotionValue<number>;
}) {
  const s = SERVICES[index];
  const opacity = useTransform(r, [index + 0.1, index + 0.5], [0, 1]);
  const y = useTransform(r, [index + 0.1, index + 0.5], [16, 0]);
  return (
    <motion.div
      style={{ opacity, y, left: index * COL_W, width: COL_W }}
      className="absolute top-0 pr-12"
    >
      <div style={{ height: TITLE_H }} className="flex items-end pb-8">
        <h3 className="text-[32px] font-semibold leading-[1.12] tracking-[-0.3px] text-ink">
          {s.title}
        </h3>
      </div>
      <div style={{ height: LINE_H }} />
      <p className="mt-8 text-[17px] leading-[1.55] tracking-[-0.2px] text-muted">
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

export default function OurServices() {
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
  const ZOOM = 1.42;
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
    const vw = window.innerWidth;
    const layoutLeft = Math.max(24, (vw - 1120) / 2);
    const s = sOf(v);
    const iCenter = Math.min(N - 1, Math.max(0, rOf(v) - 0.5));
    const centered = vw / 2 - layoutLeft - s * (iCenter + 0.5) * COL_W;
    const endTarget = -(N - 2.3) * COL_W;
    if (v < REVEAL_END) return centered;
    if (v >= ZOOM_OUT_END) return endTarget;
    const t = (v - REVEAL_END) / (ZOOM_OUT_END - REVEAL_END);
    return centered * (1 - t) + endTarget * t;
  });

  // The navy line grows just ahead of the newest revealed item.
  const lineWidth = useTransform(r, (v) =>
    Math.max(0, Math.min(v + 0.55, N) * COL_W - 48),
  );

  if (!enabled) return <StaticFallback />;

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
            space so the pinned view doesn't leave a large empty band below */}
        <div className="flex w-full flex-1 items-center">
          <motion.div
            style={{
              x,
              scale,
              // zoom anchors on the line's vertical position at the track's
              // left edge, so the strip stays visually stable while scaling
              transformOrigin: `0px ${TITLE_H + LINE_H / 2}px`,
              width: N * COL_W,
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
                style={{ left: (i + 1) * COL_W, top: TITLE_H - 22, height: 22 + LINE_H }}
                className="absolute w-0 border-l-2 border-dashed border-navy/40"
              />
            ))}
            {/* service points — revealed one by one */}
            {SERVICES.map((_, i) => (
              <ServiceColumn key={i} index={i} r={r} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
