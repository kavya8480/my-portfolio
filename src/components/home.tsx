import About from "./about";
import Contact from "./contact";
import Education from "./education";
import Footer from "./footer";
import Hero from "./hero";
import ResponsiveAppBar from "./nav";
import Projects from "./project";
import Skills from "./skill";

export default function Home() {
  return (
    <>
    
      {/* Navbar (fixed top) */}
      <ResponsiveAppBar />

      {/* Main Sections */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

 <section id="education">
       < Education/>
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Footer  */}
     <Footer />
    </>
  );
}