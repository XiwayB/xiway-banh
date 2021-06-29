import React from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { FooterContainer, SocialIcons, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, ScrollUp } from "./footerElements"
import { animateScroll as scroll} from "react-scroll"

const Footer = () => {

  const toggleTop = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <ScrollUp onClick={toggleTop}> Scroll to the top </ScrollUp>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to= "/">
            X.B.
          </SocialLogo>
          <WebsiteRights>Coded and Designed by Xiway © {new Date().getFullYear()}
          </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
        <SocialIcons>
          <SocialIconLink href="//github.com/XiwayB" target="_blank" aria-label="Github" rel="noopener noreferrer">
            <FaGithub />
          </SocialIconLink>
          <SocialIconLink href="//www.linkedin.com/in/xiway-banh/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcons>
    </FooterContainer>

  )
}

export default Footer
