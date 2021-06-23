import React from "react"
import { Button } from "../buttonElements"
import { InfoContainer, InfoWrapper, InfoRow, Column, TextWrapper, Heading, Subtitle, DevIcons, IconHtml, IconCss, IconSass, IconBootstrap, IconJavaScript, IconReact, IconRedux, IconRuby, IconRails, IconPostgreSql, IconGit, IconGitHub, IconPostman, IconWebpack, IconGatsby, IconFigma, IconIllustrator, IconLink} from "./infoElements"
// import Image from "../image"

const InfoSection = () => {
  return(
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow>
            <Column>
              <TextWrapper>
                <Heading>FULL STACK DEVELOPER</Heading>
                <Subtitle>Passionate about programming, I’m here to help people create a communication tool that will help them spread their ideas to the world.</Subtitle>
              </TextWrapper>
              <Button>LEARN MORE</Button>
            </Column>

            <Column>
              <TextWrapper>
                <Heading>STACK & TOOLS</Heading>
                  <DevIcons>
                    <IconLink href="//www.w3schools.com/html/" target="_blank">
                      <IconHtml/>
                    </IconLink>
                    <IconLink href="//www.w3schools.com/css/" target="_blank">
                      <IconCss/>
                    </IconLink>
                    <IconLink href="//sass-lang.com/" target="_blank">
                      <IconSass/>
                    </IconLink>
                    <IconLink href="//getbootstrap.com/" target="_blank">
                      <IconBootstrap/>
                    </IconLink>
                    <IconLink href="//www.javascript.com/" target="_blank">
                      <IconJavaScript/>
                    </IconLink>
                    <IconLink href="//reactjs.org/" target="_blank">
                      <IconReact/>
                    </IconLink>
                    <IconLink href="//redux.js.org/" target="_blank">
                      <IconRedux/>
                    </IconLink>
                    <IconLink href="//www.ruby-lang.org/en/" target="_blank">
                      <IconRuby/>
                    </IconLink>
                    <IconLink href="//rubyonrails.org/" target="_blank">
                      <IconRails/>
                    </IconLink>
                    <IconLink href="//www.postgresql.org/" target="_blank">
                      <IconPostgreSql/>
                    </IconLink>
                    <IconLink href="//git-scm.com/" target="_blank">
                      <IconGit/>
                    </IconLink>
                    <IconLink href="//github.com/XiwayB" target="_blank">
                      <IconGitHub/>
                    </IconLink>
                    <IconLink href="//www.postman.com/" target="_blank">
                      <IconPostman/>
                    </IconLink>
                    <IconLink href="//webpack.js.org/" target="_blank">
                      <IconWebpack/>
                    </IconLink>
                    <IconLink href="//www.gatsbyjs.com/" target="_blank">
                      <IconGatsby/>
                    </IconLink>
                    <IconLink href="//www.figma.com/" target="_blank">
                      <IconFigma/>
                    </IconLink>
                    <IconLink href="//www.adobe.com/in/products/illustrator.html" target="_blank">
                      <IconIllustrator/>
                    </IconLink>
                  </DevIcons>
              </TextWrapper>
              <Button>LEARN MORE</Button>
            </Column>

          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoSection
