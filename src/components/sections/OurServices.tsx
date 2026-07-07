"use client";

import { useEffect, useRef } from "react";

/**
 * OurServices — "Our Services" band for the homepage.
 *
 * Layout adapted from a reference (Schbang) but recolored into the
 * eclectic-digital brand palette: a navy (#2a315f) band with a badge +
 * headline, then a full-width horizontal scroller of service columns.
 *
 * The track is a REAL scroll container: it auto-drifts like a marquee
 * (rAF ping-pong, pauses on hover/press and briefly after any manual
 * interaction; disabled for reduced-motion), and can also be scrolled
 * manually — via the visible gold scrollbar (.services-scroll in
 * globals.css), swipe/trackpad, or the arrow buttons at each end.
 * Columns themselves are decorative, not clickable.
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
    title: "Landing Pages",
    desc: "Conversion-focused landing pages built around a single, measurable action — designed to capture and convert.",
  },
  {
    title: "3D Design",
    desc: "Immersive 3D visuals, product renders, and interactive scenes that make your brand impossible to scroll past.",
  },
  {
    title: "UX / UI Consultation",
    desc: "Research-led UX and UI audits that sharpen usability, hierarchy, and flow across your entire product.",
  },
];

/** px the auto-drift moves per second */
const DRIFT_SPEED = 32;
/** how long a manual interaction pauses the auto-drift (ms) */
const RESUME_DELAY = 2500;

function Chevron({ dir, className }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path
        d={dir === "left" ? "M12.5 4.5 7 10l5.5 5.5" : "M7.5 4.5 13 10l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceColumn({ index, title, desc }: { index: number } & Service) {
  return (
    <div className="group/col flex h-full w-[270px] shrink-0 flex-col justify-between border-r border-white/10 px-7 py-9 transition-colors duration-300 hover:bg-white/[0.03] sm:w-[340px] sm:px-9 sm:py-12">
      <div className="flex items-center gap-2.5">
        <span className="size-1.5 rounded-full bg-gold" />
        <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div>
        <h3 className="text-[28px] font-semibold leading-[1.06] tracking-[-1px] text-white transition-colors duration-300 group-hover/col:text-gold sm:text-[38px] sm:tracking-[-1.4px]">
          {title}
        </h3>
        <p className="mt-4 max-w-[290px] text-[15px] leading-[22px] text-white/55">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function OurServices() {
  const trackRef = useRef<HTMLDivElement>(null);
  /** auto-drift is suspended while > now (hover/press/manual scroll) */
  const pausedUntil = useRef(0);
  const hovering = useRef(false);
  /** 1 = drifting right, -1 = drifting left (ping-pong at the ends) */
  const dir = useRef(1);
  /** set while the rAF loop itself writes scrollLeft, so its own scroll
   *  events aren't mistaken for manual interaction */
  const selfScrolling = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      const max = el.scrollWidth - el.clientWidth;
      if (max > 0 && !hovering.current && now >= pausedUntil.current) {
        let next = el.scrollLeft + dir.current * DRIFT_SPEED * dt;
        if (next >= max) {
          next = max;
          dir.current = -1;
        } else if (next <= 0) {
          next = 0;
          dir.current = 1;
        }
        selfScrolling.current = true;
        el.scrollLeft = next;
        // release the flag after this frame's scroll event has fired
        requestAnimationFrame(() => (selfScrolling.current = false));
      }
      raf = requestAnimationFrame(tick);
    };

    const pause = () => {
      pausedUntil.current = performance.now() + RESUME_DELAY;
    };
    const onScroll = () => {
      if (!selfScrolling.current) pause();
    };
    const onEnter = () => (hovering.current = true);
    const onLeave = () => {
      hovering.current = false;
      last = performance.now();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", pause);
    el.addEventListener("touchstart", pause, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("touchstart", pause);
    };
  }, []);

  const nudge = (direction: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    pausedUntil.current = performance.now() + RESUME_DELAY;
    const col = el.querySelector<HTMLElement>(":scope > div");
    const step = col ? col.offsetWidth : 340;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-navy py-20 text-white lg:py-24">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #e8c700, transparent)" }}
      />

      {/* Header */}
      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
            <span className="flex size-6 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-navy">
              2
            </span>
            <span className="text-[15px] font-medium tracking-[-0.14px] text-white/90">
              Our Services
            </span>
          </span>
        </div>

        <h2 className="mx-auto mt-7 max-w-[900px] text-center font-medium leading-[1.14] tracking-[-1px] text-[30px] sm:text-[42px] sm:tracking-[-1.6px] lg:text-[54px] lg:leading-[1.12] lg:tracking-[-2px]">
          With an in-house team of designers, developers and animators, we build
          applications that <span className="font-bold text-gold">STAND OUT</span>{" "}
          from the crowd!
        </h2>
      </div>

      {/* Scroller */}
      <div className="relative mt-14 w-full lg:mt-16">
        {/* Arrow — left end */}
        <button
          type="button"
          aria-label="Scroll services left"
          onClick={() => nudge(-1)}
          className="absolute left-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy active:scale-95 sm:left-5 sm:size-12"
        >
          <Chevron dir="left" className="size-5" />
        </button>

        {/* Arrow — right end */}
        <button
          type="button"
          aria-label="Scroll services right"
          onClick={() => nudge(1)}
          className="absolute right-3 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-navy/80 text-white backdrop-blur-sm transition hover:bg-white hover:text-navy active:scale-95 sm:right-5 sm:size-12"
        >
          <Chevron dir="right" className="size-5" />
        </button>

        {/* Manually scrollable + auto-drifting track (gold scrollbar) */}
        <div
          ref={trackRef}
          className="services-scroll flex h-[380px] w-full overflow-x-auto border-y border-white/10 pb-2 sm:h-[440px]"
        >
          {SERVICES.map((s, i) => (
            <ServiceColumn key={s.title} index={i} title={s.title} desc={s.desc} />
          ))}
        </div>

        {/* edge fades so columns dissolve into the band at both sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy to-transparent sm:w-20" />
      </div>
    </section>
  );
}
