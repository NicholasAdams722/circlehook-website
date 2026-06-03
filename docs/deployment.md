# Deployment Runbook — Circle Hook

Step-by-step from a working local build to a live site at circlehook.io with a functioning contact form, Calendly booking, and the infrastructure for Stripe activation.

## Prerequisites

- Code is pushed to a private GitHub repository under NicholasAdams722
- Local build runs cleanly: `npm run build` completes without errors
- circlehook.io is registered at Namecheap (already done)
- Google Workspace is active for circlehook.io (already done)
- Resend account at resend.com (sign up if not done)
- Calendly account (sign up if not done)
- Vercel account, ideally signed in with the same GitHub account

## Step 1: Calendly setup

1. Sign in at calendly.com.
2. Create a new event type: "Free Consultation," 30 minutes, one-on-one.
3. Set availability windows that match Nick's actual schedule.
4. Customize the booking page with a short description: "A 30-minute call to discuss your firm's website. No prep needed."
5. Copy the public URL. It will look like `https://calendly.com/nick-circlehook/free-consultation`.
6. Save this URL. It goes in the project's `.env.local` as `NEXT_PUBLIC_CALENDLY_URL` and in Vercel's environment variables.

## Step 2: Resend setup

1. Sign in at resend.com.
2. Add `circlehook.io` as a sending domain (Domains > Add Domain).
3. Resend will display DNS records to add:
   - **SPF:** TXT record at root with value `v=spf1 include:_spf.resend.com ~all`. Important: if SPF for Google Workspace is already present, you must merge, not duplicate. The combined value will be `v=spf1 include:_spf.google.com include:_spf.resend.com ~all`. There can only be one SPF record per domain.
   - **DKIM:** TXT record at `resend._domainkey` with a long value provided by Resend.
   - **DMARC:** already in place from Google Workspace setup. No action needed.
   - **MX for return-path:** skip unless Resend explicitly requires it for your account.
4. Add the DNS records at Namecheap (Domain List > Manage > Advanced DNS > Add Record).
5. Back in Resend, click Verify. Wait for green checkmarks on all required records. Propagation can take 5 to 60 minutes.
6. Once verified, create an API key (API Keys > Create API Key). Name it "Production." Copy the key immediately, it will only be shown once.
7. Save the key as `RESEND_API_KEY` in `.env.local` and in Vercel's environment variables.

If Resend domain verification is slow tonight and you want to ship anyway, the route handler can be temporarily pointed at Resend's onboarding domain (`onboarding@resend.dev`) which works without verification. Switch back to the verified circlehook.io sender as soon as verification completes.

## Step 3: Local build verification

Before deploying:

```bash
cd ~/Projects/clients/circlehook/circlehook-website
npm run build
npm run start
```

Visit http://localhost:3000 and verify:

- All six sections render
- The Calendly buttons open in a new tab to the right URL
- The contact form submits and you receive the test email
- No errors in the browser console
- No errors in the terminal

If anything is broken, fix it locally before pushing.

## Step 4: Vercel deployment

1. Push the latest commit to GitHub.
2. Sign in at vercel.com.
3. Click "Add New > Project."
4. Import the `circlehook-website` GitHub repo.
5. Vercel auto-detects Next.js. Leave all build settings at default.
6. Before clicking Deploy, expand "Environment Variables" and add:
   - `RESEND_API_KEY`: the key from Resend
   - `NEXT_PUBLIC_CALENDLY_URL`: the Calendly URL
   - `CONTACT_EMAIL`: nick@circlehook.io
   - `RESEND_FROM_ADDRESS`: nick@circlehook.io (or onboarding@resend.dev if Resend verification hasn't completed)
7. Click Deploy. First deployment takes 1 to 3 minutes.
8. Vercel will give you a default preview URL like `circlehook-website-xyz.vercel.app`. Open it, submit a test form, and verify everything works in production.

## Step 5: Custom domain

1. In Vercel, go to the project's Settings > Domains.
2. Add `circlehook.io` and `www.circlehook.io`.
3. Vercel will display DNS records to add. Typically:
   - For `circlehook.io` (apex): an A record pointing to `76.76.21.21`
   - For `www.circlehook.io`: a CNAME pointing to `cname.vercel-dns.com`
4. At Namecheap (Domain List > Manage > Advanced DNS), remove any default parking records that conflict.
5. Add the A record and CNAME record as specified by Vercel.
6. Back in Vercel, click Verify. DNS propagation typically takes 5 to 30 minutes.
7. Vercel automatically issues an SSL certificate once verified.
8. Test https://circlehook.io and https://www.circlehook.io. Both should load the site with a valid certificate.
9. Set the apex domain as the primary in Vercel's domain settings so www redirects to non-www (or the other way, your preference).

## Step 6: Stripe activation

1. Sign in at dashboard.stripe.com (create a Circle Hook LLC account if not already done).
2. Provide LLC info: Circle Hook LLC, Tennessee, EIN, business address.
3. When prompted for a business website, enter https://circlehook.io.
4. Stripe reviews the site for acceptable use policy compliance. This landing page satisfies that because it clearly states the service, contains real LLC info in the footer, and provides a working contact method.
5. Approval typically takes a few hours to a day.

## Step 7: Post-launch checks

After the site is live at circlehook.io, run through this checklist:

- [ ] Submit a real contact form and verify the email arrives at nick@circlehook.io
- [ ] Click the Schedule Consultation button from the hero, verify Calendly opens in a new tab
- [ ] Click the secondary Schedule link below the contact form, verify it works
- [ ] Run Lighthouse audit on the production URL. Target: 95+ on all four scores.
- [ ] Test on iPhone, Android, iPad, and a few desktop browsers (Chrome, Safari, Firefox)
- [ ] Paste the URL into Slack and iMessage to verify the OpenGraph preview renders correctly
- [ ] Paste the URL into LinkedIn's Post Inspector (linkedin.com/post-inspector) to validate the social preview
- [ ] Confirm the site appears in Google's URL inspection tool (Google Search Console)
- [ ] Verify the JSON-LD validates at validator.schema.org
- [ ] Verify https://circlehook.io/llms.txt is accessible

## Step 8: Search Console and AI search

Lower priority but worth doing within the first week:

1. Add circlehook.io to Google Search Console at search.google.com/search-console. Verify via DNS TXT record at Namecheap.
2. Submit the sitemap at https://circlehook.io/sitemap.xml.
3. Add circlehook.io to Bing Webmaster Tools.
4. Confirm /llms.txt is accessible and contains a clear summary of the studio.
5. Test how the site appears when asked about by Claude, ChatGPT, and Perplexity. Use queries like "Circle Hook LLC websites for RIAs" or "web designer for financial advisors Tennessee."

## Rollback procedure

If a deployment breaks production:

1. In Vercel, go to Deployments.
2. Find the last known good deployment.
3. Click the three-dot menu > Promote to Production.
4. The previous version is live again within seconds.
5. Investigate the broken deployment locally before redeploying.

## Environment variables reference

| Variable | Where used | Scope | Notes |
|---|---|---|---|
| `RESEND_API_KEY` | `/api/contact` route handler | Server-only | Never expose to client |
| `RESEND_FROM_ADDRESS` | `/api/contact` route handler | Server-only | Must be on a Resend-verified domain |
| `CONTACT_EMAIL` | `/api/contact` route handler | Server-only | Destination for submissions, defaults to nick@circlehook.io |
| `NEXT_PUBLIC_CALENDLY_URL` | Hero and contact section CTAs | Client-safe | NEXT_PUBLIC prefix makes it available client-side |

Copy `.env.example` to `.env.local` for local development. Never commit `.env.local` to git.

## .env.example reference

The repo should include a `.env.example` file with this content:

```
# Resend (contact form delivery)
RESEND_API_KEY=
RESEND_FROM_ADDRESS=nick@circlehook.io

# Contact form destination
CONTACT_EMAIL=nick@circlehook.io

# Calendly booking URL
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-handle/free-consultation
```
