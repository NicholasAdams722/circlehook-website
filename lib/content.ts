export const hero = {
  headline: {
    before: "Your website is just the ",
    italic: "surface",
    after: ".",
  },
  subheadline:
    "We build what people see and everything underneath that makes it work for your business: CRM, automation, integrations, AI. The right rig for your conditions.",
  ctaLabel: "Start a project",
  ctaHref: "#contact",
} as const;

export const problem = {
  heading: {
    before: "",
    italic: "Drowning",
    after: " in new technology?",
  },
  paragraphs: [
    "New tools promise to make your website build smoother and your business more efficient. Instead, half of them cause snags and tangles: platforms that don't talk to each other, subscriptions you forgot you're paying for, a website held together by workarounds nobody remembers making.",
    "Most business owners face two bad options: burn hours every day trying to keep up with the flood, or hand everything to an agency and hope they chose well.",
    "There's a third option. Work with someone whose whole job is sorting that current, and who picks tools based on one question only: does this serve your business?",
  ],
} as const;

export const promise = {
  heading: {
    before: "We ",
    italic: "teach",
    after: " you to fish.",
  },
  paragraphs: [
    "You know the proverb. Most agencies ignore it. They build you something only they can maintain, then bill you every time you need a comma changed. That's not a service. That's a leash. Our hook is designed for release. We work the same way.",
    "We build with the opposite goal: systems your team can actually run. Clean builds instead of tangled shortcuts that pile up into technical debt. Training for you and your staff so updating content, checking leads, and running your day-to-day never requires a support ticket. Documentation that makes sense to humans.",
    "When you do keep us around, and many clients do, it's for the work that genuinely benefits from a specialist: strategy, new builds, automation, growth. Not hostage maintenance.",
  ],
} as const;

export const tackleBox = {
  heading: {
    before: "Here's what we ",
    italic: "build",
    after: ".",
  },
  blocks: [
    {
      heading: "Marketing Websites",
      body: "The public-facing site that carries your credibility. Compliance-aware from day one, fast to load, easy for a CCO to review, and built to convert the visitor that matters. If a builder like Squarespace fits your needs, we'll tell you so, even though it's the less expensive answer.",
    },
    {
      heading: "Custom Internal Applications",
      body: "When your team is working across ten browser tabs and three spreadsheets, we build one tool that replaces them. Advisor dashboards, workflow apps, review queues. Shaped around exactly how your team works, not around a template that almost fits.",
    },
    {
      heading: "Lead and Conversion CRM",
      body: "Getting attention means nothing if the follow-up drops. We set up the CRM that captures every inquiry, organizes your pipeline, and tracks which channels actually produce revenue. Compliance-friendly retention baked in.",
    },
    {
      heading: "Content Management (Sanity)",
      body: "Your team should edit the site without opening a ticket. We build a custom Sanity backend so your marketing lead updates content, publishes new advisor bios, and swaps disclosures without touching code or waiting on us.",
    },
    {
      heading: "Software Stack Integration",
      body: "A website shouldn't stand alone. We connect scheduling, payments, email, archiving, and automation so information flows between your systems without snags, and nothing gets re-typed by hand.",
    },
    {
      heading: "AI Where It Earns Its Keep",
      body: "Done right, AI works like sonar on a fishing boat: it shows you where to spend your effort instead of guessing. Done wrong, it's a gimmick. We implement it where it pays off, skip it where it doesn't, and show your team how to use it.",
    },
  ],
} as const;

export const howWeWork = {
  steps: [
    {
      tabLabel: "Understand",
      heading: "Understand your situation.",
      body: "Before we talk tools, we talk about you. Your customers, your goals, and what success means for your business: leads, sales, bookings, credibility.",
    },
    {
      tabLabel: "Prototype",
      heading: "Prototype it.",
      body: "Before we write a line of code, we build the shape of what we're making. Mockups, clickable prototypes, walkthroughs. You see how it works while it's still cheap to change, and we validate the flow before committing it to production.",
    },
    {
      tabLabel: "Build",
      heading: "Build it clean.",
      body: "No shortcuts that turn into technical debt. We build systems that are as easy to maintain in year three as they are impressive on launch day.",
    },
    {
      tabLabel: "Teach",
      heading: "Teach your team.",
      body: "Before we're done, your people know how to run what we built. Updates, content, leads, reports. You own it, you understand it, you're never stranded.",
    },
  ],
} as const;

export const clients = {
  heading: { before: "Featured ", italic: "clients", after: "." },
  intro:
    "A small sample of the businesses currently in our waters. Real problems, right tools, work we're proud of.",
  featured: [
    {
      name: "Lady Dawgs",
      sector: "Food & Hospitality",
      description:
        "Nashville's only lady-owned weenie wagon. Bold branding and a mobile-first site that keeps the cart rolling.",
      image: "/brand/clients/lady-dawgs.png",
      href: null as string | null,
    },
    {
      name: "The Muir-Sexton Wedding",
      sector: "Personal Event",
      description:
        "A calm, editorial invitation site for a summer wedding in Corvallis. RSVPs, travel details, and story all in one place.",
      image: "/brand/clients/muir-sexton.png",
      href: null as string | null,
    },
    {
      name: "Quantum Letter",
      sector: "Finance / Publishing",
      description:
        "A subscription publishing platform for a financial research writer. Free-tier funnel, paid archive, and reader analytics.",
      image: "/brand/clients/quantum-letter.png",
      href: null as string | null,
    },
    {
      name: "Caffeez",
      sector: "E-commerce",
      description:
        "A DTC caffeine-pouch brand launch. Storefront, payments, inventory, and email marketing wired into one clean flow.",
      image: "/brand/clients/caffeez.png",
      href: null as string | null,
    },
    {
      name: "BCR Ventures",
      sector: "Insurance",
      description:
        "An insurance network's marketing site. Built for credibility, partner recruiting, and clean lead capture.",
      image: "/brand/clients/bcr-ventures.png",
      href: null as string | null,
    },
  ],
} as const;

export const FIRM_TYPES = [
  "Small business",
  "Professional services",
  "E-commerce",
  "Nonprofit",
  "Startup",
  "Other",
] as const;

export type FirmType = (typeof FIRM_TYPES)[number];

export const contact = {
  heading: {
    before: "",
    italic: "Untangle",
    after: " the tech. Get back to business.",
  },
  leadText:
    "Tell us what your business needs to say. We'll choose the right tools, build it clean, and teach your team to run it.",
  formHeader: "What are you fishing for?",
  fields: {
    name: { label: "Name", name: "name" },
    email: { label: "Work email", name: "email" },
    firmName: { label: "Business name", name: "firmName" },
    firmType: { label: "Business type", name: "firmType" },
    message: { label: "What are you fishing for?", name: "message" },
  },
  firmTypePlaceholder: "Select one",
  firmTypeOptions: FIRM_TYPES,
  submitLabel: "Start a project",
  sendingLabel: "Sending…",
  successMessage: "Got it. We'll reply within one business day.",
  errorMessage:
    "Something went wrong. Please try again, or email nick@circlehook.io directly.",
  secondaryCtaPrefix: "Prefer a call?",
  secondaryCtaLink: "Schedule a free 30-minute consultation.",
  quickContact: {
    scheduleLabel: "Schedule a 30-minute call",
    emailLabel: "Email us directly",
    emailSubject: "Inquiry from circlehook.io",
    emailBody:
      "Business name:\n\nBusiness type:\n\nWhat are you fishing for:\n",
  },
} as const;

export const footer = {
  tagline: "A specific tool for a specific job.",
  lines: [
    "Circle Hook LLC. Tennessee.",
    "nick@circlehook.io",
    "© 2026 Circle Hook LLC. All rights reserved.",
  ],
  email: "nick@circlehook.io",
} as const;
