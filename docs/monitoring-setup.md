# Post-Launch Monitoring Setup

---

## 1. Uptime Monitoring (UptimeRobot)

### Setup Steps

1. Create an account at [UptimeRobot](https://uptimerobot.com)
2. Add a new monitor:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** LNA Website
   - **URL:** `https://getlna.com`
   - **Monitoring Interval:** 5 minutes
3. Add additional monitors for critical endpoints:
   - `https://getlna.com/features` — Features page
   - `https://getlna.com/pricing` — Pricing page
   - `https://getlna.com/api/contact` (POST) — Contact form API
   - `https://getlna.com/feed.xml` — RSS feed
4. Configure alert contacts:
   - Email: engineering team distribution list
   - Slack: #engineering-alerts channel (via webhook)
5. Set up a public status page (optional):
   - URL: `status.getlna.com`
   - Include all monitors

### Alert Thresholds

- **Down alert:** After 2 consecutive failures (10 minutes)
- **SSL expiry:** 14 days before expiration
- **Response time:** Alert if > 3 seconds average over 5 checks

---

## 2. Google Search Console

### Setup Steps

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://getlna.com`
3. Verify ownership via one of:
   - **DNS TXT record** (recommended): Add TXT record provided by Google to DNS
   - **HTML file upload**: Upload verification file to `public/` directory
   - **Meta tag**: Add meta tag to `layout.tsx` head
4. Submit sitemap:
   - URL: `https://getlna.com/sitemap.xml`
   - Go to Sitemaps > Add new sitemap
5. Review initial crawl results after 48 hours

### Key Reports to Monitor

- **Performance:** Track impressions, clicks, CTR, and average position
- **Coverage:** Ensure all pages are indexed, fix any errors
- **Core Web Vitals:** Monitor LCP, FID/INP, CLS scores
- **Mobile Usability:** Fix any mobile-specific issues
- **Links:** Track inbound links and internal link structure

### Weekly Checks

- [ ] Review any new crawl errors
- [ ] Check for security issues or manual actions
- [ ] Monitor Core Web Vitals trends
- [ ] Review top performing keywords and pages

---

## 3. Google Analytics (GA4) Event Tracking Verification

### Pre-Configured Events

The following custom events are already instrumented in the codebase:

| Event Name               | Trigger Location       | Parameters                |
| ------------------------ | ---------------------- | ------------------------- |
| `demo_request_submitted` | Demo request form      | `company`, `role`         |
| `newsletter_signup`      | Footer newsletter form | `location`                |
| `video_play`             | Video embed component  | `video_id`, `video_title` |
| `video_complete`         | Video embed component  | `video_id`, `video_title` |

### Verification Checklist

1. **Enable Debug Mode:**
   - Install [GA4 Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger)
   - Or add `?debug_mode=true` to any page URL
2. **Verify each event:**
   - [ ] Submit demo request form — check for `demo_request_submitted`
   - [ ] Sign up for newsletter — check for `newsletter_signup`
   - [ ] Play a video — check for `video_play`
   - [ ] Complete a video — check for `video_complete`
3. **Verify automatic events:**
   - [ ] `page_view` fires on navigation
   - [ ] `scroll` fires at 90% scroll depth
   - [ ] `click` fires on outbound links
4. **Check in GA4 Dashboard:**
   - Go to Reports > Realtime to see events in real-time
   - Go to Configure > Events to see all registered events
   - Verify conversions are marked (demo_request_submitted, newsletter_signup)

### Conversion Setup

Mark these events as conversions in GA4:

1. Go to Configure > Events
2. Toggle "Mark as conversion" for:
   - `demo_request_submitted`
   - `newsletter_signup`

---

## 4. Sentry Error Tracking

### Configuration

Sentry is configured via environment variables (see `.env.example`):

- `NEXT_PUBLIC_SENTRY_DSN` — Client-side error reporting DSN
- `SENTRY_AUTH_TOKEN` — For source map uploads during build
- `SENTRY_ORG` — Organization slug
- `SENTRY_PROJECT` — Project slug

### Setup Steps

1. Create a project in [Sentry](https://sentry.io) for Next.js
2. Copy the DSN from Project Settings > Client Keys
3. Generate an auth token at Organization Settings > Auth Tokens
4. Add environment variables to Vercel project settings

### Verification

1. Deploy with Sentry configured
2. Trigger a test error (e.g., visit a page that throws)
3. Verify the error appears in Sentry dashboard
4. Check that source maps are uploaded (readable stack traces)

### Alert Configuration

Set up alerts in Sentry:

- **New issue alert:** Notify on first occurrence of any new error
- **Regression alert:** Notify when a resolved issue recurs
- **Spike alert:** Notify when error frequency increases 10x in 1 hour
- **Delivery:** Slack #engineering-alerts + email to engineering lead

---

## 5. Incident Response Procedures

### Severity Levels

| Level             | Description                          | Response Time     | Example                                  |
| ----------------- | ------------------------------------ | ----------------- | ---------------------------------------- |
| **P1 — Critical** | Site is down or major feature broken | 15 minutes        | Homepage 500, forms not submitting       |
| **P2 — High**     | Significant degradation              | 1 hour            | Slow load times, partial page failures   |
| **P3 — Medium**   | Minor issue, workaround exists       | 4 hours           | Styling bug, non-critical feature broken |
| **P4 — Low**      | Cosmetic or minor inconvenience      | Next business day | Typo, minor layout shift                 |

### Escalation Path

```
1. Alert received (UptimeRobot / Sentry / user report)
   ↓
2. On-call engineer acknowledges (within response time SLA)
   ↓
3. Triage: Determine severity and impact
   ↓
4. P1/P2: Notify engineering lead + stakeholders immediately
   ↓
5. Investigate and fix (or rollback if faster)
   ↓
6. Deploy fix and verify
   ↓
7. Write incident report (for P1/P2)
```

### Rollback Decision Tree

- **Is the site completely down?** → Rollback immediately via Vercel
- **Is a critical feature broken (forms, navigation)?** → Rollback if fix will take > 30 minutes
- **Is it a visual/cosmetic issue?** → Fix forward, no rollback needed
- **Is it a third-party service issue (Crisp, Brevo, Sentry)?** → No rollback; the site gracefully degrades

### Incident Report Template

```markdown
## Incident Report

**Date:** YYYY-MM-DD
**Severity:** P1/P2/P3/P4
**Duration:** Start time — End time (total duration)
**Impact:** What was affected and how many users impacted

### Timeline

- HH:MM — Alert received
- HH:MM — Investigation started
- HH:MM — Root cause identified
- HH:MM — Fix deployed
- HH:MM — Verified and resolved

### Root Cause

Description of what caused the incident.

### Resolution

Description of how it was fixed.

### Action Items

- [ ] Action item 1
- [ ] Action item 2
```

---

## 6. Form Submission Monitoring

### Contact Form (`/api/contact`)

- Monitor in Sentry for any 500 errors on this route
- Set up Resend webhook to track email delivery failures
- Weekly check: Compare form submissions in GA4 vs emails received

### Demo Request Form (`/api/demo-request`)

- Same monitoring as contact form
- Track `demo_request_submitted` conversions in GA4
- Alert if zero submissions for 48+ hours (may indicate form breakage)

### Newsletter Form (`/api/newsletter`)

- Monitor Brevo for bounce rates and delivery issues
- Track `newsletter_signup` conversions in GA4
- Review subscriber growth weekly in Brevo dashboard

### Monitoring Checklist (Weekly)

- [ ] Check Sentry for API route errors
- [ ] Verify form submission counts in GA4 match expected volume
- [ ] Review email delivery rates in Resend
- [ ] Check Brevo subscriber list for growth trends
- [ ] Test each form manually if submission volume drops unexpectedly
