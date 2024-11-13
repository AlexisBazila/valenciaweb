import React from "react";
import "./CardTextAndPick.css";

function CardTextAndPick({ tittle, description, pick }) {
  return (
    <div className="CardTextAndPick">
      <img src={pick} alt="" className="Pick" />
      <div className="Text">
        <h3>{tittle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardTextAndPick;
