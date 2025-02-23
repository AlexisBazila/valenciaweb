import React from "react";
import "./CardTextAndPickLeft.css";

function CardTextAndPickLeft({ pick, title, text }) {
  return (
    <div className="CardTextAndPickLeft">
      <div>
        <img src={pick} alt={title} className="CardTextAndPickLeft-Pick" />
      </div>
      <div className="CardTextAndPickLeft-Text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardTextAndPickLeft;
