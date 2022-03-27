import React, { useState } from "react";
import { navigate } from "gatsby";
import { useEffect } from "react";
import { debounce } from "../utils/helpers";
import "../styles/header.scss";
import CategoryButton from "./category-button";

const Header = ({ title, sortProjects }) => {
  const [showPages, setShowPages] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const pages = [
    "typeform-clone",
    "insta-clone",
    "coronavirus-statistics",
    "react-messenger",
  ];

  const navigateToProject = (isNext) => {
    if (isNext) {
      navigate(`/projects/${pages[pages.indexOf(title) + 1]}`);
    } else {
      navigate(`/projects/${pages[pages.indexOf(title) - 1]}`);
    }
  };

  const handleScroll = debounce(() => {
    //finds the current scroll position
    const currentScrollPos = window.pageYOffset;

    //set visibility by comparing the previous and current scroll position
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header>
      <div className="placeholder"></div>
      <div
        className="header"
        onMouseOver={() => setShowPages(true)}
        onMouseLeave={() => setShowPages(false)}
        style={{ top: visible ? "0" : "-60px" }}
      >
        <div className="menu">
          <div
            className="links"
            style={
              showPages
                ? { opacity: "1", visibility: "visible" }
                : { opacity: "0", visibility: "hidden" }
            }
          >
            <a href="/">main</a>
            <span> \ </span>
            <a href="/projects">projects</a>
            <span> \ </span>
            <a href="/about">about</a>
            <span> \ </span>
            <a href="https://github.com/Andreasmalleus">github</a>
          </div>
          <div
            className={"title"}
            style={
              showPages
                ? { opacity: "0", visibility: "hidden" }
                : { opacity: "1", visibility: "visible" }
            }
          >
            andreasmalleus
          </div>
        </div>
        <div className={"main"}>
          <div
            className="subtitle"
            style={!showPages ? { opacity: "1" } : { opacity: "0" }}
          >
            {title}
          </div>
          {title === "projects" ? (
            <div className="categories">
              <CategoryButton category={"all"} sortProjects={sortProjects} />
              <span> / </span>
              <CategoryButton
                category="javascript"
                sortProjects={sortProjects}
              />
              <span> / </span>
              <CategoryButton
                category="typescript"
                sortProjects={sortProjects}
              />
              <span> / </span>
              <CategoryButton category="html" sortProjects={sortProjects} />
            </div>
          ) : pages.includes(title) ? (
            <div className="navigators">
              {pages[0] !== title ? (
                <div
                  onClick={() => navigateToProject(false)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => navigateToProject(false)}
                >
                  previous
                </div>
              ) : null}
              {pages[0] !== title && pages[pages.length - 1] !== title ? (
                <span> / </span>
              ) : null}
              {pages[pages.length - 1] !== title ? (
                <div
                  onClick={() => navigateToProject(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => navigateToProject(true)}
                >
                  next
                </div>
              ) : null}
            </div>
          ) : //On project page
          null}
        </div>
      </div>
    </header>
  );
};

export default Header;
