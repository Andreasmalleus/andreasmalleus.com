import * as React from "react"
import "../styles.scss";
import { navigate } from "gatsby";
import { useEffect } from "react";

const Index = () => {

  useEffect(() => {
    setTimeout(() => {
      navigate("/projects")
    }, 5000)
  }, [])

  return (
    <div>
      <div>This is the landing page</div>
    </div>
  )
}

export default Index;
