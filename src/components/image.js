import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import "./image.css"
import { ButtonProjects } from "./buttonElements"
import BackgroundImage from "gatsby-background-image"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Image = () => {
  const data = useStaticQuery(graphql`
  query {
  allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}
   name: {nin: ["gatsby-astronaut", "gatsby-icon", "about_me", "All_you_can_watch_on_Mac", "JieQi_on_iPhone_2", "JieQi_on_iPhone_beige_smaller_2", "T.A.L.O.N_on_iPhone_2"]}
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

  const findImage = (image) => {
    const result = data.allFile.edges.find(element => element.node.base === image)
    return result.node.childImageSharp.fluid
    }

  return(
    <div className="card-projects">
      <div className="image-container">
        <h1>PROJECTS</h1>
          <div className="image-grid">
            <BackgroundImage
            className="image-item"
            fluid={findImage("computer_lighted_up.jpeg")}
            alt={"computer_lighted_up"}
            >
              <AnchorLink to="/projects#taboard">
                <div className="linear-gradient">
                  <h3>TABOARD</h3>
                  <p>Web Application</p>
                </div>
              </AnchorLink>
            </BackgroundImage>

            <BackgroundImage
              className="image-item"
              fluid={findImage("earthquake.jpeg")}
              alt={"earthquake"}
              >
              <AnchorLink to="/projects#t.a.l.o.n">
                <div className="linear-gradient">
                  <h3>T.A.L.O.N</h3>
                  <p>WeChat MiniProgram</p>
                </div>
              </AnchorLink>
            </BackgroundImage>

            <BackgroundImage
              className="image-item"
              fluid={findImage("movies.jpg")}
              alt={"movie theatre"}
              >
              <AnchorLink to="/projects#all-you-can-watch">
                <div className="linear-gradient">
                  <h3>ALL YOU CAN WATCH</h3>
                  <p>Web Application</p>
                </div>
              </AnchorLink>
            </BackgroundImage>

            <BackgroundImage
              className="image-item"
              fluid={findImage("healthy_jar.jpeg")}
              alt={"healthy food"}
              >
              <AnchorLink to="/projects#jieqi">
                 <div className="linear-gradient">
                  <h3>JIEQI</h3>
                  <p>WeChat MiniProgram</p>
                 </div>
              </AnchorLink>
            </BackgroundImage>
          </div>

      </div>
      <div>
        <ButtonProjects to='/projects'>LEARN MORE</ButtonProjects>
      </div>
    </div>
  )
}

export default Image
