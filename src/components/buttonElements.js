import styled from "styled-components"

export const Button = styled.button `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 font-weight: bold;
 font-size: 14px;
 margin-top: 170px;
 margin-bottom: 364px;
 margin-left: 78px;

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

export const ButtonProjects = styled.button `
  border-radius: 10px;
  background: black;
  padding: 15px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-top: 257px;
  margin-bottom: 364px;
  margin-left: 296px;

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

export const ButtonHero = styled.button `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 font-weight: bold;
 margin-top: 45px;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: #D9D1CA;
  border: black 3px solid;
  color: black;
 }

`
