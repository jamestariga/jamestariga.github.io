import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NavBar from './NavBar/NavBar'
import About from './About/About'
import Skills from './Skills/Skills'
import GlobalStyle from './GlobalStyle'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      <About />
      <Skills />
    </>
  )
}

export default App