import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Circle Hook's privacy policy.",
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Privacy Policy
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Privacy policy content coming next.
      </p>
    </div>
  );
}
