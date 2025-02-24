import React from "react";

import HomeHeroSection from "../layouts/HomeHeroSection/HomeHeroSection";
import ResumenNosotros from "../layouts/ResumenNosotros/ResumenNosotros";
import ResumenServicios from "../layouts/ResumenServicios/ResumenServicios";
import SaludBelleza from "../layouts/SaludBelleza/SaludBelleza";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <SaludBelleza />
      <ResumenServicios />
      <ResumenNosotros />
    </>
  );
};

export default Home;
