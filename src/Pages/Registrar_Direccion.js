import React from "react";
import './Registrar_Direccion.css'

function Registrar_Direccion(props) {
  return (
    
        

    <div className="Registrar_Direccion">
        <h1>Registrar Dirección</h1>
        <br></br>
        <form id="FormRegistrar_Direccion">
            

            
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Calle: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Calle"></input>
            </div>
            
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"> CP: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="CP"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Estado: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Estado"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Colonia: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Colonia"></input>
                
            </div>

            

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Pais: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Pais"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Municipio: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Municipio"></input>
                
            </div>

            
            

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Referencias: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Referencias"></input>
            </div>  
            
            

            

            
            <br></br>
            <button type="button" class="btn btn-dark">Registrar Dirección</button>
        </form>
    </div>
  );
}

export default Registrar_Direccion;


// CP, Calle, estado, colonia, pais municipio referencias
