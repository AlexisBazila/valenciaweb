import React from "react";
import "./HeroNosotros.css";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";
import ImageCouple from "../../components/ImageCouple/ImageCouple";
function HeroNosotros() {
  return (
    <div className="HeroNosotros">
      <div>
        <TituloPrincipal
          titulo="Sobre Nosotros"
          subTitulo="Con un equipo de especialistas comprometidos y una visión centrada en ti, te ofrecemos una experiencia única para que te sientas y luzcas lo mejor posible. "
        />
      </div>
      <div>
        <ImageCouple />
      </div>
    </div>
  );
}

export default HeroNosotros;
