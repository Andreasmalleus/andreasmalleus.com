import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { useState } from "react";
import { GatsbyImage, getImage  } from "gatsby-plugin-image"
import dateFormat from "dateformat";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles/projects.scss"

const Projects = ({data}) => {

	const [category, setCategory] = useState("all")

	const projects = data.allMarkdownRemark.edges;

	const sortProjects = (language) => {
		setCategory(language)
	}

	return (
		<Layout pageNr={"00"} title={"projects"} sortProjects={sortProjects}>
      <TransitionGroup
        className="projects"
        component="Project"
      >
				{
				category !== "all"
				?
				projects.filter(_ => _.node.frontmatter.language.toLowerCase() === category.toLowerCase()).map((project, index) => {
					return (
            <CSSTransition
              timeout={1000}
              key={index}
              classNames="project-transition"
            >
						  <Project index={index} length={projects.length} {...project.node.frontmatter}/>
            </CSSTransition>
					)
				})
				:
				projects.map((project, index) => {
					return (
						<CSSTransition
              timeout={1000}
              key={index}
              classNames="project-transition"
            >
						  <Project index={index} length={projects.length} {...project.node.frontmatter}/>
            </CSSTransition>
					)
				})
				}
			</TransitionGroup>
		</Layout>
	)
}

const Project = ({index, length, name, language, created_at, image}) => {

	const img = getImage(image)

	return (
    <div className="projects-project">
      <div className="index">{length >= 10 ? index : "0" + index}</div>
      <div>{name}</div>
      <div>{language}</div>
      <div>{dateFormat(created_at, "mmmm yyyy")}</div>
      <Link to={name.toLowerCase()}>
        <GatsbyImage image={img} alt={name} className="image"/>
      </Link>
  </div>
	)
}

export const query = graphql`
	query ProjectsQuery {
    allMarkdownRemark(sort: {fields: frontmatter___created_at, order: DESC}) {
      edges {
        node {
          frontmatter {
            id
            name
            language
            created_at
            image {
              childImageSharp {
                gatsbyImageData(width: 200)
              }
            }
          }
        }
      }
    }
  }
`

export default Projects;