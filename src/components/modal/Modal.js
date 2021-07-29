import React from "react";

import css from "./Modal.module.css";

const Modal = ({ largeImage, alt, closeModal }) => {
  return (
    <div className={css.Overlay} onClick={closeModal}>
      <div className={css.Modal}>
        <img src={largeImage} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
