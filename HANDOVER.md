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
| `ClientLogos` | "Trusted by many" strip |
| `ShowreelVideo` | 16:9 video slot placeholder — drop `public/showreel.mp4` and flip `HAS_VIDEO` in the component |
| `Innovate` | ⭐ Pinned "Featured Work" scatter |
| `OurServices` | ⭐ Pinned scrollytelling: zooms in on the first point, reveals 7 points one-by-one along a growing navy line, zooms out after the last. Static list fallback <1024px / reduced motion. |
| `BigQuote` | Soela quote (enlarged type) |
| `WorkProcess` | Numbered step cards, flip-in + bob |
| `OurWork` | `id="work"`. Schbang-style navy band; **8 blocks, every one links to a case study**. BVC block uses a tilted 7-image collage (Figma 182:824). New projects get appended here (see §6). |
| `AboutCaseStudy` | Portrait + philosophy (work-history stack + signature removed at client request) |
| `Pricing`, `Testimonials`, `Faq`, `Footer` | Footer = giant "eclecticdigital" wordmark + socials/links/credit (all `#` placeholders) |

**Animation gotchas (hard-won):** pinned sections use a manual scroll-progress
`MotionValue` (rect-based listener), NOT `useScroll({target})`. Never wrap a
pinned/sticky section in `Reveal` (ancestor transform breaks sticky). Clip on
the sticky child, not the pinned section. Test several viewport heights.

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
   photos" turned out to be WhatsApp screenshots).
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
  drafted; Nilambar imagery reuses the site's only wide photo 3×.
- `netlify.toml` is inert leftover; hosting is GitHub Pages.

## 9. Accounts

- Repo under GitHub account **`nikitawadhawan-cmyk`** (`gh` CLI authed; push
  works). The separate `nikita-wadhawan-eclectic` account is NOT used.

_Last updated: after the HDFC Life case study (8 case-study pages, homepage
fully linked). At that point the last five pages (peak-mode-on, trippy-tour-
guide, ivylistic, nilambar, hdfc-life) + homepage updates + this doc were
sitting UNCOMMITTED in the working tree, awaiting the client's go to push —
check `git status` before assuming the live site matches local._
