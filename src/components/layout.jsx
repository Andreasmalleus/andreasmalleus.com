import React from "react";
import Header from "./header";
import * as layoutStyles from "../modules/layout.module.scss";
import PageTransition from "gatsby-plugin-page-transitions";

const Layout = ({children, pageNr, title, sortProjects}) => {
  return (
    <PageTransition
      duration={1000}
    >
      <div className={layoutStyles.page}>
        <Header title={title} sortProjects={sortProjects}/>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.spacing}>
            <div className={layoutStyles.pageNumber}>{pageNr}</div>
          </div>
          <div className={layoutStyles.content}>
            {children}
          </div>
        </div>
      </div> 
    </PageTransition>
  )
}

export default Layout;