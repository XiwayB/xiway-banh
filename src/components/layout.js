import {Helmet} from 'react-helmet';
import useSiteMetadata from './use-siteMetadata';
import React, { useState } from "react";
import Navbar from "./Navbar/navbar.js";
import Footer from "./Footer/footer.js";
import Sidebar from "./Sidebar/sidebar.js";
import "./layout.css";

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const {title, description} = useSiteMetadata();

  return (
    <>

      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
