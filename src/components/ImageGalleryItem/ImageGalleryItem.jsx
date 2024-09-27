import React from "react";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ image, openModal }) => (
  <li className={style.galleryItem} onClick={openModal}>
    <img
      className={style.image}
      data-src={image.largeImageURL}
      src={image.webformatURL}
      alt={image.tags}
    />
  </li>
);

export default ImageGalleryItem;
