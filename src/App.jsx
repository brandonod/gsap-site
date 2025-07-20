import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Navbar from "./Components/Navbar";
import Hero from "./components/Hero";

// Remove SplitText from registerPlugin since it's not imported
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
     <Navbar />
     <Hero />
     <div className="h-dvh bg-black" />
   </main>
  )
}

export default App