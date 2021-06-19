import * as React from "react"
import Layout from "../components/layout"
import HeroSection from "../components/heroSection"
import Image from "../components/image"
import InfoSection from "../components/infoSection"

// import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
{/*    <Seo title="Home" />*/}
    <HeroSection />
    <InfoSection />
    <Image />
  </Layout>
)

export default IndexPage
