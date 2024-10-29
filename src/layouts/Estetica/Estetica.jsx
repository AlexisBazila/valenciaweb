import React from "react";
import "./Estetica.css";
import CenterAlignedParagraph from "../../components/CenterAlignedParagraph/CenterAlignedParagraph";

function Estetica() {
  const paragraphs = [
    "En nuestra sección de Estética, encontrarás servicios dedicados a realzar tu belleza y cuidar tu piel. Desde tratamientos faciales revitalizantes hasta técnicas avanzadas de estética corporal, cada sesión está diseñada para brindarte resultados visibles y una experiencia de bienestar incomparable. ¡Déjanos acompañarte en el camino hacia una versión más radiante de ti!",
  ];
  return (
    <section className="EsteticaSection">
      <div className="TituloEstetica">
        <CenterAlignedParagraph subTtitle="ESTETICA" paragraphs={paragraphs} />
      </div>
      <div></div>
    </section>
  );
}

export default Estetica;
