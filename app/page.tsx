import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
     <Intro />
     <SectionDivider />
     <About />
    </main>
  )
}
