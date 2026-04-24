import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Articles and resources on web design, AI search, and marketing strategy for financial advisory firms.",
};

export default function InsightsPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Insights
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Articles and resources content coming next.
      </p>
    </div>
  );
}
