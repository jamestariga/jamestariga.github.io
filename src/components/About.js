import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import { AboutStyle } from './Styles/About.styles'
import { GlobalStyle } from './GlobalStyle'

const About = () => {
  return (
    <>
      <GlobalStyle />
      <AboutStyle>
        <h1>Hello</h1>
      </AboutStyle>
    </>
  )
}

export default About