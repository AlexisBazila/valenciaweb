import React from "react";
import "./ResumenServicios.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import IconServices from "../../components/IconsServices/IconServices";

const ResumenServicios = () => {
  return (
    <section className="SectionResumenServicios">
      <div className="TittleSection">
        <WitheTittleAndParagraph
          tittle="NUESTROS SERVICIOS"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus blanditiis reprehenderit earum in impedit atque aperiam culpa nemo fugit similique odit, fugiat ipsam quod voluptas! Natus eaque esse vitae molestias."
        />
      </div>
      <div className="ContenedorServicios">
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
        <IconServices name='TITULO' />
      </div>
    </section>
  );
};

export default ResumenServicios;
