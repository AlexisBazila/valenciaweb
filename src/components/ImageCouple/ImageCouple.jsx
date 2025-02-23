import React from "react";
import "./ImageCouple.css";

import nosotrosbig from "../../assets/images/nosotrosbig.jpg";
import nosotrossmall from "../../assets/images/nosotrossmall.jpg";

function ImageCouple() {
  return (
    <div>
      <div class="image-container">
        <img
          src={nosotrosbig}
          alt="Dos personas dando una conferencia"
          className="large-image"
        />
        <img
          src={nosotrossmall}
          alt="Persona sonriendo"
          className="small-image"
        />
      </div>
    </div>
  );
}

export default ImageCouple;
