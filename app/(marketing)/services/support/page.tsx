import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Support",
  description:
    "Retainer-based support and maintenance for financial advisory firms that want a long-term partner, not a one-off build.",
};

export default function SupportPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Ongoing Support
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Ongoing support and maintenance service content coming next.
      </p>
    </div>
  );
}
