import styled from 'styled-components'
import { Link } from 'react-scroll'

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* This will only work if links routes to another page otherwise it will create height issues when using the burger menu
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')}; 
  */
  height: auto;
  /* position: fixed; */
  margin-bottom: 8rem;
  @media (min-width: 971px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 5rem;

  @media (max-width: 971px) {
    margin: 0rem 2rem 0 0;
    padding-left: 3.5rem;
  }
  
  @media (max-width: 450px) {
    padding-left: 2rem;
  }
`

export const RightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 5%;

  @media (max-width: 971px) {
    padding-right: 2%;
  }
`

export const NavbarInnerContainer = styled.div`
  z-index: 10000;
  background: rgba(105, 106, 110, 0.6);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavBarLink = styled(Link)`
  cursor: pointer;
  color: #ff9966;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  font-weight: 800;

  @media (max-width: 971px) {
    display: none;
  }

  &:hover {
    color: #fff;
  }
  
  &::after {
    position: relative;
    content: '';
    height: 1px;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    background: #ff9966;
    visibility: none;
    opacity: 0;
    z-index: -1;
  }

  &:hover::after{
    opacity: 1;
    visibility: visible;
    height: 5px;
    transform: scale(1.2);
    margin-bottom: 20px;
  }

`

export const NavbarLinkExtended = styled(Link)`
  cursor: pointer;
  color: #ff9966;
  font-size: 2rem;
  text-decoration: none;
  text-align: center;
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
  color: #fff;
  cursor: pointer;
  
  @media (min-width: 971px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  position: fixed;
  z-index: 10000;
  background: rgba(105, 106, 110, 0.6);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 971px) {
    display: none;
  }
`

export const Branding = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Permanent+Marker&family=Poppins:wght@400&display=swap');
  font-family: 'Permanent Marker', cursive;
  font-size: 2rem;
  color: #ff9966;
  cursor: pointer;

  @media (max-width: 971px) {
    font-size: 1.75rem;
  }

  @media (max-width: 450px) {
    font-size: 1.5rem;
  }
`
