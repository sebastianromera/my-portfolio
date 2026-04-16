import Image from "next/image";
import About from "@/src/component/about";
import Projects from "@/src/component/projects";
import Hero from "@/src/component/hero";
import Navbar from "@/src/component/navbar";
import Contact from "@/src/component/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <h1></h1>
    </main>
  ); 
}
