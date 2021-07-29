import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  console.log(images);
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem
          image={image.webformatURL}
          alt={image.tags}
          key={image.id}
          largeImage={image.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
