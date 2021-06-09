import React from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as projectStyles from "../modules/project.module.scss"
import dateFormat from "dateformat";

const Project = ({data}) => { 

  const {name, language, created_at, image, html_url} = data.markdownRemark.frontmatter;
  const html = data.markdownRemark.html;
  const img = getImage(image);

  return (
    <Layout pageNr={"00"} title={name}>
      <div className={projectStyles.project}>
        <div className={projectStyles.projectInfo}>
          <div>{language}</div>
          <div>{dateFormat(created_at, "mmmm yyyy")}</div>
          <a href={html_url}>GitHub link</a>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
        <GatsbyImage image={img} alt={name} className={projectStyles.image}/>
      </div>
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
        image{
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
` 


export default Project;