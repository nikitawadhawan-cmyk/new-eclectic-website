import Image from "next/image";

type Project = {
  title: string;
  /** Whether the title should render lowercase (matches Figma "amorada"). */
  lowercase?: boolean;
  subtitle: string;
  href: string;
  /** Decorative panel image sitting behind the laptop mockup. */
  bg: string;
  /** The project screenshot shown on the laptop screen. */
  screen: string;
  /** Screenshot alt text. */
  alt: string;
};

// Order + content verbatim from Figma node 4:7005 (2x2 grid, top-left -> bottom-right).
const projects: Project[] = [
  {
    title: "BVC Logistics",
    subtitle: "Consulting Site",
    href: "#",
    bg: "/figma/lp-bg-1.jpg",
    screen: "/figma/lp-screen-1.jpg",
    alt: "BVC Logistics website — Secure Global Logistics for Gems & Jewellery",
  },
  {
    title: "Trippy Tour",
    subtitle: "AI Agency",
    href: "#",
    bg: "/figma/lp-bg-2.jpg",
    screen: "/figma/lp-screen-2.jpg",
    alt: "Trippy Tour website — Explore the World at Your Own Pace",
  },
  {
    title: "IVVYLISTIC",
    subtitle: "Design studio",
    href: "#",
    bg: "/figma/lp-bg-3.jpg",
    screen: "/figma/lp-screen-3.jpg",
    alt: "IVVYLISTIC website — Get into the world's top MBA program",
  },
  {
    title: "amorada",
    lowercase: true,
    subtitle: "Ecommerce Site",
    href: "#",
    bg: "/figma/lp-bg-4.jpg",
    screen: "/figma/lp-screen-4.jpg",
    alt: "Amorada website — Where Comfort Meets Craft",
  },
];

/** Diagonal arrow (arrow-up-right) used on the project + footer links. */
function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.25 12.75L12.75 5.25M12.75 5.25H5.25M12.75 5.25V12.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.href} className="group block">
      {/* Decorative panel + laptop mockup */}
      <div className="relative aspect-[497/363] w-full overflow-hidden rounded-2xl">
        {/* Background photo panel */}
        <Image
          src={project.bg}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className="object-cover"
        />

        {/* Laptop mockup floating on the panel */}
        <div className="absolute inset-x-[3%] bottom-[9%] top-[9.5%]">
          {/* Lid / screen bezel */}
          <div className="relative h-[93%] overflow-hidden rounded-[16px] bg-[#cfcfcf] p-[9px] shadow-[0px_28px_56px_0px_rgba(0,0,0,0.5)]">
            {/* Camera dot */}
            <span className="absolute left-1/2 top-[6px] size-[5px] -translate-x-1/2 rounded-full bg-[#8a8a8a]" />
            {/* Screen */}
            <div className="relative mt-[4px] h-[calc(100%-4px)] overflow-hidden rounded-[11px] bg-white">
              <Image
                src={project.screen}
                alt={project.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-top"
              />
            </div>
          </div>
          {/* Base / hinge strip */}
          <div className="mx-auto mt-[1.5%] h-[3%] w-[96%] rounded-b-[16px] rounded-t-[4px] border border-[rgba(168,168,168,0.25)] bg-[#595959]" />
        </div>
      </div>

      {/* Caption row */}
      <div className="mt-3 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p
            className={`text-[18px] font-medium leading-[25.2px] tracking-[-0.36px] text-black ${
              project.lowercase ? "lowercase" : ""
            }`}
          >
            {project.title}
          </p>
          <p className="text-[12px] font-semibold leading-[13.44px] tracking-[-0.12px] text-[#545454]">
            {project.subtitle}
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-[12px] font-semibold tracking-[-0.12px] text-[#545454]">
          <ArrowUpRight className="size-[18px] text-navy" />
          View Project
        </span>
      </div>
    </a>
  );
}

export default function LatestProjects() {
  return (
    <section aria-labelledby="latest-projects-heading" className="w-full bg-[#fafafa]">
      <div className="mx-auto w-full max-w-[1200px] px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        {/* Heading */}
        <h2
          id="latest-projects-heading"
          className="mb-10 text-center text-[40px] font-medium leading-[1.05] tracking-[-1.2px] lg:mb-16 lg:text-[64px] lg:tracking-[-1.92px]"
        >
          <span className="text-ink">Latest </span>
          <span className="text-navy">Projects</span>
        </h2>

        {/* 2-col grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-6 lg:gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-14 flex justify-center lg:mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-1 text-[17.3px] font-medium tracking-[-0.36px] text-black transition-opacity hover:opacity-70"
          >
            View all my projects
            <ArrowUpRight className="size-[18px] text-navy" />
          </a>
        </div>
      </div>
    </section>
  );
}
