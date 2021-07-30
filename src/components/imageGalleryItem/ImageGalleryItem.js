import React from "react";
import PropTypes from "prop-types";

import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, openModal, largeImage, alt }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      id={image.id}
      onClick={() => openModal(largeImage, alt)}
    >
      <img className={css.ImageGalleryItemImage} src={image} alt={alt} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
