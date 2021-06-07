import React, { useState } from "react";
import * as headerStyles from "../modules/header.module.scss"

const Header = ({title, sortProjects}) => {

	const [showPages, setShowPages] = useState(false);

	return (
	<div 
		className={headerStyles.header} 
		onMouseOver={() => setShowPages(true)} 
		onMouseLeave={() => setShowPages(false)} 
	>
		<div className={headerStyles.menu}>
			{showPages ? 
				<div className={headerStyles.links}>
					<a href="/projects">Projects</a>
					<a href="/about">About</a>
					<a href="https://github.com/Andreasmalleus">Github</a>
				</div>
				:
				<div>
					Andreasmalleus
				</div>
			}
		</div>
		<div className={headerStyles.main}>
			<div className={headerStyles.title}>
				{showPages ? "" : title}
			</div>
			{title !== "Projects"
			? 
			null
			:
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
			}
		</div>
	</div>
	)
}

export default Header;