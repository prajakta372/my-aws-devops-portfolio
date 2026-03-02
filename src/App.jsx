// import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero"
import Skills from "./Skills"
import Projects from "./Projects"
import GitHub from "./GitHub"
import Architecture from "./Architecture"
import ScrollTop from "./ScrollTop"
import Footer from "./Footer";

function App(){
  return(
   <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <GitHub/>
      <Architecture/>
      <ScrollTop/>
      <Footer/>
    </>
  );
}

export default App



