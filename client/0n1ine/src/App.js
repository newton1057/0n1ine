import './App.css';
import Login from './Pages/Login.js';
import Registrar from './Pages/Registrar.js';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Carrito from './Pages/Carrito.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MiCuenta from './Pages/MiCuenta.js'
import Productos from './Pages/Productos';
import Ofertas from './Pages/Ofertas';
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
        <Routes>
          <Route path='/Ofertas' element={<Ofertas/>}/>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
