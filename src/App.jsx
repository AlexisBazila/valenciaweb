import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import HomeHeroSection from "./layouts/HomeHeroSection/HomeHeroSection";
import ResumenNosotros from "./layouts/ResumenNosotros/ResumenNosotros";
import ResumenServicios from "./layouts/ResumenServicios/ResumenServicios";
import SaludBelleza from "./layouts/SaludBelleza/SaludBelleza";
import FooterVal from "./layouts/FooterVal/FooterVal";

function App() {
  return (
    <>
      <NavVal />
      <HomeHeroSection />
      <SaludBelleza />
      <ResumenServicios />
      <ResumenNosotros />
      <FooterVal />
    </>
  );
}

export default App;
