import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import { AboutContainer } from '../Styles/About.styles'


const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      <AboutContainer data-Aos="fade-right">
        
      </AboutContainer>
    </>
  )
}

export default About