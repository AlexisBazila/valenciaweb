import React from "react";

import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";
import IconItemListLeft from "../../components/IconItemListLeft/IconItemListLeft";

import relajante from "../../assets/images/relajante.svg";
import atpersonalizada from "../../assets/images/atpersonalizada.svg";
import innovation from "../../assets/images/innovation.svg";
import profesional from "../../assets/images/profesional.svg";
import team from "../../assets/images/team.jpg";

import "./Destacado.css";

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
              <IconItemListLeft
                icon={atpersonalizada}
                title="Atención personalizada"
                subTitle="Nos enfocamos en brindar una atención cercana y personalizada a cada cliente, asegurando que cada visita sea una experiencia única y satisfactoria"
              />
              <IconItemListLeft
                icon={profesional}
                title="Profesionales altamente capacitados"
                subTitle="Contamos con un equipo de especialistas comprometidos con su desarrollo continuo para ofrecerte los mejores tratamientos y resultados"
              />
              <IconItemListLeft
                icon={innovation}
                title="Innovación en tratamientos"
                subTitle="Siempre estamos a la vanguardia de las últimas tendencias y tecnologías en belleza y bienestar, para garantizar que recibas lo más avanzado en cada sesión"
              />
              <IconItemListLeft
                icon={relajante}
                title="Ambiente relajante"
                subTitle="Hemos creado un espacio acogedor y relajante donde puedes desconectar del día a día y disfrutar de un momento dedicado exclusivamente a ti"
              />
            </div>
            <img src={team} alt="" className="ImgDestacado" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destacado;
