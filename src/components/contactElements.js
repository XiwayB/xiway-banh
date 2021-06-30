import styled from "styled-components"
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/Si"

export const ContactPageWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
  margin-left: 227px;

  h1 {
    font-size: 50px;
  }
`

export const ContactSection = styled.div`
  margin: 60px 103px;

  p {
    margin-top: 24px;
  }
`

export const ContactSubSection = styled.div`
  display: flex;
  margin-bottom: 12px;

  p {
    font-size: 21px;
  }

`

export const IconLink = styled.a`


`

export const IconEmail = styled(SiMinutemailer)`
  font-size: 36px;
  color: black;
  margin-left: 35px;
  margin-top: 21px;
  cursor: pointer;
  margin-bottom: -8px;

  &:hover{
    color: #D9D1CA;
  }
`

export const IconLinkedIn = styled(SiLinkedin)`
  font-size: 36px;
  color: black;
  margin-left: 194px;
  margin-top: 14px;
  cursor: pointer;

  &:hover{
    color: #D9D1CA;
  }
`

export const IconGitHub = styled(SiGithub)`
  font-size: 36px;
  color: black;
  margin-left: 151px;
  margin-top: 14px;
  cursor: pointer;

  &:hover{
    color: #D9D1CA;
  }

`
