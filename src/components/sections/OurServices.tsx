/**
 * OurServices — "Our Services" band for the homepage.
 *
 * Layout adapted from a reference (Schbang) but recolored into the
 * eclectic-digital brand palette: a navy (#2a315f) band with a badge + headline,
 * then a full-width horizontal MARQUEE of service columns that auto-scrolls
 * (CSS `.services-marquee`, see globals.css). It is decorative — not clickable,
 * no buttons, no arrow nav — and pauses on hover / for reduced-motion users.
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

      {/* Full-width auto-scrolling marquee of service columns */}
      <div className="relative mt-14 w-full overflow-hidden lg:mt-16">
        <div className="services-marquee flex h-[360px] w-max border-y border-white/10 sm:h-[420px]">
          {[...SERVICES, ...SERVICES].map((s, i) => (
            <ServiceColumn
              key={i}
              index={i % SERVICES.length}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>

        {/* edge fades so columns dissolve into the band at both sides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-navy to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-navy to-transparent sm:w-24" />
      </div>
    </section>
  );
}
