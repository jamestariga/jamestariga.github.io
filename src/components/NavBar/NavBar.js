import React from 'react'
import { useState, useEffect } from 'react'
import {
  NavBarContainer, NavbarInnerContainer,
  LeftContainer, RightContainer, NavbarLinkContainer, NavBarLink
} from '../Styles/NavBar.styles'

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <>
      <NavBarContainer extendNavbar={extendNavbar} data-Aos="fade-down" data-aos-mirror="false" data-aos-delay="50">
        <NavbarInnerContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavBarLink to='/'>Home</NavBarLink>
              <NavBarLink to='/'>Skills</NavBarLink>
              <NavBarLink to='/'>Projects</NavBarLink>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavBarContainer>
    </>
  )
}

export default NavBar