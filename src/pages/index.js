import * as React from "react";
import Layout from "../components/layout.js";
import HeroSection from "../components/HeroSection/heroSection.js";
import Image from "../components/image.js";
import InfoSection from "../components/InfoSection/infoSection.js";

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
