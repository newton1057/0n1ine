import React from "react";
import './Footer.css'

function Footer(props) {
  return (
    <footer>
        
        <div id="Inicio">
            

            <div id="Secciones">

            <div id="RedesSociales">
                <h4>Redes Sociales</h4>
                <a><i class="icons fa-brands fa-square-facebook"></i></a>
                <a><i class="icons fa-brands fa-square-twitter"></i></a>
                <a><i class="icons fa-brands fa-tiktok"></i></a>
                <a><i class="icons fa-brands fa-linkedin"></i></a>
                <a><i class="icons fa-brands fa-square-instagram"></i></a>
            </div>

                <div id="Seccion">
                    <h3>Empresa</h3>
                    <a>Cultura</a>
                    <br></br>
                    <a>Trabaja con nosotros</a>
                    <br></br>
                    <a>Terminos de uso</a>
                    <br></br>
                    <a>Blog</a>
                </div>

                

                <div id="Seccion">
                    <h3>Podemos ayudarte</h3>
                    <a>Contacto</a>
                    <br></br>
                    <a>Ayuda</a>
                    <br></br>
                    <a>Tutoriales</a>


                </div>

                <div id="Seccion">
                    <h3>Metodos de Pago</h3>
                    <a>Pago con tarjeta</a>
                    <br></br>
                    <a>Transferencia</a>
                    <br></br>
                    <a>PayPal</a>


                </div>

                <div id="Seccion">
                    <h3>Medios</h3>
                    <a>Email: Support@AmaMer.com.mx</a>
                    <br></br>
                    <a>Telefono: +52 55 8237 8239</a>
                    <br></br>
                    <p>Direccion: Vasco de Quiroga 4871, Contadero, <br></br>
                    Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX</p>

                </div>

            </div>

            

            

           

            
        </div>

        <div id="Final">

            <a>Condiciones de uso</a>
            <a>|</a>
            <a>Aviso de privacidad</a>
            <p>© 2022 AmaMer.com o sus afiliados</p>
        </div>

    </footer>
  );
}

export default Footer;
