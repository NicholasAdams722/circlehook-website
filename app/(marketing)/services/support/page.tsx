import type { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceAudience } from "@/components/sections/ServiceAudience";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Ongoing Support",
  description:
    "Retainer-based support and maintenance for financial advisory firms. One business day response, real accountability.",
};

const includes = [
  "One business day response SLA",
  "Content and copy updates",
  "Performance monitoring and alerting",
  "Dependency and security updates",
  "Monthly analytics review",
  "One strategy call per month",
  "Coordination with your compliance team on copy changes",
  "Annual site audit and roadmap conversation",
];

const steps = [
  {
    title: "Retainer setup",
    description:
      "Agree on scope, response expectations, and monthly hours in writing. No surprises on either side.",
  },
  {
    title: "Baseline audit",
    description:
      "A full site review to document current state, fix anything that needs immediate attention, and establish a performance baseline to measure against.",
  },
  {
    title: "Monthly cycle",
    description:
      "Updates, monitoring, and a brief written summary of what changed and why. You stay informed without having to ask.",
  },
  {
    title: "Annual review",
    description:
      "A bigger-picture conversation about what has changed in your firm and whether the site still reflects it. The annual review often surfaces the next project.",
  },
];

export default function SupportPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="Ongoing Support"
        title="Someone to call when something breaks."
        description="Most web agencies disappear after launch. Circle Hook offers retainer-based support for firms that want a long-term partner — someone who already knows your site, your stack, and your compliance requirements, and responds within a business day when something comes up."
      />
      <ServiceIncludes items={includes} />
      <ServiceProcess steps={steps} />
      <ServiceAudience>
        Firms six months to two years post-launch who want to keep the site
        working and don&rsquo;t have an internal team to manage it. Practices
        that have been burned by an agency that was unreachable after the
        invoice was paid. Anyone who has discovered that &ldquo;we can make
        that change anytime&rdquo; meant something different to their last
        vendor than it does to them.
      </ServiceAudience>
      <CTASection />
    </>
  );
}
