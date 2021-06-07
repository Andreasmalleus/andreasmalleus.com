import React, { useState } from "react";
import * as headerStyles from "../modules/header.module.scss"

const Header = ({title}) => {

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
				<div>
					All
				</div>
				<span> / </span>
				<div>
					JavaScript
				</div>
				<span> / </span>
				<div>
					TypeScript
				</div>
				<span> / </span>
				<div>
					HTML
				</div>
			</div>
			}
		</div>
	</div>
	)
}

export default Header;