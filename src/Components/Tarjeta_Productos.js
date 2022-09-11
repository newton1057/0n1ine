import React from "react";
import './Tarjeta_Productos.css'

function Tarjeta_Productos(props) {
  return (
    <div className="Tarjeta_Productos">
        <div className="Tarjeta_Productos_Imagen">
            <img src={props.URLImagen}></img>
        </div>
        <div className="Tarjetas_Productos_Informacion"> 
            <h6>{props.New}</h6>
            <h4>{props.Titulo}</h4>
            <h5>{props.Precio}</h5>
        </div>
  
    </div>
  );
}

export default Tarjeta_Productos;
