import React from "react";

import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";
import CardCirclePick from "../../components/CardCirclePick/CardCirclePick";

import mariana from "../../assets/images/mariana.jpg";
import karina from "../../assets/images/karina.jpg";
import andrea from "../../assets/images/andrea.jpg";
import noelia from "../../assets/images/noelia.jpg";
import lorena from "../../assets/images/lorena.jpg";
import marta from "../../assets/images/marta.jpg";
import analia from "../../assets/images/analia.jpg";
import podologia from "../../assets/images/podologia.svg";
import masaje from "../../assets/images/masaje.svg";
import cosmetologia from "../../assets/images/cosmetologia.svg";
import dermatocosmiatria from "../../assets/images/dermatocosmiatria.svg";
import lashista from "../../assets/images/lashista.svg";

import "./Equipo.css";

function Equipo() {
  let paragraph = [
    "Nuestro equipo está compuesto por profesionales apasionados y comprometidos, dedicados a brindar el mejor servicio. Con experiencia en diversas áreas, trabajamos juntos para asegurar la satisfacción de nuestros clientes y ofrecer soluciones innovadoras en cada proyecto que emprendemos.",
  ];
  return (
    <section>
      <div className="EquipoDiv">
        <CenterAlignedParagraph
          subTtitle="NUESTRO EQUIPO"
          paragraphs={paragraph}
        />

        <div className="EquipoDivCard">
          <CardCirclePick
            frontPick={mariana}
            backPick={podologia}
            title="MARIANA LIMA"
            subTitle="Podologia, Estetisista integral"
          />
          <CardCirclePick
            frontPick={marta}
            backPick={masaje}
            title="MARTA ARRUA"
            subTitle="Esteticista, Masoterapeuta"
          />
          <CardCirclePick
            frontPick={andrea}
            backPick={masaje}
            title="ANDREA SENA"
            subTitle="Masoterapeuta"
          />
          <CardCirclePick
            frontPick={noelia}
            backPick={cosmetologia}
            title="NOELIA EICHELER"
            subTitle="Cosmetologa, Maquilladora"
          />
          <CardCirclePick
            frontPick={lorena}
            backPick={dermatocosmiatria}
            title="LORENA SILVERO"
            subTitle="Dermatocosmiatra, Podologa"
          />
          <CardCirclePick
            frontPick={karina}
            backPick={lashista}
            title="KARINA MACHADO"
            subTitle="Microdermopigmentacion, Lashista"
          />
          <CardCirclePick
            frontPick={analia}
            backPick={masaje}
            title="ANALIA DIAS"
            subTitle="Masoterapeuta"
          />
        </div>
      </div>
    </section>
  );
}

export default Equipo;
