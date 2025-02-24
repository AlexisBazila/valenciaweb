import React from "react";

import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";

import ImageCouple from "../../components/ImageCouple/ImageCouple";

import "./HeroNosotros.css";

function HeroNosotros() {
  return (
    <div className="HeroNosotros">
      <div className="TopImage">
        <ImageCouple />
      </div>
      <div>
        <TituloPrincipal
          titulo="Sobre Nosotros"
          subTitulo="Con un equipo de especialistas comprometidos y una visión centrada en ti, te ofrecemos una experiencia única para que te sientas y luzcas lo mejor posible. "
        />
      </div>
      <div className="BottomImage">
        <ImageCouple />
      </div>
    </div>
  );
}

export default HeroNosotros;
