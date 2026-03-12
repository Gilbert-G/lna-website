# LNA Website — Navigation Structure

## Header Navigation

### Desktop

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  [LNA Logo]    Features   Pricing   About   Blog    [Demo →] │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

| Element        | Type               | Destination |
| -------------- | ------------------ | ----------- |
| LNA Logo       | Logo link          | /           |
| Features       | Nav link           | /features   |
| Pricing        | Nav link           | /pricing    |
| About          | Nav link           | /about      |
| Blog           | Nav link           | /blog       |
| Request a Demo | Primary CTA button | /contact    |

**Behavior:**

- Fixed/sticky on scroll (becomes slightly transparent or blurred background)
- Active page indicated by underline or color change on the nav link
- Logo links back to homepage

### Mobile (< 768px)

```
┌──────────────────────────────────┐
│  [LNA Logo]          [☰ Menu]   │
└──────────────────────────────────┘

Expanded:
┌──────────────────────────────────┐
│  [LNA Logo]          [✕ Close]  │
├──────────────────────────────────┤
│                                   │
│  Features                         │
│  Pricing                          │
│  About                            │
│  Blog                             │
│                                   │
│  ┌──────────────────────────┐    │
│  │   Request a Demo          │    │
│  └──────────────────────────┘    │
│                                   │
└──────────────────────────────────┘
```

**Behavior:**

- Hamburger icon toggles a full-height slide-in or overlay menu
- Nav links are stacked vertically with generous tap targets (min 48px height)
- CTA button appears at the bottom of the mobile menu, full-width
- Menu closes on link tap or close button

---

## Footer

### Desktop Layout

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  ┌──────────────┬────────────┬────────────┬────────────────┐ │
│  │  LNA          │  Product   │  Company   │  Legal         │ │
│  │               │            │            │                │ │
│  │  Brief tagline│  Features  │  About     │  Privacy Policy│ │
│  │  about LNA.   │  Pricing   │  Blog      │  Terms of      │ │
│  │               │            │  Contact   │  Service       │ │
│  │  Social icons │            │            │                │ │
│  │  [tw] [li]    │            │            │                │ │
│  │  [gh]         │            │            │                │ │
│  └──────────────┴────────────┴────────────┴────────────────┘ │
│                                                               │
│  ─────────────────────────────────────────────────────────── │
│  © 2026 Manureva Solutions. All rights reserved.              │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

### Footer Columns

**Column 1 — Brand**

- LNA logo (white variant on dark footer background)
- One-line description: "AI-powered document processing platform"
- Social media icons:
  - Twitter / X
  - LinkedIn
  - GitHub (if applicable)

**Column 2 — Product**
| Label | Destination |
| --- | --- |
| Features | /features |
| Pricing | /pricing |

**Column 3 — Company**
| Label | Destination |
| --- | --- |
| About | /about |
| Blog | /blog |
| Contact | /contact |

**Column 4 — Legal**
| Label | Destination |
| --- | --- |
| Privacy Policy | /privacy |
| Terms of Service | /terms |

**Bottom Bar**

- Copyright: "© 2026 Manureva Solutions. All rights reserved."

### Mobile Footer

```
┌──────────────────────────────────┐
│                                   │
│  [LNA Logo]                       │
│  AI-powered document processing   │
│  platform.                        │
│                                   │
│  [tw] [li] [gh]                  │
│                                   │
│  ▸ Product                        │
│    Features                       │
│    Pricing                        │
│                                   │
│  ▸ Company                        │
│    About                          │
│    Blog                           │
│    Contact                        │
│                                   │
│  ▸ Legal                          │
│    Privacy Policy                 │
│    Terms of Service               │
│                                   │
│  ──────────────────────────────  │
│  © 2026 Manureva Solutions.       │
│  All rights reserved.             │
│                                   │
└──────────────────────────────────┘
```

**Behavior:**

- Footer columns may be collapsible accordions on mobile (column headers as toggles)
- Or simply stacked in order with clear section dividers
- Social icons remain visible (not collapsed)

---

## Breadcrumbs

Not required for the current sitemap depth. All pages are top-level. If sub-pages are added in the future (e.g., /blog/:slug), breadcrumbs should be introduced.

---

## Skip Navigation

For accessibility, include a hidden "Skip to main content" link as the first focusable element in the header. It becomes visible on keyboard focus.

```html
<a href="#main" class="sr-only focus:not-sr-only">Skip to main content</a>
```
