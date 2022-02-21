import React from 'react'
import { useState, useEffect } from 'react'
import {
  NavBarContainer, NavbarInnerContainer,
  LeftContainer, RightContainer, NavbarLinkContainer, NavBarLink,
  OpenLinksButton, NavbarExtendedContainer, Branding
} from '../Styles/NavBar.styles'

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)

  return (
    <>
      <NavBarContainer extendNavbar={extendNavbar} data-Aos="fade-down" data-aos-mirror="false" data-aos-delay="50">
        <NavbarInnerContainer>
          <LeftContainer>
            <Branding>James Tariga</Branding>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavBarLink to='/'>Home</NavBarLink>
              <NavBarLink to='/'>Skills</NavBarLink>
              <NavBarLink to='/'>Projects</NavBarLink>
              <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
      </NavBarContainer>
    </>
  )
}

export default NavBar