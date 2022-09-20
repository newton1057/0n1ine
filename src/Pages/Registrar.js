import React from "react";
import './Registrar.css';


function Registrar() {
  return (
    <div className="Registrar">
        <h1>Registrar</h1>
        <br></br>
        <form id="Registrar">
            <div id="Campos">

            
            <div id="Campos1">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nombre(s): </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nombre(s)"></input>
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Apellido Paterno: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido Paterno"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Apellido Materno: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Apellido Materno"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                
            </div>

            </div>

            <div id="Campos1">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefono: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefono"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Pais: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Pais"></input>
                
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Password: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
            </div>  
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Repetir Password: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Repetir Password"></input>
                
            </div>

            </div>
            </div>
            

            

            
            <br></br>
            <button type="button" class="btn btn-dark">Registrar</button>
        </form>
    </div>
  );
}

export default Registrar;
