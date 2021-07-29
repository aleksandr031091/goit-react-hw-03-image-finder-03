import React from "react";
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
