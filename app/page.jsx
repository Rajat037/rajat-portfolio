import Hero from "../components/Hero";
import Summary from "../components/Summary";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="space-y-24">
      <Hero />
      <Summary />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  );
}
