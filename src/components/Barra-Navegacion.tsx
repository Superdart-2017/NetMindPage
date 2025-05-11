//import React from "react";
import { Link } from "react-router-dom";
import "./Barra.css";

function BarraNavegacion() {
  return (
    <nav className="mi-barra-de-navegacion">
      {" "}
      <Link to="/" className="link-navegacion">
        Inicio
      </Link>
      <span className="separador"> | </span>
      <Link to="/equipo" className="link-navegacion">
        Equipo
      </Link>
    </nav>
  );
}

export default BarraNavegacion;
