import * as React from "react";
import "../index.scss";
import { useEffect } from "react";
import { navigate } from "gatsby";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import SEO from "../components/seo";

const Index = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      navigate("/projects");
    }, 4000);
  }, []);

  return (
    <>
      <SEO />
      <CSSTransition
        in={transition}
        timeout={2000}
        classNames="hero-image-transition"
        appear
        unmountOnExit
      >
        <div className="hero-container">
          <div className="hero-content">
            <div>andreas</div>
            <span> / </span>
            <div>malleus</div>
            <div className="hero-spacing"></div>
            <div>personal portfolio</div>
          </div>
          <StaticImage
            src={"../assets/hero.png"}
            alt="A black wall"
            className="hero-image"
            layout="fullWidth"
            quality={100}
          />
        </div>
      </CSSTransition>
    </>
  );
};

export default Index;
