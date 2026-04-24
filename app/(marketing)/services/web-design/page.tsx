import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design",
  description:
    "Modern, compliance-aware website design and development for RIAs, wealth management firms, and financial advisory businesses.",
};

export default function WebDesignPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Web Design
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Web design and development service content coming next.
      </p>
    </div>
  );
}
