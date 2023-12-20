import Hero from "./hero"
import About from "./about"
import OurServices from "./ourservices"
import Team from "./team"
import Contact from "./contact"
import Footer from "./footer"
import 'animate.css';
import { useState,useEffect } from "react"

function App() {
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewport = document.querySelector('meta[name=viewport]');
      if (viewport) {
        viewport.setAttribute('content', viewport.content + `, height=${window.innerHeight}`);
      }
    }
  }, []);

  return (
    <div className="overflow-hidden min-h-[700px]">
     <Hero />
     <About />
     <OurServices />
     <Team />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
