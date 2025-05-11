import EquipoNetmind from ".././assets/images/Equipo-Netmind.png";
import Joseph from ".././assets/images/Joseph.png";
import Eduardo from ".././assets/images/Eduardo.png";
import Ilse from ".././assets/images/Ilse.png";
import Enrique from ".././assets/images/Enrique.png";
import Jesus from ".././assets/images/Jesus.png";

import "./Equipo.css";

function Equipo() {
  return (
    <body className="body" id="root">
      <div className="Top-EquipoPage">
        <div className="Top-Textos">
          <h1>Equipo</h1>
        </div>
        <img className="Body-ImagenEquipo" src={EquipoNetmind} alt="" />
      </div>

      <div className="Body-HomePage">
        <div className="Body-TextosIntegrante1">
          <h2>Joseph Murcio </h2>
          <p>Lider de proyecto</p>
        </div>
        <img className="Body-ImagenIntegrante1" src={Joseph} alt="" />

        <div className="Body-TextosIntegrante1">
          <h2>Eduardo Jurado</h2>
          <p>Programador</p>
        </div>
        <img className="Body-ImagenIntegrante1" src={Eduardo} alt="" />

        <div className="Body-TextosIntegrante1">
          <h2>Ilse Lazos</h2>
          <p>Diseñadora</p>
        </div>
        <img className="Body-ImagenIntegrante1" src={Ilse} alt="" />

        <div className="Body-TextosIntegrante1">
          <h2>Enrique Solís</h2>
          <p>Programador</p>
        </div>
        <img className="Body-ImagenIntegrante1" src={Enrique} alt="" />

        <div className="Body-TextosIntegrante1">
          <h2>Jesús Martinez</h2>
          <p>Programador</p>
        </div>
        <img className="Body-ImagenIntegrante1" src={Jesus} alt="" />
      </div>

      <div className="Bottom-HomePage">
        <p>" No me preocupa que las maquinas piensen como humanos</p>
        <p>Me preocupa que los humanos piensen como maquinas "</p>
        <p>- Tim Berners-Lee.</p>
      </div>
    </body>
  );
}

export default Equipo;
