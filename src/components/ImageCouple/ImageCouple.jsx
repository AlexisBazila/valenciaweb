import React from "react";
import "./ImageCouple.css";
import heroHome from "../../assets/images/heroHome.jpg";
import saludbelleza from "../../assets/images/saludbelleza.jpg";

function ImageCouple() {
  return (
    <div>
      <div class="image-container">
        <img src={heroHome} alt="" className="large-image" />
        <img src={saludbelleza} alt="" className="small-image" />
      </div>
    </div>
  );
}

export default ImageCouple;
