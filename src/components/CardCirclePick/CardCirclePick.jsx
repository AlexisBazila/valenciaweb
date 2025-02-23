import React from "react";
import "./CardCirclePick.css";

function CardCirclePick({ frontPick, backPick, title, subTitle }) {
  return (
    <div className="CardCirclePick">
      <div className="CardCirclePickImg">
        <img src={frontPick} alt={`${title} Front`} className="front" />
        <img src={backPick} alt={`${title} Back`} className="back" />
      </div>
      <div className="CardCirclePickInfo">
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default CardCirclePick;
