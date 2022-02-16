import React from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  NavBarContainer, NavbarInnerContainer,
  LeftContainer, NavbarLinkContainer, NavBarLink
} from '../Styles/NavBarStyles'

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <>
      <NavBarContainer data-Aos="fade-down">
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavBarLink to='/'>Home</NavBarLink>
              <NavBarLink to='/'>Skills</NavBarLink>
              <NavBarLink to='/'>Projects</NavBarLink>
            </NavbarLinkContainer>
          </LeftContainer>
        </NavbarInnerContainer>
      </NavBarContainer>
    </>
  )
}

export default NavBar