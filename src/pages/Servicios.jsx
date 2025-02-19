import React from "react";
import HeroServicios from "../layouts/HeroServicios/HeroServicios";
import Salud from "../layouts/Salud/Salud";
import Estetica from "../layouts/Estetica/Estetica";
import Especialistas from "../layouts/Especialistas/Especialistas";

function Servicios() {
  return (
    <>
      <HeroServicios />
      <Salud />
      {/* <Estetica /> */}
      <Especialistas />
    </>
  );
}

export default Servicios;
