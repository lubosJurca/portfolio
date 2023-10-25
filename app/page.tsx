import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main id="home" className="flex flex-col items-center justify-center mb-80 scroll-mt-28">
     <Intro />
     <SectionDivider />
     <About />
     <SectionDivider />
     <Projects />
     <SectionDivider />
     <Skills />
     <SectionDivider />
     <Experience />
     <SectionDivider />
     <Contact />
    </main>
  )
}
