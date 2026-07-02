export const hero = {
  headline: {
    before: "The ",
    italic: "right",
    after: " tools for your business needs.",
  },
  subheadline:
    "Every week brings another AI tool, another design system, another platform promising to change everything. You could spend hours a day keeping up. Or you could work with a team that already does, and chooses only what your business actually needs.",
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

export const philosophy = {
  heading: { before: "Why ", italic: "Circle Hook", after: "?" },
  paragraphs: [
    "A circle hook is a fishing hook engineered for exactly one outcome: a clean catch that holds. Not a better all-purpose hook. A specific tool, designed for a specific job.",
    "That's the standard we hold every technology to. We've spent years working across site builders, custom code, CRM systems, automation, and AI. Not because chasing new tools is fun (though sometimes it is), but so that when you tell us what your business needs to say, we already know which tools say it best.",
    "Sometimes that's a proven site builder that gets you live fast and keeps costs sane. Sometimes it's fully custom code because nothing off the shelf fits how you operate. Usually it's a smart mix. The tool is never the point. The result is.",
  ],
} as const;

export const promise = {
  heading: {
    before: "We teach you to ",
    italic: "fish",
    after: ".",
  },
  paragraphs: [
    "You know the proverb. Most agencies ignore it. They build you something only they can maintain, then bill you every time you need a comma changed. That's not a service. That's a leash.",
    "We build with the opposite goal: systems your team can actually run. Clean builds instead of tangled shortcuts that pile up into technical debt. Training for you and your staff so updating content, checking leads, and running your day-to-day never requires a support ticket. Documentation that makes sense to humans.",
    "When you do keep us around, and many clients do, it's for the work that genuinely benefits from a specialist: strategy, new builds, automation, growth. Not hostage maintenance.",
  ],
} as const;

export const tackleBox = {
  heading: {
    before: "Every tool in the box has a ",
    italic: "purpose",
    after: ". Here's ours.",
  },
  blocks: [
    {
      heading: "Website Builders",
      body: "When speed and budget matter, modern builders deliver polished, professional sites without custom-development overhead. If a builder fits your needs, we'll tell you so, even though it's the less expensive answer.",
    },
    {
      heading: "Custom Code",
      body: "When nothing off the shelf matches your business, we build the tool ourselves. Modern frameworks, shaped around exactly how you work. No template compromises, no workarounds.",
    },
    {
      heading: "Hand-Crafted Design",
      body: "Original design built around your brand: your voice, your colors, your typography. A look that belongs to you, not to ten thousand other sites running the same theme.",
    },
    {
      heading: "Software Stack Integration",
      body: "A website shouldn't stand alone. We connect payments, scheduling, inventory, email, and automation so information flows through your business without snags, and nothing gets re-typed by hand.",
    },
    {
      heading: "CRM and Lead Management",
      body: "Getting a lead's attention means nothing if the follow-up drops. We set up CRM systems that capture every inquiry, organize your pipeline, and turn interest into revenue.",
    },
    {
      heading: "AI Integration",
      body: "Done right, AI works like sonar on a fishing boat: it shows you where to spend your effort instead of guessing. Done wrong, it's a gimmick. We implement it where it earns its keep, skip it where it doesn't, and show your team how to use it.",
    },
  ],
} as const;

export const howWeWork = {
  heading: {
    before: "Understand. Choose. Build. ",
    italic: "Teach",
    after: ".",
  },
  steps: [
    {
      heading: "Understand your situation.",
      body: "Before we talk tools, we talk about you. Your customers, your goals, and what success means for your business: leads, sales, bookings, credibility.",
    },
    {
      heading: "Choose the right tools.",
      body: "We recommend an approach and explain exactly why each tool made the cut. You'll never pay for complexity you don't need or get boxed into a platform that can't grow with you.",
    },
    {
      heading: "Build it clean.",
      body: "No shortcuts that turn into technical debt. We build systems that are as easy to maintain in year three as they are impressive on launch day.",
    },
    {
      heading: "Teach your team.",
      body: "Before we're done, your people know how to run what we built. Updates, content, leads, reports. You own it, you understand it, you're never stranded.",
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
