import React from "react";
import './Tarjeta_Productos.css'
import toast, { Toaster } from 'react-hot-toast';



function Tarjeta_Productos(props) {
  
  const notify = () => {
    toast('Agregado a carrito!', {
      duration: 1000,
      position: 'top-center',
      icon: '🛒',
    });
  }
  

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

        <div id="botones">
          <button  class="btn btn-outline-header" onClick={notify}> Agregar al carrito </button>
          <button  class="btn btn-outline-header"> Comprar ahora </button>
        </div>
        
        <Toaster />

    </div>

  );
}

export default Tarjeta_Productos;
