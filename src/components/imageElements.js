import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

export const CardProjects = styled.div `
  display: flex;
  margin-top: 700px;
  margin-left: -58px;
`

export const ImageContainer = styled.div `
  text-align: center;
  margin-right: 510px;
  flex-grow: 1;

  h1 {
    margin-bottom: 40px;
    font-size: 60px;
    line-height: 1.1;
    text-align: left;
    margin-left: 330px;
  }
`

export const ImageGrid = styled.div `
  display: grid;
  grid-gap: 30px;
  grid-template-columns:  1fr 1fr;
  grid-auto-rows: minmax(50px, auto);
  max-width: 650px;
  padding: 0 32px;
  margin-left: 298px;
  margin-top: 45px;
`

export const ImageAboutMe = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  left: 720px;
  top: 371px;

  &:hover{
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`

export const ImageProject = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 10px;
  left: -49px;
  top: 47px;

  &:hover{
    transform: scale(1.1);
    transition: 0.6s all ease !important;
  }
`


export const ImageItem = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 12px;

  h3 {
    color: white;
    position: absolute;
    bottom: 20%;
    right: 10%;
  }

  p {
    color: white;
    position: absolute;
    bottom:  10%;
    right: 10%;
  }
`

const BackgroundImages = styled(BackgroundImage)`
  background: linear-gradient(to bottom, rgba(255,255,255,0.12) 0, rgba(0,0,0,0.55) 74.4%)

`


// .linear-gradient {
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(to bottom, rgba(255,255,255,0.12) 0, rgba(0,0,0,0.55) 74.4%)
// }
