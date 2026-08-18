import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Architecture from "./Architecture";
import Certifications from "./Certifications";
import GitHub from "./GitHub";
import Footer from "./Footer";
import FloatingResume from "./FloatingResume";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Certifications />
        <GitHub />
      </main>
      <Footer />
      <FloatingResume />
    </div>
  );
}

export default App;