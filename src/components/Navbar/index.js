import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./navbarElements"

const Navbar = ({toggle}) => {
  const[click, setClick] = useState(false)
  const[scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if(window.scollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return(
    <>
    <IconContext.Provider value={{ color: "#141414"}}>
      <Nav active={scroll} click={click}>
        <NavbarContainer>
          <NavLogo to="/">
          X.B
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
