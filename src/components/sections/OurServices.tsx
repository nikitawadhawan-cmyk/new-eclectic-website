/**
 * OurServices — "Our Services" band for the homepage.
 *
 * Design + copy adapted from a reference (MetaMinds "Our Services") but
 * recolored into the eclectic-digital brand palette: a navy (#2a315f) dark
 * band (same family as the Footer) with white text and gold (#e8c700) accents,
 * instead of the reference's purple/black.
 *
 * Layout: a numbered "Our Services" pill badge + a centered headline, then a
 * card grid — one tall card on the left (Full Stack, with a browser/search
 * mockup) and two stacked cards on the right (E-Commerce with a "Visit Us"
 * button, Webflow with a tool-integration node graph). Fully responsive.
 */

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="m17 17-3.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ── Card 1 decoration: a stylised browser / search UI mockup ─────────── */
function BrowserMockup() {
  return (
    <div className="pointer-events-none absolute inset-x-6 -bottom-4 lg:inset-x-10">
      <div className="rounded-t-[20px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_-20px_60px_-30px_rgba(0,0,0,0.6)] backdrop-blur-sm lg:p-6">
        <span className="block h-2.5 w-16 rounded-full bg-white/20" />
        <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5">
          <SearchIcon className="size-5 shrink-0 text-white/40" />
          <span className="block h-2 w-1/2 rounded-full bg-white/15" />
        </div>
        <div className="mt-6 space-y-3.5">
          <span className="block h-2 w-3/4 rounded-full bg-white/12" />
          <span className="block h-2 w-2/3 rounded-full bg-white/[0.08]" />
          <span className="block h-2 w-11/12 rounded-full bg-white/[0.08]" />
          <span className="block h-2 w-1/2 rounded-full bg-white/[0.08]" />
        </div>
      </div>
    </div>
  );
}

/* ── Card 3 decoration: tool-integration node graph ───────────────────── */
type Node = { label: string; x: number; y: number };
const NODES: Node[] = [
  { label: "After Effects", x: 20, y: 20 },
  { label: "LottieFiles", x: 82, y: 28 },
  { label: "Three.js", x: 13, y: 60 },
  { label: "Spline", x: 85, y: 70 },
  { label: "Blender", x: 34, y: 88 },
];

function NodeGraph() {
  return (
    <div className="relative mt-8 h-[210px] w-full lg:h-[230px]">
      {/* connector lines (viewBox = % of the box so they track the chips) */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      >
        {NODES.map((n) => (
          <line
            key={n.label}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="#e8c700"
            strokeOpacity="0.35"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* centre node — the eclectic mark */}
      <div className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-gold/40 bg-navy-deep shadow-[0_0_0_6px_rgba(232,199,0,0.08)]">
        <span className="text-[20px] font-extrabold text-gold">#</span>
      </div>

      {/* tool chips */}
      {NODES.map((n) => (
        <span
          key={n.label}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/75 backdrop-blur-sm lg:text-[12px]"
        >
          <span className="size-1.5 rounded-full bg-gold" />
          {n.label}
        </span>
      ))}
    </div>
  );
}

export default function OurServices() {
  return (
    <section className="relative w-full overflow-hidden bg-navy py-20 text-white lg:py-28">
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #e8c700, transparent)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Badge */}
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

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-[900px] text-center font-medium leading-[1.14] tracking-[-1px] text-[30px] sm:text-[42px] sm:tracking-[-1.6px] lg:text-[54px] lg:leading-[1.12] lg:tracking-[-2px]">
          With an in-house team of designers, developers and animators, we build
          applications that <span className="font-bold text-gold">STAND OUT</span>{" "}
          from the crowd!
        </h2>

        {/* Card grid: tall left card + two stacked right cards */}
        <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          {/* Full Stack — tall left card */}
          <article className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#20264c] p-8 lg:row-span-2 lg:p-10">
            <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.5px] lg:text-[30px]">
              Full Stack Website Development
            </h3>
            <p className="mt-4 max-w-[420px] text-[16px] leading-[24px] text-white/60">
              Every business is unique. Our developers create fully customized
              websites tailored to your brand identity, industry, and target
              audience.
            </p>
            <div className="relative mt-8 flex-1">
              <BrowserMockup />
            </div>
          </article>

          {/* E-Commerce — top right card */}
          <article className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#20264c] p-8 lg:p-10">
            <h3 className="max-w-[320px] text-[24px] font-medium leading-[1.2] tracking-[-0.5px] lg:text-[30px]">
              E-Commerce Website Development
            </h3>
            <p className="mt-4 max-w-[360px] text-[16px] leading-[24px] text-white/60">
              We build high-converting Shopify stores based on consumer
              psychology and Neuromarketing.
            </p>
          </article>

          {/* Webflow — bottom right card */}
          <article className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#20264c] p-8 lg:p-10">
            <h3 className="max-w-[280px] text-[24px] font-medium leading-[1.2] tracking-[-0.5px] lg:text-[30px]">
              Webflow Website Development
            </h3>
            <p className="mt-4 max-w-[340px] text-[16px] leading-[24px] text-white/60">
              Our team specializes in no-code, high-impact interactive websites.
            </p>
            <NodeGraph />
          </article>
        </div>
      </div>
    </section>
  );
}
