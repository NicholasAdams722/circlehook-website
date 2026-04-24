import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Differentiators } from "@/components/sections/Differentiators";
import { Industries } from "@/components/sections/Industries";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Circle Hook",
  description:
    "Circle Hook designs and builds modern, compliance-aware websites for RIAs, wealth management firms, and the firms that serve them.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Differentiators />
      <Industries />
      <CTASection />
    </>
  );
}
