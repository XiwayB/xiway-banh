import React, { useRef } from "react"
import { useIntersection } from "react-use"
import Layout from "../components/layout"
// import Seo from "../components/seo"
import { ProjectsPageWrapper, ProjectSection1, StackIcons, IconHtml, IconCss, IconJavaScript, IconRails, IconLink, ProjectButtons, ProjectCard, ProjectMainInfos, IconHeroku, IconWXMP } from "../components/projectsElements.js"
import { ButtonProject } from "../components/buttonElements.js"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import "../components/image.css"
import gsap from "gsap"

const Projects = () => {

  const sectionRef = useRef(null)

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: 'power4.out',
      stagger: {
        amount: .3
      }
    })
  };

  const fadeOut = (element) => {
   // gsap.to(element, 1, {
   //    opacity: 0,
   //    y: -20,
   //    ease: 'power4.out',
   //  })
  };

  intersection && intersection.intersectionRatio < 0.1 ?
  fadeOut(".fadeIn") : fadeIn(".fadeIn");

const data = useStaticQuery(graphql`
  query {
  allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}
   name: {nin: ["gatsby-astronaut", "gatsby-icon", "about_me"]}
  }
   ) {
    edges {
      node {
        base
        childImageSharp {
        fluid(maxHeight: 500, maxWidth: 700) {
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
    <Layout>
{/*    <Seo title="Page two" />*/}
      <ProjectsPageWrapper ref={sectionRef}>
        <h1 className="fadeIn">PROJECTS</h1>

        <ProjectCard className="fadeIn">
          <ProjectSection1 id="taboard">
          <Img className="image-project" fluid={findImage("TaBoard_on_Mac.png")}/>
            <ProjectMainInfos>
              <h2>TaBoard</h2>
              <p>A rails application that will free you
              from your Google chrome tabs nightmare.
              This application was build with 4 other developers.</p>
              <p>My roles:</p>
              <ul>
                <li>Product Manager</li>
                <li>Lead developer</li>
                <li>
                  Back-end developer: created the DB schema and
                  implemented rails structure, created REST APIs for the
                  front-end
                </li>
                <li>
                  Front-end developer: implemented the ‘Create folder’
                  pop-up and the show page’s design
                </li>
              </ul>
              <StackIcons>
                <p>Stack & Platform/ Framework:</p>
                <IconLink href="//www.w3schools.com/html/" target="_blank">
                  <IconHtml/>
                </IconLink>
                <IconLink href="//www.w3schools.com/css/" target="_blank">
                  <IconCss/>
                </IconLink>
                <IconLink href="//www.javascript.com/" target="_blank">
                  <IconJavaScript/>
                </IconLink>
                <IconLink href="//rubyonrails.org/" target="_blank">
                  <IconRails/>
                </IconLink>
                <IconLink href="//www.heroku.com/" target="_blank">
                  <IconHeroku/>
                </IconLink>
              </StackIcons>
              <ProjectButtons>
                <ButtonProject href="//taboard.herokuapp.com/" target="_blank">WEBSITE</ButtonProject>
                <ButtonProject href="//github.com/XiwayB/TabBoard" target="_blank">CODE</ButtonProject>
                <ButtonProject href="//www.youtube.com/watch?v=Ix8xEk_ZNyM" target="_blank">MEDIA</ButtonProject>
              </ProjectButtons>
            </ProjectMainInfos>
          </ProjectSection1>
        </ProjectCard>

        <ProjectCard className="fadeIn">
          <ProjectSection1 id="t.a.l.o.n" >
            <Img className="image-project" fluid={findImage("T.A.L.O.N_on_iPhone_2.png")} />
            <ProjectMainInfos>
              <h2>T.A.L.O.N</h2>
              <p>A WeChat MiniProgram which works as
                an emergency map to be used during natural disasters (or just for fun!).
                This application was build with 4 other developers.</p>
              <p>My roles:</p>
              <ul>
                <li>Product Manager</li>
                <li>
                  Front-end developer: implemented the profile page (take pictures
                    and store it in the cloud, make a sound when clicking on the alarm icon)
                </li>
              </ul>
              <StackIcons>
                <p>Stack & Platform/ Framework:</p>
                <IconLink href="//www.w3schools.com/html/" target="_blank">
                  <IconHtml/>
                </IconLink>
                <IconLink href="//www.w3schools.com/css/" target="_blank">
                  <IconCss/>
                </IconLink>
                <IconLink href="//www.javascript.com/" target="_blank">
                  <IconJavaScript/>
                </IconLink>
                <IconLink href="//rubyonrails.org/" target="_blank">
                  <IconRails/>
                </IconLink>
                <IconLink href="//developers.weixin.qq.com/miniprogram/en/dev/framework/" target="_blank">
                  <IconWXMP/>
                </IconLink>
              </StackIcons>
              <ProjectButtons>
                <ButtonProject href="//res.cloudinary.com/xiway/image/upload/v1619773130/111619772991_.pic_mxtbva.jpg" target="_blank">QR CODE</ButtonProject>
                <ButtonProject href="//github.com/Marshall-Hao/t.a.l.o.n_frontend" target="_blank">CODE</ButtonProject>
                <ButtonProject href="//www.youtube.com/watch?v=RCEI5H__a5Q" target="_blank">MEDIA</ButtonProject>
              </ProjectButtons>
            </ProjectMainInfos>
          </ProjectSection1>
        </ProjectCard>

        <ProjectCard className="fadeIn">
          <ProjectSection1 id="all-you-can-watch">
            <Img className="image-project" fluid={findImage("All_you_can_watch_on_Mac.png")} />
            <ProjectMainInfos>
              <h2>All You Can Watch</h2>
              <p>A simple rails application to classify your favorite
                movies by genres and add your personal reviews.
                <p>I built this aplication by myself.</p>
                It was a good occasion to test some npm packages:</p>
                <ul>
                  <li>Draggable</li>
                  <li>Typed.JS</li>
                  <li>Select2</li>
                  <li>SweetAlert</li>
                </ul>
              <StackIcons>
                <p>Stack & Platform/ Framework:</p>
                <IconLink href="//www.w3schools.com/html/" target="_blank">
                  <IconHtml/>
                </IconLink>
                <IconLink href="//www.w3schools.com/css/" target="_blank">
                  <IconCss/>
                </IconLink>
                <IconLink href="//www.javascript.com/" target="_blank">
                  <IconJavaScript/>
                </IconLink>
                <IconLink href="//rubyonrails.org/" target="_blank">
                  <IconRails/>
                </IconLink>
                <IconLink href="//www.heroku.com/" target="_blank">
                  <IconHeroku/>
                </IconLink>
              </StackIcons>
              <ProjectButtons>
                <ButtonProject href="//all-you-can-watch.herokuapp.com/" target="_blank">WEBSITE</ButtonProject>
                <ButtonProject href="//github.com/XiwayB/rails-watch-list" target="_blank">CODE</ButtonProject>
              </ProjectButtons>
            </ProjectMainInfos>
          </ProjectSection1>
        </ProjectCard>

        <ProjectCard className="fadeIn">
          <ProjectSection1 id="jieqi">
            <Img className="image-project" fluid={findImage("JieQi_on_iPhone_2.png")} />
            <ProjectMainInfos>
              <h2>JieQi</h2>
              <p>A WeChat MiniProgram that keeps you healthy
                while following Chinese traditional advices based on Solar terms.</p>
                <p>This application was build with 3
              other developers.</p>
                <p>My roles:</p>
                <ul>
                  <li>UI/UX Designer: design was based on Chinese traditional calendar</li>
                  <li>Front-end developer: implemented the home page’s

                    design, developed the show-page functionnalities
                    (fetching informations from the Backend As A Service
                      to be displayed on the app), profile page functionnalities (generate a report to send it to your friends)</li>
                </ul>
              <StackIcons>
                <p>Stack & Platform/ Framework:</p>
                <IconLink href="//www.w3schools.com/html/" target="_blank">
                  <IconHtml/>
                </IconLink>
                <IconLink href="//www.w3schools.com/css/" target="_blank">
                  <IconCss/>
                </IconLink>
                <IconLink href="//www.javascript.com/" target="_blank">
                  <IconJavaScript/>
                </IconLink>
                <IconLink href="//developers.weixin.qq.com/miniprogram/en/dev/framework/" target="_blank">
                  <IconWXMP/>
                </IconLink>
              </StackIcons>
              <ProjectButtons>
                <ButtonProject href="//res.cloudinary.com/xiway/image/upload/v1619773413/JieQi_QR_Code_qxzqnx.jpg" target="_blank">QR CODE</ButtonProject>
                <ButtonProject href="//github.com/ricardorocer/JIEQIV1" target="_blank">CODE</ButtonProject>
              </ProjectButtons>
            </ProjectMainInfos>
          </ProjectSection1>
        </ProjectCard>

      </ProjectsPageWrapper>
    </Layout>
  )
}

export default Projects
