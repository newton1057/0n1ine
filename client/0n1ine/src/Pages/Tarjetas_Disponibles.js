import React from "react";
import './Tarjetas_Disponibles.css'

function Tarjetas_Disponibles(props) {
  return (
    <div className="Tarjetas_Disponibles">
        <h1>Forma de Pago</h1>

        <br>
        </br>

        <h5>Selecciona tu forma de pago:</h5>
        <div id = "Lista_Metodos">

        
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
        <label class="form-check-label" for="flexRadioDefault1">
            Bancomer Debito ****6251
        </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
            <label class="form-check-label" for="flexRadioDefault2">
            Bancomer Debito ****8283
            </label>
        </div>
        </div>
        <br></br>
        <button type="button" class="btn btn-dark">Registrar nuevo metodo</button>
        <br></br>
        <br></br>
        <button type="button" class="btn btn-dark">Aceptar</button>
    </div>
  );
}

export default Tarjetas_Disponibles;


// CP, Calle, estado, colonia, pais municipio referencias
