import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

// Remove SplitText from registerPlugin since it's not imported
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <Cocktails />
     <About />
   </main>
  )
}

export default App