import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { CompassWatermark } from "@/components/brand/CompassWatermark";

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://circlehook.io"),
  title: {
    default:
      "Circle Hook | Websites for RIAs, Insurance Brokers, and Regulated Financial Firms",
    template: "%s | Circle Hook",
  },
  description:
    "Circle Hook builds modern, compliance-aware websites for RIAs, insurance brokers, IMOs, CPAs, and estate planning attorneys. Built by an operator who works inside an RIA.",
  openGraph: {
    title: "Circle Hook | Websites for Regulated Financial Firms",
    description:
      "Modern, fast, compliance-aware websites for RIAs, insurance brokers, and the firms they trust.",
    url: "https://circlehook.io",
    siteName: "Circle Hook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Circle Hook | Websites for Regulated Financial Firms",
    description:
      "Modern, fast, compliance-aware websites for RIAs, insurance brokers, and the firms they trust.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#2A1E19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Circle Hook",
  legalName: "Circle Hook LLC",
  url: "https://circlehook.io",
  email: "nick@circlehook.io",
  areaServed: "United States",
  serviceType: "Website design and development",
  knowsAbout: [
    "Investment Adviser Marketing Rule",
    "Form ADV",
    "RIA compliance",
    "Insurance broker websites",
    "AI search optimization",
    "Next.js development",
  ],
  founder: {
    "@type": "Person",
    name: "Nick Adams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", plexSerif.variable, plexSans.variable)}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-base focus:font-medium focus:text-foreground focus:outline focus:outline-2 focus:outline-accent"
        >
          Skip to main content
        </a>
        <CompassWatermark />
        <Header />
        {children}
      </body>
    </html>
  );
}
