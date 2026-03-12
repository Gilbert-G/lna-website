# LNA Website — User Flows

This document maps the key visitor journeys through the LNA marketing website. Each flow ends at a conversion point (demo request or sign-up).

---

## Flow 1: Landing → Demo Request

The most direct conversion path for visitors who arrive ready to engage.

```
┌─────────────┐
│  / Homepage  │
│              │
│  Hero CTA:   │
│  "Request a  │
│   Demo"      │
└──────┬───────┘
       │
       ▼
┌─────────────────┐
│  /contact        │
│                  │
│  Demo Request    │
│  Form:           │
│  - Name          │
│  - Email         │
│  - Company       │
│  - Role          │
│  - Message       │
│                  │
│  [Submit]        │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Confirmation    │
│                  │
│  "Thank you!     │
│   We'll be in    │
│   touch within   │
│   24 hours."     │
│                  │
│  Links:          │
│  - Explore       │
│    Features      │
│  - View Pricing  │
└─────────────────┘
```

**Entry points:** Organic search, paid ads, direct URL, referral links.

**Key decision point:** Hero section must clearly communicate the value proposition so visitors click the primary CTA without needing more information.

---

## Flow 2: Landing → Pricing → Sign Up

For cost-conscious visitors who want to evaluate pricing before committing.

```
┌─────────────┐
│  / Homepage  │
│              │
│  Nav link:   │
│  "Pricing"   │
│  — or —      │
│  Pricing     │
│  teaser CTA  │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│  /pricing         │
│                   │
│  Compare tiers:   │
│  Starter /        │
│  Professional /   │
│  Enterprise       │
│                   │
│  Toggle:          │
│  Monthly / Annual │
└──────┬───────────┘
       │
       ├─── Starter / Professional ──────┐
       │                                 │
       ▼                                 ▼
┌──────────────────┐          ┌───────────────────┐
│  Sign-Up Flow     │          │  Enterprise:       │
│                   │          │  "Contact Sales"   │
│  - Create account │          │                    │
│  - Select plan    │          │  → /contact        │
│  - Payment info   │          │    (pre-filled     │
│  - Confirmation   │          │     "Enterprise    │
└──────────────────┘          │      inquiry")     │
                               └───────────────────┘
```

**Key decision points:**

1. **Pricing page clarity** — Visitor must quickly understand which tier fits their needs.
2. **Annual vs. monthly toggle** — Highlight annual savings to encourage longer commitment.
3. **Enterprise path** — Large teams route to sales instead of self-serve.

---

## Flow 3: Landing → Features → Demo Request

For evaluators who need to understand capabilities before requesting a demo.

```
┌─────────────┐
│  / Homepage  │
│              │
│  Secondary   │
│  CTA: "See   │
│  Features"   │
│  — or —      │
│  Nav link:   │
│  "Features"  │
└──────┬───────┘
       │
       ▼
┌────────────────────┐
│  /features          │
│                     │
│  Browse categories: │
│  - Document Mgmt    │
│  - Data Extraction  │
│  - Template Mapping │
│  - Export           │
│  - Data Q&A ★       │
│  - Chat Roles ★     │
│  - User Management  │
│                     │
│  ★ = Differentiator │
│      callouts       │
└──────┬─────────────┘
       │
       │  Visitor scrolls through
       │  features, sees comparison
       │  table vs. alternatives
       │
       ▼
┌─────────────────┐
│  Bottom CTA:     │
│  "Request a      │
│   Demo"          │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  /contact        │
│                  │
│  Demo Request    │
│  Form            │
│                  │
│  [Submit]        │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Confirmation    │
└─────────────────┘
```

**Key decision points:**

1. **Feature depth** — Visitor needs enough detail to feel confident LNA solves their problem.
2. **Differentiator emphasis** — LLM Q&A and Chat with Context Role sections must stand out.
3. **Comparison table** — Helps visitors justify LNA over manual processes or competing tools.

---

## Flow 4: Blog → Features → Demo Request

Content-driven path for visitors arriving via SEO or shared articles.

```
┌────────────────────┐
│  External Source     │
│  (Google, social,    │
│   newsletter)        │
└──────┬──────────────┘
       │
       ▼
┌────────────────────┐
│  /blog/:slug        │
│                     │
│  Article content    │
│  with in-line CTAs: │
│  - "Learn more      │
│    about [feature]" │
│  - Related feature  │
│    links            │
│                     │
│  Sidebar / bottom:  │
│  "See All Features" │
└──────┬─────────────┘
       │
       ▼
┌────────────────────┐
│  /features          │
│                     │
│  (same as Flow 3)   │
│  Visitor explores   │
│  relevant feature   │
│  category           │
└──────┬─────────────┘
       │
       ▼
┌─────────────────┐
│  Bottom CTA:     │
│  "Request a      │
│   Demo"          │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  /contact        │
│  Demo Request    │
│  Form            │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Confirmation    │
└─────────────────┘
```

**Key decision points:**

1. **Article quality** — Content must establish authority and naturally link to relevant features.
2. **In-article CTAs** — Contextual links to /features sections keep the visitor moving forward.
3. **Blog → Features bridge** — Sidebar or end-of-article CTA must make the transition seamless.

---

## Conversion Summary

| Flow                        | Steps to Conversion | Visitor Intent              |
| --------------------------- | ------------------- | --------------------------- |
| Landing → Demo              | 2                   | High — ready to engage      |
| Landing → Pricing → Sign Up | 3                   | Medium — evaluating cost    |
| Landing → Features → Demo   | 3                   | Medium — evaluating fit     |
| Blog → Features → Demo      | 4                   | Low-to-medium — researching |

All flows converge on `/contact` (demo request form) or the sign-up flow as the final conversion point. The website should minimize friction at each step and provide clear next actions.
