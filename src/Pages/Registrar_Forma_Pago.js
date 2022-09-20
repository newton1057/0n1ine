import React from "react";
import './Registrar_Forma_Pago.css'

function Registrar_Forma_Pago(props) {
  return (
    <div className="Registrar_Forma_Pago">
        <h1>Registrar forma de pago</h1>
        <br></br>
        <h5>Introduce los datos:</h5>
        <br></br>
        <form id="FormRegistrar_Forma_Pago">            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Numero de Tarjeta: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Numero de Tarjeta"></input>
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> CCV: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CCV"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Fecha vencimiento: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="MM/AA"></input>
                
            </div>
            

            
            <br></br>
            <button type="button" class="btn btn-dark">Registrar forma de pago</button>
        </form>
    </div>
  );
}

export default Registrar_Forma_Pago;
