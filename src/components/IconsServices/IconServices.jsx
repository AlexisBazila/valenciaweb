import React from "react";
import "./IconServices.css";

const IconServices = ({ name }) => {
  return (
    <div className="IconServices">
      <div className="PseudoIcon"></div>
      <p>{name}</p>
    </div>
  );
};

export default IconServices;
