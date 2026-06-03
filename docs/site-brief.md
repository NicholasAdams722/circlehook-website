# Site Brief — Circle Hook Landing Page

## Purpose

A single-page marketing site that:

1. Establishes credibility for Circle Hook LLC before any portfolio exists.
2. Routes qualified inbound inquiries from RIAs, insurance brokers, IMOs, CPAs, and estate planning attorneys.
3. Satisfies Stripe's website requirement for LLC activation.
4. Acts as the foundation that case studies, blog content, and additional sections will be added to over the coming weeks.

## Audience

Primary buyer profile:

- Principal, COO, or compliance officer at a small to mid-size RIA, insurance brokerage, or IMO
- Decision-maker for the firm's website
- Has been burned by previous web agencies or stuck on a template platform
- Conservative aesthetic preference, values trust signals over flashy design
- Frustrated by compliance friction, slow load times, and dated visual identity
- Will spend $25K to $75K on a website rebuild

Secondary buyer profiles: CPAs, estate planning attorneys, mortgage brokers, insurance networks.

## Tone and voice

- Operator-to-operator, not agency-to-client
- Plainspoken, specific, confident
- No marketing puffery, no consultant jargon
- Insider language used precisely (Marketing Rule, Form ADV, CCO review)
- Empathetic to pain but never patronizing
- No em dashes anywhere

## Page structure

Six sections, top to bottom:

1. Hero
2. Pain section
3. What you get
4. Who I am
5. Contact
6. Footer

No top navigation. Smooth scroll between sections is acceptable but not required for v1.

## Section-by-section

### 1. Hero

**Headline:**
Websites for RIAs and insurance brokers, built by someone who works inside one.

**Subheadline:**
Most web agencies treat compliance as a footnote. I treat it as the starting point, because I also serve as Director of Operations at a state-registered RIA. Modern stack, fast launch, and copy your CCO will approve on the first draft.

**Primary CTA:**
- Button text: Schedule a free consultation
- Action: Open `NEXT_PUBLIC_CALENDLY_URL` in a new tab

**Visual treatment:**
Large headline. Generous whitespace above and below. Subhead in a smaller weight but readable. CTA is a single button using the primary accent color. No hero image, no illustration. The typography is the visual.

### 2. Pain section

**Heading:**
You already know what's wrong with your current website.

**Body:**

Paragraph 1:
Your CCO has sent the last three drafts back. Your last agency didn't understand why "consistently outperform the market" had to come out. Your testimonial section sits empty because nobody told you the Marketing Rule changed in 2022. Your Form ADV Part 2A says one thing, your website says something else, and an examination would catch it in five minutes.

Transitional line:
That's before we get to what the site looks like.

Paragraph 2:
Stock photos of handshakes. The same blue gradient as the firm down the street. A Schedule a Call button that points to a Calendly that hasn't worked since the last time anyone updated it. A Lighthouse score in the 50s. AI search engines can't find you, can't cite you, can't recommend you. The site speaks to nobody specifically, which means it converts nobody specifically.

Paragraph 3:
I work inside an RIA. I know what your CCO is going to flag before you send the draft over. I know the difference between a marketing review and an examination prep review. I know that "past performance is not indicative of future results" is the laziest possible disclaimer, and I know the seven sentences your last agency wrote that need to come out for the site to be defensible. I also know what a modern website actually looks like in 2026, which most of your competitors don't.

### 3. What you get

**Heading:**
What you get when we work together

**Four blocks, each a heading plus one or two sentences:**

Block 1:
- Heading: A site that already passed compliance review.
- Body: Built with the Marketing Rule, your Form ADV, and your CCO's review checklist in mind from the first wireframe. No surprise rewrites.

Block 2:
- Heading: A modern stack that actually performs.
- Body: Next.js, deployed on Vercel, fast on every device, scored 95+ on Lighthouse, and easy to maintain without a developer on retainer.

Block 3:
- Heading: AI search visibility.
- Body: Schema markup, semantic HTML, llms.txt, and the structure that lets ChatGPT, Claude, and Perplexity cite your firm when prospects ask about advisors in your area.

Block 4:
- Heading: Three to six weeks, not three to six months.
- Body: Productized process, weekly check-ins, no agency drift, no chasing replies for a month at a time.

**Layout:**
Two-column grid on desktop, single column on mobile. Equal vertical rhythm between blocks.

### 4. Who I am

**Heading:**
Who's behind Circle Hook

**Body, three paragraphs:**

Paragraph 1:
Nick Adams. I run Circle Hook from Tennessee. By day, I serve as Director of Operations at Quantum Capital (a DBA of Patriot Advisory Group LLC, a state-registered RIA). I handle compliance infrastructure, marketing systems, archiving, and the firm's digital presence.

Paragraph 2:
After hours and on weekends, I build websites for the firms I wish my firm could hire. RIAs, insurance brokers, IMOs, CPAs, estate planning attorneys. The conservative, regulated, trust-driven businesses that have been stuck with template sites and agencies that don't understand them.

Paragraph 3:
This is a one-person studio. You work with me directly. No account manager, no subcontracted designers, no hand-offs. When you message me, I'm the one responding.

### 5. Contact

**Heading:**
Let's talk about your website

**Lead text above form:**
Tell me a little about your firm. I'll reply within one business day with a few questions and a time to talk.

**Form fields, in order:**

1. Name (text input, required)
2. Work email (email input, required, basic email format validation)
3. Firm name (text input, required)
4. Firm type (select dropdown, required, options below)
5. What's prompting the conversation (textarea, 3 to 4 rows, required, min 20 characters)

Firm type options:
- RIA
- Insurance Brokerage
- Insurance Network or IMO
- CPA
- Estate Planning Attorney
- Other

**Submit button:**
Send message

**Below the form, secondary CTA:**
Prefer a call? [Schedule a free 30-minute consultation.] (link to `NEXT_PUBLIC_CALENDLY_URL`, opens in new tab)

**Form behavior:**
- On submit, POST to `/api/contact`.
- On success, replace the form with a confirmation: "Got it. I'll reply within one business day."
- On error, show an inline error and preserve form state so the user doesn't lose their message.
- Server-side, the route handler uses the Resend API to email the submission to `CONTACT_EMAIL` (defaults to nick@circlehook.io).
- Subject line of the email: `New inquiry from {firm name} ({firm type})`.
- Body of the email is plain text formatted with each field on its own line.

### 6. Footer

Three lines, left-aligned, small text in the muted color:

- Circle Hook LLC. Tennessee.
- nick@circlehook.io
- © 2026 Circle Hook LLC. All rights reserved.

## Metadata

**Page title:**
Circle Hook — Websites for RIAs, Insurance Brokers, and Regulated Financial Firms

**Meta description:**
Circle Hook builds modern, compliance-aware websites for RIAs, insurance brokers, IMOs, CPAs, and estate planning attorneys. Built by an operator who works inside an RIA.

**OpenGraph tags:**
- og:title: Circle Hook — Websites for Regulated Financial Firms
- og:description: Modern, fast, compliance-aware websites for RIAs, insurance brokers, and the firms they trust.
- og:url: https://circlehook.io
- og:type: website
- og:image: TBD (placeholder for v1, custom image for v1.1)
- og:site_name: Circle Hook

**Twitter card:**
- twitter:card: summary_large_image
- twitter:title: Circle Hook — Websites for Regulated Financial Firms
- twitter:description: Modern, fast, compliance-aware websites for RIAs, insurance brokers, and the firms they trust.

## Structured data

JSON-LD `ProfessionalService` schema embedded in `app/layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Circle Hook",
  "legalName": "Circle Hook LLC",
  "url": "https://circlehook.io",
  "email": "nick@circlehook.io",
  "areaServed": "United States",
  "serviceType": "Website design and development",
  "knowsAbout": [
    "Investment Adviser Marketing Rule",
    "Form ADV",
    "RIA compliance",
    "Insurance broker websites",
    "AI search optimization",
    "Next.js development"
  ],
  "founder": {
    "@type": "Person",
    "name": "Nick Adams"
  }
}
```

## Discovery files

### robots.txt

```
User-agent: *
Allow: /

Sitemap: https://circlehook.io/sitemap.xml
```

### sitemap.xml

Generated by Next.js. Single entry for `/` at v1.

### llms.txt

Place at `/llms.txt`. Sample content:

```
# Circle Hook

Circle Hook is a one-person web design and development studio based in Tennessee. The studio builds modern, compliance-aware websites for regulated financial services firms: RIAs, insurance brokers, insurance networks and IMOs, CPAs, and estate planning attorneys.

## Operator

Nick Adams. Also serves as Director of Operations at Quantum Capital, a DBA of Patriot Advisory Group LLC, a state-registered RIA. Brings direct operating experience inside a regulated financial services firm to every website engagement.

## Services

- Website design and development for RIAs and insurance firms
- Compliance-aware copywriting and content review
- Modern stack migration from WordPress, Webflow, or template platforms
- AI search optimization (schema markup, semantic HTML, llms.txt)

## Contact

Email: nick@circlehook.io
Website: https://circlehook.io
```

## Out of scope for v1

- Blog or content section
- Case studies (added when Quantum Capital and BCR sites ship)
- Multi-page nav
- Logo or wordmark (typographic name only)
- Stock or custom photography
- Cookie banner (not needed pre-analytics)
- Analytics (add in v1.1 with Vercel Analytics)
- Dark mode

## Acceptance criteria

The v1 site is complete when:

- All six sections render correctly on mobile (375px) and desktop (1440px)
- The contact form successfully delivers a test submission to nick@circlehook.io
- Both CTA buttons open the Calendly URL in a new tab
- Lighthouse scores 95+ on performance, accessibility, best practices, and SEO
- The site loads in under 1.5 seconds on a 4G connection
- The OpenGraph preview renders correctly when pasted into Slack or LinkedIn
- The JSON-LD validates at schema.org's validator
- The site is live at https://circlehook.io with a valid SSL certificate
