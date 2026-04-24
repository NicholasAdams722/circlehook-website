import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies and selected work from Circle Hook — websites built for wealth advisors and financial advisory firms.",
};

export default function WorkPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">Work</h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Case studies and selected work coming next.
      </p>
    </div>
  );
}
