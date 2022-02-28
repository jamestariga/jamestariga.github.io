import React from 'react'
import { ProjectContainer } from '../Styles/Project.styles'
import Post from './Post'
import ProjectData from './ProjectData'

const Project = () => {
  return (
    <>
      <ProjectContainer id='projects' data-aos="fade-right" data-aos-delay="50">
        {ProjectData.map((item, idx) => {
          return (
            <Post key={idx} title={item.title} img={item.img}
              description={item.description} tech={item.tech} />
          )
        })}
      </ProjectContainer>
    </>
  )
}

export default Project