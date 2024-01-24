import React from "react";
import Gasto from "./Gasto";

function ListadoGastos({
  gastos,
  setGastosEditar,
  eliminarGasto,
  gastosFiltrados,
  filtro,
}) {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>
            {gastosFiltrados.length
              ? "Lista de Gasto Registrados"
              : "No hay Lista de Gastos"}
          </h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
        <h2>
            {gastos.length
              ? "Lista de Gasto Registrados"
              : "No hay Lista de Gastos"}
          </h2>
          {gastos.map((gasto) => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
              setGastosEditar={setGastosEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListadoGastos;
