import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NavBar from './NavBar/NavBar'
import Parts from './Particles/Parts'
import About from './About/About'
import Skills from './Skills/Skills'
import Project from './Project/Project'
import GlobalStyle from './GlobalStyle'

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
      mirror: true,
      offset: 250
    })
  }, [])

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Parts />
      <About />
      <Skills />
      <Project />
    </>
  )
}

export default App