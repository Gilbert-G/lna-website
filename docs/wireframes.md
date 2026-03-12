# LNA Website — Wireframe Specifications

Low-fidelity wireframe specs for every page. Each spec describes layout structure, content blocks (desktop and mobile), and component types.

---

## Global Layout

All pages share this structure:

```
┌──────────────────────────────────────────┐
│  Header / Navigation                      │
├──────────────────────────────────────────┤
│                                           │
│  Page Content                             │
│                                           │
├──────────────────────────────────────────┤
│  Footer                                   │
└──────────────────────────────────────────┘
```

**Header** — See [navigation.md](./navigation.md) for full nav spec.
**Footer** — See [navigation.md](./navigation.md) for full footer spec.

---

## / — Homepage

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  [Logo]   Features  Pricing  About  Blog  [Demo CTA] │  ← Header
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────────────────┬────────────────────────┐    │
│  │  HERO TEXT           │  Hero Illustration /   │    │
│  │                      │  Product Screenshot    │    │
│  │  H1: Stop copying    │                        │    │
│  │  data by hand.       │                        │    │
│  │                      │                        │    │
│  │  Subhead: LNA uses   │                        │    │
│  │  AI to extract data  │                        │    │
│  │  from PDFs into      │                        │    │
│  │  Excel — instantly.  │                        │    │
│  │                      │                        │    │
│  │  [Request a Demo]    │                        │    │
│  │  [See Features →]    │                        │    │
│  └─────────────────────┴────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Social Proof Bar                                     │
│  ┌────┐  ┌────┐  ┌────┐  ┌────┐  ┌────┐             │
│  │Logo│  │Logo│  │Logo│  │Logo│  │Logo│              │
│  └────┘  └────┘  └────┘  └────┘  └────┘             │
│  "Trusted by 500+ teams worldwide"                    │
├──────────────────────────────────────────────────────┤
│                                                       │
│  PROBLEM STATEMENT                                    │
│  H2: Manual data entry is costing you                 │
│                                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Icon     │  │ Icon     │  │ Icon     │            │
│  │ Slow &   │  │ Error-   │  │ Expensive│            │
│  │ tedious  │  │ prone    │  │ at scale │            │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  SOLUTION OVERVIEW                                    │
│  H2: AI-powered document processing                   │
│  Body text + illustration                             │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  KEY FEATURES GRID (2×2)                              │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ Icon             │  │ Icon             │           │
│  │ Document Mgmt    │  │ AI Extraction    │           │
│  │ Description      │  │ Description      │           │
│  └──────────────────┘  └──────────────────┘          │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ Icon             │  │ Template Mapping │           │
│  │ Data Q&A         │  │ Description      │           │
│  │ Description      │  │                  │           │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  DIFFERENTIATOR SECTION                               │
│  ┌─────────────────────┬────────────────────────┐    │
│  │  Screenshot /        │  H2: Ask your          │    │
│  │  Animation of        │  documents anything    │    │
│  │  Q&A interface       │                        │    │
│  │                      │  Body: Natural-language │    │
│  │                      │  queries grounded in   │    │
│  │                      │  your data.            │    │
│  └─────────────────────┴────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HOW IT WORKS — 3 steps                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │ Step 1   │  │ Step 2   │  │ Step 3   │            │
│  │ Upload   │→ │ Extract  │→ │ Export   │            │
│  │ your PDFs│  │ with AI  │  │ to Excel │            │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  TESTIMONIAL                                          │
│  "LNA saved our team 40 hours per week..."            │
│  — Name, Title, Company                               │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  PRICING TEASER                                       │
│  H2: Plans for every team                             │
│  3 small plan cards → [View Pricing]                  │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FINAL CTA BANNER (full-width, accent background)     │
│  H2: Ready to automate your document workflows?       │
│  [Request a Demo]                                     │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Hero: stacked vertically — text above illustration, full-width
- Social proof: horizontal scroll
- Problem cards: single column stack
- Features grid: single column, swipeable or stacked
- Differentiator: image above text
- How It Works: vertical steps with connecting line
- Pricing teaser: horizontal scroll or stacked cards

**Component Types:** Hero (split), Logo Bar, Icon Cards, Feature Cards, Split Section, Steps, Testimonial Card, CTA Banner

---

## /features — Features

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO (centered)                                      │
│  H1: Everything you need to process documents         │
│  Subhead: From upload to insight — one platform.      │
│  [Request a Demo]                                     │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE CATEGORY: Document Management                │
│  ┌────────────────────┬─────────────────────────┐    │
│  │  H2 + description   │  Feature screenshot /   │    │
│  │                      │  illustration           │    │
│  │  • Multi-file upload │                        │    │
│  │  • Auto-classify     │                        │    │
│  │  • OCR support       │                        │    │
│  │  • Duplicate detect  │                        │    │
│  │  • Search & archive  │                        │    │
│  └────────────────────┴─────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE CATEGORY: Data Extraction                    │
│  (Alternating layout — image LEFT, text RIGHT)        │
│  ┌─────────────────────┬────────────────────────┐    │
│  │  Feature screenshot  │  H2 + description      │    │
│  │                      │                        │    │
│  │                      │  • Schema-free AI      │    │
│  │                      │  • Confidence scores   │    │
│  │                      │  • Batch processing    │    │
│  │                      │  • Table extraction    │    │
│  └─────────────────────┴────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE CATEGORY: Template & Mapping                 │
│  (Same pattern — alternating left/right)              │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE CATEGORY: Export                             │
│  (Same pattern — alternating left/right)              │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ★ DIFFERENTIATOR: LLM-Connected Data Q&A            │
│  (Full-width highlight section with accent bg)        │
│  ┌──────────────────────────────────────────────┐    │
│  │  Badge: "Key Differentiator"                  │    │
│  │  H2: Ask your documents anything              │    │
│  │  Body text + example queries                  │    │
│  │  Screenshot of Q&A interface                  │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ★ DIFFERENTIATOR: Chat with Context Role            │
│  (Full-width highlight section with accent bg)        │
│  ┌──────────────────────────────────────────────┐    │
│  │  Badge: "Key Differentiator"                  │    │
│  │  H2: AI that understands your domain          │    │
│  │  Body text + example roles                    │    │
│  │  Screenshot of Chat interface                 │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE CATEGORY: User Management                    │
│  (Compact — icon list, no screenshot)                 │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  COMPARISON TABLE                                     │
│  ┌──────────┬──────────┬──────────┬──────────┐       │
│  │ Feature  │  Manual  │  Generic │   LNA    │       │
│  │          │  Process │  Tools   │          │       │
│  ├──────────┼──────────┼──────────┼──────────┤       │
│  │ AI Ext.  │    ✗     │    ~     │    ✓     │       │
│  │ Q&A      │    ✗     │    ✗     │    ✓     │       │
│  │ ...      │          │          │          │       │
│  └──────────┴──────────┴──────────┴──────────┘       │
│                                                       │
├──────────────────────────────────────────────────────┤
│  FINAL CTA BANNER                                     │
│  [Request a Demo]                                     │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Feature categories: image stacked above text (full-width)
- Alternating layout becomes uniform vertical stack
- Comparison table: horizontal scroll or card-based format
- Differentiator sections: stacked, badge on top

**Component Types:** Hero (centered), Split Section (alternating), Badge, Bullet List, Highlight Section, Comparison Table, CTA Banner

---

## /pricing — Pricing

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO (centered)                                      │
│  H1: Simple, transparent pricing                      │
│  Subhead: Start free. Scale as you grow.              │
│                                                       │
│  [Monthly]  [Annual — Save 20%]  ← Toggle             │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  PRICING CARDS (3 columns)                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ │
│  │  Starter     │ │ Professional │ │  Enterprise  │  │
│  │              │ │  ★ Popular   │ │              │  │
│  │  $XX/mo      │ │  $XX/mo      │ │  Custom      │  │
│  │              │ │              │ │              │  │
│  │  • 100 docs  │ │  • 1,000 docs│ │  • Unlimited │  │
│  │  • 5 tmpl    │ │  • Unlimited │ │  • Dedicated │  │
│  │  • Email     │ │  • Q&A       │ │  • SLA       │  │
│  │              │ │  • Priority  │ │  • SSO       │  │
│  │  [Get        │ │  [Get        │ │  [Contact    │  │
│  │   Started]   │ │   Started]   │ │   Sales]     │  │
│  └──────────────┘ └──────────────┘ └──────────────┘ │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FEATURE COMPARISON TABLE                             │
│  Detailed row-by-row across all tiers                 │
│  (checkmarks and limits per row)                      │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  FAQ ACCORDION                                        │
│  ┌──────────────────────────────────────────────┐    │
│  │  ▸ Can I switch plans?                        │    │
│  │  ▸ What happens if I exceed my document limit?│    │
│  │  ▸ Do you offer a free trial?                 │    │
│  │  ▸ How does annual billing work?              │    │
│  │  ▸ Can I cancel anytime?                      │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ENTERPRISE CTA                                       │
│  H2: Need a custom solution?                          │
│  Body + [Contact Sales]                               │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Pricing cards: full-width, vertically stacked, "Popular" card first
- Comparison table: horizontal scroll or collapsible per tier
- FAQ: full-width accordion

**Component Types:** Hero (centered), Toggle, Pricing Cards, Comparison Table, Accordion, CTA Section

---

## /about — About

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO (centered, wide)                                │
│  H1: Building the future of document intelligence     │
│  Subhead: We believe data trapped in documents        │
│  should be as accessible as data in a database.       │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  OUR STORY (split)                                    │
│  ┌─────────────────────┬────────────────────────┐    │
│  │  Text block:         │  Company / team photo  │    │
│  │  Founded by           │                        │    │
│  │  Manureva Solutions   │                        │    │
│  │  to solve...          │                        │    │
│  └─────────────────────┴────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  BY THE NUMBERS (4-column stats)                      │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │  10K+   │ │  99.5%  │ │  40hrs  │ │  500+   │   │
│  │  docs   │ │ accuracy│ │  saved/ │ │  teams  │   │
│  │ processed│ │         │ │  week   │ │         │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  MISSION & VISION                                     │
│  Two-column text block or centered statement          │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  VALUES GRID (2×2)                                    │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ ⚡ Innovation     │  │ 🎯 Accuracy      │          │
│  │ Description      │  │ Description      │          │
│  └──────────────────┘  └──────────────────┘          │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │ ✨ Simplicity     │  │ 🔒 Security      │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  TEAM SECTION                                         │
│  Grid of team member cards (photo, name, role, bio)   │
│                                                       │
├──────────────────────────────────────────────────────┤
│  FINAL CTA BANNER                                     │
│  [Request a Demo]                                     │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Stats: 2×2 grid instead of 4-column
- Our Story: image above text
- Values: single column stack
- Team: single column cards

**Component Types:** Hero (centered), Split Section, Stats Counter, Values Cards, Team Cards, CTA Banner

---

## /contact — Contact

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO (centered)                                      │
│  H1: Get in touch                                     │
│  Subhead: Request a demo, ask a question, or say hi.  │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────────────────┬───────────────────────┐    │
│  │  DEMO REQUEST FORM    │  CONTACT INFO         │    │
│  │                       │                       │    │
│  │  Name      [_______]  │  📧 hello@lna.ai     │    │
│  │  Email     [_______]  │                       │    │
│  │  Company   [_______]  │  📍 Location           │    │
│  │  Role      [▾ Select] │                       │    │
│  │  Message   [_______]  │  FAQ SNIPPET           │    │
│  │            [_______]  │  ▸ How long is the     │    │
│  │                       │    demo?               │    │
│  │  [Submit Request]     │  ▸ Is there a free     │    │
│  │                       │    trial?              │    │
│  └──────────────────────┴───────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Form takes full width, contact info stacks below
- FAQ snippet below contact info

**Component Types:** Hero (centered), Form, Contact Info Cards, Accordion (mini)

---

## /blog — Blog (Placeholder)

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  HERO (centered)                                      │
│  H1: LNA Blog                                        │
│  Subhead: Insights on document processing and AI.     │
│                                                       │
├──────────────────────────────────────────────────────┤
│                                                       │
│  COMING SOON MESSAGE                                  │
│  ┌──────────────────────────────────────────────┐    │
│  │  Illustration                                 │    │
│  │  "We're working on great content."            │    │
│  │  "Subscribe to be the first to know."         │    │
│  │                                               │    │
│  │  Email [____________] [Subscribe]             │    │
│  └──────────────────────────────────────────────┘    │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Future Layout (post-launch)

- Featured post card (large, full-width)
- Category filter tabs
- Post grid (3 columns)
- Sidebar with newsletter CTA
- Pagination

### Mobile Variations

- Post grid: single column
- Sidebar becomes top banner

**Component Types:** Hero (centered), Empty State / Coming Soon, Email Capture, Post Cards (future)

---

## /privacy — Privacy Policy

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  LEGAL PAGE LAYOUT (max-w-3xl, centered)              │
│                                                       │
│  H1: Privacy Policy                                   │
│  Last updated: [date]                                 │
│                                                       │
│  TABLE OF CONTENTS (optional jump links)              │
│  1. Information We Collect                            │
│  2. How We Use Information                            │
│  3. Data Sharing                                      │
│  4. Cookies & Tracking                                │
│  5. Data Retention                                    │
│  6. Your Rights                                       │
│  7. Contact                                           │
│                                                       │
│  [Prose sections with H2/H3 headings]                 │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- No layout changes needed — prose is naturally responsive
- TOC becomes scrollable or collapsible

**Component Types:** Legal Page Layout (narrow prose), Table of Contents

---

## /terms — Terms of Service

### Desktop Layout

```
┌──────────────────────────────────────────────────────┐
│  Header                                               │
├──────────────────────────────────────────────────────┤
│                                                       │
│  LEGAL PAGE LAYOUT (max-w-3xl, centered)              │
│                                                       │
│  H1: Terms of Service                                 │
│  Last updated: [date]                                 │
│                                                       │
│  TABLE OF CONTENTS (optional jump links)              │
│  1. Acceptance of Terms                               │
│  2. Description of Service                            │
│  3. User Accounts                                     │
│  4. Acceptable Use                                    │
│  5. Intellectual Property                             │
│  6. Limitation of Liability                           │
│  7. Termination                                       │
│  8. Governing Law                                     │
│  9. Contact                                           │
│                                                       │
│  [Prose sections with H2/H3 headings]                 │
│                                                       │
├──────────────────────────────────────────────────────┤
│  Footer                                               │
└──────────────────────────────────────────────────────┘
```

### Mobile Variations

- Same as Privacy Policy — prose is naturally responsive

**Component Types:** Legal Page Layout (narrow prose), Table of Contents

---

## Component Index

Summary of all component types used across the site:

| Component                   | Used On                                        |
| --------------------------- | ---------------------------------------------- |
| Hero (split)                | Homepage                                       |
| Hero (centered)             | Features, Pricing, About, Contact, Blog, Legal |
| Logo Bar                    | Homepage                                       |
| Icon Cards                  | Homepage (problem), Homepage (features)        |
| Split Section (alternating) | Features, About                                |
| Highlight Section           | Features (differentiators)                     |
| Steps                       | Homepage (How It Works)                        |
| Testimonial Card            | Homepage                                       |
| CTA Banner                  | Homepage, Features, About                      |
| Pricing Cards               | Pricing, Homepage (teaser)                     |
| Comparison Table            | Features, Pricing                              |
| Accordion                   | Pricing (FAQ), Contact (FAQ)                   |
| Toggle                      | Pricing                                        |
| Stats Counter               | About                                          |
| Values Cards                | About                                          |
| Team Cards                  | About                                          |
| Form                        | Contact                                        |
| Contact Info Cards          | Contact                                        |
| Email Capture               | Blog                                           |
| Post Cards                  | Blog (future)                                  |
| Legal Page Layout           | Privacy, Terms                                 |
| Badge                       | Features                                       |
