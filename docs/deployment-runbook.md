# DNS Cutover & Production Deployment Runbook

**Project:** LNA Website
**Platform:** Vercel
**Domain:** getlna.com

---

## 1. Pre-Deployment Checklist

### Environment Variables
Verify all required environment variables are set in Vercel project settings:

| Variable | Type | Required | Description |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Server | Yes | Resend email delivery for demo requests |
| `RESEND_FROM_EMAIL` | Server | No | Sender email (defaults to noreply@getlna.com) |
| `NEXT_PUBLIC_CRISP_WEBSITE_ID` | Public | No | Crisp live chat widget ID |
| `BREVO_API_KEY` | Server | Yes | Brevo newsletter API key |
| `BREVO_LIST_ID` | Server | Yes | Brevo subscriber list ID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Public | Yes | Google Analytics 4 measurement ID |
| `SENTRY_DSN` | Public | No | Sentry error tracking DSN |
| `SENTRY_AUTH_TOKEN` | Server | No | Sentry auth token for source maps |
| `SENTRY_ORG` | Server | No | Sentry organization slug |
| `SENTRY_PROJECT` | Server | No | Sentry project slug |

### Build Verification
- [ ] `npm run build` succeeds locally with no errors
- [ ] `npm run lint` passes with no warnings
- [ ] `npm run type-check` passes
- [ ] All forms tested locally (contact, demo request, newsletter)
- [ ] Preview deployment tested on Vercel

### Code Review
- [ ] All PRs merged to `main`
- [ ] No pending critical issues
- [ ] Staging review checklist completed and signed off
- [ ] Feature flags (if any) are set for production

---

## 2. Vercel Deployment Steps

### Initial Project Setup (First Time Only)

1. **Connect repository:**
   ```bash
   # Install Vercel CLI if not already installed
   npm i -g vercel

   # Link project (from repo root)
   vercel link
   ```

2. **Configure project in Vercel Dashboard:**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Node.js Version: 20.x

3. **Add environment variables:**
   - Go to Project Settings > Environment Variables
   - Add each variable from the table above
   - Set scope: Production, Preview, Development as appropriate
   - Server-only vars: Production + Preview only
   - Public vars (`NEXT_PUBLIC_*`): All environments

### Deploy to Production

1. **Trigger deployment:**
   ```bash
   # Option A: Push to main (auto-deploys if configured)
   git push origin main

   # Option B: Manual deploy via CLI
   vercel --prod

   # Option C: Via Vercel Dashboard
   # Go to Deployments > click "Redeploy" on latest
   ```

2. **Verify deployment:**
   - [ ] Check build logs for errors in Vercel Dashboard
   - [ ] Visit the Vercel preview URL to verify site loads
   - [ ] Test all critical paths before DNS cutover

---

## 3. DNS Configuration

### A Records (Root Domain)
Point `getlna.com` to Vercel's IP address:

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | `76.76.21.21` | 300 (5 min) |

### CNAME Record (www subdomain)
| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | www | `cname.vercel-dns.com` | 300 (5 min) |

### Steps at Your DNS Provider

1. Log in to your DNS provider (e.g., Cloudflare, Namecheap, Route 53)
2. Navigate to DNS management for `getlna.com`
3. **Lower TTL first** — Set existing records to 300s (5 min) and wait for old TTL to expire
4. Add/update the A record for `@` (root) to `76.76.21.21`
5. Add/update the CNAME record for `www` to `cname.vercel-dns.com`
6. Remove any conflicting A/AAAA/CNAME records for `@` and `www`

### Verify DNS Propagation
```bash
# Check A record
dig getlna.com A +short
# Expected: 76.76.21.21

# Check CNAME
dig www.getlna.com CNAME +short
# Expected: cname.vercel-dns.com

# Check propagation globally
# Visit: https://dnschecker.org/#A/getlna.com
```

---

## 4. SSL/TLS Setup

Vercel automatically provisions and renews SSL certificates via Let's Encrypt.

### Verification Steps
1. In Vercel Dashboard, go to Project Settings > Domains
2. Add `getlna.com` and `www.getlna.com`
3. Vercel will attempt TXT verification or use DNS records
4. Wait for SSL certificate to be issued (usually < 5 minutes)

### TXT Verification (if required)
| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| TXT | `_vercel` | _(provided by Vercel)_ | 300 |

### Verify SSL
```bash
# Check SSL certificate
curl -vI https://getlna.com 2>&1 | grep -E "subject:|issuer:|expire"

# Verify HTTPS redirect
curl -I http://getlna.com
# Expected: 301/308 redirect to https://getlna.com
```

---

## 5. www to non-www Redirect

This is configured in `vercel.json` at the project root:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.getlna.com" }],
      "destination": "https://getlna.com/:path*",
      "permanent": true
    }
  ]
}
```

### Verification
```bash
# Test www redirect
curl -I https://www.getlna.com
# Expected: 308 Permanent Redirect to https://getlna.com

curl -I https://www.getlna.com/features
# Expected: 308 Permanent Redirect to https://getlna.com/features
```

Also configure in Vercel Dashboard:
1. Go to Project Settings > Domains
2. Add both `getlna.com` and `www.getlna.com`
3. Set `getlna.com` as the primary domain
4. Vercel will automatically redirect `www` to the primary

---

## 6. Post-Deployment Verification

### Functional Checks
- [ ] Homepage loads at `https://getlna.com`
- [ ] All pages are accessible (features, pricing, about, contact, blog, privacy, terms)
- [ ] Contact form submits and sends email via Resend
- [ ] Demo request form submits and sends email
- [ ] Newsletter signup works via Brevo
- [ ] Cookie consent banner appears for new visitors
- [ ] Crisp chat widget loads after consent

### Performance Checks
- [ ] Run Lighthouse audit on production URL
- [ ] Performance score > 90
- [ ] No console errors in browser DevTools
- [ ] Check Core Web Vitals in PageSpeed Insights

### SEO Checks
- [ ] `https://getlna.com/robots.txt` is accessible
- [ ] `https://getlna.com/sitemap.xml` is accessible (if configured)
- [ ] `https://getlna.com/feed.xml` returns valid RSS
- [ ] OpenGraph tags render correctly (test with https://opengraph.xyz)

### Security Checks
- [ ] HTTPS enforced on all pages
- [ ] Security headers present (check with https://securityheaders.com)
- [ ] No sensitive data exposed in client-side code
- [ ] API routes return appropriate error codes

### Monitoring Checks
- [ ] Sentry receiving events (trigger a test error)
- [ ] Google Analytics tracking pageviews
- [ ] Uptime monitoring active and confirming site is up

---

## 7. Rollback Procedure

### Instant Rollback via Vercel Dashboard
1. Go to Vercel Dashboard > Deployments
2. Find the last known good deployment
3. Click the three-dot menu > "Promote to Production"
4. The previous deployment is instantly promoted (no rebuild)

### Rollback via CLI
```bash
# List recent deployments
vercel ls

# Promote a specific deployment to production
vercel promote <deployment-url>
```

### DNS Rollback (if needed)
1. Update A record to point to previous hosting provider's IP
2. Update/remove CNAME for www
3. Lower TTL beforehand to minimize propagation delay

### Emergency Contacts
| Role | Name | Contact |
| --- | --- | --- |
| Engineering Lead | | |
| DevOps/Platform | | |
| Domain Registrar Support | | |

---

## 8. Post-Cutover Cleanup

After successful deployment and verification (wait 24-48 hours):

- [ ] Increase DNS TTL back to 3600 (1 hour) or higher
- [ ] Remove old hosting configuration (if migrating)
- [ ] Update team documentation with production URLs
- [ ] Notify stakeholders of successful launch
- [ ] Archive staging environment (or keep for future use)
