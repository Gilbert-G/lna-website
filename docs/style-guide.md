# LNA Brand Style Guide

Complete design token reference for the LNA marketing website.

---

## Color Palette

### Primary

| Token         | Hex       | Usage                                             |
| ------------- | --------- | ------------------------------------------------- |
| `primary-50`  | `#EFF6FF` | Light backgrounds, hover states                   |
| `primary-100` | `#DBEAFE` | Subtle accents, badges                            |
| `primary-200` | `#BFDBFE` | Borders, dividers                                 |
| `primary-300` | `#93C5FD` | Secondary elements                                |
| `primary-400` | `#60A5FA` | Links, interactive elements                       |
| `primary-500` | `#3B82F6` | Hover state on primary buttons                    |
| `primary-600` | `#2563EB` | **Primary brand color** — buttons, CTAs, headings |
| `primary-700` | `#1D4ED8` | Active/pressed state                              |
| `primary-800` | `#1E40AF` | Dark accents                                      |
| `primary-900` | `#1E3A8A` | Deep accents, dark mode primary                   |

### Secondary (Indigo Accent)

| Token           | Hex       | Usage                                          |
| --------------- | --------- | ---------------------------------------------- |
| `secondary-50`  | `#EEF2FF` | Light accent backgrounds                       |
| `secondary-100` | `#E0E7FF` | Subtle accent fills                            |
| `secondary-200` | `#C7D2FE` | Accent borders                                 |
| `secondary-400` | `#818CF8` | Accent interactive elements                    |
| `secondary-500` | `#6366F1` | **Secondary brand color** — accents, gradients |
| `secondary-600` | `#4F46E5` | Secondary buttons                              |
| `secondary-700` | `#4338CA` | Active/pressed accent                          |

### Neutrals (Slate)

| Token         | Hex       | Usage                               |
| ------------- | --------- | ----------------------------------- |
| `neutral-50`  | `#F8FAFC` | Page backgrounds                    |
| `neutral-100` | `#F1F5F9` | Card backgrounds, alternating rows  |
| `neutral-200` | `#E2E8F0` | Borders, dividers                   |
| `neutral-300` | `#CBD5E1` | Disabled states, placeholders       |
| `neutral-400` | `#94A3B8` | Muted text, icons                   |
| `neutral-500` | `#64748B` | Secondary text                      |
| `neutral-600` | `#475569` | Body text                           |
| `neutral-700` | `#334155` | Headings (light mode)               |
| `neutral-800` | `#1E293B` | High-contrast text                  |
| `neutral-900` | `#0F172A` | Darkest text, dark mode backgrounds |
| `neutral-950` | `#020617` | Dark mode deep backgrounds          |

### Semantic Colors

| Token         | Hex       | Usage               |
| ------------- | --------- | ------------------- |
| `success-50`  | `#F0FDF4` | Success backgrounds |
| `success-500` | `#22C55E` | Success indicators  |
| `success-700` | `#15803D` | Success text        |
| `warning-50`  | `#FFFBEB` | Warning backgrounds |
| `warning-500` | `#F59E0B` | Warning indicators  |
| `warning-700` | `#B45309` | Warning text        |
| `error-50`    | `#FEF2F2` | Error backgrounds   |
| `error-500`   | `#EF4444` | Error indicators    |
| `error-700`   | `#B91C1C` | Error text          |

### Gradients

| Name              | Value                                       | Usage                         |
| ----------------- | ------------------------------------------- | ----------------------------- |
| `brand-gradient`  | `linear-gradient(135deg, #2563EB, #6366F1)` | Hero backgrounds, CTA banners |
| `subtle-gradient` | `linear-gradient(180deg, #F8FAFC, #FFFFFF)` | Section transitions           |

---

## Typography

### Font Families

| Token         | Font           | Fallback                | Usage                   |
| ------------- | -------------- | ----------------------- | ----------------------- |
| `--font-sans` | Inter          | `system-ui, sans-serif` | Body text, headings, UI |
| `--font-mono` | JetBrains Mono | `monospace`             | Code, technical content |

### Type Scale

| Element       | Size              | Weight           | Line Height | Letter Spacing |
| ------------- | ----------------- | ---------------- | ----------- | -------------- |
| **H1**        | `3.5rem` (56px)   | 800 (Extra Bold) | 1.1         | `-0.02em`      |
| **H2**        | `2.25rem` (36px)  | 700 (Bold)       | 1.2         | `-0.01em`      |
| **H3**        | `1.5rem` (24px)   | 600 (Semibold)   | 1.3         | `0`            |
| **H4**        | `1.25rem` (20px)  | 600 (Semibold)   | 1.4         | `0`            |
| **H5**        | `1.125rem` (18px) | 600 (Semibold)   | 1.4         | `0`            |
| **H6**        | `1rem` (16px)     | 600 (Semibold)   | 1.5         | `0`            |
| **Body (lg)** | `1.125rem` (18px) | 400 (Regular)    | 1.7         | `0`            |
| **Body**      | `1rem` (16px)     | 400 (Regular)    | 1.7         | `0`            |
| **Body (sm)** | `0.875rem` (14px) | 400 (Regular)    | 1.6         | `0`            |
| **Small**     | `0.75rem` (12px)  | 400 (Regular)    | 1.5         | `0.01em`       |
| **Caption**   | `0.75rem` (12px)  | 500 (Medium)     | 1.5         | `0.04em`       |

### Responsive Heading Adjustments

On screens below 768px:

| Element | Mobile Size      |
| ------- | ---------------- |
| H1      | `2.25rem` (36px) |
| H2      | `1.75rem` (28px) |
| H3      | `1.25rem` (20px) |

---

## Spacing Scale

Base unit: **4px**

| Token       | Value  | Usage                      |
| ----------- | ------ | -------------------------- |
| `space-0`   | `0px`  | —                          |
| `space-0.5` | `2px`  | Micro spacing              |
| `space-1`   | `4px`  | Tight gaps                 |
| `space-2`   | `8px`  | Inline spacing, icon gaps  |
| `space-3`   | `12px` | Small padding              |
| `space-4`   | `16px` | Default padding, gaps      |
| `space-5`   | `20px` | Medium spacing             |
| `space-6`   | `24px` | Card padding, section gaps |
| `space-8`   | `32px` | Large padding              |
| `space-10`  | `40px` | Section padding (mobile)   |
| `space-12`  | `48px` | Section gaps               |
| `space-16`  | `64px` | Section padding (desktop)  |
| `space-20`  | `80px` | Large section spacing      |
| `space-24`  | `96px` | Hero padding               |

---

## Border Radius Tokens

| Token         | Value    | Usage                        |
| ------------- | -------- | ---------------------------- |
| `radius-none` | `0px`    | —                            |
| `radius-sm`   | `4px`    | Badges, tags                 |
| `radius-md`   | `8px`    | Inputs, small cards          |
| `radius-lg`   | `12px`   | Cards, dialogs               |
| `radius-xl`   | `16px`   | Large cards, sections        |
| `radius-2xl`  | `24px`   | Hero elements, feature cards |
| `radius-full` | `9999px` | Pills, avatars, toggles      |

---

## Shadow Tokens

| Token          | Value                                                               | Usage                        |
| -------------- | ------------------------------------------------------------------- | ---------------------------- |
| `shadow-sm`    | `0 1px 2px rgba(0,0,0,0.05)`                                        | Subtle depth, inputs         |
| `shadow-md`    | `0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)`    | Cards, dropdowns             |
| `shadow-lg`    | `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`  | Elevated cards, modals       |
| `shadow-xl`    | `0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)` | Floating elements, popovers  |
| `shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.05)`                                  | Inset inputs, pressed states |

---

## Icons

**Library:** [Lucide Icons](https://lucide.dev/)

**Style:** Outlined (not filled), consistent 1.5px stroke weight.

**Sizing:**

| Context              | Size          |
| -------------------- | ------------- |
| Inline with text     | `16px`        |
| Buttons              | `18px`        |
| Nav items            | `20px`        |
| Feature cards        | `24px`        |
| Hero / section icons | `32px`–`48px` |

**Color:** Icons inherit the text color of their parent element. Use `currentColor` for fill/stroke.

---

## Imagery Style

**Photography:** Not primary. Use sparingly — only for team photos on /about.

**Illustrations:**

- Modern, clean, geometric style
- Flat or semi-flat with subtle gradients
- Use brand colors (primary blue + secondary indigo)
- Abstract document/data/flow visualizations
- Consistent line weight and corner radius with icon style

**Product Screenshots:**

- Wrapped in a browser chrome or device frame
- Light drop shadow for depth
- Rounded corners matching `radius-xl`
- Used in hero sections and feature sections

**Patterns & Textures:**

- Subtle dot grid or line grid for section backgrounds
- Geometric shapes as decorative accents (circles, rounded rectangles)
- Keep backgrounds clean — avoid clutter

---

## Dark Mode

The site supports light and dark modes via CSS custom properties (oklch color space). Token mappings:

| Surface        | Light Mode              | Dark Mode               |
| -------------- | ----------------------- | ----------------------- |
| Background     | `neutral-50` (#F8FAFC)  | `neutral-950` (#020617) |
| Surface        | `white` (#FFFFFF)       | `neutral-900` (#0F172A) |
| Border         | `neutral-200` (#E2E8F0) | `neutral-800` (#1E293B) |
| Text primary   | `neutral-900` (#0F172A) | `neutral-50` (#F8FAFC)  |
| Text secondary | `neutral-600` (#475569) | `neutral-400` (#94A3B8) |
| Primary        | `primary-600` (#2563EB) | `primary-400` (#60A5FA) |

---

## Motion & Transitions

| Property          | Duration | Easing        |
| ----------------- | -------- | ------------- |
| Color / opacity   | `150ms`  | `ease-in-out` |
| Transform (hover) | `200ms`  | `ease-out`    |
| Layout / size     | `300ms`  | `ease-in-out` |
| Page transitions  | `300ms`  | `ease-in-out` |

Respect `prefers-reduced-motion` — disable non-essential animations when the user has this preference set.
