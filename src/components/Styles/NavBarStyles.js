import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavBarContainer = styled.nav`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background: transparent;

  @media (min-width: 700px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const RightContainer = styled.div`
  flex: 70%;
  display: flex;
  justify-content: flex-end;
  padding-left: 5%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  padding: 1rem;
  margin: 2rem;

  @media (max-width: 700px) {
    display: none;
  }
`

export const NavbarLinkExtended = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  text-decoration: none;
  margin: 10px;
`;