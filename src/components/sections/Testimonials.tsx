import Image from "@/components/Img";
import { logos as clientLogos } from "./ClientLogos";

/* -------------------------------------------------------------------------- */
/*  Client-logos strip (Figma node 4:7787)                                    */
/*  Figma spec'd this as an animated marquee ticker (it had shipped as a       */
/*  static row of placeholder wordmarks — flagged in the report). Now an      */
/*  infinite scroller using all of the real client logos.                    */
/* -------------------------------------------------------------------------- */

function ClientLogosStrip() {
  // Track renders the logo list twice back-to-back so the -50% marquee loop
  // is seamless — see the `marquee` keyframes in globals.css.
  const track = [...clientLogos, ...clientLogos];

  return (
    <div className="w-full border-b-[0.8px] border-[#dedede]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-6 px-6 py-8 lg:flex-row lg:gap-10 lg:px-10">
        <p className="shrink-0 text-[21px] leading-[30.8px] tracking-[-0.66px] text-muted">
          <span className="font-medium">Trusted by </span>
          <span className="font-semibold text-black">many</span>
        </p>
        <div
          className="w-full overflow-hidden lg:flex-1"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="marquee-track flex w-max items-center gap-16 opacity-70"
            style={{ animation: "marquee 24s linear infinite" }}
          >
            {track.map((logo, i) => (
              <Image
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-auto shrink-0 object-contain"
                style={{ height: logo.displayHeight }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials (Figma node 4:7849)                                          */
/* -------------------------------------------------------------------------- */

type QuotePart = { text: string; strong?: boolean };

type BrandLogo = {
  src: string;
  /** Intrinsic pixel dimensions of the source asset (for next/image ratio). */
  width: number;
  height: number;
  /** Rendered height in px; tuned per logo so wordmarks and square marks sit
   *  at a similar visual weight. */
  displayHeight: number;
};

type Testimonial = {
  /** Full quote, verbatim, split into normal / bold ("Strong") runs. */
  quote: QuotePart[];
  name: string;
  role: string;
  logo: BrandLogo;
};

// One card per client on the homepage "Our Work" section, same order as its
// PROJECTS list. Names are Indian placeholder names and every quote is
// drafted placeholder copy — swap in real testimonials once clients send them.
const testimonials: Testimonial[] = [
  {
    quote: [
      { text: "Our website went from a static brochure to " },
      { text: "a genuine lead-generation platform.", strong: true },
      { text: " The team understood B2B logistics better than agencies twice their size." },
    ],
    name: "Nandini Iyer",
    role: "Marketing Head at BVC Logistics",
    logo: { src: "/figma/clientlogo-bvc.png", width: 600, height: 261, displayHeight: 26 },
  },
  {
    quote: [
      { text: "Selling gold online is all about trust, and " },
      { text: "the store makes our buyback promise impossible to miss.", strong: true },
      { text: " Customers tell us the site feels as premium as the jewellery." },
    ],
    name: "Ritika Malhotra",
    role: "Founder of Ritvaa",
    logo: { src: "/figma/clientlogo-ritvaa.png", width: 427, height: 205, displayHeight: 30 },
  },
  {
    quote: [
      { text: "The Dosha quiz was a masterstroke — " },
      { text: "first-time buyers now know exactly what to order.", strong: true },
      { text: " Our store finally educates the way Ayurveda deserves." },
    ],
    name: "Arjun Mehta",
    role: "Co-founder of Peak Mode On",
    logo: { src: "/figma/clientlogo-peakmode.png", width: 168, height: 168, displayHeight: 34 },
  },
  {
    quote: [
      { text: "They built a site that actually sells tours. " },
      { text: "App downloads and bookings climbed within weeks", strong: true },
      { text: " of the new site going live." },
    ],
    name: "Rohan Khanna",
    role: "Founder of Trippy Tour Guide",
    logo: { src: "/figma/clientlogo-rippytour.png", width: 250, height: 150, displayHeight: 34 },
  },
  {
    quote: [
      { text: "Admissions consulting lives or dies on credibility, and " },
      { text: "the new website earns trust before we ever get on a call.", strong: true },
      { text: " Free profile evaluations have never converted better." },
    ],
    name: "Ananya Deshpande",
    role: "Founder of Ivylistic",
    logo: { src: "/figma/clientlogo-ivylistic.svg", width: 146, height: 31, displayHeight: 22 },
  },
  {
    quote: [
      { text: "Real estate, advisory and investments under one roof is hard to explain — " },
      { text: "they made it feel like one confident brand.", strong: true },
    ],
    name: "Vikram Rathore",
    role: "Co-founder of Nilambar",
    logo: { src: "/figma/clientlogo-nilambar.png", width: 432, height: 114, displayHeight: 26 },
  },
  {
    quote: [
      { text: "A single landing page that " },
      { text: "outperformed every previous campaign we had run.", strong: true },
      { text: " Sharp, focused, and built purely to convert." },
    ],
    name: "Aditya Menon",
    role: "Co-founder of HDFC Life",
    logo: { src: "/figma/clientlogo-hdfclife.png", width: 100, height: 34, displayHeight: 26 },
  },
  {
    quote: [
      { text: "They captured the warmth of our brand perfectly. " },
      { text: "Browsers turn into repeat customers", strong: true },
      { text: " because the whole journey feels considered." },
    ],
    name: "Priya Kapoor",
    role: "Founder of Amorada",
    logo: { src: "/figma/clientlogo-ammorada.png", width: 280, height: 70, displayHeight: 24 },
  },
  {
    quote: [
      { text: "Putting 500+ jewellery SKUs online sounded impossible. " },
      { text: "The smart filtering makes our entire catalogue effortless to shop.", strong: true },
    ],
    name: "Kabir Oberoi",
    role: "Co-founder of CREAL",
    logo: { src: "/figma/clientlogo-creal.png", width: 400, height: 158, displayHeight: 28 },
  },
  {
    quote: [
      { text: "Not a template in sight — " },
      { text: "a fully hand-built store that matches our design pixel for pixel.", strong: true },
      { text: " Worth every rupee." },
    ],
    name: "Meera Nair",
    role: "Founder of Lulu & Daisy",
    logo: { src: "/figma/clientlogo-lulu.png", width: 400, height: 283, displayHeight: 38 },
  },
];

function QuoteMark() {
  // Gold double-quote glyph (Figma node svg10239062323, fill #E8C700).
  return (
    <svg
      viewBox="0 0 25 21"
      className="h-[21px] w-[25px] shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6.753 10V4.188L8.577 0H11.181L10.27 4.188H12V10H6.753ZM0 10V4.188L1.823 0H4.446L3.516 4.188H5.247V10H0Z"
        fill="#E8C700"
      />
    </svg>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  logo,
  className = "",
}: Testimonial & { className?: string }) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-[#dedede] bg-white p-6 shadow-[0px_0.597px_0.597px_-0.938px_rgba(0,0,0,0.07),0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] ${className}`}
    >
      {/* Quote */}
      <div className="flex flex-col gap-1">
        <QuoteMark />
        <p className="text-[14px] leading-[22.4px] tracking-[-0.14px] text-black">
          {quote.map((part, i) =>
            part.strong ? (
              <span key={i} className="font-semibold">
                {part.text}
              </span>
            ) : (
              <span key={i} className="font-medium">
                {part.text}
              </span>
            ),
          )}
        </p>
      </div>

      {/* Author — name/role on the left, the client's brand logo on the right */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-[5px]">
          <p className="text-[13.5px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
            {name}
          </p>
          <p className="text-[11.4px] font-semibold leading-[13.44px] tracking-[-0.12px] text-muted">
            {role}
          </p>
        </div>
        <Image
          src={logo.src}
          alt={`${role.split(/ (at|of) /).pop()} logo`}
          width={logo.width}
          height={logo.height}
          className="w-auto max-w-[120px] shrink-0 object-contain opacity-80"
          style={{ height: logo.displayHeight }}
        />
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="w-full">
      {/* Client-logos strip (node 4:7787) */}
      <ClientLogosStrip />

      {/* Testimonials (node 4:7849) */}
      <div className="mx-auto w-full max-w-[1200px] px-6 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto flex max-w-[1080px] flex-col items-center gap-12 lg:gap-16">
          {/* Heading */}
          <h2 className="w-full text-[40px] font-medium leading-[42px] tracking-[-1.2px] sm:text-[52px] sm:leading-[54px] sm:tracking-[-1.6px] lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.92px]">
            <span className="text-muted-2">Hear from what my </span>
            <span className="text-black">clients have to say.</span>
          </h2>

          {/* Card grid → 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                {...t}
                // 10 cards on a 3-col desktop grid leaves one orphan on the
                // last row — center it instead of leaving it bottom-left.
                className={
                  i === testimonials.length - 1 && testimonials.length % 3 === 1
                    ? "lg:col-start-2"
                    : ""
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
