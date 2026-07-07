/**
 * Footer — redesigned in the style of a reference (Schbang):
 *  1. A giant full-width wordmark — "eclectic" (white) + "digital" (gold) —
 *     on the brand navy band.
 *  2. A hairline divider.
 *  3. A bottom row: social icon chips (LinkedIn, Instagram, YouTube, Facebook),
 *     centre links (About, Contact, Case Studies, Blog, Privacy Policy), and a
 *     right-aligned credit line.
 *
 * Server Component — no interactivity needed. Social/menu hrefs are
 * placeholders until real destinations exist.
 */

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-[18px]" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden="true">
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.13V8.87L15.2 12 10 15.13Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-[18px]" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.45-3H13.5V9.05c0-.87.28-1.55 1.63-1.55h1.37V4.86c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.03 1.5-4.03 4.24V11H7.5v3H10v7h3.5Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "#linkedin", Icon: LinkedInIcon },
  { label: "Instagram", href: "#instagram", Icon: InstagramIcon },
  { label: "YouTube", href: "#youtube", Icon: YouTubeIcon },
  { label: "Facebook", href: "#facebook", Icon: FacebookIcon },
];

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Case Studies", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-navy text-white">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-10 pt-16 lg:px-10 lg:pb-12 lg:pt-24">
        {/* ── Giant wordmark ─────────────────────────────────────── */}
        <p
          aria-label="eclectic digital"
          className="select-none whitespace-nowrap text-center font-extrabold lowercase leading-[0.9] tracking-[-0.05em] text-[13.5vw] lg:text-[176px]"
        >
          <span className="text-white">eclectic</span>
          <span className="text-gold">digital</span>
        </p>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="mt-12 h-px w-full bg-white/25 lg:mt-16" />

        {/* ── Bottom row: socials / links / credit ───────────────── */}
        <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Social icon chips */}
          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-[12px] bg-white text-navy transition-transform hover:-translate-y-0.5 active:scale-95"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Centre links */}
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium tracking-[-0.14px] text-white transition-opacity hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Credit */}
          <p className="text-center text-[13px] leading-[20px] text-white/80 lg:text-right">
            Proudly created in India.
            <br />
            All Right Reserved, All Wrong Reversed.
          </p>
        </div>
      </div>
    </footer>
  );
}
