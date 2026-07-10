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

type Testimonial = {
  /** Full quote, verbatim, split into normal / bold ("Strong") runs. */
  quote: QuotePart[];
  name: string;
  role: string;
  avatar: string;
};

// Six cards, in Figma grid order (row-major, left-to-right).
const testimonials: Testimonial[] = [
  {
    quote: [
      { text: "The new UI design " },
      { text: "cut our customer support tickets in half.", strong: true },
      { text: " It's been a game-changer for us." },
    ],
    name: "Martina Martinez",
    role: "Customer Manager at SupportEase",
    avatar: "/figma/testimonial-avatar-1.png",
  },
  {
    quote: [
      { text: "Working with Joseph felt like having a seasoned design partner " },
      { text: "who truly understood our vision for Zazzle", strong: true },
      { text: " and brought it to life in ways we hadn't even imagined." },
    ],
    name: "Thomas Weber",
    role: "Co-founder of KYMA",
    avatar: "/figma/testimonial-avatar-2.png",
  },
  {
    quote: [
      { text: "Our website " },
      { text: "conversion rate improved significantly", strong: true },
      { text: " thanks to Joseph's expertise." },
    ],
    name: "Ben Harper",
    role: "CTO of Nexus",
    avatar: "/figma/testimonial-avatar-3.png",
  },
  {
    quote: [
      {
        text: "Joseph's design approach brought clarity to our complex data visualizations. Our users are thrilled!",
      },
    ],
    name: "Michael Wong",
    role: "Data Scientist at DataSphere",
    avatar: "/figma/testimonial-avatar-4.png",
  },
  {
    quote: [
      { text: "The rebranding exceeded our expectations. " },
      { text: "It's given us a competitive edge in our industry.", strong: true },
    ],
    name: "Natalie Rivera",
    role: "Brand Manager at UnityBrands",
    avatar: "/figma/testimonial-avatar-5.png",
  },
  {
    quote: [
      { text: "The redesign transformed our brand image. " },
      { text: "We've seen a 30% increase in engagement", strong: true },
      { text: " since launch." },
    ],
    name: "Emma Kraft",
    role: "CMO of TechVista",
    avatar: "/figma/testimonial-avatar-6.png",
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

function TestimonialCard({ quote, name, role, avatar }: Testimonial) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[#dedede] bg-white p-6 shadow-[0px_0.597px_0.597px_-0.938px_rgba(0,0,0,0.07),0px_1.811px_1.811px_-1.875px_rgba(0,0,0,0.07),0px_4.787px_4.787px_-2.813px_rgba(0,0,0,0.06),0px_15px_15px_-3.75px_rgba(0,0,0,0.03)] lg:h-[280px]">
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

      {/* Author */}
      <div className="mt-6 flex items-center gap-2.5">
        <span className="relative block size-[38px] shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="38px"
            className="object-cover"
          />
        </span>
        <div className="flex min-w-0 flex-col gap-[5px]">
          <p className="text-[13.5px] font-semibold leading-[15.68px] tracking-[-0.14px] text-black">
            {name}
          </p>
          <p className="text-[11.4px] font-semibold leading-[13.44px] tracking-[-0.12px] text-muted">
            {role}
          </p>
        </div>
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
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
