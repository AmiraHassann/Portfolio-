import Navbar from './components/Navbar/Navbar.jsx';
import About from './sections/About/About.jsx';
import Hero from './sections/Hero/Hero.jsx';
import Skills from './sections/Skills/Skills.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}
export default App;
