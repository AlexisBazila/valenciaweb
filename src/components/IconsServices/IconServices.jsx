import React from "react";
import "./IconServices.css";

const IconServices = ({ name, icon }) => {
  return (
    <div className="IconServices">
      <div className="PseudoIcon">
        <img src={icon} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default IconServices;
