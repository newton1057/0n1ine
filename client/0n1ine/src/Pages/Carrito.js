import React, { useMemo, useState , useEffect} from "react";
import './Carrito.css';

import Tarjeta_Producto_Vertical from "../Components/Tarjeta_Producto_Vertical.js";

function Carrito() {
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(localStorage.getItem("Costo"))
    },[total])
    
  return (
    <div className="Carrito">
        <h2>Carrito de compras:</h2>

        <div id="Seccion_Productos_Compra">
            <Tarjeta_Producto_Vertical Titulo="iPhone 14" Tipo="Apple" Costo="21000"/>
            <Tarjeta_Producto_Vertical Titulo="iPhone 12" Tipo="Apple" Costo="10000"/>
        </div>

        <div id="TotalCompra">
            <h2>Total: {localStorage.getItem("Costo")}</h2>
        </div>
        <div id="Bot">
          <button class="btn btn-outline-header" type="submit"> Confirmar pedido </button>
        </div>
    </div>
  );
}

export default Carrito;
