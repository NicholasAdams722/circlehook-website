export const hero = {
  headline: {
    lead: "Better",
    rest: " Websites for the Financial Industry",
  },
  subheadline:
    "Most web agencies treat compliance as a footnote. I treat it as the starting point, because I also serve as Director of Operations at a state-registered RIA. Modern stack, fast launch, and copy your CCO will approve on the first draft.",
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
      body: "When a marketing site is not enough. Client portals, internal tools, calculators, and integrations with the platforms your firm already uses.",
    },
    {
      heading: "Graphic Design",
      body: "Visual identity, marketing collateral, and brand systems that match the quality of the firms you serve. No template Canva files, no generic stock graphics.",
    },
  ],
} as const;

export const whatYouGet = {
  heading: "What you get when we work together",
  blocks: [
    {
      heading: "A site that already passed compliance review.",
      body: "Built with the Marketing Rule, your Form ADV, and your CCO's review checklist in mind from the first wireframe. No surprise rewrites.",
    },
    {
      heading: "A modern stack that actually performs.",
      body: "Next.js, deployed on Vercel, fast on every device, scored 95+ on Lighthouse, and easy to maintain without a developer on retainer.",
    },
    {
      heading: "AI search visibility.",
      body: "Schema markup, semantic HTML, llms.txt, and the structure that lets ChatGPT, Claude, and Perplexity cite your firm when prospects ask about advisors in your area.",
    },
    {
      heading: "Three to six weeks, not three to six months.",
      body: "Productized process, weekly check-ins, no agency drift, no chasing replies for a month at a time.",
    },
  ],
} as const;

export const whoIAm = {
  heading: "Who's behind Circle Hook",
  paragraphs: [
    "Nick Adams. I run Circle Hook from Tennessee. By day, I serve as Director of Operations at Quantum Capital (a DBA of Patriot Advisory Group LLC, a state-registered RIA). I handle compliance infrastructure, marketing systems, archiving, and the firm's digital presence.",
    "After hours and on weekends, I build websites for the firms I wish my firm could hire. RIAs, insurance brokers, IMOs, CPAs, estate planning attorneys. The conservative, regulated, trust-driven businesses that have been stuck with template sites and agencies that don't understand them.",
    "This is a one-person studio. You work with me directly. No account manager, no subcontracted designers, no hand-offs. When you message me, I'm the one responding.",
  ],
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
    "Tell me a little about your firm. I'll reply within one business day with a few questions and a time to talk.",
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
