import React, { useState } from "react";
import * as headerStyles from "../modules/header.module.scss"
import { navigate } from "gatsby";
import { useEffect } from "react";
import { debounce} from "../utils/helpers";

const Header = ({title, sortProjects}) => {

  const [showPages, setShowPages] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  
  
  const pages= ["coronavirus-statistics", "react-messenger", "insta-clone", "typeform-clone"];

  const navigateToProject = (isNext) => {
    if(isNext){
      navigate(`/projects/${pages[pages.indexOf(title) + 1]}`)
    }else{
      navigate(`/projects/${pages[pages.indexOf(title) -1]}`)
    }
  }

  const handleScroll = debounce(() => {
    //finds the current scroll position
    const currentScrollPos = window.pageYOffset;

    //set visibility by comparing the previous and current scroll position
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

	return (
    <>
      <div className={headerStyles.placeholder}></div>
      <div 
        className={headerStyles.header} 
        onMouseOver={() => setShowPages(true)} 
        onMouseLeave={() => setShowPages(false)} 
        style={{ top: visible ? '0' : '-60px' }}
      >
        <div className={headerStyles.menu}>
            <div className={headerStyles.links} style={ showPages ? {opacity : '1', visibility: 'visible'} : {opacity : '0', visibility: 'hidden'}}>
              <a href="/">main</a>
              <span> \ </span>
              <a href="/projects">projects</a>
              <span> \ </span>
              <a href="/about">about</a>
              <span> \ </span>
              <a href="https://github.com/Andreasmalleus">github</a>
            </div>
            <div className={headerStyles.title} style={ showPages ? {opacity : '0', visibility: 'hidden'} : {opacity : '1', visibility: 'visible'}}>
              andreasmalleus
            </div>
        </div>
        <div className={headerStyles.main}>
          <div className={headerStyles.subtitle} style={ showPages ? {opacity : '1'} : {opacity : '0'}}>
            {title}
          </div>
          {
          title === "projects"
          ? 
          <div className={headerStyles.categories}>
            <div 
              onClick={() => sortProjects("all")} 
              role="button" 
              tabIndex={0}
              onKeyDown={() => sortProjects("all")}
            >
              all
            </div>
            <span> / </span>
            <div 
              onClick={() => sortProjects("javascript")} 
              role="button" 
              tabIndex={0}
              onKeyDown={() => sortProjects("javascript")}
            >
              javascript
            </div>
            <span> / </span>
            <div 
              onClick={() => sortProjects("typescript")} 
              role="button" 
              tabIndex={0}
              onKeyDown={() => sortProjects("typescript")}
            >
              typescript
            </div>
            <span> / </span>
            <div 
              onClick={() => sortProjects("HTML")} 
              role="button" 
              tabIndex={0}
              onKeyDown={() => sortProjects("HTML")}
            >
              html
            </div>
          </div>
          : pages.includes(title) ?
            <div className={headerStyles.navigators}>
              {
                pages[0] !== title ?
                <div 
                  onClick={() => navigateToProject(false)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => navigateToProject(false)}
                >
                  previous
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
                  >next</div>
                : null
              }
            </div>
          //On project page
          : null
          }
        </div>
      </div>
    </>
	)
}

export default Header;