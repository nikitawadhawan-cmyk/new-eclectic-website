# Eclectic Digital — Website Handover

A single-page marketing/agency website ("eclectic digital"), built from Figma
designs. Static Next.js site, hosted free on GitHub Pages, auto-deploying on
every push to `main`.

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
| Animation | **framer-motion 12** |
| Icons | **lucide-react** (+ hand-built inline SVGs for designed marks) |
| Font | **Inter** via `next/font/google` |
| Hosting | **GitHub Pages** (static export via GitHub Actions) |

> ⚠️ **Note (from `AGENTS.md`):** this Next.js version can differ from older docs.
> Before changing framework config, read the bundled guide in
> `node_modules/next/dist/docs/`.

---

## 2. Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (static export -> ./out)
npm run lint       # eslint
npx tsc --noEmit   # type-check
```

Local dev is served at `/` (no basePath). The production/Pages build is served
from `/new-eclectic-website/` — see §5.

---

## 3. Project structure

```
src/
  app/
    layout.tsx        # <html>/<body>, Inter font, <title>/<meta>
    page.tsx          # composes all sections in order (see §4)
    globals.css       # Tailwind import, brand tokens (@theme), the "bob" keyframe
  components/
    Img.tsx           # next/image wrapper + assetPath() — see §5 (basePath)
    Reveal.tsx        # subtle fade + slide-up on scroll-into-view (once)
    FlipReveal.tsx    # 3D flip-up on scroll-into-view (once)
    sections/         # one file per page section
public/
  figma/              # 54 exported design assets (images, svgs)
  .nojekyll           # tells Pages not to run Jekyll
.github/workflows/
  deploy.yml          # build static export -> deploy to Pages
next.config.ts        # output:'export', basePath, images.unoptimized (see §5)
```

---

## 4. Page sections & animations

Composed top-to-bottom in `src/app/page.tsx`. Three sections have **bespoke**
scroll animations; the rest get a shared reveal wrapper.

| # | Section (component) | Animation |
| --- | --- | --- |
| 1 | **Header** `Header.tsx` | Sticky nav; on scroll it collapses into a floating centred pill (+ mobile menu). |
| 2 | **HeroShowcase** `HeroShowcase.tsx` | ⭐ Pinned scroll-morph: a fanned stack of browser mockups spreads/scales/un-tilts into the "Latest Projects" 2×2 grid; hero copy scrolls up and past; a phase-2 pan reveals the bottom row. Static fallback on mobile / reduced-motion. |
| 3 | ClientLogos `ClientLogos.tsx` | `Reveal` (fade-up) |
| 4 | **Innovate** `Innovate.tsx` | ⭐ Pinned "scatter": the centred "We Strive to Innovate" heading stays put while 6 cards open out from centre to arranged positions and hold; reverses on scroll-up. |
| 5 | BigQuote `BigQuote.tsx` | `FlipReveal` (3D flip-up) |
| 6 | Services `Services.tsx` | `FlipReveal` |
| 7 | **WorkProcess** `WorkProcess.tsx` | ⭐ Normal-flow section; the 4 numbered step cards **flip in** (`whileInView`, one-shot) as you scroll to them, then idly hover/bounce (CSS `@keyframes bob`). |
| 8 | AboutCaseStudy `AboutCaseStudy.tsx` | `FlipReveal` |
| 9 | Pricing `Pricing.tsx` | `Reveal` |
| 10 | Testimonials `Testimonials.tsx` | `Reveal` |
| 11 | Faq `Faq.tsx` | `Reveal` (section) + client accordion |
| 12 | Footer `Footer.tsx` | `Reveal` |

**Animation notes / gotchas** (learned the hard way):

- **`overflow-hidden` breaks `position: sticky`.** For pinned sections the clip
  must live on the *sticky child*, never the pinned `<section>` itself.
- Pinned sections use a **manual scroll-progress `MotionValue`** (a scroll
  listener computing `-rect.top / (height - innerHeight)`) driving
  `useTransform` — this is reversible and reliable where `useScroll({target})`
  was flaky in this Next/React combo.
- Absolute-positioned pinned layouts are **viewport-height sensitive** — test at
  several heights (e.g. 900 and 1050px), not just one.
- Reduced-motion (`useReducedMotion`) and small screens (`< 640/1024px`) fall
  back to static layouts in the bespoke sections.

---

## 5. Hosting: GitHub Pages (important)

The site is a **static export** deployed by GitHub Actions.

- `next.config.ts` sets `output: 'export'`, `trailingSlash: true`,
  `images: { unoptimized: true }`, and a `basePath` driven by the `BASE_PATH`
  env var.
- **basePath:** Pages serves the site from `/new-eclectic-website/`, so the CI
  build sets `BASE_PATH=/new-eclectic-website`. Locally `BASE_PATH` is unset →
  served at `/`.
- **Image paths:** because `images.unoptimized` is required for a static export,
  `next/image` does **not** apply `basePath` to a raw `src`. So **all images go
  through `src/components/Img.tsx`** (a wrapper that prefixes the basePath), and
  raw `<img>`/asset paths use `assetPath()` from the same file. **If you add an
  image, import `Image` from `@/components/Img` (not `next/image`), or wrap the
  path in `assetPath()`.** Otherwise it 404s on the live site.
- **Deploy workflow:** `.github/workflows/deploy.yml` runs on push to `main`
  (and manual dispatch): `npm ci` → `next build` (with `BASE_PATH`) →
  upload `./out` → `deploy-pages`.

### To deploy a change
```bash
git add -A && git commit -m "..." && git push origin main
```
That's it — the workflow rebuilds and redeploys (~1 min). Watch it at the repo's
**Actions** tab.

### First-time / re-enabling Pages
Pages is enabled with **Source = GitHub Actions** (repo Settings → Pages).
Private-repo Pages needs a paid plan, which is why the repo is **public**.

---

## 6. Brand & design tokens

Defined in `src/app/globals.css` (`@theme`), used as Tailwind utilities:

| Token | Value | Utility examples |
| --- | --- | --- |
| Navy (primary) | `#2a315f` | `bg-navy` `text-navy` `border-navy` |
| Navy deep | `#1f2450` | `bg-navy-deep` |
| Gold (accent) | `#e8c700` | `text-gold` `bg-gold` |
| Ink | `#171717` | `text-ink` |
| Muted / muted-2 | `#545454` / `#828282` | `text-muted` `text-muted-2` |
| Surface | `#f5f5f7` | `bg-surface` |
| Font | Inter | `font-sans` (default) |

Logo: the **eclectic digital** wordmark + `#` speech-bubble is an inline SVG in
`Header.tsx` (recreated, not an image file). Drop a real logo asset in `public/`
and swap it in if you get one.

---

## 7. Known content gaps / follow-ups

These are content placeholders left from the Figma build — swap in real copy:

- **FAQ:** only answer #1 came from Figma; answers **02–05** are on-brand
  placeholders (`Faq.tsx`).
- **Services:** the "React & Next.js Development" row currently reuses the
  WordPress icon (`Services.tsx`) — give it its own icon.
- **Testimonials:** one client-logo in the strip is a placeholder.
- **Big Quote:** attributed to "Soela / Founder of Spiritude" with a monogram
  avatar (no real photo) — add a real headshot if available.
- **Footer:** may still show a faint "JOSEPH" watermark / template links from the
  source design — review against the eclectic-digital brand.
- All CTA links (`#contact`, `#`) are placeholders — wire to real destinations.
- `netlify.toml` in the repo is **inert** (leftover) — safe to delete; hosting is
  GitHub Pages, not Netlify.

---

## 8. Accounts / access

- The repo lives under the GitHub account **`nikitawadhawan-cmyk`** (the machine's
  `gh` CLI is authenticated for it, so `git push` works directly).
- There is a *separate, unconnected* account `nikita-wadhawan-eclectic` with an
  empty repo of the same name — **not** used and not accessible from here.

---

_Last updated: handover generated after the viewport-robustness fixes
(commit `3cb11a5`)._
