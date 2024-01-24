import { useEffect, useState } from "react";

function Filtros({ filtro, setFiltro }) {
  return (
    <div className="filtros sombra contenedor">
      <form action="">
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
            <option value="">-- Todos los Filtros --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gasto Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscrpciones">Suscrpciones</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filtros;
