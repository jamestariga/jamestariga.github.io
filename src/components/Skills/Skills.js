import React from 'react'
import { SkillsContainer } from '../Styles/Skills.styles'
import ProgressBar from './ProgressBar'
import SkillsData from './SkillsData'

const Skills = () => {

  return (
    <>
      <SkillsContainer id='skills' data-aos="fade-right" data-aos-delay="50">
        {SkillsData.map((item, idx) => {
          return (
            <ProgressBar key={idx} bgColor={item.bgColor} title={item.title} completed={item.completed} />
          )
        })}
      </SkillsContainer>
    </>
  )
}

export default Skills