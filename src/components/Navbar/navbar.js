import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./navbarElements";

const isBrowser = typeof window !== "undefined"
console.log("IS BROWSER", isBrowser)

const Navbar = ({toggle}) => {

  const[click, setClick] = useState(false)
  const[scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  if(isBrowser) {
      const changeNav = () => {
      if(window.scollY >= 80) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    };

    useEffect(() => {
      changeNav()
      window.addEventListener("scroll", changeNav)
    });
  };

  return(
    <>
    <IconContext.Provider value={{ color: "#141414"}}>
      <Nav active={scroll}>
        <NavbarContainer id="NavbarContainer">
          <NavLogo to="/">
          X.B
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/about" activeClassName="active">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects" activeClassName="active">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact" activeClassName="active">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
