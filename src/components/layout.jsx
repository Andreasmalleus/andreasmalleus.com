import React from "react";
import Header from "./header";
import PageTransition from "gatsby-plugin-page-transitions";
import "../styles/layout.scss";

const Layout = ({children, pageNr, title, sortProjects}) => {
  return (
    <PageTransition
      duration={1000}
    >
      <main>
        <Header title={title} sortProjects={sortProjects}/>
        <div className="layout-container">
          <div className="layout-spacing">
            <div className="layout-pageNumber">{pageNr}</div>
          </div>
          <div className="content">
            {children}
          </div>
        </div>
      </main> 
    </PageTransition>
  )
}

export default Layout;