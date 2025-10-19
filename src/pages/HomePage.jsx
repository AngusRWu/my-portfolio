import Navbar from "../components/Navbar";
import Home from "../components/Sections/Home";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
