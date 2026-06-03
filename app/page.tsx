import { Hero } from "./_sections/Hero";
import { Services } from "./_sections/Services";
import { WhatYouGet } from "./_sections/WhatYouGet";
import { Process } from "./_sections/Process";
import { WhoIAm } from "./_sections/WhoIAm";
import { Contact } from "./_sections/Contact";
import { Footer } from "./_sections/Footer";

export default function Page() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Services />
        <WhatYouGet />
        <Process />
        <WhoIAm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
