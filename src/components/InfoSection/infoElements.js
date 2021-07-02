import styled from "styled-components"
import { FaSass, FaBootstrap, FaGithub } from "react-icons/fa"
import { ImHtmlFive } from "react-icons/im"
import { DiCss3, DiGit, DiIllustrator } from "react-icons/di"
import { SiJavascript, SiRuby, SiRails, SiReact, SiRedux, SiPostgresql, SiFigma, SiPostman, SiWebpack, SiGatsby } from "react-icons/si"

export const InfoContainer = styled.div`
  color: #fff;
  margin-top: 45rem;


  @media screen and (max-width: 992px) {
    padding-top: 100px;
  }

  @media screen and (max-width: 768px) {
    padding-top: 100px;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  padding: 0 24px;
`

export const InfoRow = styled.div `
  margin-top: 200px;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`

export const Column = styled.div`
  padding: 0 15px;
  display: flex;

  @media screen and (max-width: 992px){
    display: block;
    margin: -21px 3px;
  }

  @media screen and (max-width: 768px){
    display: block;
    margin: -21px 3px;
  }
`

export const TextWrapper = styled.div`
  opacity: 0;
  max-width: 740px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 236px;

  @media screen and (max-width: 992px){
    margin: auto;
    width: 545px;
    margin-bottom: 125px;
  }

  @media screen and (max-width: 768px){
    margin-left: 41px;
    width: 345px;
    margin-bottom: 125px;
  }

`

export const Heading = styled.h1 `
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  color: black;

  @media screen and (max-width: 768px){
    font-size: 40px;
  }
`

export const Subtitle = styled.p`
  max-width: 540px;
  margin: 83px 0;
  font-size: 20px;
  line-height: 34px;
  color: black;

  @media screen and (max-width: 768px){
    font-size: 18px;
  }
`

export const DevIcons = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
  max-width: 3000px;
  color: black;
  font-size: 64px;
  margin-top: 55px;
  width: 540px;
  margin-right: 220px;

  @media screen and (max-width: 992px){
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-size: 50px;
    width: 368px;
    grid-gap: 30px;
    margin-left: 0px;
    margin-bottom: 74px;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 50px;
    width: 368px;
    grid-gap: 3px;
    margin-left: 16px;
    margin-bottom: 74px;
  }
`

export const IconHtml = styled(ImHtmlFive) `
  &:hover{
    color: #F16529;
  }
`
export const IconCss = styled(DiCss3) `
  &:hover{
    color: #1C91FF;
  }
`
export const IconSass = styled(FaSass) `
  &:hover{
    color: #CF659A;
  }
`
export const IconBootstrap = styled(FaBootstrap) `
  &:hover{
    color: #5B4282;
  }
`
export const IconJavaScript = styled(SiJavascript) `
  &:hover{
    color: #EFDC4F;
  }
`
export const IconReact = styled(SiReact) `
  &:hover{
    color: #397688;
  }
`
export const IconRedux = styled(SiRedux) `
  &:hover{
    color: #4A3376;
  }
`
export const IconRuby = styled(SiRuby) `
  &:hover{
    color: #A80D02;
  }
`
export const IconRails = styled(SiRails) `
  &:hover{
    color: #A62C38;
  }
`
export const IconPostgreSql = styled(SiPostgresql) `
  &:hover{
    color: #336790;
  }
`

export const IconGit = styled(DiGit) `
  &:hover{
    color: #F03C2D;
  }
`

export const IconGitHub = styled(FaGithub) `
  &:hover{
    color: #D9D1CA;
  }
`

export const IconPostman = styled(SiPostman) `
  &:hover{
    color: #FF6C37;
  }
`

export const IconWebpack = styled(SiWebpack) `
  &:hover{
    color: #1C78BF;
  }
`

export const IconGatsby = styled(SiGatsby) `
  &:hover{
    color: #633194;
  }
`

export const IconFigma = styled(SiFigma) `
  &:hover{
    color: #FF7262;
  }
`

export const IconIllustrator = styled(DiIllustrator) `
  &:hover{
    color: #C96205;
  }
`

export const IconLink = styled.a`
  color: black;
`









