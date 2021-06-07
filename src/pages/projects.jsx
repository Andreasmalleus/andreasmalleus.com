import React from "react";
import Layout from "../components/layout";
import dateFormat from "dateformat";
import * as projectsStyles from "../modules/projects.module.scss"; 

const Projects = () => {

	const projects = [
    {
      name : "test",
      language : "test",   
      created_at : "12"   
    },
    {
      name : "test",
      language : "test",    
      created_at : "12"    
    }
  ];

	return (
		<Layout pageNr={"00"} title={"Projects"}>
			<div className={projectsStyles.projects}>
				{
          projects.map((project, index) => {
            return (
              <Project key={index} index={index} length={projects.length} {...project}/>
            )
          })
				}
			</div>  
		</Layout>
	)
}

const Project = ({index, length, name, language, created_at}) => {

	return (
		<div className={projectsStyles.project}>
			<div className={projectsStyles.index}>{length >= 10 ? index : "0" + index}</div>
			<div>{name}</div>
			<div>{language}</div>
			<div>{dateFormat(created_at, "mmmm yyyy")}</div>
		</div>
	)
}

export default Projects;