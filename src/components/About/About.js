import React from 'react'
import {
  AboutContainer, AboutInnerContainer, LeftContainer,
  DescriptionContainer, ImageDisplay, Title,
  Text, IconsContainer, IconsGitHub, IconsLinkedIn,
  IconsDev
} from '../Styles/About.styles'
import JamesPFP from '../../Images/JamesPFP.png'

const About = () => {

  return (
    <>
      {/* <div id='about'></div> */}
      <AboutContainer id='about' data-aos="fade-right" data-aos-delay="1500" data-aos-mirror="false">
        <AboutInnerContainer>
          <LeftContainer>
            <ImageDisplay src={JamesPFP} alt='James' />
            <Title>Front End Developer, Student</Title>
            <IconsContainer>
              <a href='https://github.com/jamestariga'><IconsGitHub /></a>
              <a href='https://www.linkedin.com/in/james-tariga/'><IconsLinkedIn /></a>
              <a href='https://devpost.com/jamestariga'><IconsDev /></a>
            </IconsContainer>
          </LeftContainer>
          <DescriptionContainer>
            <Text>Hi there 👋 I'm James, I'm a Web Developer student at Kwantlen Polytechnic University</Text>
            <Text>🔭 I'm currently working on my computer science degree</Text>
            <Text>🌱 I'm currently learning web development and mobile development</Text>
            <Text>👯 I'm looking to collaborate on web application projects</Text>
            <Text>💬 Ask me about my projects and what I am currently learning in school</Text>
          </DescriptionContainer>
        </AboutInnerContainer>
      </AboutContainer>
    </>
  )
}

export default About