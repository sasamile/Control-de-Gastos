import { useEffect, useState } from "react";
import Mensaje from "./Mensaje";
import cerrar from "../img/cerrar.svg";

function Modal({
  setModal,
  AnimarModal,
  setAnimarModal,
  GuardarGastos,
  gastosEditar,
  setGastosEditar,
}) {
  const [mensaje, setMensaje] = useState("");
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [id, setId] = useState("")

  // Este efecct llena el value a editar en el formulario
  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setNombre(gastosEditar.nombre);
      setCantidad(gastosEditar.cantidad);
      setCategoria(gastosEditar.categoria);
      setId(gastosEditar.id)
      setFecha(gastosEditar.fecha)
    }
  }, []);

  function ocultarmodal() {
    setAnimarModal(false);
    setGastosEditar({})

    setTimeout(() => {
      setModal(false);
    }, 500);
  }
  //la funcion handlesubmit lo que haya es validar en formulario para que no hayan campos vasios
  function handleSubmit(e) {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los Campos Son Obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    GuardarGastos({ nombre, cantidad, categoria ,id , fecha});
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={cerrar} alt="cerrar" onClick={ocultarmodal} />
      </div>
      <form
        onSubmit={handleSubmit}
        action=""
        className={`formulario ${AnimarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastosEditar.nombre ? "Editar Gasto":"Nuevo Gasto"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/**Fin */}

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade La cantidad del gasto ej:300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        {/**Fin */}
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gasto Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscrpciones">Suscrpciones</option>
          </select>
        </div>
        {/**Fin */}

        <input type="submit" value={gastosEditar.nombre ? "Guardar Cambios":"Añadir Gasto"}/>
      </form>
    </div>
  );
}

export default Modal;
