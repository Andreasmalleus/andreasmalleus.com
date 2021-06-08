import React, { useState } from "react";
import * as headerStyles from "../modules/header.module.scss"
import { navigate } from "gatsby";

const Header = ({title, sortProjects}) => {

  const [showPages, setShowPages] = useState(false);
  
  const pages= ["coronavirus-statistics", "react-messenger", "insta-clone", "typeform-clone"];

  const navigateToProject = (isNext) => {
    if(isNext){
      navigate(`/projects/${pages[pages.indexOf(title) + 1]}`)
    }else{
      navigate(`/projects/${pages[pages.indexOf(title) -1]}`)
    }
  }

	return (
	<div 
		className={headerStyles.header} 
		onMouseOver={() => setShowPages(true)} 
		onMouseLeave={() => setShowPages(false)} 
	>
		<div className={headerStyles.menu}>
			{showPages ? 
				<div className={headerStyles.links}>
          <a href="/">Main</a>
					<a href="/projects">Projects</a>
					<a href="/about">About</a>
					<a href="https://github.com/Andreasmalleus">Github</a>
				</div>
				:
				<div>
					andreasmalleus
				</div>
			}
		</div>
		<div className={headerStyles.main}>
			<div className={headerStyles.title}>
				{showPages ? "" : title}
			</div>
      {
      title === "Projects"
			? 
			<div className={headerStyles.categories}>
				<div 
					onClick={() => sortProjects("all")} 
					role="button" 
					tabIndex={0}
					onKeyDown={() => sortProjects("all")}
				>
					All
				</div>
				<span> / </span>
				<div 
					onClick={() => sortProjects("javascript")} 
					role="button" 
					tabIndex={0}
					onKeyDown={() => sortProjects("javascript")}
				>
					JavaScript
				</div>
				<span> / </span>
				<div 
					onClick={() => sortProjects("typescript")} 
					role="button" 
					tabIndex={0}
					onKeyDown={() => sortProjects("typescript")}
				>
					TypeScript
				</div>
				<span> / </span>
				<div 
					onClick={() => sortProjects("HTML")} 
					role="button" 
					tabIndex={0}
					onKeyDown={() => sortProjects("HTML")}
				>
					HTML
				</div>
			</div>
      : title === "About" ?
        null
      //On project page
      : <div className={headerStyles.navigators}>
        {
          pages[0] !== title ?
          <div 
            onClick={() => navigateToProject(false)}
            role="button"
            tabIndex={0}
            onKeyDown={() => navigateToProject(false)}
          >
            Previous
          </div>
          : null
        } 
        {
          pages[0] !== title && pages[pages.length - 1] !== title ?
           <span> / </span> 
          : null
        }
        {
          pages[pages.length - 1] !== title ?
            <div 
              onClick={() => navigateToProject(true)}
              role="button"
              tabIndex={0}
              onKeyDown={() => navigateToProject(true)}
            >Next</div>
          : null
        }
      </div>
			}
		</div>
	</div>
	)
}

export default Header;