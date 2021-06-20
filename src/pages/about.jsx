import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import "../styles/about.scss";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const About = ({ data }) => {
  const { src } = data.file.childImageSharp.fixed;

  return (
    <Layout pageNr={"01"} title="about">
      <SEO title="About" description="A little bit about me" image={src} />
      <div className="about">
        <StaticImage
          src={"../assets/profile.png"}
          alt="A person looking up"
          className="about-image"
        />
        <div>
          Hey my name is Andreas Malleus and im an aspiring web developer.
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query AboutQuery {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }
`;

export default About;
