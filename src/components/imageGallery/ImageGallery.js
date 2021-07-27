import React from "react";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <ImageGalleryItem image={image.webformatURL} key={image.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;
