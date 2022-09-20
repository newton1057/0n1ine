import './App.css';
import Login from './Pages/Login';
import Registrar from './Pages/Registrar';
import Tarjeta_Productos from './Components/Tarjeta_Productos';
import Header from './Components/Header';
import Registrar_Direccion from './Pages/Registrar_Direccion';
import Registrar_Forma_Pago from './Pages/Registrar_Forma_Pago';
import Status_Pago from './Pages/Status_Pago';
import Tarjetas_Disponibles from './Pages/Tarjetas_Disponibles';
function App() {
  return (
    <div className="App">
      <Header/>

      <Status_Pago Tiempo_Entrega="2 dias aprox" Direccion="CDA TAMAULIPAS 21 " Nombre="Williams Chan Pescador" Telefono="9941532172" Forma_Pago="Bancomer Debito ****8283"/>
      <Registrar_Forma_Pago />
      <Tarjetas_Disponibles/>
      <Registrar_Direccion/>

      <Login/>
      <br></br>
      <Registrar/>
      <br></br>
      <Tarjeta_Productos URLImagen="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPRY3_AV1?wid=532&hei=582&fmt=png-alpha&.v=1661463537389" New="New" Titulo="iPhone 14 Silicone Case with MagSafe - Lilac" Precio="$49.00"/>
    </div>
  );
}

export default App;
