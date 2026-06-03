# Circle Hook LLC — Project Context for Claude Code

This file is the primary context document for any Claude Code session working in this repository. Read this first, then read `AGENTS.md`, then any relevant files in `docs/`.

## What this project is

This is the marketing site for Circle Hook LLC, a one-person web design and development studio based in Tennessee. The studio's positioning is regulated financial services: RIAs, insurance brokers, insurance networks and IMOs, CPAs, and estate planning attorneys.

The site is a single-page landing experience designed to establish credibility, route inbound inquiries, and satisfy Stripe's website requirement for the LLC.

The site is intentionally simple at launch. No portfolio yet (the studio's case studies are in active development with Quantum Capital and BCR Ventures). No logo yet. The credibility is carried by clean typography, strong copy, and a positioning that no other web agency can credibly claim.

## Who the operator is

Nick Adams. Director of Operations at Quantum Capital, a DBA of Patriot Advisory Group LLC (CRD #120649), a state-registered RIA based in Portsmouth, NH. Nick handles compliance infrastructure, marketing systems, archiving, and the firm's digital presence. He runs Circle Hook LLC as a separate business outside of his PAG role.

The unique positioning of Circle Hook rests on Nick's direct operating experience inside an RIA. He knows the Marketing Rule from the inside, has lived through Form ADV cycles, manages compliance archiving infrastructure, and understands what a CCO will and will not accept on a website. No other web agency targeting RIAs has this depth of operational experience.

## Tech stack

- Next.js 15 with App Router
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui component primitives
- Deployed on Vercel
- Domain: circlehook.io (registered with Namecheap, owned)
- Email infrastructure: Google Workspace (nick@circlehook.io)
- Contact form delivery: Resend API
- Calendar booking: Calendly (linked, not embedded)
- Payments (future): Stripe

## Current state

The Next.js scaffold is in place with TypeScript, Tailwind, shadcn/ui, and ESLint configured. The base `app/page.tsx` is still the default scaffold. Nothing custom has been built yet.

## Build goal for the current task

Replace the default scaffold with a single-page landing site per the specification in `docs/site-brief.md`. Apply the visual conventions in `docs/design-system.md`. Deploy following the runbook in `docs/deployment.md`.

The page is six sections, top to bottom: hero, pain section, what you get, who I am, contact, footer. Form submissions go to a `/api/contact` route handler that emails Nick via Resend. Both consultation CTAs link to a Calendly URL stored in `NEXT_PUBLIC_CALENDLY_URL`.

## What's already settled

These decisions are locked. Do not relitigate them in this session.

- Single page, no multi-page navigation
- No logo, type-only branding
- No stock photography, no hero illustrations
- Typography: Fraunces for headings (via next/font/google), Geist Sans for body (already in scaffold)
- Single accent color, restrained use throughout
- Resend for form delivery, not Formspree, not a third-party form embed
- Calendly for booking, direct link not embed
- Deployment target: Vercel

## What's open for discussion

- The exact accent color (recommend deep forest green or warm charcoal, but Nick decides)
- Microcopy refinements
- Subtle motion choices (page intros, hover states)
- Whether to include any motion at all in v1

## Coding conventions

- Page-specific section components live in `app/_sections/` and are imported into `app/page.tsx`. The page file itself stays slim.
- Reusable UI primitives live in `components/ui/` (shadcn defaults) and `components/` (custom wrappers).
- All copy lives in a separate `lib/content.ts` file so it can be edited without touching layout.
- Server components by default. Client components only when necessary (form submission, motion). All client components flagged with `"use client"` at the top.
- TypeScript strict. No `any`. No `// @ts-ignore`.
- Tailwind utilities only. No CSS modules unless absolutely necessary.
- Use `next/font/google` for typography, not external font links.

## Don't

- Don't add a CMS yet. Content is in code for v1.
- Don't add a blog yet. That's a v2 expansion.
- Don't suggest WordPress, Webflow, or template platforms. The studio's positioning specifically rejects those.
- Don't write puffy agency copy. Read the site brief for tone before writing any copy.
- Don't use em dashes in copy or comments. Nick has a strict preference against them.
- Don't add analytics, cookie banners, or tracking pixels in v1.
- Don't pull in extra dependencies without asking. The scaffold has everything needed.
