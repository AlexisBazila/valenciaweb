import "./App.css";
import NavVal from "./components/NavVal/NavVal";
import FooterVal from "./layouts/FooterVal/FooterVal";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <>
      <NavVal />
      <Nosotros />
      <FooterVal />
    </>
  );
}

export default App;
