import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import "../styles/about.scss";
import SEO from "../components/seo";

const About = () => {
  return (
    <Layout pageNr={"01"} title="about">
      <SEO title="About" />
      <div className="about">
        <StaticImage
          src={"../assets/profile.png"}
          alt="A person looking up"
          className="about-image"
        />
        <div>
          Hey my name is Andreas Malleus and im an aspiring web developer
        </div>
      </div>
    </Layout>
  );
};

export default About;
