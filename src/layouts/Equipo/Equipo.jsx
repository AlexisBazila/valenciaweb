import React from "react";
import "./Equipo.css";
import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";
import CardCirclePick from "../../components/CardCirclePick/CardCirclePick";
import mariana from "../../assets/images/mariana.jpg";
import podologia from "../../assets/images/podologia.svg";
import masaje from "../../assets/images/masaje.svg";
import cosmetologia from "../../assets/images/cosmetologia.svg";
import dermatocosmiatria from "../../assets/images/dermatocosmiatria.svg";
import lashista from "../../assets/images/lashista.svg";

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
            frontPick={mariana}
            backPick={masaje}
            title="MARTA ARRUA"
            subTitle="Esteticista, Masoterapeuta"
          />
          <CardCirclePick
            frontPick={mariana}
            backPick={masaje}
            title="ANDREA SENA"
            subTitle="Masoterapeuta"
          />
          <CardCirclePick
            frontPick={mariana}
            backPick={cosmetologia}
            title="NOELIA EICHELER"
            subTitle="Cosmetologa, Maquilladora"
          />
          <CardCirclePick
            frontPick={mariana}
            backPick={dermatocosmiatria}
            title="LORENA SILVERO"
            subTitle="Dermatocosmiatra, Podologa"
          />
          <CardCirclePick
            frontPick={mariana}
            backPick={lashista}
            title="KARINA MACHADO"
            subTitle="Microdermopigmentacion, Lashista"
          />
        </div>
      </div>
    </section>
  );
}

export default Equipo;
