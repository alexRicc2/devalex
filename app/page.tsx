import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import History from "@/components/History"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { GET_PROJECTS } from "@/lib/queries/projetos/getProjects"

export default async function Home() {
  const projects = await GET_PROJECTS()
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}
