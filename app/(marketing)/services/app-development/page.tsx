import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development & Integrations",
  description:
    "Custom tools, client portals, and CRM integrations tailored to the financial advisory ecosystem.",
};

export default function AppDevelopmentPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        App Development &amp; Integrations
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        App development and integrations content coming next.
      </p>
    </div>
  );
}
