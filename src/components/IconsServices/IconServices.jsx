import React from "react";
import "./IconServices.css";


const IconServices = ({ name, icon }) => {
  return (
    <div className="IconServices">
      <div className="PseudoIcon">
        {icon}
      </div>
      <p>{name}</p>
    </div>
  );
};

export default IconServices;
