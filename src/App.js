import './App.css';
import Login from './Pages/Login';
import Registrar from './Pages/Registrar';
import Tarjeta_Productos from './Components/Tarjeta_Productos';

function App() {
  return (
    <div className="App">
      

      <Login/>
      <br></br>
      <Registrar/>
      <br></br>
      <Tarjeta_Productos URLImagen="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPRY3_AV1?wid=532&hei=582&fmt=png-alpha&.v=1661463537389" New="New" Titulo="iPhone 14 Silicone Case with MagSafe - Lilac" Precio="$49.00"/>
    </div>
  );
}

export default App;
