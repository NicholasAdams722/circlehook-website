import type { Metadata } from "next";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ServiceIncludes } from "@/components/sections/ServiceIncludes";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { ServiceAudience } from "@/components/sections/ServiceAudience";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "AI Search Strategies",
  description:
    "Traditional SEO and generative engine optimization for financial advisory firms. Get found in Google, ChatGPT, Perplexity, and AI Overviews.",
};

const includes = [
  "Technical SEO audit and remediation",
  "Structured data and schema markup implementation",
  "Content strategy for AI citation and topical authority",
  "Page-by-page on-page optimization",
  "Internal linking architecture review",
  "Google Search Console and Bing Webmaster Tools setup",
  "Monthly visibility reporting across traditional and AI search surfaces",
  "Competitor gap analysis",
];

const steps = [
  {
    title: "Audit",
    description:
      "A full technical and content review of your current site and search presence. We document what's working, what isn't, and where the gaps are relative to your competitors.",
  },
  {
    title: "Strategy",
    description:
      "A prioritized roadmap based on the specific queries your target clients are actually using — in Google and in AI tools. Not a generic keyword list.",
  },
  {
    title: "Implementation",
    description:
      "On-page, technical, and content changes executed in order of impact. We handle it or hand off a precise brief to your team.",
  },
  {
    title: "Measurement",
    description:
      "Monthly reporting on rankings, traffic, and AI surface appearances. You know what changed, what drove it, and what's next.",
  },
];

export default function AISearchPage() {
  return (
    <>
      <ServicePageHero
        eyebrow="AI Search Strategies"
        title="Get found where your prospects are actually looking."
        description="Search has changed. Your prospects aren't only clicking Google results — they're asking ChatGPT, Perplexity, and Google's AI Overviews for firm recommendations. If your site isn't structured to be cited in generative answers, it won't be. Circle Hook treats traditional SEO and generative engine optimization as one discipline."
      />
      <ServiceIncludes items={includes} />
      <ServiceProcess steps={steps} />
      <ServiceAudience>
        Firms who get referrals but want to extend reach without relying
        entirely on word of mouth. Advisors who have searched for their own firm
        name in ChatGPT and didn&rsquo;t like what they found — or found
        nothing at all. Practices competing against larger firms who want a
        smarter approach, not a louder one.
      </ServiceAudience>
      <CTASection />
    </>
  );
}
