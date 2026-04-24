import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://circlehook.io"),
  title: {
    default: "Circle Hook",
    template: "%s — Circle Hook",
  },
  description:
    "Circle Hook builds modern, compliance-aware websites for wealth advisors, brokerages, and the firms that serve them.",
  openGraph: {
    title: "Circle Hook",
    description:
      "Circle Hook builds modern, compliance-aware websites for wealth advisors, brokerages, and the firms that serve them.",
    url: "https://circlehook.io",
    siteName: "Circle Hook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle Hook",
    description:
      "Circle Hook builds modern, compliance-aware websites for wealth advisors, brokerages, and the firms that serve them.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // TODO: add favicon files (/app/icon.png, /app/apple-icon.png)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", fraunces.variable, geistSans.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
