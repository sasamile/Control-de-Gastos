import { useEffect, useState } from "react";
import { CircularProgressbar , buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ControlPresuppuesto({ presupuesto, gastos ,setPresupuesto,setGastos,setIsValid}) {
  const [porcentaje, setPorcentaje] = useState(0);

  {
    /** la funcion formatearPrecio sirve para esto , precio:1000 funcion :1.000.00 */
  }
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );

    const totalDisponible = presupuesto - totalGastado;

    //calcular lo gastado
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  function formatearPrecio(cantindad) {
    return cantindad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  function handleRestApp (){
    const resultado = confirm("Desear reiniciar presupuesti y gasto")
    if(resultado){
      setGastado([])
      setPresupuesto(0)
      setIsValid(false)
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
        styles={buildStyles({
          pathColor: porcentaje > 100 ? "#DC2626":"#3B82F6",
          trailColor:'#F5F5F5',
          textColor: porcentaje > 100 ? "#DC2626":"#3B82F6",

        })} 
        value={porcentaje} 
        text={`${porcentaje}% Gastado`}/>
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleRestApp}>Resetear App</button>
        <p>
          <span>Presupuesto:</span>
          {formatearPrecio(presupuesto)}
        </p>
        <p className={`${disponible <0 ? "negativo" : " "}`}>
          <span>Disponible:</span>
          {formatearPrecio(disponible)}
        </p>
        <p>
          <span>Gastado:</span>
          {formatearPrecio(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresuppuesto;
