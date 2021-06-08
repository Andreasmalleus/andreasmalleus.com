import * as React from "react"
import "../styles.scss";
import Hero from "../assets/hero.png"
import { useEffect } from "react";
import { navigate } from "gatsby";

const Index = () => {

  useEffect(() => {
    setTimeout(() => {
      navigate("/projects")
    }, 4000)
  }, [])

  return (
    <div className="container">
      <div className="content">
        <div>andreas</div>
        <span> / </span>
        <div>malleus</div>
        <div className="spacing"></div>
        <div>personal portfolio</div>
      </div>
      <img src={Hero} alt=""/>
    </div>
  ) 
}

export default Index;
