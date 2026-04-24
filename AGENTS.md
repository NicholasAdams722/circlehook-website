# Circle Hook LLC — Claude Context

> Read this file at the start of every session. It encodes the decisions already made so you don't re-litigate them, and the principles that keep the work aligned with the business. If a request conflicts with this file, surface the conflict rather than silently resolving it.

---

## 1. The business in one paragraph

Circle Hook LLC builds **turnkey web architecture that converts** for firms in the financial advisory ecosystem — RIAs, wealth management firms, and insurance/annuity brokerages that serve them. We also take on select work outside the niche when the project and fit are right. The studio is founder-led: the person who sells the work also builds it, which is the single biggest differentiator in a category full of hand-offs and account managers. This repo is Circle Hook's own marketing site. It is the primary sales asset — a prospect landing here should feel, in the first five seconds, that whoever built this site will build a better one for them than anyone else in their vendor list. Every tradeoff in this codebase resolves to: **does this build trust or move the visitor toward contacting us?** If it does neither, cut it.

---

## 2. Niche and positioning

**Anchor niche:** the financial advisory ecosystem.
- Registered Investment Advisors (RIAs) and independent wealth management firms (e.g., Patriot Advisory Group).
- Insurance and annuity brokerages (e.g., BCR Ventures).
- Ancillary: CFPs, fee-only planners, multi-family offices.

**Not exclusive, but anchored.** The homepage and primary service messaging lead with financial advisory. A clearly-signposted section ("Also available for select work outside the niche") acknowledges other work without diluting the main position. Case studies in the financial space come first.

**Why this niche:**
- High project budgets, high LTV, retainer-friendly.
- Underserved by modern design — the category is dominated by dated templates and broker-dealer cookie-cutter sites.
- Referral-heavy business; one great site leads to three more inside a year.
- Regulatory knowledge (FINRA / SEC / state) is a real moat.
- Circle Hook already has real relationships in the space.

---

## 3. Differentiators (lead with these)

The two positioning pillars, in order of emphasis on the homepage:

### A. Direct access — "Work with the person who actually builds it"
No account managers, no discovery-call handoffs, no offshore dev team behind the curtain. The person you talk to is the person writing the code. This is true now and will stay true even as the studio scales; if and when subcontractors are used, that is disclosed up front, not hidden.

### B. Compliance-aware — "Websites built with FINRA and SEC rules in mind"
We understand the regulatory environment advisors operate in. We know what the SEC Marketing Rule (206(4)-1) says about testimonials and endorsements. We know "performance claims" require disclosure. We know "fiduciary" is a term of art. We don't get your firm flagged in a compliance audit because we used the wrong word or embedded the wrong widget.

### Supporting differentiators (use when relevant, don't lead)
- Modern tech stack (Next.js, Vercel) → measurable speed.
- Fixed-scope, fixed-price engagements (when possible) → no surprise invoices.
- Nashville-based, nationally available.

---

## 4. Competitive context

When making design or copy decisions, remember what we are competing against:

- **JLB (jlbworks.com)** and **323 Design (323design.com)** — same Franklin, TN office; sister brands. Generalist agencies with 20+ years, 1,100+ clients, deep service menus. 323 is the cleaner/more modern of the two — the user prefers its aesthetic as a starting point. Neither is focused on the advisory ecosystem.
- **Red Olive (redolive.com)** — Utah, recently absorbed into Stellar. Polished aspirational end of the category. Generalist.
- **Dated advisor-specific platforms** — LPL, Raymond James, and broker-dealer template systems produce near-identical looking advisor sites. Most independent RIA sites look like 2014.

**We cannot win "20 years in business" or "1,100 clients." We win on specialization, design quality, direct access, and compliance literacy.**

**Claims we will not make on this site, ever:**
- Number of clients served (we are early).
- Years in business as a primary stat.
- Fabricated awards, fabricated press mentions, or "As seen in" bars we haven't earned.
- Team size implications ("our team of experts") when the team is effectively one person.

---

## 5. Target client profile

**Primary persona:** the owner, founding partner, or marketing lead at a mid-sized RIA (roughly $50M–$2B AUM) or independent wealth management firm. Usually a principal who has outgrown their existing site, can articulate what they don't like about it, and has authority to approve a $15k–$60k engagement without a committee.

**What they care about:**
- Looking credible and modern to prospects and referrals, especially compared to larger firms.
- Not getting flagged by compliance.
- A site their assistant or marketing person can update without breaking.
- Speed and SEO (AI search visibility is increasingly a factor).
- Being able to reach the person who built it when something breaks.

**Objections we will hear:**
- "Our current site is fine." → Probably isn't; offer a free audit.
- "We use [LPL / Raymond James / broker-dealer platform]." → Show what an independent site looks like side-by-side.
- "Compliance has to approve everything." → We build for that from day one.
- "We don't need [SEO / app / integration]." → Fine; modular engagements.

---

## 6. Success criteria for this site

Measurable goals. These double as proof points we can cite.

- Lighthouse scores ≥ 95 for Performance, Accessibility, Best Practices, SEO (mobile, every page).
- Largest Contentful Paint under 1.5s on a 3G-throttled connection.
- Zero Cumulative Layout Shift.
- Every section has a clearly statable job in one sentence. If it doesn't, it doesn't exist.
- Mobile-first: the mobile experience is the primary canvas, desktop is the enhancement.
- Contact form / booking path reachable from every page within two clicks.

---

## 7. Service catalog

Services Circle Hook offers, in rough priority order on the site:

1. **Website design and development** — the anchor service. Next.js builds, CMS integrations where needed, fast and beautiful.
2. **AI Search Strategies** — the modern evolution of SEO. Covers traditional search (Google, Bing technical SEO, structured data, content strategy) and generative engine optimization (GEO/AEO — how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews surface and cite firms). Positioned as a strategic discipline, not a commodity service.
3. **Marketing strategy** — positioning, messaging, conversion architecture. Not "run your ads" so much as "figure out what the site and the funnel should say."
4. **App development and integrations** — custom tools, client portals, CRM/MAP integrations (Wealthbox, Redtail, HubSpot, Salesforce Financial Services Cloud, Orion, Morningstar, etc.), Calendly/Cal.com embeds, compliance archiving tools (Smarsh, Global Relay).
5. **Ongoing support and maintenance** — retainer model for firms that want a long-term partner, not a one-off build.

**How to talk about services on the site:** each one gets a dedicated page with a clear outcome statement, a short process description, pricing posture (fixed, range, or custom), and a case study or example tied to it. No feature laundry lists.

---

## 8. Site architecture

**Layout inspiration:** 323 Design (323design.com) is the structural reference. We lift specific patterns from it (see below) while executing each at a higher design tier. Do not lift their typography, color, or the animated-zero stat counter.

### Patterns to lift from 323

1. **Services in primary nav, not buried.** The top nav shows the two most important service pages as direct links (Web Design, AI Search), plus a "Services" link that opens the overview. Do not hide everything under a single "What we do" dropdown.
2. **Each service has a dedicated page.** `/services/[slug]` per service. No single-page services monolith with accordions.
3. **Image-led service cards on the homepage.** Each service card shows a real screenshot from actual work (not a stock icon, not a Lucide glyph as the primary visual), the service name, one sentence of description, and a "Learn More" link to the dedicated page.
4. **Industries served is its own section, separate from services.** "What we do" and "who we serve" are two different cuts. Industries section features the financial advisory ecosystem most prominently, with 3–4 other categories acknowledged.
5. **Services repeated in the footer.** Quick access from anywhere.
6. **Consistent service-card pattern everywhere.** Same structure, same image-to-text ratio, same CTA wording across the homepage, the services index, and anywhere else a service is surfaced.

### Patterns to adapt, not copy

- **Unequal service emphasis.** 323 shows six services at equal weight. Circle Hook's services are not equal — Web Design is the anchor. The homepage services grid should give it a larger card (e.g., one hero card spanning two columns, four smaller cards below) rather than a uniform 3×2.
- **Real screenshots over stock photography.** Service cards use actual work (BCR, Patriot, future builds) as the imagery — never generic stock.
- **Shorter industries list.** 3–4 categories with financial advisory featured, not a six-column exhaustive taxonomy.

### Patterns to explicitly avoid from 323

- Generic sans-serif typography.
- Animated-from-zero stat counters ("0+ Years Experience"). They show placeholder text when JavaScript fails and read as unearned when the counters are tiny (new studio).
- Stock imagery that looks interchangeable across service categories.

### Pages and routes (App Router, route group `(marketing)`)

- `/` — Home
- `/services` — Services overview + links to each
- `/services/web-design`
- `/services/ai-search` — AI Search Strategies (the reframed SEO service)
- `/services/marketing-strategy`
- `/services/app-development`
- `/services/support`
- `/work` — Portfolio index
- `/work/[slug]` — Individual case studies (Patriot, BCR, etc.)
- `/about` — Founder story, how we work, the "direct access" pillar lives here
- `/insights` (or `/journal`) — Blog / long-form. The proof engine for compliance expertise and design craft.
- `/insights/[slug]`
- `/contact` — Primary conversion path

**Nav structure:** Web Design · AI Search · Services (index) · Work · Insights · About · Contact (button). The two highest-value service pages are top-level links. "AI Search" is the display label for "AI Search Strategies" in the nav — the full name is used in page headers and body copy. "Services" links to the full index. On mobile, a full-screen drawer lists everything with services expanded by default.

**Global footer:** services list, contact info, social links, disclosure/compliance links, copyright. Keep it useful, not stuffed.

---

## 9. Design direction

The aesthetic brief: **editorial-modern, refined, quietly confident, unmistakably 2026.** Think "design studio that respects your firm's seriousness" more than "agency selling you growth hacks." Starting reference is 323 Design's structure and cleanliness, but executed one tier more refined.

### Typography (decided for v1, refine later)

- **Display / headlines:** **Fraunces** — a variable serif with character, capable of tight editorial layouts and large dramatic headlines. Distinctive, not overused.
- **Body:** **Geist Sans** — clean modern sans, self-hosted via `next/font`. Good rendering across sizes.
- **Monospace (for technical accents, code, numbers in stats):** **Geist Mono**.

**Banned from this project:** Inter, Roboto, Arial, Helvetica, Poppins, Montserrat. No system font stack as primary.

### Color

- **Primary palette (light mode default):**
  - Background: warm off-white, not stark white. (`#FAF8F4` as starting point.)
  - Ink: near-black, slightly warm. (`#141414` as starting point.)
  - Accent: a single restrained accent — starting direction is a muted gold/ochre (`#B8935A` area). Open to refinement. Not purple, not blue-to-purple gradient, not Vercel black-and-white default.
- **Dark mode:** supported. Warm black background, warm off-white text, same accent desaturated.
- Color is applied via CSS variables (theme tokens). No hardcoded hex values in component files.

### Layout

- **Generous white space.** If a section feels cramped, it is.
- **Asymmetric compositions** where it makes sense — offset headlines, text blocks that don't all center, images that break the grid.
- **Type-first.** Large editorial headlines do a lot of the visual work. Icons are decoration, not structure.
- **Grid-breaking is earned, not default.** Pick 1–2 moments per page where something escapes the column grid. Too many, and it feels chaotic.

### Imagery

- Real photography > stock. For financial advisory case studies, screenshots of the work are the hero image.
- If we use abstract imagery, keep it restrained — textures, paper grain, subtle gradients. Never generic network diagrams, not AI-glow graphics, no people-in-suits-shaking-hands.
- Every image uses `next/image` with correct dimensions and meaningful alt text.

### Motion

- Use it sparingly, with intent. One well-orchestrated hero entrance (staggered reveal, subtle fade-up) is worth more than ten scattered hover effects.
- Respect `prefers-reduced-motion`.
- No auto-playing carousels. No parallax for parallax's sake. No scroll-jacking.
- Motion library allowed for React where worth it; prefer CSS-only where possible.

### Iconography

- Lucide icons (shadcn default) — used as accents, not as the load-bearing content of a section.
- Custom inline SVGs for unique moments (logo marks, the Circle Hook wordmark, decorative rule flourishes).

---

## 10. Brand voice

**Direct. Specific. Confident without being loud. Informed about the audience's world.**

**Yes:**
- Plain English, short sentences, real numbers.
- Acknowledges that financial advisors live inside constraints we respect (compliance, fiduciary duty, referral dynamics).
- Occasional dry wit. Never cringe.

**No:**
- Buzzwords: *synergy, unlock, unleash, transform, elevate, empower, game-changing, cutting-edge, next-level, revolutionary, seamless, world-class*.
- Vague benefit claims without proof: "better results", "more leads", "stand out from the competition".
- "We're passionate about...", "We believe that...", "In today's digital landscape...", "Are you tired of...".
- Second-person hectoring: "You need a website that...", "Your business deserves...".
- Emojis in marketing copy. Exclamation marks, one per page max and only if genuinely earned.
- Em dashes (—) anywhere in copy or UI text. They read as AI-generated. Use a comma, period, or rewrite the sentence instead.
- Performance claims or return figures, ever, even as examples.

### Voice samples

| Weak | Stronger |
|---|---|
| We build beautiful websites that convert. | Your advisory site shouldn't look like a template your broker-dealer picked out in 2014. |
| Our passionate team delivers world-class results. | Two-week turnaround on sprints. Fixed scope, fixed price. |
| Unlock the power of modern web design for your firm. | The site your referred prospects see should look like the firm you want to be, not the firm you were five years ago. |
| We're passionate about helping advisors grow. | We only work with advisors, brokerages, and the firms that serve them. It's the whole reason we exist. |

---

## 11. Anti-patterns (do not produce)

- Generic hero copy: "Transform your business", "Unlock your potential", "Take your firm to the next level".
- Fabricated testimonials, fake logos, fabricated awards, or "As seen in" bars using publications we haven't actually been in.
- Vanity stats we haven't earned ("20 years in business", "1,000+ clients served").
- Lorem ipsum in committed code. Real copy or leave it out.
- Three-column feature grids where every card has an icon and a one-line description. The tell of a template.
- Purple-to-blue gradient backgrounds.
- Stock photos of people in suits shaking hands, diverse teams laughing at laptops, glowing abstract network graphics.
- Any language suggesting investment performance, projected returns, or specific outcomes. This is both a compliance minefield and bad copy.
- Client logos used without permission.
- "AI-powered" as a selling point unless the thing is literally AI-powered.

---

## 12. Compliance notes (critical for this niche)

Because we build for financial advisors, the site itself and any case study or client-facing language must respect the same rules our clients live under. This applies to Circle Hook's own site when we discuss client work, and it applies doubly to anything we ship for a client.

**Key principles:**

- **SEC Marketing Rule (Rule 206(4)-1).** Testimonials and endorsements are permitted but require specific disclosures (whether the person is a client, whether they were compensated, material conflicts of interest). When publishing a testimonial from an advisor client, include the required disclosure nearby.
- **No performance claims or projected returns.** Not in case studies, not in quotes, not in meta descriptions. "Helped their firm grow" is fine; "increased AUM by $20M" is not, unless the client has cleared that exact wording with their compliance team and we have it in writing.
- **"Fiduciary" is a regulated term.** Only use when the firm is actually operating as a fiduciary in the described context.
- **Third-party ratings, awards, rankings.** If a client has a Forbes / Barron's listing and wants it displayed, include the required disclosure (criteria, date, cost to be considered if applicable).
- **Disclosure pages.** Any live financial-advisor site we build must have, at minimum: ADV links, privacy policy, terms, accessibility statement. Circle Hook's own site needs privacy + terms + accessibility, not ADVs.

**When in doubt, flag it.** Claude should never generate copy that could be a performance claim, a prohibited testimonial, or a fiduciary misrepresentation. Surface the question to the human before producing the content.

---

## 13. Stack (decided — do not propose swaps)

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives, Maia preset)
- **Package manager:** npm
- **Hosting:** Vercel (auto-deploy on push to `main`, preview deployments per PR)
- **Domain:** `circlehook.io` (owned). Production canonical URL: `https://circlehook.io`. All metadata, OG tags, sitemap entries, structured data, and absolute URLs use this.
- **Node:** LTS
- **Fonts:** Fraunces + Geist via `next/font`
- **Icons:** Lucide (shadcn default)

If a new dependency is genuinely needed, justify it in the commit message. Default answer is "use what we have."

---

## 14. Commands

```bash
npm install                          # install deps
npm run dev                          # local dev at http://localhost:3000
npm run build                        # production build (run before commits of meaningful changes)
npm run lint                         # ESLint
npx shadcn@latest add <component>    # add a shadcn component
```

---

## 15. File structure

```
app/
  (marketing)/             # public route group
    page.tsx               # home
    services/
    work/
    insights/
    about/
    contact/
  api/                     # route handlers (forms, integrations)
  layout.tsx               # root layout (fonts, metadata)
  globals.css              # Tailwind directives + CSS variables
components/
  ui/                      # shadcn primitives — avoid editing casually
  sections/                # composed page sections (Hero, Services, CTA, etc.)
  layout/                  # Header, Footer, Nav
lib/                       # utilities, constants, data helpers
content/                   # marketing copy in TS/MDX when separated from JSX
public/
  fonts/                   # if self-hosted outside next/font
  images/
```

- **One component per file.** Named exports preferred over default.
- **Absolute imports** via `@/*`. No cross-folder relative imports.
- **Server components by default.** Client components only where interactivity requires it.

---

## 16. Code conventions

- **TypeScript:** no `any`. If a type is hard, think rather than escape-hatch.
- **Styling:** Tailwind utilities first. Extract to a component before reaching for custom CSS. Use the theme's CSS variables, never hardcoded hex.
- **Accessibility is non-negotiable.**
  - Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Every interactive element is keyboard-reachable with a visible focus state.
  - Meaningful alt text. Decorative images use `alt=""`.
  - Color contrast meets AA; AAA where easy.
  - Forms use labels, not just placeholders.
- **Images:** always `next/image` with width/height. Prefer AVIF/WebP.
- **Links:** external opens in new tab with `rel="noopener noreferrer"`. Internal uses `next/link`.
- **Metadata:** every page exports proper `metadata` with title, description, OG image.

### Commit style

Conventional commits. Short, imperative, lowercase. One logical change per commit.

```
feat: add hero section with staggered entry
fix: correct focus ring contrast on primary button
chore: bump dependencies
docs: update CLAUDE.md with niche clarification
refactor: extract ServicesSection from homepage
```

---

## 17. Workflow — how Claude should operate in this repo

1. **Read CLAUDE.md at the start of every session.** Re-read if context is ambiguous.
2. **For non-trivial work, propose before you build.** Two to three sentences describing the approach, then wait for a go-ahead. Exception: narrowly scoped tasks ("add a button to the footer") — just do it.
3. **Surface open decisions, don't silently pick.** If a task depends on something in section 19, stop and flag it.
4. **Prefer minimal diffs.** Change the minimum needed. Don't reformat unrelated code.
5. **`npm run build` must pass before commits.** Type errors block.
6. **Real copy only.** If a section needs copy and none exists, ask. Don't fill with marketing speak.
7. **When in doubt, cut.** Less site executed well beats more site executed adequately.
8. **Flag compliance-adjacent content.** Any copy involving performance, testimonials, or fiduciary language gets surfaced for review before shipping.

---

## 18. Definition of done (any new page or component)

- [ ] Renders correctly at 375px, 768px, and 1280px minimum.
- [ ] Keyboard-navigable. Focus states visible and on-brand.
- [ ] Passes `npm run build` with no warnings.
- [ ] Lighthouse ≥ 95 on the affected route (mobile).
- [ ] No hardcoded colors — theme variables only.
- [ ] All images via `next/image` with proper dimensions and alt text.
- [ ] Copy is real, not placeholder.
- [ ] Metadata (title, description, OG) is set.
- [ ] Reviewed for compliance-adjacent language if the content involves client work or financial topics.

---

## 19. Open decisions (flag these if they block a task)

- **Primary CTA.** Contact form, Cal.com booking embed, or phone + email. Leaning toward a form + optional booking secondary.
- **Case studies.** BCR and Patriot/Quantum are potential case study subjects. Need their permission before publishing anything identifying. Until permission is granted, case studies may be shown as anonymous (e.g., "A Portsmouth-based wealth management firm").
- **Logo / wordmark.** Typographic treatment using Fraunces is the v1 approach. Dedicated mark will come later.
- **Pricing transparency.** Publish range, show fixed-price packages, or keep behind a conversation — not yet decided.
- **Analytics.** None installed yet. Plausible or PostHog likely.
- **Form backend.** If going with a contact form: Resend + Next.js route handler is the default path.
- **Blog/insights cadence and topics.** First 3 post ideas TBD; candidates include "The SEC Marketing Rule in plain English," "What an advisor site should actually do," and "Why your broker-dealer template is costing you referrals."

---

## 20. Guardrails — things Claude should not do without explicit approval

- Add a new dependency.
- Change the directory structure or rename files.
- Add tracking scripts, analytics, or any third-party script that runs on page load.
- Touch `.env` files or any secret.
- Publish, deploy, or change Vercel project settings.
- Write testimonials, client names, or specific metrics on behalf of real clients (BCR, Patriot, Quantum, or anyone else).
- Make claims about Circle Hook's experience, team size, or track record that aren't already documented and approved here.
- Produce financial performance claims, projected returns, or fiduciary characterizations of any kind.
- Use client logos or screenshots without explicit permission being recorded in this file or the case study frontmatter.
