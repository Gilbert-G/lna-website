# Staging Review & Stakeholder Sign-Off Checklist

**Project:** LNA Website
**Staging URL:** _(insert staging URL)_
**Review Date:** \_\_\_\_\_\_\_\_\_\_\_\_
**Reviewer(s):** \_\_\_\_\_\_\_\_\_\_\_\_

---

## 1. Content Accuracy

| Page                        | Copy Accurate | Links Working | CTAs Correct | Images Load | Notes |
| --------------------------- | ------------- | ------------- | ------------ | ----------- | ----- |
| Homepage (`/`)              | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Features (`/features`)      | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Pricing (`/pricing`)        | [ ]           | [ ]           | [ ]          | [ ]         |       |
| About (`/about`)            | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Contact (`/contact`)        | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Blog (`/blog`)              | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Privacy Policy (`/privacy`) | [ ]           | [ ]           | [ ]          | [ ]         |       |
| Terms of Service (`/terms`) | [ ]           | [ ]           | [ ]          | [ ]         |       |

- [ ] All page titles and meta descriptions are accurate
- [ ] OpenGraph images render correctly when shared
- [ ] RSS feed (`/feed.xml`) generates valid XML
- [ ] 404 page displays correctly for unknown routes

---

## 2. Branding Consistency

### Colors

- [ ] Primary blue (`#2563EB`) used consistently for CTAs and links
- [ ] Background and surface colors match design system
- [ ] Dark mode colors (if applicable) are consistent

### Typography

- [ ] Inter font loads correctly for body text
- [ ] JetBrains Mono loads correctly for code/monospace elements
- [ ] Font sizes and weights match design specs
- [ ] Line heights and letter spacing are consistent

### Logo & Brand Assets

- [ ] LNA logo renders correctly in header
- [ ] Logo renders correctly in footer
- [ ] Favicon displays in browser tab (SVG and ICO)
- [ ] OpenGraph/social share images are correct

### Tone & Voice

- [ ] Copy follows brand voice guidelines (professional, clear, confident)
- [ ] No placeholder text (Lorem ipsum, TODO, etc.)
- [ ] Consistent terminology throughout (e.g., "PDF to Excel", "document processing")

---

## 3. Functionality

### Navigation

- [ ] Header navigation links work on all pages
- [ ] Mobile hamburger menu opens and closes correctly
- [ ] Footer navigation links work
- [ ] Skip-to-content link works for accessibility
- [ ] Active page is highlighted in navigation

### Forms

- [ ] Contact form submits successfully
- [ ] Contact form validation displays errors correctly
- [ ] Demo request modal opens and submits
- [ ] Demo request form validation works
- [ ] Newsletter signup works in footer
- [ ] Newsletter duplicate email is handled gracefully
- [ ] Success/error toasts display correctly

### Interactive Elements

- [ ] Cookie consent banner appears on first visit
- [ ] Cookie consent preferences are remembered
- [ ] Crisp chat widget loads (when configured)
- [ ] Video embeds play correctly
- [ ] Animations and transitions are smooth
- [ ] Scroll-triggered animations fire correctly

### Links

- [ ] All internal links resolve correctly
- [ ] All external links open in new tab
- [ ] No broken links (run automated link checker)
- [ ] Email links (`mailto:`) work correctly
- [ ] Phone links (`tel:`) work correctly

---

## 4. Mobile Experience

### Breakpoints

- [ ] Mobile (< 640px) — layout is single-column, readable
- [ ] Tablet (640px–1024px) — layout adapts appropriately
- [ ] Desktop (> 1024px) — full layout renders correctly
- [ ] No horizontal scrolling at any breakpoint

### Touch Targets

- [ ] All buttons meet minimum 44x44px touch target
- [ ] Navigation links are easily tappable
- [ ] Form inputs are large enough on mobile
- [ ] Close buttons (modal, toast) are easily tappable

### Mobile Navigation

- [ ] Hamburger menu is accessible and functional
- [ ] Menu items are properly spaced for touch
- [ ] Menu closes when a link is tapped
- [ ] Menu closes when clicking outside

### Mobile-Specific

- [ ] Text is readable without zooming
- [ ] Images scale correctly on small screens
- [ ] Tables (if any) scroll horizontally or reflow
- [ ] Modals are usable on small screens

---

## 5. Performance

### Load Times

- [ ] First Contentful Paint (FCP) < 1.8s
- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] Total Blocking Time (TBT) < 200ms
- [ ] Cumulative Layout Shift (CLS) < 0.1

### Lighthouse Scores (Target: 90+)

| Category       | Score        | Notes |
| -------------- | ------------ | ----- |
| Performance    | \_\_\_ / 100 |       |
| Accessibility  | \_\_\_ / 100 |       |
| Best Practices | \_\_\_ / 100 |       |
| SEO            | \_\_\_ / 100 |       |

### Assets

- [ ] Images are optimized (Next.js Image component or optimized formats)
- [ ] No unnecessarily large JavaScript bundles
- [ ] Fonts load without layout shift (font-display: swap)
- [ ] Third-party scripts load asynchronously

---

## 6. Accessibility

### Screen Reader

- [ ] All images have meaningful alt text
- [ ] Page structure uses proper heading hierarchy (h1 > h2 > h3)
- [ ] ARIA labels are present on interactive elements
- [ ] Skip-to-content link is the first focusable element
- [ ] Form labels are properly associated with inputs

### Keyboard Navigation

- [ ] All interactive elements are reachable via Tab key
- [ ] Focus order follows visual layout
- [ ] Focus indicators are visible on all elements
- [ ] Modal traps focus correctly and can be closed with Escape
- [ ] Dropdown menus are navigable with arrow keys

### Color Contrast

- [ ] Text meets WCAG AA contrast ratio (4.5:1 for normal text)
- [ ] Large text meets 3:1 contrast ratio
- [ ] UI components and icons meet 3:1 contrast ratio
- [ ] No information conveyed by color alone

---

## 7. SEO

- [ ] All pages have unique `<title>` tags
- [ ] All pages have unique meta descriptions
- [ ] Canonical URLs are set correctly
- [ ] `robots.txt` allows crawling (or is appropriately configured)
- [ ] Sitemap is generated and accessible
- [ ] Structured data (JSON-LD) is valid (if applicable)
- [ ] OpenGraph tags are correct on all pages
- [ ] Twitter card tags are present

---

## 8. Stakeholder Feedback

| Stakeholder | Role | Feedback | Priority | Status |
| ----------- | ---- | -------- | -------- | ------ |
|             |      |          |          |        |
|             |      |          |          |        |
|             |      |          |          |        |

### Feedback Categories

- **Critical** — Must fix before launch (broken functionality, incorrect data)
- **High** — Should fix before launch (UX issues, branding inconsistencies)
- **Medium** — Can fix post-launch (minor polish, nice-to-haves)
- **Low** — Backlog (future improvements)

---

## 9. Sign-Off

By signing below, I confirm that I have reviewed the staging site and approve it for production deployment.

| Name | Role             | Date | Signature |
| ---- | ---------------- | ---- | --------- |
|      | Product Owner    |      |           |
|      | Design Lead      |      |           |
|      | Engineering Lead |      |           |
|      | Marketing Lead   |      |           |

### Conditions for Sign-Off

- [ ] All **Critical** feedback items have been resolved
- [ ] All **High** feedback items have been resolved or deferred with approval
- [ ] Performance scores meet minimum thresholds (90+ Lighthouse)
- [ ] Accessibility audit passes WCAG AA standards
- [ ] All forms and integrations are functional

**Final Approval:** [ ] Approved for Production Deployment

**Approved By:** \_\_\_\_\_\_\_\_\_\_\_\_
**Date:** \_\_\_\_\_\_\_\_\_\_\_\_
