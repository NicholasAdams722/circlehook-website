import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Circle Hook is a founder-led web studio. The person who sells the work also builds it.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">About</h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        About Circle Hook content coming next.
      </p>
    </div>
  );
}
