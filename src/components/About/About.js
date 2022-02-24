import React from 'react'
import {
  AboutContainer, AboutInnerContainer, ImageContainer,
  DescriptionContainer, ImageDisplay
} from '../Styles/About.styles'
import James from '../../Images/James.jpg'

const About = () => {

  return (
    <>
      <AboutContainer data-Aos="fade-right" data-aos-delay="1500" data-aos-mirror="false">
        <AboutInnerContainer>
          <ImageContainer>
            <ImageDisplay src={James} alt='James' />
          </ImageContainer>
          <DescriptionContainer>

          </DescriptionContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </>
  )
}

export default About