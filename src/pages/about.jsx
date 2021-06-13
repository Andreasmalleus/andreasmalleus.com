import * as React from "react"
import Layout from "../components/layout";
import "../styles/about.scss";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {

  return (
    <Layout pageNr={"01"} title="about">
      <div className="about">
          <StaticImage src={"../assets/profile.png"} alt="A person looking up" className="about-image"/>
          <div>Hey my name is Andreas Malleus and im an aspiring web developer</div>
      </div>
    </Layout>
  )
}

export default About;
