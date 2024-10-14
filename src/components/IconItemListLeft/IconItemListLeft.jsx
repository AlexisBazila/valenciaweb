import React from "react";
import "./IconItemListLeft.css";

function IconItemListLeft({ icon, title, subTitle }) {
  return (
    <div className="IconItemListLeftDiv">
      <img src={icon} alt="" className="IconItemListLeftIcon"/>
      <div>
        <h3 className="IconItemListLeftTitle">{title}</h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}

export default IconItemListLeft;
