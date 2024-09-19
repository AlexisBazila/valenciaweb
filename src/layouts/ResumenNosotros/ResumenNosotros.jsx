import React from "react";
import "./ResumenNosotros.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import instituto from '../../assets/images/instituto.jpg'

const ResumenNosotros = () => {
  const paragraphs = [
    "En el Instituto Valencia, nos enorgullece ser un referente en el mundo de la belleza y el bienestar, ofreciendo una experiencia completa y personalizada a cada uno de nuestros clientes. Nuestro compromiso se basa en un enfoque integral que combina lo mejor de la estética, la salud y la educación, creando un espacio donde el cuidado personal es una prioridad y el bienestar interior se refleja en el exterior.",
  ];
  return (
    <div className="SubContainerResumenNosotros">
      <div className="ContainerResumenNosotros">
        <div className="ResumenNosotros">
          <img src={instituto} className="ImgInstituto" alt="" />
          <LeftAlignedParagraph
            subTtitle="SOBRE NOSOTROS"
            paragraphs={paragraphs}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumenNosotros;
