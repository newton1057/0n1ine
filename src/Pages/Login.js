import React from "react";
import './Login.css';


function Login() {
  return (
    <div className="Login">
        <h1>Login</h1>
        <br></br>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email: </label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="correo@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Password: </label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
            </div>  
            <p><a href="">¿Olvidaste tu contraseña?</a> </p>
            <br></br>
            <button type="button" class="btn btn-dark">Iniciar sesión</button>
        </form>
    </div>
  );
}

export default Login;
