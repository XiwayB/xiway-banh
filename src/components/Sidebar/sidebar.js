import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBarItem } from
 "./sidebarElements.js";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SideBarItem>
            <SidebarLink to="/about" onClick={toggle}>
              About
            </SidebarLink>
          </SideBarItem>
          <SideBarItem>
            <SidebarLink to="/projects" onClick={toggle}>
              Projects
            </SidebarLink>
          </SideBarItem>
          <SideBarItem>
            <SidebarLink to="/contact" onClick={toggle}>
              Contact
            </SidebarLink>
          </SideBarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
