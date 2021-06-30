import styled from "styled-components"
import { ImHtmlFive } from "react-icons/im"
import { RiMiniProgramFill } from "react-icons/ri"
import { SiJavascript, SiRails, SiHeroku } from "react-icons/si"
import { DiCss3 } from "react-icons/di"

export const ProjectsPageWrapper = styled.div`
  margin-top: 120px;
  margin-bottom: 80px;
  margin-left: 227px;

  h1 {
    font-size: 50px;
  }
`

export const ProjectCard = styled.div`
  margin-top: 9px;
  margin-bottom: 24px;
`

export const ProjectSection1 = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 146px;
`

export const ProjectMainInfos = styled.div`
    h2 {
      font-size: 30px;
      margin-bottom: 24px;
  }

    p {
      margin-bottom: 24px;
      line-height: 30px;
      font-size: 18px;
    }

    ul {
      line-height: 24px;
      font-size: 18px;
      margin: -17px 0 39px 22px;
    }
`

export const StackIcons = styled.div`
  display: flex;
  font-size: 40px;

    p {
      margin-right: 24px;
      font-size: 18px;
    }
`

export const IconHtml = styled(ImHtmlFive) `
  margin-right: 12px;
  &:hover{
    color: #F16529;
  }
`

export const IconCss = styled(DiCss3) `
  margin-right: 12px;
  &:hover{
    color: #1C91FF;
  }
`

export const IconJavaScript = styled(SiJavascript) `
  margin-right: 12px;
  &:hover{
    color: #EFDC4F;
  }
`

export const IconRails = styled(SiRails) `
  margin-right: 12px;
  &:hover{
    color: #A62C38;
  }
`

export const IconHeroku = styled(SiHeroku)`
  &:hover{
    color: #430198;
  }
`

export const IconWXMP = styled(RiMiniProgramFill)`
  &:hover{
    color: #0BC15F;
  }
`

export const IconLink = styled.a`
  color: black;
`

export const ProjectButtons = styled.div`
  display: flex;
`
