import { Hero } from "./_sections/Hero";
import { Problem } from "./_sections/Problem";
import { Philosophy } from "./_sections/Philosophy";
import { Promise } from "./_sections/Promise";
import { TackleBox } from "./_sections/TackleBox";
import { HowWeWork } from "./_sections/HowWeWork";
import { Contact } from "./_sections/Contact";
import { Footer } from "./_sections/Footer";

export default function Page() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Problem />
        <Philosophy />
        <Promise />
        <TackleBox />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
