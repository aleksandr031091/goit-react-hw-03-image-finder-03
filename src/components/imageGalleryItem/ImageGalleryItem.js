import React from "react";

const ImageGalleryItem = ({ image }) => {
  return (
    <li>
      <img src={image} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
