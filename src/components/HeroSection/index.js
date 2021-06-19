import React from "react"
import "./heroSection.css"
import { ButtonHero } from "../buttonElements"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>HI,</h1>
      <h2>I'M XIWAY</h2>
      <h2>A PASSIONATE</h2>
      <ButtonHero to="/contact">CONTACT ME</ButtonHero>
    </div>
  )
}

export default HeroSection
