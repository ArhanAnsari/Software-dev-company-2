import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Project from './Components/Projects/Projects'
import Feedback from './Components/Feedback/Feedback'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Project />
      <About />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App