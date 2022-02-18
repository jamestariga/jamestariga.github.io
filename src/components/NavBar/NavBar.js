import React from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
  NavBarContainer, NavbarInnerContainer,
  LeftContainer, RightContainer, NavbarLinkContainer, NavBarLink
} from '../Styles/NavBarStyles'

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 500,
      mirror: true,
      offset: 200
    })
  }, [])

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