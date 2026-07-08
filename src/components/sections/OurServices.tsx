/**
 * OurServices — "Our Services" band for the homepage.
 *
 * Design 1a ("Progress bar") from the supplied standalone HTML, recolored
 * from its dark/purple palette into the site's white + navy brand:
 *   - white background (site bg), ink/muted text
 *   - a numbered "Our services" pill badge + left-aligned heading
 *   - services laid out in two rows (4 + 3 columns): title row, then a
 *     PROGRESS LINE (the brand navy, with a soft navy glow) that fills up to
 *     the "active" service, with dashed column dividers, then descriptions.
 *   - services up to the active one are full-strength; later ones are dimmed.
 *
 * Desktop (lg+) renders the faithful progress-bar layout; below lg it
 * degrades to a stacked list where the progress reads as a navy left rule.
 * Static + decorative (no buttons/links), like the reference.
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

/** index of the highlighted service (per the reference design) */
const ACTIVE = 2;
/** row split per the reference: 4 columns, then 3 */
const ROW_COUNTS = [4, 3];

/* dimmed tones on the white bg (reference dims later items) */
const TITLE_ON = "text-ink";
const TITLE_OFF = "text-[#b6b6b6]";
const DESC_ON = "text-muted";
const DESC_OFF = "text-[#c6c6c6]";

function ProgressRow({ start, count }: { start: number; count: number }) {
  const items = SERVICES.slice(start, start + count);
  const rowActive = ACTIVE >= start && ACTIVE < start + count;
  const fillFrac =
    ACTIVE >= start + count ? 1 : rowActive ? (ACTIVE - start + 0.92) / count : 0;

  return (
    <div className="relative">
      {/* Titles */}
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {items.map((s, i) => (
          <div key={s.title} className="pr-11">
            <h3
              className={`mb-9 text-[22px] font-semibold leading-[1.15] tracking-[0.3px] ${
                start + i <= ACTIVE ? TITLE_ON : TITLE_OFF
              }`}
            >
              {s.title}
            </h3>
          </div>
        ))}
      </div>

      {/* The line — brand navy progress fill on a hairline track */}
      <div className="relative mr-11 h-[30px]">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#e6e6e6]" />
        {fillFrac > 0 && (
          <div
            className="absolute bottom-0 left-0 top-0 rounded-full bg-gradient-to-r from-navy-deep to-navy shadow-[0_0_46px_rgba(42,49,95,0.45),0_0_110px_rgba(42,49,95,0.22)]"
            style={{ width: `${(fillFrac * 100).toFixed(2)}%` }}
          />
        )}
        {Array.from({ length: count - 1 }, (_, i) => (
          <div
            key={i}
            className="absolute -top-[22px] bottom-0 w-0 border-l-2 border-dashed border-navy/40"
            style={{ left: `${(((i + 1) / count) * 100).toFixed(3)}%` }}
          />
        ))}
      </div>

      {/* Descriptions */}
      <div
        className="mt-7 grid"
        style={{ gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))` }}
      >
        {items.map((s, i) => (
          <div key={s.title} className="pr-11">
            <p
              className={`text-[15px] leading-[1.45] tracking-[-0.2px] ${
                start + i <= ACTIVE ? DESC_ON : DESC_OFF
              }`}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurServices() {
  let offset = 0;
  const rows = ROW_COUNTS.map((count) => {
    const start = offset;
    offset += count;
    return { start, count };
  });

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Badge + heading (left-aligned, per design 1a) */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-[11px] rounded-full border border-[#dedede] py-[5px] pl-1.5 pr-4">
            <span className="flex size-6 items-center justify-center rounded-full bg-navy text-[12px] font-medium text-white">
              2
            </span>
            <span className="text-[14px] text-ink">Our services</span>
          </span>
          <h2 className="max-w-[16ch] text-[34px] font-medium leading-[1.16] tracking-[-0.5px] text-ink sm:text-[40px] lg:text-[46px]">
            From Design to Development, Our Services
          </h2>
        </div>

        {/* Desktop: two progress-bar rows */}
        <div className="mt-14 hidden flex-col gap-[72px] lg:flex lg:mt-[72px]">
          {rows.map((row) => (
            <ProgressRow key={row.start} start={row.start} count={row.count} />
          ))}
        </div>

        {/* Mobile/tablet: stacked list; the progress reads as a navy left rule */}
        <ul className="mt-12 flex flex-col lg:hidden">
          {SERVICES.map((s, i) => {
            const on = i <= ACTIVE;
            return (
              <li
                key={s.title}
                className={`border-l-2 py-6 pl-5 ${
                  on ? "border-navy" : "border-dashed border-[#d9d9d9]"
                }`}
              >
                <h3
                  className={`text-[20px] font-semibold leading-[1.2] tracking-[0.3px] ${
                    on ? TITLE_ON : TITLE_OFF
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2.5 text-[14px] leading-[1.5] ${
                    on ? DESC_ON : DESC_OFF
                  }`}
                >
                  {s.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
