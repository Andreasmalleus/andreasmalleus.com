import * as React from "react"
import Layout from "../components/layout";
import AboutImage from "../assets/profile.png";
import "../styles/about.scss";

const About = () => {

  return (
    <Layout pageNr={"01"} title="about">
      <div className="about">
          <img src={AboutImage} alt="A person looking up"/>
          <div>Hey my name is Andreas Malleus and im an aspiring web developer</div>
      </div>
    </Layout>
  )
}

export default About;
