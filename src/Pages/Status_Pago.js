import React from "react";
import './Status_Pago.css'

function Status_Pago(props) {
  return (
    <div className="Registrar_Forma_Pago">
        <h1> Pago {props.Status}</h1>
        <br></br>
        <h5>Detalle de tu compra:  </h5>
       
        <div id="Informacion_Pago">
            <div className="Box" id="Direccion">
                
                <h6> Tiempo de entrega: {props.Tiempo_Entrega}</h6>
                <h6> {props.Direccion}</h6>
                <h8> {props.Nombre}</h8>
                <h9> {props.Telefono}</h9>
            </div>

            <div className="Box" id="Compra">
                <h5> Paquete </h5>
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    
                </ul>
            </div>

            <div className="Box" id="Pago">
                <h5>Informacion de Pago</h5>
                <h7>{props.Forma_Pago}</h7>
            </div>
        </div>
        <br></br>
        <button type="button" class="btn btn-dark">Aceptar</button>
    </div>
  );
}

export default Status_Pago;
