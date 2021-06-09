import React from "react";
import { CgClose } from "react-icons/cg/index.esm";
import * as modalStyles from "../modules/modal.module.scss";
import { GatsbyImage } from "gatsby-plugin-image"

const Modal = ({image, alt , isOpen, trigger}) => {

  return (
    <div 
      className={modalStyles.modal} 
      style={isOpen ? {display: "block"} : {display : "none"}} 
      onClick={() => trigger(!isOpen)}
    >
      <div className={modalStyles.modalContent}>
        <GatsbyImage image={image} alt={alt} className={modalStyles.modalImage}/>
        <CgClose className={modalStyles.close} size={"20px"}/>
      </div>
    </div>
  )
}

export default Modal;