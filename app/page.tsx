import { Hero } from "./_sections/Hero";
import { Services } from "./_sections/Services";
import { WhatYouGet } from "./_sections/WhatYouGet";
import { Process } from "./_sections/Process";
import { WhoIAm } from "./_sections/WhoIAm";
import { Contact } from "./_sections/Contact";
import { Footer } from "./_sections/Footer";
import { IndustryMarquee } from "@/components/IndustryMarquee";
import { StatBand } from "@/components/StatBand";

export default function Page() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <IndustryMarquee />
        <Services />
        <WhatYouGet />
        <StatBand />
        <Process />
        <WhoIAm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
