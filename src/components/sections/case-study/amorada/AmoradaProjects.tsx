import Image from "@/components/Img";

/**
 * AmoradaProjects — "MORE WORK" project showcase on the amorada case-study
 * page. Figma: file Gf61npUa7cN0kaGb5RgSwe, node 203:1293.
 *
 * Pill eyebrow (gold dot + "MORE WORK") and a two-line heading with an italic
 * second line, a "View all works" navy pill + circular arrow on the right,
 * then TWO project blocks (Ivylistic, Nilambar — verified against the
 * rendered screenshot; NOT the three BVC projects from the sister page).
 * Each block: title, two tag chips + year chip, small circular arrow, large
 * screenshot left, two thumbnails + description + two stat chips right.
 * Layout idioms reused from the sister CaseProjects component.
 *
 * DEVIATIONS (flagged):
 *   - Both blocks in the Figma use the SAME Ivylistic screenshots (the
 *     Nilambar block is a template duplicate with Ivylistic imagery).
 *     Reproduced as designed — the am-proj1-* assets are shared.
 *   - Stat chips read "00+ / Lorem Ipsuem" in Figma — obvious template
 *     placeholders, kept verbatim per "screenshot is source of truth".
 *     Needs real copy before launch.
 *   - Figma wraps each block in an invisible white-on-white card
 *     (white 0.8px border, 30.8px padding); flattened into the container
 *     like the sister CaseProjects — zero visual difference on white.
 *   - Figma section has rounded-t-[40px] top corners, invisible against the
 *     white page background above (59px white gap in the artboard) — omitted.
 */

type Stat = { value: string; label: string };

type Project = {
  title: string;
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
    title: "Ivylistic",
    tags: ["Website Development", "Corporate Website"],
    year: "2026",
    main: "/figma/am-proj1-main.jpg",
    mainAlt:
      "Ivylistic website hero — Get into the world's top MBA program, strategy not guesswork",
    thumbs: [
      {
        src: "/figma/am-proj1-thumb1.jpg",
        alt: "Ivylistic MBA services — Pick the package that fits your ambition",
      },
      {
        src: "/figma/am-proj1-thumb2.jpg",
        alt: "Ivylistic's process — supporting the MBA journey, phase 01 Discovery",
      },
    ],
    description:
      "A strategy-led admissions brand — higher education, simplified.",
    stats: [
      { value: "00+", label: "Lorem Ipsuem" },
      { value: "00+", label: "Lorem Ipsuem" },
    ],
  },
  {
    title: "Nilambar",
    tags: ["Website Development", "Corporate Website"],
    year: "2026",
    main: "/figma/am-proj1-main.jpg",
    mainAlt:
      "Nilambar project preview — website hero with strategy-led messaging",
    thumbs: [
      {
        src: "/figma/am-proj1-thumb1.jpg",
        alt: "Nilambar project preview — services overview page",
      },
      {
        src: "/figma/am-proj1-thumb2.jpg",
        alt: "Nilambar project preview — process walkthrough page",
      },
    ],
    description:
      "A real-estate and advisory firm, unified under one confident brand.",
    stats: [
      { value: "00+", label: "Lorem Ipsuem" },
      { value: "00+", label: "Lorem Ipsuem" },
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
    <article className="flex flex-col gap-6 lg:gap-8">
      {/* Header row: title + tags on the left, round arrow button on the right */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-4">
          <h3 className="text-[20px] font-bold leading-[26px] tracking-[-0.16px] text-black lg:text-[24px] lg:leading-[30px]">
            {project.title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
            <TagChip>{project.year}</TagChip>
          </div>
        </div>
        <span className="flex size-[44px] shrink-0 items-center justify-center rounded-full border-[0.8px] border-[#cfcfcf] bg-white text-black lg:size-[50px]">
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
    </article>
  );
}

export default function AmoradaProjects() {
  return (
    <section
      aria-labelledby="amorada-projects-heading"
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
              id="amorada-projects-heading"
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
