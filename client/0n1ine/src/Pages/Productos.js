import React, { useEffect, useState } from "react";
import './Productos.css';
import Tarjeta_Productos from "../Components/Tarjeta_Productos";
import {getProductosRequest} from '../Api/Usuario.api';

function Productos() {
  const [Productos, setProductos] = useState([])

  useEffect(() => {
    async function loadProductos(){
      const response = await getProductosRequest();

      setProductos(response.data);
    }

    loadProductos()
  }, [])

 

  return (
    <div id="ListaProductos">
      {
        Productos.map( Productos => (
          <Tarjeta_Productos URLImagen ={ Productos.Imagen } Titulo={Productos.Nombre} Precio={Productos.Precio} New="New" />
        ))
          
      } 
      
      </div>
  );
  
}

export default Productos;