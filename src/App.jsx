import Hero from "./hero"
import About from "./about"
import OurServices from "./ourservices"
import Team from "./team"
import Contact from "./contact"
import Footer from "./footer"
import 'animate.css';
import { useState,useEffect } from "react"

function App() {
  
  const [dimensions, setDimensions] = useState({
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  });

  useEffect(() => {
    const updateDimensions = () => {
      const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      setDimensions({ width: w, height: h });

      // Set styles directly on html and body elements
      document.documentElement.style.width = `${w}px`;
      document.documentElement.style.height = `${h}px`;
      document.body.style.width = `${w}px`;
      document.body.style.height = `${h}px`;
    };

    // Set dimensions when the component mounts
    updateDimensions();

    // Update dimensions when the window is resized
    window.addEventListener('resize', updateDimensions);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="overflow-hidden">
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
