import React, { useEffect, useState } from "react";
import './Header.css'
import {getCategorias} from '../Api/Usuario.api';
function Header(props) {
  const [showAcceso, setAcceso] = useState(false)
  const [Categorias, setCategorias] = useState([])
  useEffect(() => {
    async function loadCategorias(){
      const response = await getCategorias();

      setCategorias(response.data);
    }

    loadCategorias()
  }, [])
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index">
      <img id="LogoNavBar" src={require('../Images/LogoO.png')} />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/index">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
          {
              Categorias.map( Categorias => (
                <li><a class="dropdown-item" href="#">{Categorias.Nombre}</a></li>
               // <li><li class="dropdown-divider"></li></li>
              ))
              
          } 
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="/Ofertas">Ofertas</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
        </li>
        
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-header" type="submit">Buscar <i class="fa-solid fa-magnifying-glass"></i></button>
      </form>
      <div id="Botones">
        <a href= {showAcceso ? "/MiCuenta": "/Registrar"}><button class="btn btn-outline-header" type="submit" > {showAcceso ? <h7> Cuenta </h7>: <h7> Login </h7>} {showAcceso ? <i class="fa-solid fa-user"></i> : <i class="fa-solid fa-user-plus"></i>}</button></a>
        <a href= {showAcceso ? "/MiCuenta": "/Login"}><button class="btn btn-outline-header" type="submit" > {showAcceso ? <h7> Cerrar Sesión </h7>: <h7> Sign Up </h7>} {showAcceso ? <i class="fa-solid fa-circle-xmark"></i> :<i class="fa-solid fa-user"></i>}</button></a>
        <a href="/Carrito"><button class="btn btn-outline-header" type="submit">Carrito <i class="fa fa-cart-arrow-down" aria-hidden="true"> </i> </button></a>
      </div>
      
      
    </div>
  </div>
</nav>

    
  );
}

export default Header;
