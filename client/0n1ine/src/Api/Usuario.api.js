import axios from 'axios';

export const getProductosRequest = async () => 
    await axios.get('http://192.168.0.27:3001/Productos')

export const CrearUsuario = async(Usuario) => 
    await axios.post('http://192.168.0.27:3001/API', Usuario);
