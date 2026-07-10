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
 * Projects = all case-study clients; each has a tilted-collage or flat
 * screenshot card with a "Learn More" pill linking to its case study.
 */

/** A collage tile source — a plain path (center-crop) or a path + object-position override (for portrait photos where a center crop would cut off the subject). */
type CollageImage = string | { src: string; pos: "top" | "center" };

type Project = {
  title: string;
  lowercase?: boolean;
  tags: string[];
  desc: string;
  screen: string;
  alt: string;
  /** case-study route (internal) — renders the Learn More pill when set */
  href?: string;
  /** 6-7 images -> tilted collage card (Figma node 182:824) instead of a flat screenshot */
  collage?: CollageImage[];
};

const BVC_COLLAGE = [1, 2, 3, 4, 5, 6, 7].map(
  (n) => `/figma/ourwork-bvc-${n}.jpg`,
);

const TTG_COLLAGE = [
  "/figma/ttg-bundle-1.jpg",
  "/figma/ttg-city.jpg",
  "/figma/ttg-bundle-2.jpg",
  "/figma/ttg-app-1.jpg",
  "/figma/ttg-bundle-3.jpg",
  "/figma/ttg-bundle-4.jpg",
];

const RITVAA_COLLAGE = [
  "/figma/rit-banner-1.jpg",
  "/figma/rit-mood.jpg",
  "/figma/rit-banner-2.jpg",
  "/figma/rit-prod-1.jpg",
  "/figma/rit-prod-2.jpg",
];

const PMO_COLLAGE = [
  "/figma/pmo-banner.jpg",
  "/figma/pmo-hero-1.jpg",
  "/figma/pmo-mood.jpg",
  "/figma/pmo-hero-2.jpg",
  "/figma/pmo-edu.jpg",
  "/figma/pmo-hero-3.jpg",
];

/** ivy-booth.jpg / ivy-oxford.jpg are private WhatsApp screenshots, not campus photos — excluded on purpose, see chat with client. */
const IVY_COLLAGE = [
  "/figma/ivy-team.jpg",
  "/figma/ivy-1.jpg",
  "/figma/ivy-og.jpg",
  "/figma/ivy-2.jpg",
  "/figma/ivy-3.jpg",
];

const HDFC_COLLAGE = [
  "/figma/hdfc-banner-1.jpg",
  "/figma/hdfc-banner-3.jpg",
  "/figma/hdfc-og.jpg",
  "/figma/hdfc-banner-2.jpg",
  "/figma/hdfc-banner-4.jpg",
];

const AMORADA_COLLAGE = [
  "/figma/am-hero-3.jpg",
  "/figma/am-hero-1.jpg",
  "/figma/am-showcase.jpg",
  "/figma/am-project-bed.jpg",
  "/figma/am-hero-2.jpg",
  "/figma/am-proj1-main.jpg",
];

/**
 * Nilambar only has 3 site photos total (nil-hero, nil-founder, nil-person)
 * — each repeats once to fill a 6-tile collage. The two portraits use
 * pos: "top" so a center-crop doesn't cut the subject's head off.
 */
const NILAMBAR_COLLAGE: CollageImage[] = [
  "/figma/nil-hero.jpg",
  { src: "/figma/nil-founder.jpg", pos: "top" },
  "/figma/nil-hero.jpg",
  { src: "/figma/nil-person.jpg", pos: "top" },
  { src: "/figma/nil-founder.jpg", pos: "top" },
  { src: "/figma/nil-person.jpg", pos: "top" },
];

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
    title: "Ritvaa",
    tags: ["Shopify Development", "Luxury Jewellery"],
    desc: "An elegant Shopify platform for Ritvaa's SmartGold jewellery and mangalsutra collections — built around trust, tradition, and a lifetime buyback guarantee.",
    screen: "/figma/rit-banner-1.jpg",
    alt: "Collage of Ritvaa work — SmartGold jewellery campaign photography and product shots",
    href: "/projects/ritvaa",
    collage: RITVAA_COLLAGE,
  },
  {
    title: "Peak Mode On",
    tags: ["Shopify Development", "Ayurvedic Wellness"],
    desc: "A complete Ayurvedic wellness store built from the ground up on Shopify — with a custom Dosha quiz and educational content that guides first-time buyers.",
    screen: "/figma/pmo-banner.jpg",
    alt: "Collage of Peak Mode On work — Ayurvedic supplement packaging and product photography",
    href: "/projects/peak-mode-on",
    collage: PMO_COLLAGE,
  },
  {
    title: "Trippy Tour Guide",
    tags: ["Website Development", "Travel Tech"],
    desc: "A discovery-led website for GPS-activated, self-guided audio tours across 50+ destinations — built to drive tour sales and app downloads.",
    screen: "/figma/ttg-bundle-1.jpg",
    alt: "Collage of Trippy Tour Guide work — destination photography and the app's tour browser",
    href: "/projects/trippy-tour-guide",
    collage: TTG_COLLAGE,
  },
  {
    title: "Ivylistic",
    tags: ["Brand Website", "Higher-Ed Consulting"],
    desc: "A strategy-led brand website for an MBA, MiM and MS admissions consultancy — built to earn trust and convert free profile evaluations.",
    screen: "/figma/ivy-og.jpg",
    alt: "Collage of Ivylistic work — brand identity and the admissions consulting team",
    href: "/projects/ivylistic",
    collage: IVY_COLLAGE,
  },
  {
    title: "Nilambar",
    tags: ["Corporate Website", "Real Estate & Advisory"],
    desc: "A corporate website that unifies real-estate development, strategic advisory and startup investment under one confident, trustworthy brand.",
    screen: "/figma/nil-hero.jpg",
    alt: "Collage of Nilambar work — real-estate architecture and the advisory team",
    href: "/projects/nilambar",
    collage: NILAMBAR_COLLAGE,
  },
  {
    title: "HDFC Life",
    tags: ["Landing Page", "Performance Marketing"],
    desc: "A single-purpose, high-conversion landing page that turns awareness traffic into qualified insurance-agent leads.",
    screen: "/figma/hdfc-og.jpg",
    alt: "Collage of HDFC Life work — agent lead-generation campaign creatives",
    href: "/projects/hdfc-life",
    collage: HDFC_COLLAGE,
  },
  {
    title: "amorada",
    lowercase: true,
    tags: ["Ecommerce Site", "Brand Experience"],
    desc: "A warm, craft-led ecommerce experience where comfort meets craft — editorial product storytelling and a clean shopping journey designed to convert browsers into loyal customers.",
    screen: "/figma/lp-screen-4.jpg",
    alt: "Collage of amorada work — home-linen product photography and the storefront",
    href: "/projects/amorada",
    collage: AMORADA_COLLAGE,
  },
];

/**
 * Distribute a variable image count into 3 collage rows, giving any
 * remainder to the middle row first (then the first, then the last) so a
 * 7-image set lands 2/3/2 (Figma 182:824) and a 6-image set lands 2/2/2.
 */
function collageRows(images: CollageImage[]): CollageImage[][] {
  const base = Math.floor(images.length / 3);
  const sizes = [base, base, base];
  const remainderOrder = [1, 0, 2];
  for (let i = 0; i < images.length - base * 3; i++) sizes[remainderOrder[i]] += 1;
  const rows: CollageImage[][] = [];
  let cursor = 0;
  for (const size of sizes) {
    rows.push(images.slice(cursor, cursor + size));
    cursor += size;
  }
  return rows;
}

/** Horizontal offset per row, tuned separately for 3-wide vs 2-wide rows. */
function collageMargin(rowIndex: number, itemsInRow: number): string {
  const margins = itemsInRow >= 3 ? ["2%", "-26%", "20%"] : ["8%", "-18%", "16%"];
  return margins[rowIndex] ?? "0%";
}

/**
 * Tilted collage card (Figma 182:824): three rows of 16:9 tiles rotated
 * -11.7deg, staggered horizontally, clipped by the rounded card. Sizes are
 * percentages of the card so the collage scales with it. Works with 6 or 7
 * source images (row split adapts — see collageRows).
 */
function TiltedCollage({ images, alt }: { images: CollageImage[]; alt: string }) {
  const rows = collageRows(images).map((imgs, r) => ({
    imgs,
    ml: collageMargin(r, imgs.length),
  }));
  return (
    <div className="absolute inset-0 bg-[#d9d9d9]" role="img" aria-label={alt}>
      <div className="absolute left-1/2 top-1/2 w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[-11.7deg]">
        <div className="flex flex-col gap-[10px]">
          {rows.map((row, r) => (
            <div key={r} className="flex gap-[10px]" style={{ marginLeft: row.ml }}>
              {row.imgs.map((img, i) => {
                const src = typeof img === "string" ? img : img.src;
                const pos = typeof img === "string" ? "center" : img.pos;
                return (
                  <div
                    key={`${src}-${i}`}
                    className="relative aspect-[504/284] w-[39.4%] shrink-0 overflow-hidden rounded-[5px]"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 1200px) 520px, 45vw"
                      className="object-cover"
                      style={{ objectPosition: pos === "top" ? "50% 15%" : "50% 50%" }}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Renders a Link when `href` is set, otherwise a plain article — keeps the
 *  polymorphic wrapper's props valid for both cases (next/link's `href` is
 *  required, so it can't be spread conditionally onto a single element type). */
function CardWrapper({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return <article className={className}>{children}</article>;
}

function ProjectBlock({ project }: { project: Project }) {
  // The whole card — image, title, tags, description — is one clickable
  // link to the case study; "Learn More" is now a purely visual pill (not a
  // nested <a>, since it lives inside this outer link).
  return (
    <CardWrapper href={project.href} className="group flex flex-col gap-7">
      {/* Screenshot / collage card */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition-transform duration-300 group-hover:scale-[1.01] sm:aspect-[1334/510]">
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
          <span className="absolute bottom-5 right-5 inline-flex h-12 items-center rounded-full bg-navy-deep/90 px-7 text-[15px] font-semibold text-white backdrop-blur-sm transition group-hover:bg-gold group-hover:text-navy sm:bottom-7 sm:right-7">
            Learn More
          </span>
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
    </CardWrapper>
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
