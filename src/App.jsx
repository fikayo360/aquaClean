import Hero from "./hero"
import About from "./about"
import OurServices from "./ourservices"
import Team from "./team"
import Contact from "./contact"
import Footer from "./footer"
import 'animate.css';
function App() {

  return (
    <div className="overflow-auto">
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
