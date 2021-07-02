import styled from "styled-components"
import { SiMinutemailer, SiLinkedin, SiGithub } from "react-icons/Si"

export const ContactPageWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;
  margin-left: 227px;

  h1 {
    font-size: 50px;
  }

  @media screen and (max-width: 992px) {
    margin-left: 166px;
    margin-top: 96px;

    h1 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 77px;
    margin-top: 70px;

    h1 {
      font-size: 40px;
    }
  }
`

export const ContactSection = styled.div`
  margin: 60px 103px;

  p {
    margin-top: 24px;
  }

  @media screen and (max-width: 992px) {
    margin: 60px 0px;
  }

  @media screen and (max-width: 768px) {
    margin: 60px 0px;
  }
`

export const ContactSubSection = styled.div`
  display: flex;
  margin-bottom: 12px;

  p {
    font-size: 21px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    margin-bottom: 28px;
    p {
      font-size: 18px;
    }
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

  @media screen and (max-width: 992px) {
    margin-left: 3rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 15px;
  }
`

export const IconLinkedIn = styled(SiLinkedin)`
  font-size: 36px;
  color: black;
  margin-left: 15rem;
  margin-top: 14px;
  cursor: pointer;

  &:hover{
    color: #D9D1CA;
  }

  @media screen and (max-width: 992px) {
    margin-left: 16rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 194px;
  }

`

export const IconGitHub = styled(SiGithub)`
  font-size: 36px;
  color: black;
  margin-left: 11.5rem;
  margin-top: 14px;
  margin-bottom: 100px;
  cursor: pointer;

  &:hover{
    color: #D9D1CA;
  }

  @media screen and (max-width: 992px) {
    margin-left: 12.5rem;
  }

  @media screen and (max-width: 768px) {
    margin-left: 144px;
  }

`
