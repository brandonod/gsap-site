import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";

// Remove SplitText from registerPlugin since it's not imported
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-4xl font-bold text-blue-600">Hello, GSAP!</h1>
    </div>
  )
}

export default App