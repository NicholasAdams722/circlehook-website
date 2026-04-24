import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Circle Hook's terms of service.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">Terms</h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Terms of service content coming next.
      </p>
    </div>
  );
}
