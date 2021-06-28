import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import "./image.css"
import { ButtonProjects } from "./buttonElements"

const Image = () => {
  const data = useStaticQuery(graphql`
  query {
  allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}
   name: {nin: ["gatsby-astronaut", "gatsby-icon"]}
  }
   ) {
    edges {
      node {
        base
        childImageSharp {
        fluid(maxHeight: 800, maxWidth:800) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }
  }
}
  `)

  return(
    <div className="card-projects">
      <div className="image-container">
        <h1>PROJECTS</h1>
          <div className="image-grid">
          {data.allFile.edges.map((image, key) =>(
            <Img key={key}
            className="image-item"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            />
            ))}
          </div>
      </div>
      <div>
        <ButtonProjects to='/projects'>LEARN MORE</ButtonProjects>
      </div>
    </div>
  )
}

export default Image
