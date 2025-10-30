import Navbar from "../components/Navbar";
import Home from "../components/Sections/Home";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import ProjectPage from "./ProjectPage";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-16"><Home /></section>
        <section id="about" className="scroll-mt-16"><About /></section>
        <section id="projects" className="scroll-mt-16"><Projects /></section>
        <section id="contact" className="scroll-mt-16"><Contact /></section>
      </main>
    </>
  );
}
