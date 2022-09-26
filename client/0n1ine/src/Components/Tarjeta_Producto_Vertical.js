import React, { useEffect, useState } from "react";
import Carrito from '../Pages/Carrito.js';
import './Tarjeta_Producto_Vertical.css';


function Tarjeta_Producto_Vertical(props) {

    const [numCantidad, setnumCantidad] = useState(1);
    const [Total, setTotal] = useState();

    useEffect(()=>{
        
        if(numCantidad<=0){
            alert("No puedes pedir 0 articulos");
            setnumCantidad(numCantidad+1);
        }
        setTotal(() => "$"+new Intl.NumberFormat('es-MX').format(props.Costo * numCantidad));
        console.log(new Intl.NumberFormat('es-MX').format(props.Costo * numCantidad));
        localStorage.setItem('Costo', props.Costo * numCantidad)
        
    }, [numCantidad])

    

  return (
    <div className="Tarjeta_Producto_Vertical">
        
        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254057"></img>
        <div id="Informacion">
            <h3>{props.Titulo}</h3>
            <h5>{props.Tipo}</h5>
            <h5>Costo: {props.Costo}</h5>
            <div id="Cantidad">
                <h4>Cantidad:</h4> <h4 >{numCantidad}</h4>
                <button  type="submit" onClick={() => setnumCantidad(numCantidad+1)}> <i class="fa-solid fa-plus"></i> </button>
                <button  type="submit"  onClick={() => setnumCantidad(numCantidad-1)}> <i class="fa-solid fa-minus"></i> </button>
            </div>
            
            <button class="btn btn-outline-header" type="submit"> Eliminar </button>
        </div>
        <div id="Total">
            <h3>Total: {Total}</h3>
        </div>
        
    </div>
  );
}

export default Tarjeta_Producto_Vertical;