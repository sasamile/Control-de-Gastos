import React, { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({ setPresupuesto, presupuesto, setIsValid }) {
  const [mensaje, setMensaje] = useState("");

  function hadlePresupuesto(e) {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto Válido ");
      return;
    }

    setMensaje("");
    setIsValid(true);
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={hadlePresupuesto} action="" className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Añade tu Presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        {/** El value es el valor que tendra por defecto y la funcion onchange permite modificar el valor en la aplicacion si no usamos el onchange no podemos escribe en el input */}
        <input type="submit" value="Añadir" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
