import React from "react";
import "./ResumenServicios.css";
import WitheTittleAndParagraph from "../../components/WitheTittleAndParagraph/WitheTittleAndParagraph";
import IconServices from "../../components/IconsServices/IconServices";
// ICONOS
import { GiFootprint } from "react-icons/gi";
import { PiHairDryerFill } from "react-icons/pi";
import { TbMassage } from "react-icons/tb";
import { FaSpa } from "react-icons/fa";
import { FaSprayCanSparkles } from "react-icons/fa6";

import Makeup from "../../assets/images/Makeup.svg";
import Depilacion from "../../assets/images/depilacion.svg";

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
        <IconServices name="PODOLOGIA" icon={<GiFootprint />} />
        <IconServices name="PELUQUERIA" icon={<PiHairDryerFill />} />
        <IconServices name="MAQUILLAJE" icon={<img src={Makeup} alt="" />} />
        <IconServices name="MASAJES" icon={<TbMassage />} />
        <IconServices
          name="DEPILACIÓN"
          icon={<img src={Depilacion} alt="" />}
        />
        <IconServices name="COSMETOLOGIA" icon={<FaSprayCanSparkles />} />
        <IconServices name="APARATOLOGIA" />
        <IconServices name="SPA" icon={<FaSpa />} />
        <IconServices name="DERMAPEN" />
      </div>
    </section>
  );
};

export default ResumenServicios;
