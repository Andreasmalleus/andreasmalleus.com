import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import dateFormat from "dateformat";
import Modal from "../components/modal"
import { CSSTransition } from "react-transition-group"
import "../styles/project.scss";

const Project = ({data}) => { 

  const {name, language, created_at, image, html_url} = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const img = getImage(image);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout pageNr={"00"} title={name}>
      <div className="project">
        <div className="projectInfo">
          <div>{language}</div>
          <div>{dateFormat(created_at, "mmmm yyyy")}</div>
          <a href={html_url}>GitHub link</a>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <GatsbyImage 
          image={img} 
          alt={name} 
          className="project-image" 
          onClick={() => setOpenModal(!openModal)}
          objectFit='contain'
        />
      </div>
      <CSSTransition
        timeout={500}
        in={openModal}
        classNames="modal-transition"
        appear
        unmountOnExit
      >
        <Modal image={img} alt={name} isOpen={openModal} setOpenModal={setOpenModal}/>
      </CSSTransition>
    </Layout> 
  )
}

export const query = graphql`
 query ProjectQuery($name: String!) {
  markdownRemark(frontmatter: {name: {eq: $name}}) {
    html
    frontmatter {
      name
      language
      created_at
      html_url
      image {
        childImageSharp {
          gatsbyImageData(width: 800)
        }
      }
    }
  }
}

` 

export default Project;