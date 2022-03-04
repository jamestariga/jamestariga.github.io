import React from 'react'
import Header from '../Header/Header'
import { ProjectContainer } from '../Styles/Project.styles'
import Post from './Post'
import ProjectData from './ProjectData'

const Project = () => {
  
  return (
    <>
      <Header title='My Work' />
      <ProjectContainer id='projects' data-aos="fade-right" data-aos-delay="50">
        {ProjectData.map((item, idx) => {
          return (
            <Post key={idx} title={item.title} link={item.link} img={item.img}
              description={item.description} tech={item.tech} />
          )
        })}
      </ProjectContainer>
    </>
  )
}

export default Project