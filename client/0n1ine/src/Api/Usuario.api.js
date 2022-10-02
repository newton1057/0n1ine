import axios from 'axios';

export const getProductosRequest = async () => 
    await axios.get('http://192.168.1.97:3001/Productos')

export const CrearUsuario = async(Usuario) => 
    await axios.post('http://192.168.1.97:3001/API', Usuario);

export const getCategorias = async() => 
    await axios.get('http://192.168.1.97:3001/Categorias');

export const getOfertasRequest = async() => 
    await axios.get('http://192.168.1.97:3001/Ofertas');

