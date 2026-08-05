import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;