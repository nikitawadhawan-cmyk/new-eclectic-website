import Image from "@/components/Img";
import Link from "next/link";

/**
 * OurWork — "Our work" showcase band for the homepage, after WorkProcess.
 *
 * Design adapted from a reference (Schbang "Our work"): a numbered badge, a
 * big centered two-line heading ("Crafted with purpose, driven by results —
 * this is our work."), then stacked project blocks — a large rounded
 * screenshot card (with a "Learn More" pill overlaid bottom-right when a case
 * study exists), and below it the project title + tag chips on the left and a
 * short description on the right. Recolored into the brand navy/gold palette.
 *
 * Projects = the four "Latest Projects" from the hero (same public/figma
 * screenshots); only BVC Logistics has a case-study page to link to.
 */

type Project = {
  title: string;
  lowercase?: boolean;
  tags: string[];
  desc: string;
  screen: string;
  alt: string;
  /** case-study route (internal) — renders the Learn More pill when set */
  href?: string;
  /** 7 images -> tilted 2/3/2 collage card (Figma node 182:824) instead of a flat screenshot */
  collage?: string[];
};

const BVC_COLLAGE = [1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/figma/ourwork-bvc-${n}.jpg`,
);

const PROJECTS: Project[] = [
  {
    title: "BVC Logistics",
    tags: ["Website Strategy", "Corporate Website"],
    desc: "We designed the complete digital experience for BVC Logistics — planning the website structure, content hierarchy, user journey, and premium visual storytelling to turn a traditional corporate site into a lead-generation platform.",
    screen: "/figma/lp-screen-1.jpg",
    alt: "Collage of BVC Logistics work — BVC Universe app, website and campaign pages",
    href: "/projects/bvc-logistics",
    collage: BVC_COLLAGE,
  },
  {
    title: "Trippy Tour",
    tags: ["Travel Booking Site", "Web Design"],
    desc: "An immersive travel-booking experience with rich destination storytelling and a friction-free search-to-checkout flow that keeps explorers moving toward 'book now'.",
    screen: "/figma/lp-screen-2.jpg",
    alt: "Trippy Tour website — Explore the World at Your Own Pace",
  },
  {
    title: "IVVYLISTIC",
    tags: ["Education Platform", "UX/UI Design"],
    desc: "A focused education platform guiding ambitious applicants into the world's top MBA programs — clear information architecture, trust-building content, and conversion-ready enquiry flows.",
    screen: "/figma/lp-screen-3.jpg",
    alt: "IVVYLISTIC website — Get into the world's top MBA program",
  },
  {
    title: "amorada",
    lowercase: true,
    tags: ["Ecommerce Site", "Brand Experience"],
    desc: "A warm, craft-led ecommerce experience where comfort meets craft — editorial product storytelling and a clean shopping journey designed to convert browsers into loyal customers.",
    screen: "/figma/lp-screen-4.jpg",
    alt: "Amorada website — Where Comfort Meets Craft",
  },
];

/**
 * Tilted 2/3/2 collage card (Figma 182:824): three rows of 16:9 tiles rotated
 * -11.7deg, staggered horizontally, clipped by the rounded card. Sizes are
 * percentages of the card so the collage scales with it.
 */
function TiltedCollage({ images, alt }: { images: string[]; alt: string }) {
  const rows: { imgs: string[]; ml: string }[] = [
    { imgs: images.slice(0, 2), ml: "2%" },
    { imgs: images.slice(2, 5), ml: "-26%" },
    { imgs: images.slice(5, 7), ml: "20%" },
  ];
  return (
    <div className="absolute inset-0 bg-[#d9d9d9]" role="img" aria-label={alt}>
      <div className="absolute left-1/2 top-1/2 w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[-11.7deg]">
        <div className="flex flex-col gap-[10px]">
          {rows.map((row, r) => (
            <div key={r} className="flex gap-[10px]" style={{ marginLeft: row.ml }}>
              {row.imgs.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[504/284] w-[39.4%] shrink-0 overflow-hidden rounded-[5px]"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(min-width: 1200px) 520px, 45vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-7">
      {/* Screenshot / collage card */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] sm:aspect-[1334/510]">
        {project.collage ? (
          <TiltedCollage images={project.collage} alt={project.alt} />
        ) : (
          <Image
            src={project.screen}
            alt={project.alt}
            fill
            sizes="(min-width: 1200px) 1120px, 100vw"
            className="object-cover object-top"
          />
        )}
        {project.href && (
          <Link
            href={project.href}
            className="absolute bottom-5 right-5 inline-flex h-12 items-center rounded-full bg-navy-deep/90 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition hover:bg-gold hover:text-navy active:scale-95 sm:bottom-7 sm:right-7"
          >
            Learn More
          </Link>
        )}
      </div>

      {/* Title + tags | description */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <div>
          <h3
            className={`text-[34px] font-medium leading-[1.05] tracking-[-1.2px] text-white sm:text-[44px] sm:tracking-[-1.6px] ${
              project.lowercase ? "lowercase" : ""
            }`}
          >
            {project.title}
          </h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-10 items-center rounded-full border border-white/25 px-5 text-[14px] font-medium text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="max-w-[480px] text-[16px] leading-[25px] text-white/65 lg:pt-2 lg:text-right">
          {project.desc}
        </p>
      </div>
    </article>
  );
}

export default function OurWork() {
  return (
    <section
      id="work"
      className="relative w-full scroll-mt-20 overflow-hidden bg-navy py-20 text-white lg:py-24"
    >
      {/* soft brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-full -translate-x-1/2 rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "radial-gradient(closest-side, #e8c700, transparent)" }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] py-1.5 pl-1.5 pr-4 backdrop-blur-sm">
            <span className="flex size-6 items-center justify-center rounded-full bg-gold text-[13px] font-bold text-navy">
              5
            </span>
            <span className="text-[15px] font-medium tracking-[-0.14px] text-white/90">
              Our work
            </span>
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-7 max-w-[760px] text-center font-medium leading-[1.16] tracking-[-1px] text-[30px] sm:text-[42px] sm:tracking-[-1.6px] lg:text-[52px] lg:leading-[1.14] lg:tracking-[-2px]">
          Crafted with purpose, driven by results — this is our work.
        </h2>

        {/* Project blocks */}
        <div className="mt-14 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {PROJECTS.map((p) => (
            <ProjectBlock key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
