import React, { useEffect, useState } from "react";
import './Ofertas.css';
import Tarjeta_Productos from "../Components/Tarjeta_Productos";
import {getOfertasRequest} from '../Api/Usuario.api';

function Ofertas() {
  const [Productos, setOfertas] = useState([])

  useEffect(() => {
    async function loadOfertas(){
      const response = await getOfertasRequest();

      setOfertas(response.data);
    }

    loadOfertas()
  }, [])

 

  return (
    <div id="ListaOfertas">
      {
        Productos.map( Productos => (
          <Tarjeta_Productos URLImagen ={ Productos.Imagen } Titulo={Productos.Nombre} Precio={Productos.Precio} New="Oferta" />
        ))
          
      } 
      
      </div>
  );
  
}

export default Ofertas;
