import React, { useMemo, useState } from "react";

import './MiCuenta.css';


function MiCuenta() {
    

  return (

    <div className="MiCuenta">
        <h2>¡Hola Eduardo!</h2>
      <div id="Conte">

      
      <div class="card">
        <div class="card-body" >
        <i class="fa-solid fa-user-gear"></i> 
        <h5 >General</h5>
          <a href="#" class="btn btn-outline-header">Ir</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body" >
        <i class="fa-solid fa-key"></i>
        <h5 >Privacidad</h5>
          <a href="#" class="btn btn-outline-header">Ir</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body" >
        <i class="fa-solid fa-language"></i>
        <h5 >Idioma</h5>
          <a href="#" class="btn btn-outline-header">Ir</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body" >
        <i class="fa-solid fa-bell"></i>
        <h5 >Notificaciones</h5>
          <a href="#" class="btn btn-outline-header">Ir</a>
        </div>
      </div>

      <div class="card">
        <div class="card-body" >
        <i class="fa-solid fa-life-ring"></i>
        <h5 >Notificaciones</h5>
          <a href="#" class="btn btn-outline-header">Ir</a>
        </div>
      </div>
      </div>
    </div>

    
  );
}

export default MiCuenta;
