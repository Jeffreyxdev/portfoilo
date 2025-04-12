
import Hero from "./Components/Hero"
import React from "react"
import Projects from "./Components/Projects"
import Services from "./Components/Services"

import Contact from "./Components/Contact"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer"
function App() {
  

  return (
    <>

    <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Skills/>
      
      <Contact/>
      <Footer/>
    
    </>
  )
}

export default App
