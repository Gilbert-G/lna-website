# Post-Launch Dashboard KPIs

Recommended metrics and dashboard layout for monitoring the LNA website after launch.

---

## Traffic & Engagement

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Unique visitors | GA4 | Daily | Growth week-over-week |
| Page views | GA4 | Daily | |
| Bounce rate | GA4 | Weekly | < 50% |
| Avg session duration | GA4 | Weekly | > 1 minute |
| Pages per session | GA4 | Weekly | > 2 |
| Top landing pages | GA4 | Weekly | |
| Traffic sources breakdown | GA4 | Weekly | |

## Conversions

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Demo requests submitted | GA4 + API logs | Daily | |
| Demo request conversion rate | GA4 | Weekly | > 2% of visitors |
| Newsletter signups | Brevo + GA4 | Daily | |
| Newsletter conversion rate | GA4 | Weekly | > 1% of visitors |
| Contact form submissions | GA4 + API logs | Weekly | |

## SEO & Organic Search

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Organic search impressions | Search Console | Weekly | Growth trend |
| Organic clicks | Search Console | Weekly | |
| Average position | Search Console | Weekly | |
| Click-through rate (CTR) | Search Console | Weekly | > 3% |
| Indexed pages | Search Console | Weekly | All pages indexed |
| Core Web Vitals pass rate | Search Console | Monthly | 100% |

## Performance & Reliability

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Uptime | UptimeRobot | Daily | > 99.9% |
| Avg response time | UptimeRobot | Daily | < 500ms |
| Largest Contentful Paint (LCP) | Search Console / Lighthouse | Weekly | < 2.5s |
| Cumulative Layout Shift (CLS) | Search Console / Lighthouse | Weekly | < 0.1 |
| Interaction to Next Paint (INP) | Search Console / Lighthouse | Weekly | < 200ms |
| Lighthouse Performance score | Manual audit | Monthly | > 90 |

## Error Tracking

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Unresolved errors | Sentry | Daily | 0 P1/P2 |
| New errors this week | Sentry | Weekly | Decreasing trend |
| Error rate (errors / sessions) | Sentry | Weekly | < 0.1% |
| API route error rate | Sentry | Daily | < 0.5% |

## Email & Newsletter

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Subscriber count | Brevo | Weekly | Growth trend |
| Email open rate | Brevo | Per send | > 30% |
| Email click-through rate | Brevo | Per send | > 5% |
| Unsubscribe rate | Brevo | Per send | < 1% |
| Bounce rate | Brevo | Per send | < 2% |

## Social & Referral

| KPI | Source | Frequency | Target |
| --- | --- | --- | --- |
| Product Hunt upvotes | Product Hunt | Launch week | |
| LinkedIn post impressions | LinkedIn Analytics | Weekly | |
| LinkedIn engagement rate | LinkedIn Analytics | Weekly | > 2% |
| Referral traffic | GA4 | Weekly | |
| Backlinks acquired | Search Console | Monthly | Growth trend |

---

## Dashboard Layout Recommendations

### Real-Time Dashboard (Daily Monitoring)
1. **Uptime status** — Current up/down with response time graph
2. **Sentry error count** — New errors in last 24 hours
3. **Visitor count** — Today vs same day last week
4. **Conversion count** — Demo requests + newsletter signups today

### Weekly Review Dashboard
1. **Traffic overview** — Visitors, page views, sources (7-day trend)
2. **Conversion funnel** — Visitors → Form views → Submissions
3. **Top pages** — Most visited pages with bounce rates
4. **SEO snapshot** — Impressions, clicks, average position
5. **Error summary** — New/resolved/unresolved counts
6. **Performance** — Core Web Vitals trends

### Monthly Executive Dashboard
1. **Growth metrics** — Visitor and conversion month-over-month trends
2. **SEO progress** — Keyword rankings and organic traffic growth
3. **Reliability** — Uptime percentage and incident count
4. **Newsletter** — Subscriber growth and engagement rates
5. **Social** — LinkedIn and referral traffic trends
