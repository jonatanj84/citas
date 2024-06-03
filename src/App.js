import React, { Fragment, useState, useEffect } from "react";
import Form from "./componets/Form";
import Citas from "./componets/Citas";

function App() {
  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  //useEffectpara realizar ciertas operaciones cuando cambia el state
  useEffect(() => {
    console.log("listo");
  });

  //Funcion que toma las ciatas actuales y agregar las nuevas
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  //Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  //Mensaje condicional
  const titulo = citas.length === 0 ? " No hay citas" : "Administra tu cita";

  return (
    <Fragment>
      <h1>Administardor de Pacientes</h1>;
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Citas key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
