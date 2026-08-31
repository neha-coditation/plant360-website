# DESIGN_NOTES.md

Extracted from the approved reference landing page (`Plant360 Landing Page (2).html`, a Framer/bundler export). This is the creative source of truth for the Next.js rebuild. No em dashes anywhere in copy.

## 1. Palette (maps directly to IBM Carbon Gray 100 dark theme)

Reference hex values and their Carbon token equivalents:

| Reference hex | Usage in reference | Carbon token (Gray 100 dark) |
|---|---|---|
| `#161616` | Site background | `$background` (gray-100) |
| `#1c1c1c` / `#1f1f1f` | Grid lines, subtle raise | `$layer-01` region tints |
| `#202020` / `#262626` | Cards, active rows, borders | `$layer-01` / `$layer-02` |
| `#2a2a2a` | Card borders | `$border-subtle-02` |
| `#393939` | Header border, dividers | `$border-subtle-01` |
| `#525252` | Muted dividers/icons | `$border-strong-01` |
| `#6f6f6f` | Helper/label text | `$text-helper` |
| `#8d8d8d` | Inactive text | `$text-placeholder` |
| `#a8a8a8` | Secondary muted | `$text-secondary` (lighter) |
| `#c6c6c6` | Nav links, body-secondary | `$text-secondary` |
| `#e0e0e0` | Body text on dark | `$text-primary` (softened) |
| `#f4f4f4` | Headings, primary text | `$text-primary` (gray-10) |
| `#ffffff` | Max-contrast, button text | white |
| `#0f62fe` | Single accent (Blue 60) | `$button-primary` / `$link-primary` |
| `#0353e9` | Accent hover | `$button-primary-hover` |
| `#78a9ff` | Accent-light (labels, glow) | Blue 40 |
| `#a6c8ff` / `#d0e2ff` | Accent very light | Blue 30 / Blue 20 |
| `#42be65` | Success ticks | `$support-success` (green 40) |
| `#da1e28` | "no connection" error marks | `$support-error` (red 60) |
| `#2f4d86` / `#2f56a0` | Muted blue diagram strokes | derived |

Rule: exactly one accent (`#0f62fe`), everything else is grayscale + status colors. White theme only for sections that explicitly need contrast.

CSS custom property surface: expose `--accent: #0f62fe` on `<main>` so components inherit it, exactly as the reference does (`style="--accent: {{ accentVar }}"`).

## 2. Type scale

- **IBM Plex Sans** 300/400/500/600 for UI + headings. **IBM Plex Mono** 400 for eyebrows, labels, metrics, section kickers. Self-host via `next/font`, `display: swap`.
- Large headings are **light weight (300)** with tight letter-spacing (approx `-0.02em`), per reference.
- Observed sizes -> our scale:
  - H1 hero: `54px` (clamp down on mobile ~34px), weight 300, line-height ~1.05
  - Section H2: `46px` / `30px`, weight 300
  - Sub-heading: `21-22px`
  - Body: `18px` (lead), `16px`, `15px`
  - UI/nav: `14.5px`
  - Mono labels/eyebrows: `13px`, `12.5px`, `12px`, `11px`, `10.5px` with letter-spacing `.04em`-`.16em`, uppercase
- `::selection { background:#0f62fe; color:#fff }`

## 3. Layout tokens

- Content max-width: `1280px`, side padding `32px` (desktop). Header height `64px`.
- Header: `position:sticky; top:0; z-index:50; background:rgba(22,22,22,.92); backdrop-filter:blur(8px); border-bottom:1px solid #393939`.
- Hero background grid: layered `linear-gradient(#1f1f1f 1px,transparent 1px)` at `64px 64px`, `opacity:.5`, radial mask fade. Use for hero + CTA band ambiance.
- Follow Carbon 2x grid + spacing scale for section rhythm.

## 4. Animations (all CSS-first, all gated behind `prefers-reduced-motion`)

Keyframes lifted from the reference (`_ref_style_1`):

```css
@keyframes p360rise  { 0%{transform:translateY(0);opacity:0} 9%{opacity:1} 78%{opacity:.95} 100%{transform:translateY(calc(-1 * var(--travel,330px)));opacity:0} }
@keyframes p360glow  { 0%,100%{box-shadow:0 0 0 0 rgba(15,98,254,0)} 50%{box-shadow:0 0 20px 2px rgba(15,98,254,.4)} }
@keyframes p360pulse { 0%,100%{opacity:.35} 50%{opacity:1} }
@keyframes p360marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
@keyframes p360scan  { 0%{top:6%;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:88%;opacity:0} }
@keyframes p360blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
@keyframes p360dash  { to{stroke-dashoffset:-16} }
```

- `p360rise`: data particles rising up the stack visual ("data flows up").
- `p360glow`: pulse on the active/apply layer.
- `p360scan`: scan line over the "Capture & digitize" step panel.
- `p360marquee`: integrations logo strip.
- `p360dash`: animated connector strokes in diagrams (SVG `stroke-dasharray`).
- `p360blink`: agent cursor/status blink.
- Counter animation: cubic ease-out (`1 - (1-p)^3`) over `1700ms`, triggered by IntersectionObserver at 0.25 threshold. Targets: 83,000 drawings, 250,000 datasheets.
- All wrapped in `@media (prefers-reduced-motion: reduce)` -> `animation: none`, show final state.

## 5. Landing page section order (rebuild targets)

1. Announcement bar (CMS): "New · ChangeIQ cuts Management of Change prep by 40%+  See it in action →"
2. Sticky header (dark, blur) + primary "Book a demo" button.
3. **Hero** — eyebrow "The full-stack industrial data & AI platform"; H1 "Keep your system of record live, and turn it into working AI agents."; supporting line; CTAs "Book a demo" / "See the platform". Right: animated stacked-layers visual (04 Apply / 03 Build / 02 Foundation / 01 Sources two feeds) with rising-data motion.
4. **Not another point solution** — point-solutions-vs-one-stack comparison diagram (Digitization tool / Graph tool / AI pilot disconnected + "STALLS AT PILOT" vs Digitize→Structure→Build→Apply "COMPOUNDS IN PRODUCTION").
5. **The Plant360 difference** — one-pipeline / two-outputs diagram (ingest CAD·DWG·PDF-even-scanned·datasheets·existing records -> System of Record + Asset Knowledge Graph, in sync) + benefits triad (records that never drift / AI with real context / one pipeline zero duplication).
6. **The platform, four connected layers** — 4 cards (Convert 70% faster·50% lower cost; UniGraph 10× retrieval·80% less hunting; AI360 agents in days; AI Apps & Agents 50%+ efficiency), each links to its platform page.
7. **How it works** — 3 steps: Capture & digitize (scan-line panel) / Sync records & connect / Deploy AI agents (agent monitoring graph, ticks: MoC package · 14 assets, Risk review routed).
8. **AI use-cases & agents** — interactive switcher, 6 cases (data in `_ref_dc.js`), headline "The AI isn't hidden in a roadmap. It's running real plant work today."
9. **Outcomes** — animated counters (83,000+ / 250,000+) + metrics grid (50%+, 70%, 10×, 40%+).
10. **Integrations** — "Your existing tools are inputs, not the platform." Logo marquee (CMS slots), open API / no lock-in.
11. **Final CTA band** — "Ready to turn your plant's documents into AI agents?" + Book a demo / Talk to engineering.
12. **Footer** — 4 col (Platform / Company / Resources / Legal), ISO 27001 line, LinkedIn + X, © Plant360.AI 2026, "DESIGN SYSTEM: IBM CARBON".

## 6. Use-case switcher data (from `_ref_dc.js`, verbatim)

| # | Title | Product/Runs on | Metric |
|---|---|---|---|
| 01 | Accelerate Digital Twin & Operator Simulation | UniGraph + AI360 / Twin Data Agent | 30%+ faster implementation |
| 02 | Automated Data Sync & Resolution for EAM, CMMS | AI360 Agent / Asset Sync Agent | Zero manual reconciliation |
| 03 | Reduce errors in PTW / Control of Work | Process AI / Control of Work Agent | Fewer permit errors, less rework |
| 04 | Automate Safety & Compliance Analysis | Process AI / HAZOP Prep Agent | 50%+ faster HAZOP prep |
| 05 | Automate Operations & Maintenance Workflows | Process AI / Operations Agent | Fewer manual workflows |
| 06 | Automated Management of Change | ChangeIQ App / MoC Agent on AI360 | 40%+ less MoC prep time |

(Full descriptions preserved in `content/use-cases` for CMS seed.)

## 7. Diagram inventory (build as inline SVG/CSS, not raster)

- Hero stacked-layers visual (4 layers, two source feeds, rising particles).
- Point-solutions vs one-stack comparison.
- One-pipeline / two-outputs (sources -> convert -> System of Record + Knowledge Graph).
- Four-layer platform cards row.
- How-it-works 3 step panels (scan line, sync links, agent monitor).
- "Where it sits in the stack" mini-diagram (reused on platform pages, highlights one layer).
- Integrations marquee.

## 8. Icon/glyph language

Reference uses unicode glyphs (▤ record, ⬡ graph, ◈ build, ◆ apply, → flow). Replace with **Carbon pictograms** (`@carbon/pictograms-react`) and **Carbon icons** (`@carbon/icons-react`) for crisp, on-brand illustration in capability grids and cards.
