
import Hero from "./Components/Hero"
import React from "react"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
function App() {
  

  return (
    <>

    <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Skills/>
      <About/>
      <Contact/>
    
    </>
  )
}

export default App
