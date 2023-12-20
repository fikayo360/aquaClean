import Hero from "./hero"
import About from "./about"
import OurServices from "./ourservices"
import Team from "./team"
import Contact from "./contact"
import Footer from "./footer"
import 'animate.css';
import { useState,useEffect } from "react"

function App() {
  
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Listen for the focus event on input elements
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  // Listen for the blur event on input elements
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  // Effect to dynamically adjust layout when input is focused
  useEffect(() => {
    if (isInputFocused) {
      // Adjust layout when the input is focused
      document.documentElement.style.height = '100%';
      document.body.style.height = '100%';
    } else {
      // Restore original layout height when input loses focus
      document.documentElement.style.height = 'auto';
      document.body.style.height = 'auto';
    }
  }, [isInputFocused]);

  return (
    <div className="overflow-hidden">
     <Hero />
     <About />
     <OurServices />
     <Team />
     <Contact handleInputBlur={handleInputBlur} handleInputFocus={handleInputFocus} />
     <Footer />
    </div>
  )
}

export default App
