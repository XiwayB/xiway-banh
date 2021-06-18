import * as React from "react"

import Layout from "../components/layout"
import HeroSection from "../components/heroSection"
import Image from "../components/image"

// import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
{/*    <Seo title="Home" />*/}
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
