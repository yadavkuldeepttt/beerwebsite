import React from "react";
import "./Styles/Modal.css";
import ModalBody from "./ModalBody";

const Modal = ({ show, onHide, data }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <span
        className="close"
        onClick={() => {
          console.log("Close button clicked");
          onHide();
        }}>
        &times;
      </span>
      <div className="modal-content">
        <ModalBody data={data} />
      </div>
    </div>
  );
};

export default Modal;
