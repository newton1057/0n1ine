import React from "react";
import './Login.css';
import {useState} from "react";

function Login() {
  const [showPassword, setPassword] = useState(false)

  return (
    <div className="Login">
        <h1>Login</h1>
        <br></br>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email: </label>
                <input type="email" class="form-control" id="Usuario" placeholder="correo@example.com" ></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Password: </label>
                <div id="X">
                  <input type={showPassword ? "text" : "password"} class="form-control" id="Password" placeholder="Password"></input> 
                  <button type="button" onClick={()=> setPassword(!showPassword)}> {showPassword ? <i class="fa-solid fa-eye" id="eye"></i> : <i class="fa-solid fa-eye-slash"></i>}</button>
                  
                </div>
                
            </div>  
            <p><a href="">¿Olvidaste tu contraseña?</a> </p>
            <br></br>
            <button type="button" class="btn btn-dark" >Iniciar sesión <i class="fa-solid fa-user"></i></button>
        </form>
    </div>
  );
}

export default Login;
