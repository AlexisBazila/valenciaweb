import React from "react";
import "./ResumenServicios.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import IconServices from "../../components/IconsServices/IconServices";
// ICONOS
import aparatologia from "../../assets/images/aparatologia.svg";
import cosmetologia from "../../assets/images/cosmetologia.svg";
import dermapen from "../../assets/images/dermapen.svg";
import dermapen2 from "../../assets/images/dermapen2.svg";
import depilacion from "../../assets/images/depilacion.svg";
import maquillaje from "../../assets/images/maquillaje.svg";
import masaje from "../../assets/images/masaje.svg";
import peluqueria from "../../assets/images/peluqueria.svg";
import podologia from "../../assets/images/podologia.svg";
import reductor from "../../assets/images/reductor.svg";
import spa from "../../assets/images/spa.svg";

const ResumenServicios = () => {
  return (
    <section className="SectionResumenServicios">
      <div className="TittleSection">
        <WitheTittleAndParagraph
          tittle="NUESTROS SERVICIOS"
          text="En el Instituto Valencia, ofrecemos una amplia gama de servicios de salud, belleza y bienestar, diseñados para cuidar de ti de forma integral. Descubre nuestros tratamientos personalizados y vive una experiencia única."
        />
      </div>
      <div className="ContenedorServicios">
        <IconServices name="PODOLOGIA" icon={podologia}/>
        <IconServices name="PELUQUERIA" icon={peluqueria}/>
        <IconServices name="MAQUILLAJE" icon={maquillaje}/>
        <IconServices name="MASAJES" icon={masaje}/>
        <IconServices name="DEPILACIÓN" icon={depilacion}/>
        <IconServices name="COSMETOLOGIA" icon={cosmetologia}/>
        <IconServices name="APARATOLOGIA" icon={aparatologia} />
        <IconServices name="SPA" icon={spa}/>
        <IconServices name="DERMAPEN" icon={dermapen}/>
        <IconServices name="TRATAMIENTOS REDUCTORES" icon={reductor}/>
      </div>
    </section>
  );
};

export default ResumenServicios;
