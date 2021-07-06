import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";

export const AboutPageWrapper = styled.div`
  margin-top: -237px;
  margin-bottom: 80px;
  margin-left: 227px;

  h2 {
    font-size: 50px;
    width: 450px;
  }

  h3 {
    font-size: 30px;
    margin-top: 84px;
  }

  @media screen and (max-width: 992px) {
    margin-left: 150px;
    margin-top: -206px;

    h2 {
      font-size: 40px;
      width: 395px;
    }

    h3 {
    font-size: 30px;
    margin-top: 500px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 78px;

    h2 {
      font-size: 40px;
      width: 325px;
    }

    h3 {
    font-size: 25px;
    margin-top: 400px;
    }
  }

`
export const AboutMeSection = styled.div`
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 360px;
  }
`

export const TitleSection = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-top: 54px;
`

export const DotIcon = styled(BsCircleFill)`
  color: black;
  margin-top: 7px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`

export const AboutMeTitle = styled.div`
  font-size: 20px;
  margin-left: 34px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-left: 28px;
  }
`

export const ContentSection = styled.div`
  display: flex;
`

export const LineBorder = styled.div`
  border-right: solid 1px black;
  margin-left: 7px;
`

export const ContentBody = styled.div`
  margin-left: 44px;

  @media screen and (max-width: 768px) {
    margin-left: 34px;
  }
`

export const AboutMeSubtitle = styled.div`
  font-size: 20px;
  margin-bottom: 24px;

  @media screen and (max-width: 768pxx) {
    font-size: 18px;
  }
`

export const AboutMeLocation = styled.div`
  font-size: 20px;
  font-weight: light;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const AboutMeText = styled.div`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const EducationSection = styled.div`
  margin-left: 574px;

  @media screen and (max-width: 992px) {
    font-size: 18px;
    margin-left: 0;
    width: 441px;

    h3 {
      margin-top: 116px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-left: 0;
    width: 360px;

    h3 {
      margin-top: 74px;
    }
  }
`

export const AboutButton = styled.div`
  text-align: center;
  margin-top: 116px;

  @media screen and (max-width: 768px) {
    margin-right: 149px;
    margin-left: 10px;
  }
`

