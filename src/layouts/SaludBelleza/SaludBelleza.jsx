import React from "react";
import "./SaludBelleza.css";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import saludbelleza from "../../assets/images/saludbelleza.jpg";

const SaludBelleza = () => {
  const paragraphs = [
    "En el Instituto Valencia, entendemos que la verdadera belleza surge de un equilibrio entre el bienestar físico y el cuidado estético. Por eso, hemos creado un espacio donde la salud y la belleza se complementan, ofreciendo a nuestros clientes una experiencia completa que va más allá de lo superficial. Nos dedicamos tanto a mejorar tu apariencia como a cuidar tu bienestar integral.",
    "Nuestro equipo de especialistas trabaja en tratamientos personalizados que abarcan desde la podología y los tratamientos faciales hasta la estética corporal y masajes terapéuticos, buscando siempre el equilibrio entre el bienestar interior y exterior. Creemos que la belleza no es solo lo que se ve, sino lo que se siente. Es por eso que, en cada uno de nuestros servicios, nos enfocamos en mejorar tu calidad de vida y hacer que te sientas bien desde adentro hacia afuera.",
    "Desde tratamientos de reducción corporal y reafirmantes hasta servicios de cosmetología avanzada, nuestros programas combinan lo último en tecnología y bienestar para brindarte resultados efectivos y duraderos. Ya sea que busques relajarte con un masaje, revitalizar tu piel o realzar tu imagen con nuestros servicios de maquillaje y peluquería, en el Instituto Valencia encontrarás el equilibrio perfecto entre salud y belleza.",
  ];
  return (
    <div className="SubContainerSaludBelleza">
      <div className="ContainerSaludBelleza">
        <div className="SaludBelleza">
          <LeftAlignedParagraph
            subTtitle="SALUD Y BELLEZA"
            paragraphs={paragraphs}
          />
          <img src={saludbelleza} className="ImgSaludBelleza" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SaludBelleza;
