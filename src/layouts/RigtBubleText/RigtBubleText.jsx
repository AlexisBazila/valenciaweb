import React from "react";

import evento1 from "../../assets/images/evento1.jpg";

import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

import "./RigtBubleText.css";

function RigtBubleText() {
  const paragraphs = [
    "En el Instituto Valencia, entendemos que la verdadera belleza surge de un equilibrio entre el bienestar físico y el cuidado estético. Por eso, hemos creado un espacio donde la salud y la belleza se complementan, ofreciendo a nuestros clientes una experiencia completa que va más allá de lo superficial. Nos dedicamos tanto a mejorar tu apariencia como a cuidar tu bienestar integral.",
    "Nuestro equipo de especialistas trabaja en tratamientos personalizados que abarcan desde la podología y los tratamientos faciales hasta la estética corporal y masajes terapéuticos, buscando siempre el equilibrio entre el bienestar interior y exterior. Creemos que la belleza no es solo lo que se ve, sino lo que se siente. Es por eso que, en cada uno de nuestros servicios, nos enfocamos en mejorar tu calidad de vida y hacer que te sientas bien desde adentro hacia afuera.",
  ];
  return (
    <section className="SectionBuble">
      <div className="BorderBuble">
        <div className="Buble">
          <img src={evento1} alt="" className="ImageBuble" />
          <LeftAlignedParagraph
            subTtitle="Nuestro Centro, Tu Centro de Belleza"
            paragraphs={paragraphs}
          />
        </div>
      </div>
    </section>
  );
}
import "./RigtBubleText.css";

export default RigtBubleText;
