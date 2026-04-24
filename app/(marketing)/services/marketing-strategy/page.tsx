import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Strategy",
  description:
    "Positioning, messaging, and conversion architecture for financial advisory firms ready to grow.",
};

export default function MarketingStrategyPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Marketing Strategy
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Marketing strategy service content coming next.
      </p>
    </div>
  );
}
