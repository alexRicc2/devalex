import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import History from "@/components/History"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

export default async function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
