import React from "react";
import "./CircularBorderImage.css";

function CircularBorderImage({ image }) {
  return (
    <div className="CircularBorderImage">
      <img src={image} alt="" />
    </div>
  );
}

export default CircularBorderImage;
