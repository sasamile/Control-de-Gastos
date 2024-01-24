import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import IconoNuevo from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";
import { generarId } from "./helpers/index";
import ListadoGastos from "./components/ListadoGastos";
import Filtros from "./components/Filtros";

function App() {
  //define el valor inicial del input del nuevo presupuesto
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);

  //se utiliza para poder cambiar a la otra seccion del presupuesto donde sale los gastos. {se pasa al formulario con las condificiones donde presupuesto sea mayor 0

  //modal funciona para que no se muestre al principio en contenido, que se muestre solo cuando le dan un click a la imagen por eso se ejecuta la funcion y luegos cambia el modal a true para que se muestre el contenido

  const [modal, setModal] = useState(false);
  const [AnimarModal, setAnimarModal] = useState(false);

  // y Animal modal funciona para darle una clase cuando el estado cambie a true , es decir cuando pase los 3 segundo al dar click en boton del mas.

  const [gastos, setGastos] = useState([]);

  const [gastosEditar, setGastosEditar] = useState({});

  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  useEffect(() => {
    if (Object.keys(gastosEditar).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastosEditar]);

  useEffect(() => {
    if (filtro) {
      const gastoFiltrados = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(gastoFiltrados);
    }
  }, [filtro]);

  function hadleNuevoGasto() {
    setModal(true);
    setGastosEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  function GuardarGastos(gasto) {
    if (gasto.id) {
      //Actializado
      const gastosActualizado = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualizado);
    } else {
      //Nuevo Gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }

    setModal(false);
    setTimeout(() => {
      setAnimarModal(false);
    }, 500);
  }

  //Eliminar Gastos
  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);

    setGastos(gastosActualizados);
    setGastosEditar({});
  };
  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <main>
            <Filtros setFiltro={setFiltro} filtro={filtro} />
            <ListadoGastos
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              gastos={gastos}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevo}
              alt="Icono nuevo gasto"
              onClick={hadleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          AnimarModal={AnimarModal}
          setAnimarModal={setAnimarModal}
          GuardarGastos={GuardarGastos}
          gastosEditar={gastosEditar}
          setGastosEditar={setGastosEditar}
        />
      )}
    </div>
  );
}

export default App;
