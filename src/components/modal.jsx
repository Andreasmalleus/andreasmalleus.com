import React from "react";
import { CgClose } from "react-icons/cg/index.esm";
import { GatsbyImage } from "gatsby-plugin-image"

const Modal = ({image, alt , isOpen, setOpenModal}) => {

  return (
    <div 
      className="modal"
      onClick={() => setOpenModal(!isOpen)}
      role="button" 
      tabIndex={0}
      onKeyDown={() => setOpenModal(!isOpen)}
    >
      <div className="modal-content">
        <GatsbyImage image={image} alt={alt} className="image"/>
        <CgClose className="close" size={"20px"}/>
      </div>
    </div>
  )
}

export default Modal;