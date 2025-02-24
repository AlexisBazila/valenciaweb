import React from "react";
import "./CardTextAndPickRight.css";

function CardTextAndPickRight({ pick, title, text }) {
  return (
    <div className="CardTextAndPickRight">
      <div className="CardTextAndPickRight-Text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <img src={pick} alt={title} className="CardTextAndPickRight-Pick" />
    </div>
  );
}

export default CardTextAndPickRight;
