export const industries = [
  "RIAs",
  "Insurance Brokers",
  "IMOs",
  "CPAs",
  "Estate Planning Attorneys",
  "Wealth Managers",
  "Financial Advisors",
] as const;

export const stats = [
  { value: "95+", label: "Lighthouse Performance" },
  { value: "3–6", label: "Weeks to Launch" },
  { value: "1", label: "Business Day Reply" },
] as const;

export const hero = {
  headline: {
    lead: "Better",
    rest: " Websites for the Financial Industry",
  },
  subheadline:
    "I build websites and digital tools for the financial industry, with an operator's eye for the details that actually matter. Modern stack, fast launch, and an inside view of the regulatory world your firm works in.",
  ctaLabel: "Schedule a free consultation",
} as const;

export const services = {
  heading: "Services I offer",
  blocks: [
    {
      heading: "Website Design",
      body: "Modern, fast websites built on Next.js and deployed on Vercel. Compliance-aware from the first wireframe, accessible by default, and easy to maintain without a developer on retainer.",
    },
    {
      heading: "SEO and AI Search",
      body: "Built to be found by Google and citable by the AI assistants your prospects are starting to ask. Technical SEO, structured data, llms.txt, and content patterns that put your firm in front of the right people.",
    },
    {
      heading: "App Development",
      body: "When a marketing site is not enough. Client portals, internal tools, interactive dashboards, calculators, and integrations with the platforms your firm already uses.",
    },
    {
      heading: "Graphic Design",
      body: "Visual identity, marketing collateral, and brand systems that match the quality of the firms you serve. No template Canva files, no generic stock graphics.",
    },
  ],
} as const;

export const whatYouGet = {
  heading: "What makes my work different",
  blocks: [
    {
      heading: "Design that holds up to scrutiny.",
      body: "Typography that respects your reader. Layouts that are not a template. Visual choices that signal you take your work seriously, because your clients do.",
    },
    {
      heading: "A user experience that does not waste time.",
      body: "Every page earns its place. Every click moves toward a decision. No carousels, no popups, no scrolljacking, no friction between curiosity and contact.",
    },
    {
      heading: "Found by Google. Cited by AI.",
      body: "Technical SEO that ranks against agencies ten times the size, plus the structure that lets ChatGPT, Claude, and Perplexity cite your firm when prospects ask for recommendations.",
    },
    {
      heading: "Built to convert.",
      body: "Every section has a job. Calls-to-action are placed where decisions get made, not where they look symmetrical. Forms are short, friction is removed, and the next step is always obvious.",
    },
  ],
} as const;

export const workflow = {
  heading: "My process",
  steps: [
    {
      heading: "Onboarding",
      body: "I start with a 30-minute call to understand your firm, your clients, and what success looks like. You get a written scope and timeline within three business days. No surprise change orders mid-project.",
    },
    {
      heading: "Design and Production",
      body: "Wireframes first, then visual design, then build. You see progress weekly, give feedback in one consolidated round per phase, and the site comes together in front of you. No black-box agency drift.",
    },
    {
      heading: "Pre-Launch and QA",
      body: "Cross-browser and device testing, Lighthouse audits, accessibility review, redirects from your old URLs, analytics setup, and a final walkthrough before I push it live. The site that ships is the site you signed off on.",
    },
    {
      heading: "Post Launch",
      body: "A full handoff with documentation so you or another developer can take the wheel. CMS training so simple edits like copy tweaks, image swaps, and new service blocks do not require a developer. Ongoing support packages available if you would rather keep me on retainer for updates, monitoring, and additions.",
    },
  ],
} as const;

export const whoIAm = {
  heading: "Who's behind Circle Hook",
  paragraphs: [
    `I'm Nick, the founder of Circle Hook. Based in Nashville, I build websites and digital tools for businesses in financial services and other regulated industries, the kind of work where the details aren't optional and "close enough" isn't a standard anyone can live with.`,
    `My path here isn't the usual one. Alongside Circle Hook, I serve as Director of Operations at a registered investment advisor, where I'm responsible for the systems and compliance infrastructure the firm runs on. So I don't just build your site and hand it off. I understand the regulatory world you operate in, from marketing rules to recordkeeping, because I work inside it every single day.`,
    `I build on a modern stack and I think in systems, not one-off projects. The goal is never a website that only looks good in a screenshot. It's an operation that keeps working after launch: fast, maintainable, and built so your team can actually run it.`,
  ],
  promise: {
    heading: "My promise to you",
    body: `I treat your business like it's my own. I'll tell you the truth even when it isn't what you want to hear, I'll do the work I said I'd do, and I won't disappear once the invoice clears. You'll always know where your project stands and exactly what you're paying for.`,
  },
} as const;

export const FIRM_TYPES = [
  "RIA",
  "Insurance Brokerage",
  "Insurance Network or IMO",
  "CPA",
  "Estate Planning Attorney",
  "Other",
] as const;

export type FirmType = (typeof FIRM_TYPES)[number];

export const contact = {
  heading: "Let's talk about your website",
  leadText:
    "Two ways to start the conversation. Book a 30-minute call, or send me a note with a few details about your firm. Either way, I reply within one business day.",
  fields: {
    name: { label: "Name", name: "name" },
    email: { label: "Work email", name: "email" },
    firmName: { label: "Firm name", name: "firmName" },
    firmType: { label: "Firm type", name: "firmType" },
    message: { label: "What's prompting the conversation", name: "message" },
  },
  firmTypePlaceholder: "Select one",
  firmTypeOptions: FIRM_TYPES,
  submitLabel: "Send message",
  sendingLabel: "Sending…",
  successMessage: "Got it. I'll reply within one business day.",
  errorMessage:
    "Something went wrong. Please try again, or email nick@circlehook.io directly.",
  secondaryCtaPrefix: "Prefer a call?",
  secondaryCtaLink: "Schedule a free 30-minute consultation.",
  quickContact: {
    scheduleLabel: "Schedule a 30-minute call",
    emailLabel: "Email me directly",
    emailSubject: "Inquiry from circlehook.io",
    emailBody:
      "Firm name:\n\nFirm type:\n\nWhat's prompting the conversation:\n",
  },
} as const;

export const footer = {
  lines: [
    "Circle Hook LLC. Tennessee.",
    "nick@circlehook.io",
    "© 2026 Circle Hook LLC. All rights reserved.",
  ],
  email: "nick@circlehook.io",
} as const;
