import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service web design, AI search strategy, marketing, app development, and ongoing support for financial advisory firms.",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Services
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Services overview content coming next.
      </p>
    </div>
  );
}
