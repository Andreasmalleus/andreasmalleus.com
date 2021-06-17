import React, { useState } from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import dateFormat from "dateformat";
import Modal from "../components/modal";
import { CSSTransition } from "react-transition-group";
import "../styles/project.scss";
import SEO from "../components/seo";

const Project = ({ data }) => {
  const { title, language, created_at, image, html_url, description } =
    data.markdownRemark.frontmatter;

  const html = data.markdownRemark.html;
  const img = getImage(image);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout pageNr={"00"} title={title}>
      <SEO title={title} description={description} />
      <div className="project">
        <div className="projectInfo">
          <div>{language}</div>
          <div>{dateFormat(created_at, "mmmm yyyy")}</div>
          <a href={html_url}>GitHub link</a>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <div style={{ color: "white" }}>{description}</div>
        <GatsbyImage
          image={img}
          alt={title}
          className="project-image"
          onClick={() => setOpenModal(!openModal)}
          objectFit="contain"
        />
      </div>
      <CSSTransition
        timeout={500}
        in={openModal}
        classNames="modal-transition"
        appear
        unmountOnExit
      >
        <Modal
          image={img}
          alt={title}
          isOpen={openModal}
          setOpenModal={setOpenModal}
        />
      </CSSTransition>
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        language
        created_at
        html_url
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;

export default Project;
