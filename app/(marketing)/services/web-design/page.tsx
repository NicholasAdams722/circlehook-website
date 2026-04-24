import type { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceAudience } from "@/components/sections/ServiceAudience";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Modern, compliance-aware websites for RIAs and wealth management firms. Built on Next.js, designed to convert.",
};

const includes = [
  "Custom Next.js build — no page builders, no drag-and-drop",
  "Mobile-first design, Lighthouse 95+ target on every page",
  "Compliance review of all copy before launch",
  "CMS integration where ongoing updates are needed",
  "Redirect mapping and technical SEO baseline at launch",
  "Structured data and schema markup",
  "60 days of post-launch support included",
  "Figma design files delivered with the project",
];

const steps = [
  {
    title: "Discovery",
    description:
      "We review your current site together and document what isn't working — visually, technically, and from a conversion standpoint. No intake form, no junior account manager. A direct conversation.",
  },
  {
    title: "Design",
    description:
      "Figma mockups of every key page, two rounds of revisions, approved before any code is written. You see exactly what you're getting.",
  },
  {
    title: "Build",
    description:
      "Next.js on Vercel, mobile-first, fast. You follow along in a private preview environment throughout the build.",
  },
  {
    title: "Launch",
    description:
      "Coordinated go-live with redirect mapping, DNS handoff, and a compliance review pass on all live copy. Nothing goes up that hasn't been checked.",
  },
];

export default function WebDesignPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="Web Design"
        title="Modern websites built for financial advisory firms."
        description="The most common problem in this category isn't bad taste. It's a site that was built once, handed off, and never touched again. Circle Hook builds Next.js sites that are fast, maintainable, and designed around the regulatory reality of financial services."
      />
      <ServiceIncludes items={includes} />
      <ServiceProcess steps={steps} />
      <ServiceAudience>
        RIAs and wealth management firms who have outgrown their current site
        and can describe what they don&rsquo;t like about it. Firms where a
        principal can approve the engagement, not a committee. The right fit is
        usually a practice whose referred prospects are judging a site that no
        longer reflects the quality of the work behind it.
      </ServiceAudience>
      <CTASection />
    </>
  );
}
