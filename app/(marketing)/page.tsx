import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Circle Hook",
  description:
    "Circle Hook builds modern, compliance-aware websites for wealth advisors, brokerages, and the firms that serve them.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Circle Hook
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Homepage content coming next.
      </p>
    </div>
  );
}
