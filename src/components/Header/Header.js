import React from 'react'
import { TitleContainer, TitleText } from '../Styles/Header.styles' 

const Header = (props) => {
  const { title } = props

  return (
    <>
      <TitleContainer data-aos='fade-right' data-aos-offset='100' data-aos-duration='1000'>
        <TitleText>{ title }</TitleText>
      </TitleContainer>
    </>
  )
} 

export default Header