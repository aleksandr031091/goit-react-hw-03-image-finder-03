import React from "react";
import PropTypes from "prop-types";

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

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
