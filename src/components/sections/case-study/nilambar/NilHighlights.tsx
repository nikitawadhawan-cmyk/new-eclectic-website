/**
 * NilHighlights — "SERVICES PROVIDED / What drove this project" bento grid
 * (cloned from RitvaaHighlights: redesigned from a supplied dark bento
 * reference, kept on the site's WHITE background per client direction).
 *
 * Layout: outlined "SERVICES PROVIDED" pill, centered heading, then a bento
 * grid — two wide cards (01, 02) on the first row, three cards (03–05) below.
 * Each card: title + short description (numbers removed at client request).
 *
 * Hover animation (CSS-only): the card POPS UP (lifts + slight scale, navy
 * shadow) and turns the brand navy — text flips to white — with smooth 300ms
 * transitions. Copy is verbatim from the Nilambar spec.
 */

type Card = { title: string; desc: string };

const CARDS: Card[] = [
  {
    title: "Website Design",
    desc: "A confident corporate identity that unifies every venture.",
  },
  {
    title: "Website Development",
    desc: "A fast, responsive build with scalable, section-based pages.",
  },
  {
    title: "Information Architecture",
    desc: "A clear structure that untangles a broad, multi-service firm.",
  },
  {
    title: "Brand Strategy",
    desc: "Positioning Nilambar as one trustworthy partner, not many.",
  },
  {
    title: "Lead Capture",
    desc: "A service-aware inquiry form that routes and qualifies leads.",
  },
];

function BentoCard({ card, wide }: { card: Card; wide?: boolean }) {
  return (
    <article
      className={`group flex flex-col justify-end rounded-[16px] border border-[#e6e6e6] bg-white p-[30px] pt-20 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:border-navy hover:bg-navy hover:shadow-[0_28px_56px_-18px_rgba(42,49,95,0.5)] lg:pt-24 ${
        wide ? "lg:col-span-3" : "lg:col-span-2"
      }`}
    >
      <h3 className="text-[24px] font-semibold leading-[1.2] tracking-[-0.4px] text-ink transition-colors duration-300 group-hover:text-white lg:text-[28px]">
        {card.title}
      </h3>
      <p className="mt-3 max-w-[46ch] text-[15.5px] leading-[1.6] text-muted transition-colors duration-300 group-hover:text-white/75">
        {card.desc}
      </p>
    </article>
  );
}

export default function NilHighlights() {
  return (
    <section className="w-full bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center rounded-full border border-[#dedede] px-[22px] py-2.5 text-[13px] font-semibold uppercase tracking-[3px] text-navy">
            Services Provided
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-[36px] font-semibold leading-[1.1] tracking-[-1px] text-ink lg:text-[54px] lg:tracking-[-1.6px]">
          What drove this project
        </h2>

        {/* Bento grid: 2 wide cards, then 3 */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6">
          {CARDS.map((c, i) => (
            <BentoCard key={c.title} card={c} wide={i < 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
