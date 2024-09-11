import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import HomeHeroSection from "./layouts/HomeHeroSection/HomeHeroSection";
import SaludBelleza from "./layouts/SaludBelleza/SaludBelleza";

function App() {
  return (
    <>
      <NavVal />
      <HomeHeroSection />
      <SaludBelleza/>
      <HomeHeroSection />
    </>
  );
}

export default App;
