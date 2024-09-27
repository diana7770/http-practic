import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={style.gallery}>
    {images.map((image) => (
      <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
    ))}
  </ul>
);

export default ImageGallery;
