import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import NavVal from "./components/NavVal/NavVal";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Escuela from "./pages/Escuela";
import Contactanos from "./pages/Contactanos";
import FooterVal from "./layouts/FooterVal/FooterVal";

import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
