import React from "react";
import './Header.css'

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AmaMer</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Cat1</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Cat2</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Cat3</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Ofertas</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Ayuda</a>
        </li>
        
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
        <button class="btn btn-outline-header" type="submit">Buscar</button>
      </form>
      <div id="Botones">
        <button class="btn btn-outline-header" type="submit">Login</button>
        <button class="btn btn-outline-header" type="submit">Sign Up</button>
        <button class="btn btn-outline-header" type="submit">Carrito <i class="fa fa-cart-arrow-down" aria-hidden="true"> </i> </button>
      </div>
      
      
    </div>
  </div>
</nav>

    
  );
}

export default Header;
