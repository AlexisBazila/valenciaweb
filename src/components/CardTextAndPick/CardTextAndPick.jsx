import React from "react";
import "./CardTextAndPick.css";

function CardTextAndPick({ tittle, description }) {
  return (
    <div className="CardTextAndPick">
      <div className="Pick"></div>
      <div className="Text">
        <h3>{tittle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardTextAndPick;
