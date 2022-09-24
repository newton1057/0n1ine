import './App.css';
import Login from './Pages/Login';
import Registrar from './Pages/Registrar';
import Tarjeta_Productos from './Components/Tarjeta_Productos';
import Header from './Components/Header';
import Registrar_Direccion from './Pages/Registrar_Direccion';
import Registrar_Forma_Pago from './Pages/Registrar_Forma_Pago';
import Status_Pago from './Pages/Status_Pago';
import Tarjetas_Disponibles from './Pages/Tarjetas_Disponibles';
import Footer from './Components/Footer';
import Carrito from './Pages/Carrito';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MiCuenta from './Pages/MiCuenta'
import Productos from './Pages/Productos';
function App() {
  return (
    <div className="App">
      <Header/> 

      
      
      <BrowserRouter>
        <Routes>
          <Route path='/index' element={<Productos/>}/>
        </Routes>
        <Routes>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/Registrar' element={<Registrar/>}/>
        </Routes>

        <Routes>
          <Route path='/Carrito' element={<Carrito/>}/>
        </Routes>
        <Routes>
          <Route path='/MiCuenta' element={<MiCuenta/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
