import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";

// Remove SplitText from registerPlugin since it's not imported
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <Cocktails />
     <About />
     <Art />
   </main>
  )
}

export default App