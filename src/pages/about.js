import * as React from "react";
import Layout from "../components/layout";
import "../components/image.css";
// import Seo from "../components/seo"
import { AboutPageWrapper, AboutMeSection, TitleSection, DotIcon, AboutMeTitle, ContentSection, LineBorder, ContentBody, AboutMeSubtitle, AboutMeText, AboutMeLocation, EducationSection, AboutButton } from "../components/aboutElements.js";
import { ButtonDownload } from "../components/buttonElements.js";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

import downloadFile from '../images/CV_XIWAY_BANH_EN_FR.pdf'

const About = () => {
  const data = useStaticQuery(graphql`
  query {
  allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}
   name: {eq: "about_me"}
  }
   ) {
    edges {
      node {
        base
        childImageSharp {
        fluid(maxHeight: 500, maxWidth:500) {
          ...GatsbyImageSharpFluid
        }
        }
      }
    }
  }
}
  `)
  return (
    <Layout>
  {/*    <Seo title="Page two" />*/}
      <AboutPageWrapper>
          {data.allFile.edges.map((image, key) =>(
            <Img key={key}
            className="image-about-me"
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            />
            ))}

        <h2>A LITTLE BIT MORE ABOUT ME</h2>
        <h3>EXPERIENCES</h3>

        <AboutMeSection>
          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Customer Success Manager
            </AboutMeTitle>
          </TitleSection>

          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                October 2017 - October 2018
              </AboutMeSubtitle>
              <AboutMeLocation>
                QONTO - Paris, France
              </AboutMeLocation>
              <AboutMeText>
                I started my journey working in a Fintech.
                I was taking care of end-users by helping them creating
                their accounts and providing them tips so that they could make the
                best use of the product
              </AboutMeText>
            </ContentBody>
          </ContentSection>

          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Operations Training and Project Manager
            </AboutMeTitle>
          </TitleSection>

          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                October 2018 - November 2019
              </AboutMeSubtitle>
              <AboutMeLocation>
                QONTO - Paris, France
              </AboutMeLocation>
              <AboutMeText>
                I was helping Operation team members
                by providing them efficient tools,
                creating and automating processes for them to focus on taking care of end-users
              </AboutMeText>
            </ContentBody>
          </ContentSection>

          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Product Manager
            </AboutMeTitle>
          </TitleSection>

          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                January 2020 - January 2021
              </AboutMeSubtitle>
              <AboutMeLocation>
                QIMA - Shenzhen, China
              </AboutMeLocation>
              <AboutMeText>
                I helped developers, clients and end-users
                to have everything they needed so that they can focus on
                their work and main expertise without any worry
              </AboutMeText>
            </ContentBody>
          </ContentSection>

          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Freelance - App creator
            </AboutMeTitle>
          </TitleSection>

          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                April 2021 - Present
              </AboutMeSubtitle>
              <AboutMeLocation>
                Worlwide
              </AboutMeLocation>
              <AboutMeText>
                I can now help end-users by creating
                applications thought by innovative people and meant to solve all kinds of problems
              </AboutMeText>
            </ContentBody>
          </ContentSection>


        </AboutMeSection>

        <EducationSection>
          <h3>WHAT HELPED ME GET THERE</h3>
          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Full-Stack - Web Development Coding Bootcamp
            </AboutMeTitle>
          </TitleSection>
          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                February 2021 - April 2021
              </AboutMeSubtitle>
              <AboutMeLocation>
                Le Wagon - Shenzhen, China
              </AboutMeLocation>
            </ContentBody>
          </ContentSection>

          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Product Development - Coding Bootcamp
            </AboutMeTitle>
          </TitleSection>
          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                October 2020 - December 2020
              </AboutMeSubtitle>
              <AboutMeLocation>
                Le Wagon - Shenzhen, China
              </AboutMeLocation>
            </ContentBody>
          </ContentSection>

          <TitleSection>
            <DotIcon />
            <AboutMeTitle>
              Master Degree - International Project Management
            </AboutMeTitle>
          </TitleSection>
          <ContentSection>
            <LineBorder>
            </LineBorder>
            <ContentBody>
              <AboutMeSubtitle>
                September 2012 - September 2017
              </AboutMeSubtitle>
              <AboutMeLocation>
                Université Paris Diderot - Paris, France - 2017
              </AboutMeLocation>
            </ContentBody>
          </ContentSection>
        </EducationSection>

      </AboutPageWrapper>

      <AboutButton>
        <ButtonDownload>
        <a href={downloadFile} download>DOWNLOAD RESUME</a>{` `}
        </ButtonDownload>
      </AboutButton>

    </Layout>
  )
}

export default About
