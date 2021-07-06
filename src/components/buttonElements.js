import styled from "styled-components";
import { Link } from "gatsby";

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

  @media screen and (max-width: 992px){
    display: block;
    margin: -223px 501px 234px 73px;
  }

  @media screen and (max-width: 768px){
    margin: 0px 459px 18px 101px;
    position: relative;
    top: -221px;
    left: -36px;
  }

  @media screen and (max-width: 375px){
    margin: 0px 58px 9px 165px;
    position: relative;
    top: -221px;
    left: -36px;
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

  @media screen and (max-width: 992px){
    display: block;
    margin: 419px 388px 0px 0px;
  }

  @media screen and (max-width: 768px){
    margin: 413px 386px 0px 0px;
  }

  @media screen and (max-width: 375px){
    margin: 1106px -3px;
  }

`

export const ButtonHero = styled(Link) `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 margin-top: 45px;
 text-decoration: none;

 &:hover {
  transition: all 0.1s ease-out;
  background-color: #D9D1CA;
  border: black 3px solid;
  color: black;
 }

  @media only screen and (max-width: 992px) {
    margin-top: 110px;
    font-size: 18px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 10rem;
    font-size: 15px;
  }


  @media only screen and (max-width: 375px) {
    margin-top: 105px;
    font-size: 15px;
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

  @media only screen and (max-width: 768px) {
    margin-top: 23px;
    margin-right: 15px;
    font-size: 14px;
    display: flex;
    align-items: center;
    text-align: center;
  }

`

export const ButtonDownload = styled.div `
 border-radius: 10px;
 background: black;
 padding: 15px;
 cursor: pointer;
 color: white;
 font-weight: bold;
 font-size: 14px;
 margin-top: 170px;
 margin-left: 621px;
 margin-right: 668px;
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

  @media screen and (max-width: 992px){
    display: block;
    margin: -10px 149px 40px 319px;
  }

  @media screen and (max-width: 768px){
    margin-right: 160px;
    margin-left: 294px;
  }

  @media screen and (max-width: 375px){
    margin-right: -52px;
    margin-left: 150px;
  }

`
