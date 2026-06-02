# aipowered.xyz — Style & Architecture Brief

Use this document as a reference when working on the aipowered.xyz codebase.

---

## Stack

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript (strict)
- **Styling:** Vanilla CSS — no Tailwind, no CSS-in-JS, no component libraries
- **Images:** `next/image` with external CDN (Cloudflare R2)
- **CDN base URL:** `https://pub-557b5f7935344f8e91f1d0f115f8ec73.r2.dev` (configured in `lib/cdn.ts`)
- **Dependencies:** Intentionally minimal — only Next.js, React, and TypeScript

---

## Directory Structure

```
app/
  layout.tsx        # Root layout (Google Fonts imports, metadata)
  page.tsx          # Single-page landing — composes all sections
  globals.css       # ALL styling lives here (~32KB, single file)
components/         # 29 components, one per section/feature
lib/
  cdn.ts            # CDN URL constant
public/images/      # Local fallback images
```

---

## Design Tokens (CSS Custom Properties)

### Colors

```css
/* Backgrounds (dark → light) */
--bg-black:    #0A0A0A
--bg-charcoal: #141414
--bg-dark:     #1A1A1A
--bg-mid:      #222222
--bg-light:    #F5F5F0
--bg-cream:    #FAFAF7

/* Text */
--text-white:     #FFFFFF
--text-grey:      #888888
--text-dark-grey: #666666
--text-black:     #0A0A0A
--text-muted:     rgba(255,255,255,0.35)

/* Accent */
--accent:    #9BB0C4   /* blue-grey — hovers, highlights, active states */
--off-white: #E8E8E4
```

**Other notable colors:**
- Success/green: `#8BC49A` (checkmarks, spots indicator, pulsing dots)
- Borders (dark bg): `rgba(255,255,255,0.06)`
- Borders (light bg): `rgba(0,0,0,0.08)`

### Typography

Three font families, loaded via Google Fonts in `layout.tsx`:

| Role | Family | Weights | Usage |
|------|--------|---------|-------|
| Sans (default) | **Inter** | 300–900 | Body copy, nav, descriptions |
| Serif / Display | **Space Grotesk** | 300–700 | h1, h2, large numbers |
| Mono | **JetBrains Mono** | 400–600 | Labels, tags, stats, code-style text |

```css
--sans:  'Inter', -apple-system, BlinkMacSystemFont, sans-serif
--serif: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif
--mono:  'JetBrains Mono', monospace
```

**Sizing:**
- h1: `clamp(42px, 5.5vw, 72px)`, line-height ~1.06–1.12
- h2: `clamp(30px, 4vw, 50px)`, line-height ~1.12
- Body: 16px base, line-height 1.6
- Long-form body: line-height 1.7–1.8

### Spacing

- Section padding: `100px 48px` (desktop), `72px 24px` (mobile)
- Container max-width: `1100px` (narrow variant: `800px`)
- Mobile breakpoint: `900px`

---

## Component Patterns

### Server vs Client

- Default is **server components** (no directive needed)
- Add `"use client"` only when component uses hooks (`useState`, `useEffect`)
- Client components: Nav, Modes, Levels, FAQ, Social, Comparison, ScrollAnimator, BackToTop

### Pattern 1: Scroll Animation (most common)

Elements use `.anim` class → `ScrollAnimator` component (IntersectionObserver) adds `.visible` on viewport entry.

```tsx
<div className="anim">Fades up when scrolled into view</div>
<div className="anim d1">Staggered delay 0.1s</div>
<div className="anim d2">Staggered delay 0.2s</div>
```

```css
.anim { opacity: 0; transform: translateY(30px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
.anim.visible { opacity: 1; transform: translateY(0); }
.d1 { transition-delay: 0.1s; }
.d2 { transition-delay: 0.2s; }
/* ... up to .d5 */
```

### Pattern 2: Infinite CSS Carousel

Used for marquee, logo bar, photo carousel, social proof columns.

```css
/* Duplicate the array: [...items, ...items] */
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
```

No JavaScript needed — pure CSS animation loops.

### Pattern 3: Tabbed Interface

`useState` toggles active tab. Content renders conditionally. Used in `Modes` component.

### Pattern 4: Accordion / Expandable

`useState` tracks expanded item index. `max-height` CSS transition handles smooth expand/collapse. Used in `FAQ` and `Levels`.

### Pattern 5: Reusable Section

`Teaching` component accepts props (`photoFirst`, content via `dangerouslySetInnerHTML`). Used twice with different data.

---

## Section Order (top → bottom)

```
Nav (fixed header, backdrop blur)
SpotsTicker
Hero (2-col: headline + photo)
Marquee ("Confidence Comes From Doing")
USP (4-stat grid)
Problem (3 cards, light bg)
PhotoCarousel
LogoBar (scrolling company logos)
LeadLong (text + pull quote)
SpotsTicker (variant)
BigStatement
Modes (tabbed: Chat/Cowork/Code)
Levels (7-level expandable chart)
Teaching (photo + text)
HowItWorks (3-step: Enrol > Build > Launch)
Journey (6-phase vertical timeline)
PhotoCarousel (variant 2)
Reasons (8 reasons, 2×4 grid)
Social (3-col proof carousel)
Comparison (feature table)
WhoFor (4-card grid)
AboutSection (photo + bio + stats)
CoachingCarousel (2-row, alternating direction)
Teaching2
Offer (5-item list)
Pricing (2 cards: Solo £1,200 / Duo £2,000)
FAQ (9 items, accordion)
SpotsTicker (final)
FinalCTA
Footer
```

**Background alternation:** Dark sections (`--bg-black`, `--bg-charcoal`, `--bg-dark`) alternate with light sections (`--bg-light`, `--bg-cream`) for visual rhythm.

---

## Animation Strategy

| Type | Method | Duration |
|------|--------|----------|
| Scroll reveal | IntersectionObserver + CSS transition | 0.7s |
| Marquee/carousel | CSS `@keyframes` infinite loop | 20–40s |
| Hover states | CSS `filter: brightness(1.2)` or color shift | 0.3s |
| Accordion | CSS `max-height` transition | 0.4s |
| Ticker pulse | CSS `@keyframes tickerPulse` | 1.5s |

**Easing:** `cubic-bezier(0.16, 1, 0.3, 1)` — used consistently throughout.

---

## Responsive Approach

- Single breakpoint at `max-width: 900px`
- Grids collapse: 4-col → 2-col → 1-col
- Font sizes use `clamp()` for fluid scaling
- Section padding reduces on mobile
- Hero flips from side-by-side to stacked
- Navigation switches to simplified mobile layout

---

## Image Handling

- All images served from CDN (`lib/cdn.ts`)
- Use `next/image` with `fill` prop and `object-fit: cover`
- Hero image uses `priority` loading; all others lazy-load
- Responsive sizes: `(max-width: 768px) 100vw, 50vw`

---

## Key Conventions

1. **All styles in one file** — `globals.css`. No CSS modules, no inline styles (except rare dynamic values).
2. **Content is inline** — No CMS, no database. All copy lives directly in component files.
3. **Minimal dependencies** — Only Next.js + React + TypeScript. No UI libraries.
4. **Class naming** — BEM-ish but not strict. Section-scoped: `.hero-title`, `.usp-grid`, `.faq-item`.
5. **No Tailwind** — Do not introduce utility classes. Write semantic CSS in `globals.css`.
6. **Dark-first design** — Default background is dark. Light sections are the exception for contrast.
