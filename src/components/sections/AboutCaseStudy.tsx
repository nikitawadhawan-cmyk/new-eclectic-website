import Image from "@/components/Img";

/* ── Social icons (designed marks from Figma, node 4:7415 overlay) ── */

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8.26 5.93 13.13.25h-1.15L7.75 5.18 4.37.25H.47l5.11 7.44L.47 13.75h1.15l4.47-5.2 3.57 5.2h3.9L8.26 5.93Zm-1.58 1.84-.52-.74L2.04 1.12h1.77l3.33 4.76.52.74 4.32 6.18h-1.77L6.68 7.77Z"
        fill="#fff"
      />
    </svg>
  );
}

function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M9.9 6.53a4 4 0 0 0-.16-.07c-.1-1.75-1.06-2.76-2.66-2.77h-.02c-.96 0-1.75.4-2.24 1.15l.88.6c.36-.55.94-.67 1.36-.67h.02c.53 0 .92.16 1.17.46.18.22.3.53.36.91-.44-.07-.92-.1-1.43-.06-1.44.08-2.36.92-2.3 2.09.03.59.32 1.1.83 1.44.42.28.97.42 1.54.39.75-.04 1.34-.33 1.75-.85.31-.4.5-.91.6-1.55.36.22.63.51.78.86.26.6.28 1.58-.53 2.39-.71.7-1.56 1.01-2.85 1.02-1.43-.01-2.51-.47-3.22-1.36C3.31 9.2 2.96 8.02 2.95 6.5c0-1.51.35-2.7 1.02-3.53.7-.89 1.79-1.35 3.22-1.36 1.44.01 2.54.47 3.27 1.37.36.44.63 1 .8 1.63l1.03-.27a5.06 5.06 0 0 0-1.02-2.03C10.32.65 8.94.09 7.2.08h-.01c-1.74.01-3.1.57-4.04 1.66C2.28 2.71 1.85 4.13 1.84 5.97v.01c0 1.85.43 3.27 1.3 4.24.94 1.09 2.3 1.65 4.04 1.66h.01c1.55-.01 2.64-.42 3.54-1.32 1.18-1.18 1.14-2.66.75-3.57-.28-.65-.81-1.18-1.53-1.55l-.05-.03Zm-2.6 2.99c-.63.04-1.29-.25-1.32-.83-.02-.43.31-.9 1.36-.96l.4-.01c.36 0 .69.03.99.1-.11 1.4-.77 1.66-1.43 1.7Z"
        fill="#fff"
      />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7 .58a6.42 6.42 0 1 0 0 12.84A6.42 6.42 0 0 0 7 .58Zm4.24 2.96a5.44 5.44 0 0 1 1.23 3.4c-.18-.03-1.97-.4-3.77-.17-.04-.09-.08-.19-.12-.28-.11-.26-.24-.53-.37-.79 1.99-.81 2.9-1.98 3.03-2.16Zm-.6-.53c-.11.15-.93 1.25-2.85 1.97a29.2 29.2 0 0 0-2.05-3.2 5.45 5.45 0 0 1 4.9 1.23ZM4.66 2.16a34.2 34.2 0 0 1 2.03 3.16C4.13 6 1.87 5.99 1.62 5.98a5.46 5.46 0 0 1 3.04-3.82ZM1.5 7.01v-.16c.24 0 2.9.04 5.63-.78.16.31.31.62.44.94l-.22.06c-2.82.91-4.32 3.4-4.44 3.61A5.42 5.42 0 0 1 1.5 7.01Zm2.18 3.62c.09-.18 1.11-2.15 4.19-3.22l.03-.01c.77 1.99 1.08 3.66 1.16 4.14a5.44 5.44 0 0 1-5.38-.91Zm6.31.4c-.06-.33-.35-1.93-1.06-3.9 1.7-.27 3.19.17 3.37.23a5.45 5.45 0 0 1-2.31 3.67Z"
        fill="#fff"
      />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.16 6.67c.36-.18.63-.4.82-.65.33-.46.5-1.06.5-1.81 0-.72-.17-1.34-.5-1.85-.55-.84-1.49-1.27-2.81-1.29H0v11.35h3.16c.36 0 .7-.03 1.01-.1.31-.06.6-.18.86-.35.23-.15.44-.33.63-.55.3-.34.5-.72.61-1.14.06-.27.1-.53.1-.78 0-.6-.14-1.11-.42-1.53-.28-.42-.7-.72-1.24-.92l.45-.13Zm-3.4-3.48h1.53c.34 0 .61.04.83.11.5.16.75.5.75 1.01 0 .46-.15.79-.45.97-.3.19-.68.28-1.16.28H1.76V3.19Zm2.6 6.47c-.27.13-.64.2-1.13.2H1.76V6.9h1.5c.5 0 .89.06 1.16.19.5.24.75.68.75 1.31 0 .75-.28 1.27-.81 1.26ZM13.62 3.87H10.1v-1.03h3.52v1.03ZM14 8.13c.02-.79-.13-1.5-.46-2.14-.5-.98-1.35-1.47-2.53-1.47-.99 0-1.79.31-2.4.94-.62.63-.93 1.53-.93 2.71 0 1.26.34 2.16 1.02 2.72.68.55 1.47.83 2.36.83 1.08 0 1.92-.33 2.52-.98.38-.41.6-.81.65-1.2h-1.42c-.08.19-.19.35-.31.46-.23.2-.53.31-.9.31-.35 0-.65-.08-.9-.24-.41-.25-.63-.7-.66-1.33H14v-.34Zm-4.44-.72c.05-.42.2-.75.44-.99.24-.24.58-.36 1.02-.36.4 0 .74.12 1.01.35.27.24.42.58.45 1H9.56Z"
        fill="#fff"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12.96 0H1.03C.46 0 0 .45 0 1v12c0 .55.46 1 1.03 1h11.93c.57 0 1.04-.45 1.04-1V1c0-.55-.47-1-1.04-1ZM4.15 11.93H2.07V5.25h2.08v6.68ZM3.11 4.34a1.2 1.2 0 1 1 0-2.42 1.2 1.2 0 0 1 0 2.42Zm8.82 7.59H9.85V8.68c0-.78-.01-1.78-1.08-1.78-1.09 0-1.26.85-1.26 1.72v3.31H5.44V5.25h1.99v.91h.03c.28-.53.95-1.08 1.96-1.08 2.1 0 2.49 1.38 2.49 3.17v3.68Z"
        fill="#fff"
      />
    </svg>
  );
}

export default function AboutCaseStudy() {
  return (
    <section className="w-full border-t border-[#dedede] py-20 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-10">
        {/* ── Heading ── */}
        <h2 className="max-w-[820px] text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-black lg:text-[64px] lg:leading-[64px] lg:tracking-[-1.92px]">
          <span className="text-[#828282]">Designing experiences </span>
          <span className="text-black">that solve real problems.</span>
        </h2>

        {/* ── Content: left column (photo + work history) / right column (philosophy) ── */}
        <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16">
          {/* ── Left column ── */}
          <div className="flex flex-col gap-14 lg:max-w-[384px]">
            {/* Photo + name/title */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[371/410] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/figma/about-portrait.png"
                  alt="Portrait of Nikita Wadhawan smiling in an office corridor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 384px"
                  className="object-cover"
                  priority={false}
                />
                {/* Social stats overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <span className="flex items-center gap-1 rounded-3xl bg-black/50 px-2 py-2 backdrop-blur-[5px]">
                    <XIcon className="size-3.5" />
                    <span className="text-[12px] font-semibold leading-none tracking-[-0.12px] text-white">
                      1,214
                    </span>
                  </span>
                  <span className="flex items-center justify-center rounded-3xl bg-black/50 p-2 backdrop-blur-[5px]">
                    <ThreadsIcon className="size-3.5" />
                  </span>
                  <span className="flex items-center justify-center rounded-3xl bg-black/50 p-2 backdrop-blur-[5px]">
                    <DribbbleIcon className="size-3.5" />
                  </span>
                  <span className="flex items-center justify-center rounded-3xl bg-black/50 p-2 backdrop-blur-[5px]">
                    <BehanceIcon className="size-3.5" />
                  </span>
                  <span className="flex items-center justify-center rounded-3xl bg-black/50 p-2 backdrop-blur-[5px]">
                    <LinkedinIcon className="size-3.5" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-[21px] font-medium leading-[30.8px] tracking-[-0.66px] text-black">
                  Nikita Wadhawan
                </p>
                <p className="text-[13.5px] font-semibold leading-[15.7px] tracking-[-0.14px] text-[#545454]">
                  Full-stack Developer
                </p>
              </div>
            </div>

          </div>

          {/* ── Right column: Philosophy ── */}
          <div className="flex flex-col gap-12 lg:max-w-[511px]">
            <div className="flex flex-col gap-8 text-[19px] leading-[30.8px] tracking-[-0.66px]">
              <p>
                <span className="font-semibold text-black">
                  I love turning ideas into something real through design.
                </span>{" "}
                <span className="font-medium text-[#545454]">
                  What started as a hobby turned into a career when I discovered
                  how design can make things both look great and work better.
                </span>
              </p>

              <p>
                <span className="font-semibold text-black">
                  I focus on creating user interfaces that serve a real purpose
                </span>
                <span className="font-medium text-[#545454]">
                  {" "}
                  &ndash; making sure they&rsquo;re not just pretty, but actually
                  solve problems. Whether I&rsquo;m working on a mobile app or a
                  website, my goal is to make something that feels natural and
                  easy to use.
                </span>
              </p>

              <p>
                <span className="font-semibold text-black">
                  I&rsquo;m a bit of a perfectionist when it comes to the small
                  stuff,
                </span>{" "}
                <span className="font-medium text-[#545454]">
                  but I think that&rsquo;s what makes good design great. This
                  attention to detail helps me build strong relationships with
                  clients, as they know I&rsquo;ll put the same care into their
                  project that they would.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
