import type { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceAudience } from "@/components/sections/ServiceAudience";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "App Development & Integrations",
  description:
    "Custom tools, client portals, and CRM integrations for financial advisory firms. Wealthbox, Redtail, Orion, HubSpot, and more.",
};

const includes = [
  "Custom Next.js application development",
  "CRM integrations: Wealthbox, Redtail, Salesforce Financial Services Cloud, HubSpot",
  "Portfolio and reporting systems: Orion, Morningstar",
  "Scheduling integrations: Calendly, Cal.com",
  "Compliance archiving: Smarsh, Global Relay",
  "Client portal design and development",
  "Document collection and e-signature workflows",
  "API design and third-party integrations",
];

const steps = [
  {
    title: "Discovery",
    description:
      "Map the workflow in detail — every step, every handoff, every tool involved. Identify exactly where off-the-shelf solutions fall short and why.",
  },
  {
    title: "Specification",
    description:
      "Define scope, data flows, integration points, and edge cases in writing before a line of code is written. Approved by you before development starts.",
  },
  {
    title: "Build",
    description:
      "Iterative development with working demos at each milestone. You test against real workflows as we go, not in a single end-of-project review.",
  },
  {
    title: "Handoff",
    description:
      "Full documentation, team training, and a 60-day support window after launch. Your team can operate it without a call to us for routine tasks.",
  },
];

export default function AppDevelopmentPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="App Development"
        title="Custom tools built for advisory practices."
        description="Sometimes a website isn't enough. Client portals, onboarding flows, document collection, CRM integrations — the advisory ecosystem runs on software, and off-the-shelf tools don't always fit the way a specific firm works. Circle Hook builds custom applications and integrations for advisory firms that need something the vendor marketplace doesn't offer."
      />
      <ServiceIncludes items={includes} />
      <ServiceProcess steps={steps} />
      <ServiceAudience>
        Advisory firms with a specific workflow problem that no vendor has
        solved cleanly. Teams who have tried three different tools and are still
        stitching things together in spreadsheets. Practices with a custom
        process — an onboarding sequence, a client review workflow, a document
        collection system — that deserves a real solution instead of another
        workaround.
      </ServiceAudience>
      <CTASection />
    </>
  );
}
