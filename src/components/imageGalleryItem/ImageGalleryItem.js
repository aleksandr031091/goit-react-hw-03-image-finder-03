import React from "react";
import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src={image} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
