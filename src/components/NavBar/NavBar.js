import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {
  NavBarContainer, NavbarInnerContainer,
  LeftContainer, RightContainer, NavbarLinkContainer, NavBarLink,
  OpenLinksButton, NavbarExtendedContainer, Branding, NavbarLinkExtended
} from '../Styles/NavBar.styles'

const NavBar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false)
  const style = { color: "#fff", fontSize: "2rem" }

  return (
    <>
      <NavBarContainer extendNavbar={ extendNavbar } data-Aos="fade-down" data-aos-mirror="false" data-aos-delay="50">
        <NavbarInnerContainer>
          <LeftContainer>
            <Branding>James Tariga</Branding>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavBarLink to='/'>Home</NavBarLink>
              <NavBarLink to='/skills'>Skills</NavBarLink>
              <NavBarLink to='/projects'>Projects</NavBarLink>
              <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              { extendNavbar ? <AiOutlineMenu style={style}/> : <AiOutlineClose style={style}/> }
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer data-Aos="fade-down" data-aos-mirror="false" data-aos-delay="50">
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Skills</NavbarLinkExtended>
            <NavbarLinkExtended to="/">Projects</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavBarContainer>
    </>
  )
}

export default NavBar