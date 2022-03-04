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
      <NavBarContainer>
        <NavbarInnerContainer data-aos="fade-down" data-aos-mirror="false" data-aos-delay="50">
          <LeftContainer>
            <Branding>&#123; James Tariga &#125;</Branding>
          </LeftContainer>
          <RightContainer>
            <NavbarLinkContainer>
              <NavBarLink to='about' smooth='true' offset={-180}>About</NavBarLink>
              <NavBarLink to='skills' smooth='true' offset={-180}>Skills</NavBarLink>
              <NavBarLink to='projects' smooth='true' offset={-180}>Projects</NavBarLink>
              <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr)
              }}
            >
              { extendNavbar ? <AiOutlineClose style={style}/> : <AiOutlineMenu style={style}/> }
              </OpenLinksButton>
            </NavbarLinkContainer>
          </RightContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer data-aos="fade-right" data-aos-mirror="false" data-aos-duration="1000">
            <NavbarLinkExtended to='about' smooth='true' offset={-200}>About</NavbarLinkExtended>
            <NavbarLinkExtended to='skills' smooth='true' offset={-200}>Skills</NavbarLinkExtended>
            <NavbarLinkExtended to='projects' smooth='true' offset={-200}>Projects</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavBarContainer>
    </>
  )
}

export default NavBar