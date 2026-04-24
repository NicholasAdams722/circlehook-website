import type { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceAudience } from "@/components/sections/ServiceAudience";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Marketing Strategy",
  description:
    "Positioning and messaging for financial advisory firms. Define why clients choose you before you invest in tactics.",
};

const includes = [
  "Positioning workshop and competitive landscape audit",
  "Target client persona development",
  "Core messaging framework — firm-level, service-level, team-level",
  "Value proposition and key differentiators",
  "Website copy brief",
  "Conversion architecture review",
  "Implementation specifications for site, content, and sales materials",
];

const steps = [
  {
    title: "Research",
    description:
      "Client interviews, a competitive review of how similar firms position themselves, and an audit of your current messaging across every touchpoint.",
  },
  {
    title: "Positioning",
    description:
      "Define the firm's distinct angle in its category. What it stands for, who it's actually for, and why that combination is harder to replicate than credentials alone.",
  },
  {
    title: "Messaging",
    description:
      "Translate the positioning into language that works: website headlines, outreach copy, presentation talking points, and the answer to 'so what do you do?'",
  },
  {
    title: "Implementation brief",
    description:
      "A detailed brief for applying the framework to your site and materials — enough for a designer, developer, or copywriter to execute from without another briefing session.",
  },
];

export default function MarketingStrategyPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="Marketing Strategy"
        title="Positioning before tactics."
        description="Most advisory firms jump straight to tactics — a new website, a content calendar, a LinkedIn post schedule — without a clear answer to the harder question: why you, specifically, over anyone else with similar credentials? Marketing strategy at Circle Hook starts with positioning. Everything else follows from it."
      />
      <ServiceIncludes items={includes} />
      <ServiceProcess steps={steps} />
      <ServiceAudience>
        Firms who can articulate what they do but not why a client should choose
        them over a competitor with similar credentials. Practices growing
        faster than their messaging — where the founder can sell the firm in a
        conversation but the website doesn&rsquo;t come close. Anyone who has
        updated their site three times without changing the underlying story.
      </ServiceAudience>
      <CTASection />
    </>
  );
}
