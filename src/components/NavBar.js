import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { NavBarStyles } from './Styles/NavBarStyles'
import { GlobalStyle } from './GlobalStyle'

const NavBar = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      <div data-Aos="fade-up">
        <NavBarStyles>
          <GlobalStyle />
            
        </NavBarStyles>
      </div>
    </>
  )
}

export default NavBar