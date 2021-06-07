import * as React from "react"
import Layout from "../components/layout";
import AboutImage from "../images/profile.png";
import * as aboutStyles from "../modules/about.module.scss";
const About = () => {

  return (
    <Layout pageNr={"01"} title={"About"}>
      <div className={aboutStyles.profile}>
          <img src={AboutImage} alt="A person looking up"/>
          <div>Hey my name is Andreas Malleus and im an aspiring web developer</div>
      </div>
    </Layout>
  )
}

export default About;
