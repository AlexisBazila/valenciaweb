import React from 'react'
import "./HeroEscuela.css"

import CircularBorderImage from "../../components/CircularBorderImage/CircularBorderImage";
import TituloPrincipal from "../../components/TituloPrincipal/TituloPrincipal";

import escuela from "../../assets/images/escuela.jpg";

function HeroEscuela() {
  return (
    <section className="SectionEscuela">
      <div className="DivEscuela">
      <img src={escuela} className="ImgEscuela" alt="" />
        <TituloPrincipal
          titulo="Escuela"
          subTitulo="Descubre tu potencial, perfecciona tu arte y haz de tu pasión una profesión. En Instituto Valencia, la excelencia y la dedicación se encuentran para formar a los mejores. Tu futuro comienza hoy."
        />
      </div>
    </section>
  )
}

export default HeroEscuela