import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

function App() {
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

export default App;
