import React from "react";
import "./Destacado.css";
import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";
import nonimage from "../../assets/images/nonimage.jpg";
import IconItemListLeft from "../../components/IconItemListLeft/IconItemListLeft";
function Destacado() {
  const paragraphs = [
    "En el Instituto Valencia, nos enorgullece ofrecer un servicio integral que combina experiencia, innovación y dedicación. Nos destacamos por brindar una atención de calidad, respaldada por profesionales especializados y un enfoque centrado en el bienestar de cada persona",
  ];
  return (
    <section>
      <div className="BackGroundDiv">
        <div className="ContentDiv">
          <CenterAlignedParagraph
            subTtitle="POR QUE DESTACAMOS"
            paragraphs={paragraphs}
          />
          <div className="ItemsImage">
            <div>
              <IconItemListLeft />
              <IconItemListLeft />
              <IconItemListLeft />
              <IconItemListLeft />
            </div>
            <img src={nonimage} alt="" className="ImgDestacado" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destacado;
