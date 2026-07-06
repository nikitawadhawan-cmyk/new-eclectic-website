import Image from "@/components/Img";

/**
 * CaseProjects — "WORKS" section of the BVC case-study page (Figma 86:5220).
 *
 * An eyebrow + two-line heading with a "View all works" pill, followed by three
 * stacked project showcase blocks separated by hairlines. Each block pairs a
 * large product screenshot on the left with two thumbnails, a description, and
 * two stat chips on the right. Desktop = image-left / text-right; mobile stacks.
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
    title: "BVC Logistics Website",
    tags: ["Website Strategy", "Corporate Website"],
    year: "2026",
    main: "/figma/cs-proj1-main.jpg",
    mainAlt:
      "BVC Logistics website homepage — Secure Global Logistics For Gems & Jewellery",
    thumbs: [
      {
        src: "/figma/cs-proj1-thumb1.jpg",
        alt: "BVC secure domestic and international jewellery logistics services grid",
      },
      {
        src: "/figma/cs-proj1-thumb2.jpg",
        alt: "BVC Prepaid Wallet page — Recharge. Book. Ship. That's it.",
      },
    ],
    description:
      "Designed the complete digital experience for BVC Logistics by planning the website structure, content hierarchy, user journey, and premium visual storytelling. The website was built to strengthen brand trust while making secure logistics services easier to discover and understand.",
    stats: [
      { value: "65+", label: "Years Of Legacy" },
      { value: "130+", label: "Countries" },
    ],
  },
  {
    title: "BVC Universe Platform",
    tags: ["Platform Experience", "Product Marketing"],
    year: "2026",
    main: "/figma/cs-proj2-main.jpg",
    mainAlt: "BVC Universe Smart Logistics Platform app landing hero",
    thumbs: [
      {
        src: "/figma/cs-proj2-thumb1.jpg",
        alt: "BVC Universe — Built For Secure Jewellery Logistics overview with app mockups",
      },
      {
        src: "/figma/cs-proj2-thumb2.jpg",
        alt: "BVC Universe — Take A Closer Look feature explorer",
      },
    ],
    description:
      "Developed the digital experience and content strategy for BVC Universe, creating a structured platform that clearly communicates product capabilities while simplifying navigation across logistics, shipping, and business tools.",
    stats: [
      { value: "One", label: "Unified Platform" },
      { value: "Multiple", label: "Business Solutions" },
    ],
  },
  {
    title: "Prepaid Wallet Campaign",
    tags: ["Campaign Landing Page", "Conversion"],
    year: "2026",
    main: "/figma/cs-proj3-main.jpg",
    mainAlt:
      "BVC Prepaid Wallet Dhanteras campaign landing page — ship gold the auspicious way",
    thumbs: [
      {
        src: "/figma/cs-proj3-thumb1.jpg",
        alt: "Prepaid wallet recharge tiers — Recharge more, ship for more",
      },
      {
        src: "/figma/cs-proj3-thumb2.jpg",
        alt: "Prepaid wallet — Three simple steps to ship",
      },
    ],
    description:
      "Created a conversion-focused campaign landing page that promoted the prepaid wallet offering through strategic messaging, streamlined page flow, and trust-building design to improve customer engagement.",
    stats: [
      { value: "Offer", label: "Campaign Experience" },
      { value: "High", label: "Conversion Focus" },
    ],
  },
];

/** Arrow used in the top-right pill button and each card's small round button. */
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
                  key={thumb.src}
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

          <div className="flex flex-col gap-3 sm:flex-row lg:gap-2">
            {project.stats.map((stat) => (
              <StatChip key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseProjects() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-extrabold uppercase leading-[16.8px] tracking-[3.08px] text-navy">
              Works
            </p>
            <h2 className="max-w-[608px] text-[28px] font-semibold leading-[1.1] tracking-[-0.3px] text-black sm:text-[32px] lg:text-[36px] lg:leading-[39.6px]">
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
        <div className="mt-12 flex flex-col gap-10 lg:mt-20 lg:gap-10">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="flex flex-col gap-10">
              {i > 0 && <div className="h-px w-full bg-[#cbd5e1]" />}
              <ProjectBlock project={project} />
            </div>
          ))}
          <div className="h-px w-full bg-[#cbd5e1]" />
        </div>
      </div>
    </section>
  );
}
