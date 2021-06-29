import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link) `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 font-weight: bold;
 font-size: 14px;
 margin-top: 170px;
 margin-bottom: 387px;
 margin-left: 78px;
 text-decoration: none;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: white;
  border: black 3px solid;
  color: black;
  padding: 14px;
 }

 a {
  text-decoration: none;
  color: white;
    &:hover {
    color: black;
    }
 }

 @media screen and (max-width: 960px){
    display: block;
    margin: -10px 0 40px 160px;
  }

 @media screen and (max-width: 768px){
    display: block;
    margin: -10px 0 40px 140px;
  }
`

export const ButtonProjects = styled(Link) `
  border-radius: 10px;
  background: black;
  padding: 15px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-top: 334px;
  margin-bottom: 364px;
  position: absolute;
  right: 20%;
  text-decoration: none;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: white;
  border: black 3px solid;
  color: black;
  padding: 14px;
 }

 @media screen and (max-width: 960px){
    display: block;
    margin: -10px 0 40px 160px;
  }

 @media screen and (max-width: 768px){
    display: block;
    margin: -10px 0 40px 140px;
  }
`

export const ButtonHero = styled(Link) `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 margin-top: 65px;
 text-decoration: none;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: #D9D1CA;
  border: black 3px solid;
  color: black;
 }

`

export const ButtonProject = styled.a `
 border-radius: 10px;
 background: black;
 padding: 12px 32px;
 cursor: pointer;
 color: white;
 text-decoration: none;
 margin-right: 24px;
 margin-top: 16px;
 font-size: 16px;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: #FFFFFF;
  border: black 3px solid;
  color: black;
  padding: 8px 29px;
 }

`
