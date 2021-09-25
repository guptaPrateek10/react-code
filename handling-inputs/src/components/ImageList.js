import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props);
  const imagesf = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagesf}</div>;
};
export default ImageList;
