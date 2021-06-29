import styled from "styled-components"
import { Link as LinkRouter} from "gatsby"
import { Link as LinkSroll } from "react-scroll"

export const Nav = styled.nav`
  background: ${({active}) => active ? "#fff" : "#D9D1CA"};
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 2;

  @media screen and (max-width: 960px){
    background: ${({ click }) => (click ? "fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div `
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(LinkRouter)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul `
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-4000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
  }
`

export const NavLinks = styled(LinkRouter) `
  color: #141414;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid black;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: red;
      transition: all 0.3s ease;
    }
  }
`

export const NavItem = styled.li `
  height: 80px;

  a {
    font-size: 20px;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`


