import styled from "styled-components";
import { Link } from "gatsby";

export const FooterContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  width: 100%;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 20px auto;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link) `
  color: #fff;
  justify-self; start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 30%;

  @media screen and (max-width: 992px) {
    margin-left: 25%;
  }

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    margin-left: 12px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  margin-bottom: 24px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 34px;
`

export const ScrollUp = styled.a`
  margin-top: 46px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`




















