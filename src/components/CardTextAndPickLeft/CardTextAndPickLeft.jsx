import React from "react";
import "./CardTextAndPickLeft.css";

function CardTextAndPickLeft({pick, title, text}) {
  return (
    <div className="CardTextAndPickLeft">
      <div className="CardTextAndPickLeft-Pick"></div>
      <div className="CardTextAndPickLeft-Text">
        <h3>{title}</h3>
        <p>
     {text}
        </p>
      </div>
    </div>
  );
}

export default CardTextAndPickLeft;
