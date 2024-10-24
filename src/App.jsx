import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import FooterVal from "./layouts/FooterVal/FooterVal";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <>
      <NavVal />
      <Servicios />
      {/* <Home/>
      <Nosotros /> */}
      <FooterVal />
    </>
  );
}

export default App;
