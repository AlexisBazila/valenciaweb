import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavVal from "./components/NavVal/NavVal";
import FooterVal from "./layouts/FooterVal/FooterVal";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Escuela from "./pages/Escuela";
import Contactanos from "./pages/Contactanos";

function App() {
  return (
    <Router>
      <NavVal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
      <FooterVal />
    </Router>
  );
}

export default App;
