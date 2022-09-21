import React, { useMemo, useState } from "react";
import Select from 'react-select'
import countryList from "react-select-country-list";
import './Registrar.css';


function Registrar() {
    const [value,setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    function changeHandler(e) {
        setValue(e);
    };

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
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"></input>
                
            </div>

            </div>

            <div id="Campos1">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Telefono: </label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Telefono"></input>
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Pais: </label>
                <Select options={options} value={value} onChange={changeHandler}/>
                
                
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
            <button type="button" class="btn btn-dark">Registrar  <i class="fa-solid fa-user"></i></button>
        </form>
    </div>
  );
}

export default Registrar;
