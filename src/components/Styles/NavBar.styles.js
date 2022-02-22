import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background: transparent;

  @media (min-width: 971px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5rem;

  @media (min-width: 971px) {
    margin: 0rem 2rem 0 0;
    padding-left: 3.5rem;
  }
  
  @media (min-width: 450px) {
    margin-right: 2rem;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 5%;

  @media (min-width: 971px) {
    padding-right: 2%;
  }
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;

  @media (max-width: 971px) {
    display: none;
  }
`

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  text-align: center;
  margin: 2rem;
  padding: 1rem;
  width: 100%;

  &:hover {
    background-color: transparent;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    border-radius: 10px;
  }
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  
  @media (min-width: 971px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 971px) {
    display: none;
  }
`

export const Branding = styled.h1`
  font-size: 2rem;
  color: #fff;

  @media (max-width: 971px) {
    font-size: 1.75rem;
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`
