import { Hero } from "./_sections/Hero";
import { Problem } from "./_sections/Problem";
import { Promise } from "./_sections/Promise";
import { TackleBox } from "./_sections/TackleBox";
import { HowWeWork } from "./_sections/HowWeWork";
import { Clients } from "./_sections/Clients";
import { Contact } from "./_sections/Contact";
import { Footer } from "./_sections/Footer";

export default function Page() {
  return (
    <>
      <main id="main" className="flex-1">
        <Hero />
        <Problem />
        <Promise />
        <TackleBox />
        <HowWeWork />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
