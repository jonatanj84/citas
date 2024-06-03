import React, { Fragment, useState } from "react";
// import uuid from "uuid/v4";
import { v1 as uuidv1 } from "uuid";

const Form = ({ crearCita }) => {
  // Crear state de citas
  const [cita, actualizarCitas] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, actualizarError] = useState(false);

  //esta funcion se ejecuta cuando el usuario escribe en el input
  const actualizarState = (e) => {
    actualizarCitas({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //cuando se preciona enviar cita
  const submitCita = (e) => {
    e.preventDefault();

    //validar

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    //eliminar mensaje de campos obligatorios

    actualizarError(false);

    //asignar ID

    cita.id = uuidv1();
    // console.log(uuidv1());

    console.log(cita);

    //crear cita
    crearCita(cita);

    //reiniciar el form
    actualizarCitas({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Citas</h2>

      {error ? (
        <p className="alert-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre del Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          AGREGAR CITAS
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
