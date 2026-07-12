import Image from "@/components/Img";
import Link from "next/link";

/**
 * BvcProjects — "MORE WORK" project showcase. Clones the AmoradaProjects
 * design 1:1; links to two other real case studies (Ritvaa, amorada) —
 * same project data as PmoProjects, reused verbatim since it's not
 * BVC-specific.
 */

type Stat = { value: string; label: string };

type Project = {
  title: string;
  href: string;
  tags: string[];
  year: string;
  main: string;
  mainAlt: string;
  thumbs: { src: string; alt: string }[];
  description: string;
  stats: [Stat, Stat];
};

const PROJECTS: Project[] = [
  {
    title: "Ritvaa",
    href: "/projects/ritvaa",
    tags: ["Shopify Development", "Luxury Jewellery"],
    year: "2026",
    main: "/figma/rit-banner-1.jpg",
    mainAlt:
      "Ritvaa website — luxury SmartGold jewellery platform campaign banner",
    thumbs: [
      {
        src: "/figma/rit-prod-1.jpg",
        alt: "Ritvaa store — SmartGold jewellery product imagery",
      },
      {
        src: "/figma/rit-mood.jpg",
        alt: "Ritvaa store — lifestyle mood photography",
      },
    ],
    description:
      "Luxury SmartGold jewellery platform, sold on trust and tradition.",
    stats: [
      { value: "SmartGold", label: "Jewellery" },
      { value: "Lifetime", label: "Buyback Guarantee" },
    ],
  },
  {
    title: "Amorada",
    href: "/projects/amorada",
    tags: ["Shopify Development", "Ecommerce Site"],
    year: "2026",
    main: "/figma/am-showcase.jpg",
    mainAlt:
      "Amorada Shopify store — editorial home-linen storefront showcase",
    thumbs: [
      {
        src: "/figma/am-hero-1.jpg",
        alt: "Amorada store — home-linen product imagery",
      },
      {
        src: "/figma/am-hero-2.jpg",
        alt: "Amorada store — craftsmanship and texture detail",
      },
    ],
    description:
      "A warm, editorial Shopify store that foregrounds craftsmanship and texture, organises products by room and by colour palette, and offers a frictionless checkout with both prepaid and COD.",
    stats: [
      { value: "10+", label: "Website Pages Planned" },
      { value: "1 Month", label: "Project Duration" },
    ],
  },
];

/** Arrow used in the top-right pill button and each block's small round button. */
function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 14L14 6M14 6H7M14 6V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border-[0.8px] border-[#dedede] px-3 py-2 text-[12px] leading-[16px] text-black">
      {children}
    </span>
  );
}

function StatChip({ value, label }: Stat) {
  return (
    <div className="flex flex-1 items-center gap-2 rounded-lg border-[0.8px] border-[#d3d3d3] px-4 py-3.5">
      <span className="whitespace-nowrap text-[28px] font-bold leading-none tracking-[-0.556px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[36px]">
        {value}
      </span>
      <span className="text-[15px] leading-[20px] text-muted lg:text-[16px]">
        {label}
      </span>
    </div>
  );
}

function ProjectBlock({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group flex flex-col gap-6 lg:gap-8">
      {/* Header row: title + tags on the left, round arrow button on the right —
          the whole card is one link; the button is now purely visual. */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-bold leading-[26px] tracking-[-0.16px] text-black transition-colors group-hover:text-navy lg:text-[24px] lg:leading-[30px]">
            {project.title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
            <TagChip>{project.year}</TagChip>
          </div>
        </div>
        <span
          aria-hidden="true"
          className="flex size-[44px] shrink-0 items-center justify-center rounded-full border-[0.8px] border-[#cfcfcf] bg-white text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:size-[50px]"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>

      {/* Body row: large screenshot left, thumbnails + text + stats right */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6">
        <div className="relative aspect-[501/450] w-full shrink-0 overflow-hidden rounded-xl border border-black/[0.18] shadow-[6px_4px_5px_0px_rgba(0,0,0,0.12)] lg:aspect-auto lg:w-[47%]">
          <Image
            src={project.main}
            alt={project.mainAlt}
            fill
            sizes="(min-width: 1024px) 501px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-8">
          <div className="flex flex-col gap-6 lg:gap-8">
            <div className="grid grid-cols-2 gap-3 lg:gap-8">
              {project.thumbs.map((thumb) => (
                <div
                  key={thumb.alt}
                  className="relative aspect-[256/185] overflow-hidden rounded-xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="(min-width: 1024px) 256px, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[24px] text-[#424242] lg:text-[16px]">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
            {project.stats.map((stat, i) => (
              <StatChip key={i} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BvcProjects() {
  return (
    <section
      aria-labelledby="bvc-projects-heading"
      className="w-full bg-white py-16 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-6 lg:gap-9">
            <span className="inline-flex items-center gap-1 self-start rounded-full bg-black/[0.03] px-3 py-[7px]">
              <span
                aria-hidden
                className="size-[7px] rounded-full bg-gold"
              />
              <span className="text-[12px] font-medium uppercase leading-[22px] tracking-[-0.48px] text-[#1a1a1a]">
                More work
              </span>
            </span>
            <h2
              id="bvc-projects-heading"
              className="max-w-[608px] text-[28px] font-semibold leading-[1.1] tracking-[-0.3px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[39.6px]"
            >
              Projects I&apos;ve Led Through Strategy,{" "}
              <span className="font-bold italic">
                Content &amp; Digital Experience
              </span>
            </h2>
          </div>

          <a
            href="#"
            className="group inline-flex shrink-0 items-center gap-2 self-start sm:self-auto"
          >
            <span className="inline-flex items-center rounded-full bg-navy px-6 py-3 text-[16px] font-medium tracking-[-0.16px] text-white transition-colors group-hover:bg-navy-deep lg:px-[30px]">
              View all works
            </span>
            <span className="flex size-11 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="size-5" />
            </span>
          </a>
        </div>

        {/* Project blocks */}
        <div className="mt-12 flex flex-col gap-12 lg:mt-20 lg:gap-16">
          {PROJECTS.map((project) => (
            <ProjectBlock key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
