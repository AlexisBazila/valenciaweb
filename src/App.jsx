import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import NavVal from "./components/NavVal/NavVal";
import FooterVal from "./layouts/FooterVal/FooterVal";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";

function App() {
  return (
    <Router>
      <NavVal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
      {/* <FooterVal /> */}
    </Router>
  );
}

export default App;
