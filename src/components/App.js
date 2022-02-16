import React from 'react'
import About from './About/About'
import NavBar from './NavBar/NavBar'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/skills" />
          <Route path="/project" />
        </Routes>
      </Router>
      <About />
    </>
  )
}

export default App