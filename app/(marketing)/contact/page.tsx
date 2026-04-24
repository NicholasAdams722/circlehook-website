import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Circle Hook to discuss your next website or digital project.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-display text-5xl font-bold text-foreground">
        Contact
      </h1>
      <p className="mt-6 max-w-md font-body text-lg text-muted-foreground">
        Contact form and booking content coming next.
      </p>
    </div>
  );
}
