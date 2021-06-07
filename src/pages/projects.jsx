import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { useState } from "react";
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import dateFormat from "dateformat";
import * as projectsStyles from "../modules/projects.module.scss"; 

const Projects = ({data}) => {

	const [category, setCategory] = useState("all")

	const projects = data.allMarkdownRemark.edges;

	const sortProjects = (language) => {
		setCategory(language)
	}

	return (
		<Layout pageNr={"00"} title={"Projects"} sortProjects={sortProjects}>
			<div className={projectsStyles.projects}>
				{
				category !== "all"
				?
				projects.filter(_ => _.node.frontmatter.language.toLowerCase() === category.toLowerCase()).map((project, index) => {
					return (
						<Project key={index} index={index} length={projects.length} {...project.node.frontmatter}/>
					)
				})
				:
				projects.map((project, index) => {
					return (
						<Project key={index} index={index} length={projects.length} {...project.node.frontmatter}/>
					)
				})
				}
			</div>  
		</Layout>
	)
}

const Project = ({index, length, name, language, created_at, image}) => {

	const img = getImage(image)

	return (
		<div className={projectsStyles.project}>
			<div className={projectsStyles.index}>{length >= 10 ? index : "0" + index}</div>
			<div>{name}</div>
			<div>{language}</div>
			<div>{dateFormat(created_at, "mmmm yyyy")}</div>
			<Link to={name.toLowerCase()}>
				<GatsbyImage image={img} alt={name} className={projectsStyles.image}/>
			</Link>
		</div>
	)
}

export const query = graphql`
	query ProjectsQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
            name
            language
            created_at
            image {
              childImageSharp {
                gatsbyImageData(
                  width:300
                )
              }
            }
          }
        }
      }
    }
  }
`

export default Projects;