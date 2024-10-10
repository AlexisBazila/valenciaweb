import React from "react";
import "./ImageCouple.css";
import heroHome from "../../assets/images/heroHome.jpg";
import saludbelleza from "../../assets/images/saludbelleza.jpg";
import nosotrosbig from "../../assets/images/nosotrosbig.jpg";
import nosotrossmall from "../../assets/images/nosotrossmall.jpg";

function ImageCouple() {
  return (
    <div>
      <div class="image-container">
        <img src={nosotrosbig} alt="" className="large-image" />
        <img src={nosotrossmall} alt="" className="small-image" />
      </div>
    </div>
  );
}

export default ImageCouple;
