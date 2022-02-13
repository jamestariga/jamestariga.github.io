import React from 'react'
import About from './About'
import NavBar from './NavBar'
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <About />
    </>
  )
}

export default App