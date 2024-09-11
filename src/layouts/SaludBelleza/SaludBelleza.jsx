import React from "react";
import "./SaludBelleza.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

const SaludBelleza = () => {
  return (
    <div className="SubContainerSaludBelleza">
      <div className="ContainerSaludBelleza">
        <div className="SaludBelleza">
          <LeftAlignedParagraph
            subTtitle="SALUD Y BELLEZA"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem nemo quae vitae reiciendis dignissimos voluptates nam provident, ex sapiente porro, eaque quam quasi pariatur praesentium adipisci velit hic recusandae?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem nemo quae vitae reiciendis dignissimos voluptates nam provident, ex sapiente porro, eaque quam quasi pariatur praesentium adipisci velit hic recusandae?"
          />
          <div className="ImgTest2"></div>
        </div>
      </div>
    </div>
  );
};

export default SaludBelleza;
