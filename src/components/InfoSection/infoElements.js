import styled from "styled-components"

export const InfoContainer = styled.div`
  color: #fff;
  margin: 780px 0;

  @media screen and (max-width: 768px) {
    padding: 100px O;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`

export const InfoRow = styled.div `
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  display: flex;

  @media screen and (max-width: 960px){
    display: block;
    margin: 150px 34px;
  }
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const Heading = styled.h1 `
  margin-bottom: 24px;
  font-size: 60px;
  line-height: 1.1;
  color: black;

  @media screen and (max-width: 960px){
    font-size: 40px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin: 35px 0;
  font-size: 20px;
  line-height: 34px;
  color: black;
`


























