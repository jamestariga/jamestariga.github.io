import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import NavBar from './NavBar/NavBar'
import About from './About/About'
import Project from './Projects/Projects'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


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
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/skills" />
          <Route path="/projects" />
        </Routes>
      </Router>
      <About />
      <Project />
    </>
  )
}

export default App