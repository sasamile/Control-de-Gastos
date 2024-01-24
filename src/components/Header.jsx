import React, { useEffect } from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresuppuesto from "./ControlPresuppuesto";

{
  /**solo se pasa el modificador para cambiar de false a true si la condificion se cumple */
}
function Header({ setPresupuesto, presupuesto, isValid, setIsValid, gastos,setGastos }) {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValid ? (
        <ControlPresuppuesto presupuesto={presupuesto} gastos={gastos} setGastos={setGastos} setPresupuesto={setPresupuesto} setIsValid={setIsValid}/>
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
}

export default Header;
