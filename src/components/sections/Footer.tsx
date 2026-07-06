/**
 * Footer + CTA — Figma node 4:8288 ("Footer - Desktop").
 *
 * A full-bleed dark navy (#2a315f) band with:
 *  1. A large CTA heading — "Lets build" (white) + "incredible work together." (gold #e8c700)
 *  2. A three-column row: Email, Call Me, Social (5 white icon pills)
 *  3. A hairline divider
 *  4. Bottom row: Menu links, Legal links, and copyright
 *  5. A faint oversized "JOSEPH" watermark behind the content (opacity ~10%)
 *
 * Server Component — no interactivity needed. The Figma design contains a
 * decorative word-cycle animation ("design/build/create") on the first line;
 * only "build" is the active/visible word, so it is rendered statically here.
 * See report for flagged deviations.
 */

// X / Twitter
function XIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]" aria-hidden="true">
      <path
        d="M5.89808 7.58333L1.75 12.25M11.0833 1.75L7.63583 5.62858M1.75 1.75L9.33333 12.25H12.25L4.66667 1.75H1.75Z"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Threads / Instagram-style
function ThreadsIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]" aria-hidden="true">
      <path
        d="M10.5 3.51283V3.5M3.5 12.8333H10.5C11.7886 12.8333 12.8333 11.7886 12.8333 10.5V3.5C12.8333 2.21142 11.7886 1.16667 10.5 1.16667H3.5C2.21142 1.16667 1.16667 2.21142 1.16667 3.5V10.5C1.16667 11.7886 2.21142 12.8333 3.5 12.8333ZM9.59233 7C9.59233 8.43208 8.43208 9.59233 7 9.59233C5.56792 9.59233 4.40767 8.43208 4.40767 7C4.40767 5.56792 5.56792 4.40767 7 4.40767C8.43208 4.40767 9.59233 5.56792 9.59233 7Z"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Dribbble
function DribbbleIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]" aria-hidden="true">
      <g transform="translate(1.31 1.3125)">
        <path
          d="M3.78875 0.70327C3.75347 0.681444 3.72512 0.650034 3.70701 0.612706C3.6889 0.575377 3.68179 0.533669 3.68649 0.492448C3.69119 0.451227 3.70751 0.412193 3.73356 0.3799C3.75961 0.347607 3.7943 0.323387 3.83359 0.310067C4.63149 0.0351467 5.48058 -0.0586581 6.31924 0.0354619C7.1579 0.129582 7.96508 0.409265 8.68219 0.854207C8.70817 0.870591 8.73042 0.892265 8.74747 0.917818C8.76452 0.94337 8.776 0.972228 8.78116 1.00251C8.78632 1.0328 8.78505 1.06383 8.77741 1.09358C8.76978 1.12334 8.75597 1.15116 8.73688 1.17522C8.10368 1.98436 7.32716 2.67024 6.44602 3.19866C5.73423 2.19912 4.831 1.35091 3.78875 0.70327ZM5.66508 3.60936C4.86636 2.5195 3.81558 1.63928 2.60258 1.04397C2.56784 1.0271 2.52922 1.01988 2.49073 1.02305C2.45225 1.02623 2.41533 1.03969 2.38383 1.06202C1.40185 1.76443 0.667791 2.76002 0.28711 3.90577C0.277546 3.93507 0.27428 3.96605 0.277527 3.9967C0.280773 4.02735 0.290459 4.05696 0.305949 4.0836C0.321439 4.11025 0.342383 4.13331 0.36741 4.1513C0.392437 4.16928 0.420981 4.18177 0.451172 4.18796C1.02198 4.311 1.60413 4.37368 2.18805 4.37499C3.38894 4.37564 4.57553 4.11436 5.66508 3.60936ZM11.3416 5.06897C11.2026 3.80051 10.6402 2.61589 9.74531 1.70624C9.72349 1.68407 9.6972 1.66682 9.66818 1.65562C9.63917 1.64442 9.6081 1.63954 9.57704 1.64129C9.54599 1.64305 9.51567 1.65142 9.48811 1.66582C9.46054 1.68023 9.43636 1.70034 9.41719 1.72483C8.72504 2.6066 7.87839 3.35523 6.91852 3.93421C7.21839 4.45372 7.46659 5.00139 7.65953 5.56936C8.44303 5.35696 9.25127 5.24957 10.063 5.24999C10.4102 5.25 10.7571 5.26954 11.1021 5.3085C11.1342 5.31171 11.1666 5.30777 11.197 5.29697C11.2274 5.28617 11.2551 5.26878 11.278 5.24605C11.3009 5.22331 11.3184 5.19579 11.3295 5.16546C11.3405 5.13513 11.3446 5.10274 11.3416 5.07061V5.06897ZM7.90125 6.40882C8.06334 7.09834 8.14501 7.80432 8.14461 8.51264C8.14427 9.19063 8.06889 9.86648 7.91984 10.5279C7.91031 10.5684 7.91254 10.6108 7.92625 10.6501C7.93997 10.6894 7.9646 10.7239 7.99727 10.7497C8.02994 10.7755 8.06929 10.7914 8.11069 10.7956C8.15209 10.7998 8.19383 10.7921 8.23102 10.7734C9.06046 10.3573 9.7758 9.74508 10.3149 8.9898C10.8541 8.23453 11.2007 7.35907 11.3247 6.43944C11.3284 6.41076 11.3265 6.38163 11.3189 6.35372C11.3113 6.32581 11.2982 6.29968 11.2805 6.27684C11.2627 6.25401 11.2406 6.23492 11.2155 6.22068C11.1903 6.20644 11.1625 6.19734 11.1338 6.19389C10.0524 6.05471 8.9541 6.12903 7.90125 6.41264V6.40882ZM6.82719 5.83733C6.65086 5.32022 6.4239 4.82179 6.14961 4.34929C4.91346 4.94315 3.55944 5.251 2.18805 5.24999C1.547 5.25002 0.9077 5.18312 0.280547 5.05038C0.250289 5.044 0.21902 5.0441 0.188805 5.05069C0.158589 5.05727 0.130114 5.07019 0.105257 5.08859C0.0803995 5.10699 0.0597256 5.13044 0.0445988 5.15742C0.029472 5.18439 0.0202361 5.21426 0.0175004 5.24507C0.00619829 5.3909 0.000364969 5.53837 3.85943e-07 5.68749C-0.000286886 6.46627 0.159799 7.23677 0.470285 7.95098C0.780771 8.66519 1.23501 9.30782 1.80469 9.83882C1.82872 9.86084 1.85737 9.87722 1.88854 9.88675C1.91971 9.89628 1.95262 9.89872 1.98485 9.8939C2.01709 9.88907 2.04784 9.87711 2.07486 9.85887C2.10188 9.84064 2.12448 9.8166 2.14102 9.7885C3.20841 7.97733 4.8614 6.58419 6.82719 5.83897V5.83733ZM2.82734 10.3496C2.81297 10.3747 2.80371 10.4024 2.80011 10.4311C2.79651 10.4598 2.79864 10.4889 2.80637 10.5168C2.8141 10.5447 2.82728 10.5707 2.84515 10.5935C2.86302 10.6162 2.88522 10.6352 2.91047 10.6493C4.05416 11.2905 5.38446 11.5164 6.6757 11.2886C6.71412 11.2819 6.74999 11.2649 6.77947 11.2393C6.80895 11.2138 6.83093 11.1807 6.84305 11.1437C7.1251 10.2957 7.26912 9.40793 7.26961 8.51429C7.26972 7.89863 7.20112 7.28488 7.06508 6.68444C5.27314 7.38263 3.77654 8.67701 2.82734 10.3496Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

// Behance
function BehanceIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]" aria-hidden="true">
      <g transform="translate(0.875 2.1875)">
        <path
          d="M4.15625 4.375H2.625V3.0625H4.15625C4.3303 3.0625 4.49722 3.13164 4.62029 3.25471C4.74336 3.37778 4.8125 3.5447 4.8125 3.71875C4.8125 3.8928 4.74336 4.05972 4.62029 4.18279C4.49722 4.30586 4.3303 4.375 4.15625 4.375ZM4.375 5.25H2.625V7H4.375C4.60706 7 4.82962 6.90781 4.99372 6.74372C5.15781 6.57962 5.25 6.35706 5.25 6.125C5.25 5.89294 5.15781 5.67038 4.99372 5.50628C4.82962 5.34219 4.60706 5.25 4.375 5.25ZM8.75 4.375C8.47865 4.37508 8.214 4.45927 7.99247 4.61597C7.77094 4.77266 7.60342 4.99417 7.51297 5.25H9.98703C9.89658 4.99417 9.72906 4.77266 9.50753 4.61597C9.286 4.45927 9.02135 4.37508 8.75 4.375ZM12.25 0.875V8.75C12.25 8.98206 12.1578 9.20462 11.9937 9.36872C11.8296 9.53281 11.6071 9.625 11.375 9.625H0.875C0.642936 9.625 0.420376 9.53281 0.256282 9.36872C0.0921872 9.20462 0 8.98206 0 8.75V0.875C0 0.642936 0.0921872 0.420376 0.256282 0.256282C0.420376 0.0921872 0.642936 0 0.875 0H11.375C11.6071 0 11.8296 0.0921872 11.9937 0.256282C12.1578 0.420376 12.25 0.642936 12.25 0.875ZM7 2.625C7 2.74103 7.04609 2.85231 7.12814 2.93436C7.21019 3.01641 7.32147 3.0625 7.4375 3.0625H10.0625C10.1785 3.0625 10.2898 3.01641 10.3719 2.93436C10.4539 2.85231 10.5 2.74103 10.5 2.625C10.5 2.50897 10.4539 2.39769 10.3719 2.31564C10.2898 2.23359 10.1785 2.1875 10.0625 2.1875H7.4375C7.32147 2.1875 7.21019 2.23359 7.12814 2.31564C7.04609 2.39769 7 2.50897 7 2.625ZM6.125 6.125C6.12486 5.83838 6.05432 5.55617 5.91959 5.30319C5.78485 5.05021 5.59003 4.8342 5.35227 4.67414C5.53212 4.44887 5.64473 4.17742 5.67715 3.89099C5.70958 3.60457 5.6605 3.3148 5.53555 3.05504C5.41061 2.79527 5.21488 2.57604 4.97088 2.42257C4.72687 2.2691 4.44451 2.18762 4.15625 2.1875H2.1875C2.07147 2.1875 1.96019 2.23359 1.87814 2.31564C1.79609 2.39769 1.75 2.50897 1.75 2.625V7.4375C1.75 7.55353 1.79609 7.66481 1.87814 7.74686C1.96019 7.82891 2.07147 7.875 2.1875 7.875H4.375C4.83913 7.875 5.28425 7.69063 5.61244 7.36244C5.94063 7.03425 6.125 6.58913 6.125 6.125ZM10.9375 5.6875C10.9375 5.18729 10.766 4.7022 10.4517 4.31307C10.1374 3.92395 9.6992 3.6543 9.21018 3.54907C8.72117 3.44384 8.21086 3.50939 7.76431 3.73478C7.31776 3.96018 6.96194 4.33181 6.75617 4.78774C6.55039 5.24366 6.50709 5.75634 6.63347 6.24032C6.75986 6.7243 7.0483 7.15035 7.45072 7.44745C7.85313 7.74456 8.34522 7.89477 8.84496 7.87306C9.3447 7.85134 9.8219 7.65901 10.197 7.32812C10.2841 7.25133 10.337 7.1431 10.3442 7.02726C10.3515 6.91142 10.3124 6.79745 10.2356 6.71043C10.1976 6.66734 10.1514 6.63216 10.0998 6.6069C10.0482 6.58165 9.99208 6.5668 9.93472 6.56322C9.81888 6.55599 9.70491 6.59508 9.61789 6.67188C9.45683 6.81378 9.26341 6.91401 9.05461 6.96379C8.8458 7.01356 8.62797 7.01137 8.42021 6.95739C8.21245 6.90341 8.0211 6.7993 7.86293 6.65418C7.70476 6.50906 7.58459 6.32736 7.51297 6.125H10.5C10.616 6.125 10.7273 6.07891 10.8094 5.99686C10.8914 5.91481 10.9375 5.80353 10.9375 5.6875Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

// LinkedIn
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" className="size-[14px]" aria-hidden="true">
      <path
        d="M3.5 2.33333C3.5 2.97792 2.97792 3.5 2.33333 3.5C1.68875 3.5 1.16667 2.97792 1.16667 2.33333C1.16667 1.68875 1.68875 1.16667 2.33333 1.16667C2.97792 1.16667 3.5 1.68875 3.5 2.33333Z"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.16667 5.25H3.5V12.8333H1.16667V5.25Z"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 12.8333H8.16667V8.75C8.16667 8.10542 8.68875 7.58333 9.33333 7.58333C9.97792 7.58333 10.5 8.10542 10.5 8.75V12.8333H12.8333V8.75C12.8333 6.81683 11.2665 5.25 9.33333 5.25C7.40017 5.25 5.83333 6.81683 5.83333 8.75V12.8333Z"
        stroke="currentColor"
        strokeWidth="1.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const menuLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const legalLinks = [
  { label: "Terms of service", href: "#terms" },
  { label: "Privacy Policy", href: "#privacy" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-navy text-white">
      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-24 pt-16 lg:px-10 lg:pb-40 lg:pt-16">
        {/* Faint oversized watermark behind content */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 bottom-0 select-none whitespace-nowrap text-center text-[24vw] font-medium leading-none tracking-[-0.03em] text-white opacity-[0.08] lg:inset-x-10 lg:text-[259px] lg:tracking-[-8px]"
        >
          JOSEPH
        </span>

        <div className="relative">
          {/* ── Top: CTA + contact/social row ──────────────────────── */}
          <div className="flex flex-col gap-12 pb-6">
            {/* CTA heading */}
            <h2 className="flex flex-col items-center text-center font-medium tracking-[-0.03em] text-[40px] leading-[0.95] sm:text-[56px] lg:text-[72px] lg:leading-[68.4px]">
              <span className="text-white">Lets build</span>
              <span className="text-[#e8c700]">incredible work together.</span>
            </h2>

            {/* Email / Call Me / Social */}
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-center">
              {/* Email */}
              <div className="flex flex-col gap-[7px] sm:w-[309px]">
                <p className="text-[13.6px] font-semibold leading-[15.68px] tracking-[-0.14px] text-[#828282]">
                  Email
                </p>
                <a
                  href="mailto:joseph@launchnow.design"
                  className="text-[17.4px] font-medium leading-[25.2px] tracking-[-0.36px] text-white transition-opacity hover:opacity-80"
                >
                  joseph@launchnow.design
                </a>
              </div>

              {/* Call Me */}
              <div className="flex flex-col gap-[7px] sm:w-[309px]">
                <p className="text-[13.3px] font-semibold leading-[15.68px] tracking-[-0.14px] text-[#828282]">
                  Call Me
                </p>
                <a
                  href="#book"
                  className="text-[17px] font-medium leading-[25.2px] tracking-[-0.36px] text-white transition-opacity hover:opacity-80"
                >
                  Book Now
                </a>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4 sm:w-[309px]">
                <p className="text-[14px] font-semibold leading-[15.68px] tracking-[-0.14px] text-[#828282]">
                  Social
                </p>
                <div className="flex items-center gap-1.5">
                  <a
                    href="#twitter"
                    aria-label="X / Twitter"
                    className="flex items-center gap-1 rounded-[24px] bg-white px-2 py-2 text-black transition-opacity hover:opacity-90"
                  >
                    <XIcon />
                    <span className="text-[12px] font-semibold leading-[13.44px] tracking-[-0.12px]">
                      1,214
                    </span>
                  </a>
                  <a
                    href="#threads"
                    aria-label="Threads"
                    className="flex size-[30px] items-center justify-center rounded-[24px] bg-white text-black transition-opacity hover:opacity-90"
                  >
                    <ThreadsIcon />
                  </a>
                  <a
                    href="#dribbble"
                    aria-label="Dribbble"
                    className="flex size-[30px] items-center justify-center rounded-[24px] bg-white text-black transition-opacity hover:opacity-90"
                  >
                    <DribbbleIcon />
                  </a>
                  <a
                    href="#behance"
                    aria-label="Behance"
                    className="flex size-[30px] items-center justify-center rounded-[24px] bg-white text-black transition-opacity hover:opacity-90"
                  >
                    <BehanceIcon />
                  </a>
                  <a
                    href="#linkedin"
                    aria-label="LinkedIn"
                    className="flex size-[30px] items-center justify-center rounded-[24px] bg-white text-black transition-opacity hover:opacity-90"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hairline divider */}
          <div className="h-px w-full bg-[#828282]/80" />

          {/* ── Bottom: Menu / Legal / Copyright ───────────────────── */}
          <div className="flex flex-col gap-8 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex gap-16 sm:gap-24">
              {/* Menu */}
              <div className="flex flex-col gap-4">
                <p className="text-[12px] font-semibold leading-[13.44px] tracking-[-0.12px] text-[#828282]">
                  Menu
                </p>
                <ul className="grid grid-cols-2 gap-x-[60px] gap-y-2">
                  {menuLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[11.4px] font-semibold leading-[13.44px] tracking-[-0.12px] text-white transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div className="flex flex-col gap-4">
                <p className="text-[12px] font-semibold leading-[13.44px] tracking-[-0.12px] text-[#828282]">
                  Legal
                </p>
                <ul className="flex flex-col gap-[9px]">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[11.4px] font-semibold leading-[13.44px] tracking-[-0.12px] text-white transition-opacity hover:opacity-70"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-[11.3px] font-semibold leading-[12px] text-[#b8b8b8]">
              © 2026 Joseph Alexander
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
