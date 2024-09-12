import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import HomeHeroSection from "./layouts/HomeHeroSection/HomeHeroSection";
import ResumenServicios from "./layouts/ResumenServicios/ResumenServicios";
import SaludBelleza from "./layouts/SaludBelleza/SaludBelleza";

function App() {
  return (
    <>
      <NavVal />
      <HomeHeroSection />
      <SaludBelleza/>
      <ResumenServicios/>
    </>
  );
}

export default App;
