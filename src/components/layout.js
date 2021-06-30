import React, { useState } from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import Sidebar from "./sidebar"
import "./layout.css"

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
