import React from "react"
import "./heroSection.css"
import { ButtonHero } from "../buttonElements"
import Typed from 'react-typed'

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>HI, I'M XIWAY</h1>
      <h2>A PASSIONATE</h2>
      <h2><Typed
        strings={[
                  'FRONT-END',
                  'BACK-END',
                  'FULL STACK']}
        typeSpeed={90}
        loop>
      </Typed></h2>
      <h2>DEVELOPER</h2>
      <ButtonHero to="/contact">CONTACT ME</ButtonHero>
    </div>
  )
}

export default HeroSection
