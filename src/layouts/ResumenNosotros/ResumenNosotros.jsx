import React from "react";
import "./ResumenNosotros.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

const ResumenNosotros = () => {
  return (
    <div className="SubContainerResumenNosotros">
      <div className="ContainerResumenNosotros">
        <div className="ResumenNosotros">
        <div className="ImgTest3"></div>
          <LeftAlignedParagraph
            subTtitle="SOBRE NOSOTROS"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem nemo quae vitae reiciendis dignissimos voluptates nam provident, ex sapiente porro, eaque quam quasi pariatur praesentium adipisci velit hic recusandae?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto rem nemo quae vitae reiciendis dignissimos voluptates nam provident, ex sapiente porro, eaque quam quasi pariatur praesentium adipisci velit hic recusandae?"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumenNosotros;
