# Eclectic Digital — Website Handover

A marketing/agency website ("eclectic digital"): a homepage built from Figma
plus **eight case-study pages**. Static Next.js site, hosted free on GitHub
Pages, auto-deploying on every push to `main`.

- **Live site:** https://nikitawadhawan-cmyk.github.io/new-eclectic-website/
- **Repo:** https://github.com/nikitawadhawan-cmyk/new-eclectic-website (public)

---

## 1. Tech stack

| Thing | Version / choice |
| --- | --- |
| Framework | **Next.js 16.2.10** (App Router, `src/` dir) |
| Language | TypeScript 5 |
| UI | React 19.2 |
| Styling | **Tailwind CSS v4** (config-less; theme tokens in `src/app/globals.css` under `@theme`) |
| Animation | **framer-motion 12** + CSS keyframes |
| Icons | **lucide-react** (+ hand-built inline SVGs) |
| Font | **Inter** via `next/font/google` |
| Hosting | **GitHub Pages** (static export via GitHub Actions) |

> ⚠️ From `AGENTS.md`: this Next.js version may differ from training data.
> Before changing framework config, read `node_modules/next/dist/docs/`.

## 2. Run / build / deploy

```bash
npm run dev        # http://localhost:3000
BASE_PATH=/new-eclectic-website npm run build   # prod static export -> ./out
npx tsc --noEmit && npx eslint src/            # checks
git push origin main                            # deploys via Actions (~1 min)
```

- Local dev serves at `/`; production serves from `/new-eclectic-website/`
  (basePath via `BASE_PATH` env; see `next.config.ts`).
- **Images MUST go through `src/components/Img.tsx`** — import `Image` from
  `@/components/Img` (not next/image), or wrap raw paths in `assetPath()`.
  Otherwise they 404 in production. Internal links: `next/link` handles
  basePath; raw `<a href="/...">` needs `assetPath()` (see Header.tsx).
- If `tsc` errors on `.next/**/* 2.ts` files (Finder-made duplicates), run
  `find .next -name "* 2.*" -delete`.
- GitHub Actions occasionally 503s platform-wide; a failed deploy is usually
  theirs — re-run with `gh workflow run deploy.yml`.

## 3. Site map

```
/                              homepage
/projects/bvc-logistics        case study (bespoke, built from Figma node 89-5826)
/projects/amorada              case study (bespoke, built from Figma node 221-5847)
/projects/ritvaa               case study (clone family — see §5)
/projects/peak-mode-on         case study (clone)
/projects/trippy-tour-guide    case study (clone)
/projects/ivylistic            case study (clone)
/projects/nilambar             case study (clone)
/projects/hdfc-life            case study (clone)
```

## 4. Homepage sections (top to bottom, `src/app/page.tsx`)

| Section (component in `src/components/sections/`) | Notes |
| --- | --- |
| `Header` | Sticky pill nav. Logo = real asset `public/eclectic-logo-nav.png`, links home (`assetPath("/")`). Nav: Work → `/#work`, Services (`#services`, dead), Blog (`#blog`, dead), Contact (`#contact`, dead). Pricing removed. |
| `HeroShowcase` | ⭐ Pinned scroll-morph "Latest Projects" — **matches Figma exactly** (4 cards: BVC Logistics, Trippy Tour, IVVYLISTIC, amorada with `lp-screen-*.jpg`); each card links to its case-study route. Do NOT swap the card artwork — client insisted the Figma design stays. |
| `ClientLogos` | "Trusted by many" strip near the top — 4 real client wordmarks (BVC, Trippy Tour, Ivylistic, amorada), static row. `logos` array is exported for reuse (see `Testimonials` below). |
| `ShowreelVideo` | 16:9 video slot placeholder — drop `public/showreel.mp4` and flip `HAS_VIDEO` in the component |
| `Innovate` | ⭐ Pinned "Featured Work" scatter |
| `OurServices` | ⭐ Pinned scrollytelling: zooms in on the first point, reveals 7 points one-by-one along a growing navy line, zooms out after the last. Static list fallback <1024px / reduced motion. |
| `BigQuote` | Soela quote (enlarged type) |
| `WorkProcess` | ⭐ Pinned scroll-triggered reveal ("osmo stacking-cards" reference, adapted): section pins while scrolling and each of the 4 step cards bounces into its own grid slot one at a time (box 1 → 2 → 3 → 4, `backOut` overshoot easing) — but cards sit **side by side** in the original staggered grid, never covering each other; end state = all 4 visible + idle bob resumes. Static flip-in grid fallback <1024px / reduced motion. |
| `OurWork` | `id="work"`. Schbang-style navy band; **8 blocks, every one links to a case study, every one uses a tilted collage card** (Figma 182:824 pattern, generalized to 5–7 images per client — see `collageRows`/`collageMargin` in `OurWork.tsx`). New projects get appended here (see §6). |
| `AboutCaseStudy` | Portrait + philosophy (work-history stack + signature removed at client request) |
| `Pricing`, `Testimonials`, `Faq`, `Footer` | `Testimonials` also renders a second "Trusted by many" strip (`ClientLogosStrip`) — this one is an **infinite CSS marquee** using the same real client logos as the top `ClientLogos` (previously shipped as a static row of fake placeholder wordmarks — Luminary/Frequencii/etc — now fixed). Footer = giant "eclecticdigital" wordmark + socials/links/credit (all `#` placeholders). |

**Animation gotchas (hard-won):** pinned sections (`HeroShowcase`, `Innovate`,
`OurServices`, `WorkProcess`) use a manual scroll-progress `MotionValue`
(rect-based listener), NOT `useScroll({target})`. Never wrap a pinned/sticky
section in `Reveal` (ancestor transform breaks sticky). Clip on the sticky
child, not the pinned section. Test several viewport heights.

- **`Reveal`'s `amount` prop matters for tall sections.** `whileInView`'s
  default `amount: 0.15` means 15% of the child's *height* must be onscreen
  before it fires — fine for normal sections, but a section taller than
  ~6-7x the viewport (e.g. `OurWork` with 8 stacked blocks) can never hit
  that fraction, so it silently stays at `opacity: 0` forever (looks like a
  blank section, no error). Fix: pass `amount="some"` (any pixel visible) for
  very tall `Reveal` children — see `<Reveal amount="some"><OurWork /></Reveal>`
  in `page.tsx`.
- **`useTransform`'s `ease` option wants one easing per keyframe *segment*
  (`inputs.length - 1`), not a bare easing function** — passing a single
  function throws a silent runtime error ("a is not a function") inside
  framer-motion with no useful stack trace pointing at your code. Wrap it:
  `new Array(inputs.length - 1).fill(BOUNCE)`.
- **Turbopack dev cache can go stale on new CSS.** If a new `@keyframes` /
  class you just added to `globals.css` isn't showing up in the served
  bundle (check via `document.styleSheets`), it's not your code — clear
  `rm -rf .next` and restart the dev server. Hit this exact issue getting
  the marquee keyframes to appear.
- `.claude/launch.json`'s dev config has `"autoPort": true` — this project's
  dev server sometimes gets its port taken by another session; autoPort lets
  `preview_start` fall back to a free port instead of erroring.

## 5. Case-study pages

Two families:

1. **BVC** (`case-study/Case*.tsx`) and **amorada** (`case-study/amorada/`)
   were built section-by-section from Figma.
2. **The clone family** — ritvaa, peakmode, trippytour, ivylistic, nilambar,
   hdfclife (each in `case-study/<dir>/`) are **1:1 clones of the amorada
   design** with per-client content. The Ritvaa components are the canonical
   clone source.

Shared section anatomy (every clone page, in order): Hero (uppercase heading,
"— Case Study — … —" subhead, 3 images w/ bracketed center, intro, View Live
Website button) → Stats (4 text facts + testimonial quote) → Showcase (wide
image) → The Project (image + 3 bold-lead paragraphs) → **Results**
(spotlight-split; hover moves the navy card) → **Challenge/Solution** (two
spotlight cards, Solution default-active) → **What We Did** (keyline ledger,
auto-advancing navy highlight every 2.4s, hover takes it, no numbers) →
**Services bento** (5 cards, hover pops + turns navy) → More Work (2 linked
project blocks) → CTA (navy tint over photo) → shared `Faq` → `Footer`.

## 6. Playbook — adding the NEXT case-study page

For a new client page in the same design (this is the established flow):

1. **Content**: get the approved copy (the "Bold Editorial" HTML files in
   ~/Downloads were the source for all six clones — hero intro, overview
   paragraphs, results words, challenge/solution, 6 steps, 5 services,
   pull quote, meta facts, marquee words).
2. **Images**: scrape the client's live site (`curl` + regex; for SPAs pull
   the JS bundle). Download 5-6 images to `public/figma/` with a short
   client prefix (existing: `cs- am- rit- pmo- ttg- ivy- nil- hdfc-`),
   optimize via `sips -Z 1400 -s format jpeg -s formatOptions 80`, and
   **visually verify every image before placing it** (several "campus
   photos" turned out to be WhatsApp screenshots — see §8, this is still
   live on the Ivylistic page).
   - **If you need a real "here's the actual website" screenshot** (device
     mockups, hero captures) and the client site has no static export for
     it: `pip install playwright && python3 -m playwright install chromium`,
     then drive a headless `chromium` page (set viewport, `goto`,
     `wait_for_timeout`, dismiss cookie/location popups by `page.click`,
     `page.screenshot(clip=…)`) and save straight to `public/figma/`. Used
     this for `ttg-hero-mobile.jpg`. The Claude Browser/computer-use
     screenshot tools' `save_to_disk` output is NOT reachable from Bash in
     this environment — this is the reliable path to an actual file.
   - **No pre-made laptop+phone device-mockup photo?** (BVC/amorada each
     have one bespoke export, `cs-showcase.jpg`/`am-showcase.jpg`.) Build a
     CSS device frame instead of skipping the treatment — see
     `RitvaaShowcase.tsx`'s `DeviceMockup()` (dark bezel divs + `next/image`
     "screen" inside, at the same `aspect-[1524/776]` frame). Not
     photorealistic, but keeps the section's visual language.
3. **Spec**: write `.figma-to-website/<client>-case-study/spec.md` mapping
   each section's verbatim content + image assignments (copy an existing
   spec). Mark invented connective copy as "(glue)" for client review.
4. **Clone**: create `src/components/sections/case-study/<dir>/<Prefix><X>.tsx`
   for the 10 sections by copying the Ritvaa components and swapping ONLY
   content (this was parallelized across 4 sub-agents: hero/stats/showcase ·
   project/results/challenge · scope/highlights · projects/CTA).
5. **Route**: `src/app/projects/<slug>/page.tsx` — copy an existing page
   (Header → Hero unwrapped → sections in `<Reveal>` → Faq → Footer, plus
   `metadata`).
6. **Homepage**: append a block to `PROJECTS` in `OurWork.tsx` with
   `href: "/projects/<slug>"`.
7. **Verify**: `tsc` + eslint; load the page in the preview (check section
   order, images, the three interactive sections); check the homepage block;
   run the production build. Then push when the client says so.

## 7. Brand tokens (globals.css `@theme`)

navy `#2a315f` · navy-deep `#1f2450` · ink `#171717` · muted `#545454` ·
muted-2 `#828282` · line `#e6e6e6` · surface `#f5f5f7` · gold `#e8c700`
(→ `bg-navy`, `text-gold`, …). Logo assets: `public/eclectic-logo-nav.png`
(header) and `public/eclectic-logo-stacked.png` (spare).

## 8. Open items / placeholders

- **Ivylistic case-study page still shows private WhatsApp screenshots**
  (`ivy-booth.jpg`, `ivy-oxford.jpg` — a personal admissions-congratulations
  chat, one name partially redacted) in `IvyHero.tsx`, `IvyShowcase.tsx`,
  and `IvyCTA.tsx`. These were meant to be campus/team photos; the scrape
  grabbed the wrong images. Already excluded from the homepage `OurWork`
  collage (see `OurWork.tsx` comment) but the case-study page itself still
  needs real replacement photos before this goes out publicly — **flag to
  client / re-scrape before push.**
- **HDFC Life hero "View Live Website" points at hdfclife.com** — awaiting
  the real campaign landing-page URL from the client (swap in HdfcHero.tsx).
- All `#contact` / `#services` / `#blog` / footer social links are dead
  placeholders — no contact page exists yet.
- ShowreelVideo awaits `public/showreel.mp4` (`HAS_VIDEO` flag).
- "(glue)" copy on clone pages (Results headings/subs, Scope supporting
  lines, some stat-chip labels) needs client sign-off — flagged in docblocks.
- amorada page: AmoradaProjects has literal "00+ / Lorem Ipsuem" chips and
  Nilambar-block imagery reusing Ivylistic (faithful to its Figma; needs
  real content). AmoradaScope descriptions are drafted copy.
- Homepage FAQ answers 02–05 are placeholder; BVC CaseFaq answers are
  drafted.
- **Nilambar only has 3 real site photos total** (`nil-hero`, `nil-founder`,
  `nil-person`) — reused across the site wherever more images are needed
  (e.g. the homepage collage repeats each once to fill 6 tiles). Needs a
  real image set from the client.
- `netlify.toml` is inert leftover; hosting is GitHub Pages.
- Ritvaa's `RitvaaShowcase` uses a CSS-built laptop+phone mockup (no
  photographic export exists for this client) — see §6 for the pattern if
  another client needs the same treatment.

## 9. Accounts

- Repo under GitHub account **`nikitawadhawan-cmyk`** (`gh` CLI authed; push
  works). The separate `nikita-wadhawan-eclectic` account is NOT used.

_Last updated: after the OurWork/WorkProcess animation rework (all 8 OurWork
blocks now use the tilted-collage treatment; WorkProcess got a pinned
scroll-triggered reveal; both "Trusted by many" strips fixed — one now a real
marquee), plus content updates on the Ritvaa and Trippy Tour Guide case
studies (real stats, real hero/showcase imagery). Check `git status` before
assuming the live site matches local — this repo tends to accumulate a batch
of work before the client says go._
