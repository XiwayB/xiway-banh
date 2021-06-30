import * as React from "react"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { ContactPageWrapper, ContactSection, ContactSubSection, IconLink, IconEmail, IconLinkedIn, IconGitHub } from "../components/contactElements.js"


const Contact = () => (
  <Layout>
{/*    <Seo title="Page two" />*/}
    <ContactPageWrapper>
      <h1>CONTACT ME</h1>
      <ContactSection>
        <ContactSubSection>
          <p>By email: xiway.banh@gmail.com</p>
          <IconLink href="mailto:xiway.banh@gmail.com">
            <IconEmail/>
          </IconLink>
        </ContactSubSection>
        <ContactSubSection>
          <p>Via LinkedIn</p>
          <IconLink href="//www.linkedin.com/in/xiway-banh/" target="_blank" aria-label="LinkedIn">
            <IconLinkedIn/>
          </IconLink>
        </ContactSubSection>
        <ContactSubSection>
          <p>Or visit my GitHub</p>
          <IconLink href="//github.com/XiwayB" target="_blank" aria-label="Github" rel="noopener noreferrer">
            <IconGitHub/>
          </IconLink>
        </ContactSubSection>
      </ContactSection>
    </ContactPageWrapper>

  </Layout>
)

export default Contact
