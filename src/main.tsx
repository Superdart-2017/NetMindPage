import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home.tsx";
import Equipo from "./components/Equipo.tsx";
import BarraNavegacion from "./components/Barra-Navegacion.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/* Barra de navegación agregado como un componente */}
      <BarraNavegacion />

      {/* Donde se definen las rutas owo */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipo" element={<Equipo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
