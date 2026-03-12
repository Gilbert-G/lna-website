# LNA Brand Style Guide

## Color Palette

### Primary

| Name          | Hex       | Usage                             |
| ------------- | --------- | --------------------------------- |
| Primary       | `#2563EB` | Buttons, links, key accents, logo |
| Primary Hover | `#1D4ED8` | Button hover states               |
| Primary Light | `#DBEAFE` | Subtle backgrounds, badges        |
| Primary Dark  | `#1E40AF` | Dark-mode accent, emphasis text   |

### Secondary (Indigo Accent)

| Name            | Hex       | Usage                                 |
| --------------- | --------- | ------------------------------------- |
| Secondary       | `#6366F1` | Accent highlights, gradient endpoints |
| Secondary Hover | `#4F46E5` | Accent hover states                   |
| Secondary Light | `#E0E7FF` | Tag backgrounds, secondary badges     |
| Secondary Dark  | `#4338CA` | Dark-mode accent                      |

### Neutrals (Slate)

| Name      | Hex       | Usage                               |
| --------- | --------- | ----------------------------------- |
| Slate 50  | `#F8FAFC` | Page backgrounds, cards             |
| Slate 100 | `#F1F5F9` | Muted backgrounds, table rows (alt) |
| Slate 200 | `#E2E8F0` | Borders, dividers                   |
| Slate 300 | `#CBD5E1` | Disabled states, placeholders       |
| Slate 400 | `#94A3B8` | Muted text, icons                   |
| Slate 500 | `#64748B` | Secondary text, captions            |
| Slate 600 | `#475569` | Body text                           |
| Slate 700 | `#334155` | Headings, strong text               |
| Slate 800 | `#1E293B` | Titles, navigation text             |
| Slate 900 | `#0F172A` | Primary text, footer background     |
| Slate 950 | `#020617` | Maximum contrast text               |

### Semantic Colors

| Name          | Hex       | Usage                               |
| ------------- | --------- | ----------------------------------- |
| Success       | `#16A34A` | Success messages, positive metrics  |
| Success Light | `#DCFCE7` | Success backgrounds                 |
| Warning       | `#D97706` | Warning messages, attention badges  |
| Warning Light | `#FEF3C7` | Warning backgrounds                 |
| Error         | `#DC2626` | Error messages, destructive actions |
| Error Light   | `#FEE2E2` | Error backgrounds                   |
| Info          | `#2563EB` | Info messages (reuses primary)      |
| Info Light    | `#DBEAFE` | Info backgrounds                    |

### Dark Mode

All colors use oklch values in CSS custom properties for perceptual uniformity. See `globals.css` for the full dark-mode token mapping. The design system automatically switches when the `.dark` class is applied to the root element.

---

## Typography

### Font Families

| Role        | Family         | CSS Variable        | Source                   |
| ----------- | -------------- | ------------------- | ------------------------ |
| Body / UI   | Inter          | `--font-sans`       | Google Fonts (next/font) |
| Code / Mono | JetBrains Mono | `--font-geist-mono` | Google Fonts (next/font) |

### Type Scale

| Token     | Element          | Size            | Weight          | Line Height | Letter Spacing |
| --------- | ---------------- | --------------- | --------------- | ----------- | -------------- |
| `h1`      | Page title       | 48px (3rem)     | 800 (ExtraBold) | 1.1         | -0.025em       |
| `h2`      | Section title    | 36px (2.25rem)  | 700 (Bold)      | 1.2         | -0.02em        |
| `h3`      | Subsection title | 30px (1.875rem) | 700 (Bold)      | 1.25        | -0.015em       |
| `h4`      | Card title       | 24px (1.5rem)   | 600 (SemiBold)  | 1.3         | -0.01em        |
| `h5`      | Label heading    | 20px (1.25rem)  | 600 (SemiBold)  | 1.4         | 0              |
| `h6`      | Small heading    | 16px (1rem)     | 600 (SemiBold)  | 1.5         | 0              |
| `body-lg` | Lead paragraph   | 18px (1.125rem) | 400 (Regular)   | 1.7         | 0              |
| `body`    | Default body     | 16px (1rem)     | 400 (Regular)   | 1.6         | 0              |
| `body-sm` | Small body       | 14px (0.875rem) | 400 (Regular)   | 1.5         | 0              |
| `small`   | Fine print       | 12px (0.75rem)  | 400 (Regular)   | 1.5         | 0.01em         |
| `caption` | Captions, labels | 12px (0.75rem)  | 500 (Medium)    | 1.4         | 0.04em         |

### Responsive Scaling

Headings scale down on mobile (< 768px):

| Token | Desktop | Mobile         |
| ----- | ------- | -------------- |
| `h1`  | 48px    | 32px (2rem)    |
| `h2`  | 36px    | 28px (1.75rem) |
| `h3`  | 30px    | 24px (1.5rem)  |
| `h4`  | 24px    | 20px (1.25rem) |

---

## Spacing

Base unit: **4px**

| Token       | Value | Common Use                    |
| ----------- | ----- | ----------------------------- |
| `space-0.5` | 2px   | Tight inline gaps             |
| `space-1`   | 4px   | Inline element spacing        |
| `space-2`   | 8px   | Icon gaps, tight padding      |
| `space-3`   | 12px  | Input padding, small gaps     |
| `space-4`   | 16px  | Default padding, card padding |
| `space-5`   | 20px  | Medium spacing                |
| `space-6`   | 24px  | Section inner padding         |
| `space-8`   | 32px  | Between content blocks        |
| `space-10`  | 40px  | Between sections (small)      |
| `space-12`  | 48px  | Between sections (medium)     |
| `space-16`  | 64px  | Section padding (desktop)     |
| `space-20`  | 80px  | Large section breaks          |
| `space-24`  | 96px  | Page-level vertical rhythm    |

**Layout constraints:**

- Max content width: `1280px` (max-w-7xl)
- Container horizontal padding: `16px` (mobile), `24px` (tablet), `32px` (desktop)

---

## Border Radius

Base radius: **0.625rem (10px)**

| Token         | Value  | Usage                         |
| ------------- | ------ | ----------------------------- |
| `radius-sm`   | 6px    | Small elements, tags, badges  |
| `radius-md`   | 8px    | Inputs, small cards           |
| `radius-lg`   | 10px   | Cards, modals, containers     |
| `radius-xl`   | 14px   | Large cards, hero sections    |
| `radius-2xl`  | 18px   | Feature highlight sections    |
| `radius-3xl`  | 22px   | Large hero images             |
| `radius-4xl`  | 26px   | Full-bleed hero containers    |
| `radius-full` | 9999px | Pill buttons, avatars, badges |

---

## Shadows

| Token       | Value                                                                 | Usage                       |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)`                                       | Subtle elevation, inputs    |
| `shadow`    | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`       | Cards, dropdowns            |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`    | Elevated cards, hover state |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`  | Modals, popovers            |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Feature highlights          |

---

## Icons

**Library:** Lucide React (`lucide-react`)
**Style:** Outlined (stroke-based), consistent 24px default size
**Stroke width:** 2px (default)

**Usage guidelines:**

- Use icons alongside text for clarity — avoid icon-only buttons without tooltips
- Match icon color to adjacent text color
- Common sizes: 16px (inline), 20px (buttons), 24px (default), 32px (feature cards), 48px (hero highlights)

**Commonly used icons:**

- Navigation: `Menu`, `X`, `ChevronDown`, `ArrowRight`
- Features: `FileText`, `Brain`, `Table`, `Upload`, `Download`, `Search`, `MessageSquare`, `Shield`
- Actions: `Check`, `AlertCircle`, `Info`, `ExternalLink`
- Social: `Twitter`, `Linkedin`, `Github`

---

## Imagery

**Style direction:**

- Modern, clean, geometric illustrations
- Product screenshots with subtle shadows and rounded corners
- Blue-to-indigo gradient accents on decorative elements
- Light, airy compositions with plenty of whitespace

**Illustration style:**

- Flat or semi-flat with subtle gradients
- Primary blue and indigo as dominant colors
- Geometric shapes (circles, rounded rectangles, lines)
- Avoid photorealistic imagery on marketing pages — use real screenshots only for product UI demos

**Screenshots:**

- Browser-chrome mockup or clean drop-shadow framing
- Use `radius-2xl` rounding on screenshot containers
- Optional subtle gradient background behind screenshots

**Open Graph / Social:**

- Default OG template: 1200×630px
- LNA logo top-left, page title centered, gradient background
- See `public/brand/og-default.svg`

---

## Component Patterns

These patterns complement the shadcn/ui component library already in use:

| Pattern          | Description                                                        |
| ---------------- | ------------------------------------------------------------------ |
| Primary button   | Blue background, white text, rounded-lg                            |
| Secondary button | Outline or ghost variant, slate text                               |
| CTA Banner       | Full-width section, primary or gradient bg, centered text + button |
| Feature Card     | Icon + heading + description, border, shadow on hover              |
| Pricing Card     | Title + price + feature list + CTA, highlighted "Popular" badge    |
| Stat Counter     | Large number + label, used in About page                           |
| Testimonial      | Quote text + avatar + name/title/company                           |
| Accordion Item   | Collapsible content, chevron icon toggle                           |

---

## Logo Usage

- Minimum clear space: equal to the height of the "L" character on all sides
- Minimum size: 80px width for full logo, 24px for icon-only
- Never stretch, rotate, or recolor outside the approved variants
- Approved variants: full color, white (dark backgrounds), dark (light backgrounds), icon-only

See `public/brand/` for all logo files:

- `logo.svg` — Full color on light backgrounds
- `logo-white.svg` — White on dark backgrounds
- `logo-dark.svg` — Dark on light backgrounds
- `logo-icon.svg` — Icon-only mark
