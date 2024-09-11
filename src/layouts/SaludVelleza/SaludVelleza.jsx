import React from "react";
import "./SaludVelleza.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

const SaludVelleza = () => {
  return (
    <div className="SaludVelleza">
      <LeftAlignedParagraph
        subTtitle="SALUD Y BELLEZA"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem nemo quae vitae reiciendis dignissimos voluptates nam provident, ex sapiente porro, eaque quam quasi pariatur praesentium adipisci velit hic recusandae?"
      />
      <div className="ImgTest2"></div>
    </div>
  );
};

export default SaludVelleza;
