import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Search Strategies",
  description:
    "SEO and generative engine optimization (GEO) strategies that help financial advisory firms get found in Google, ChatGPT, Perplexity, and beyond.",
};

export default function AISearchPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        AI Search Strategies
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        AI search and GEO strategy content coming next.
      </p>
    </div>
  );
}
