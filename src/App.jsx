import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import HomeHeroSection from "./layouts/HomeHeroSection/HomeHeroSection";
import SaludVelleza from "./layouts/SaludVelleza/SaludVelleza";

function App() {
  return (
    <>
      <NavVal />
      <HomeHeroSection />
      <SaludVelleza/>
      <HomeHeroSection />
    </>
  );
}

export default App;
