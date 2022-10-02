import {Router} from 'express';
import {getUsuario, createCliente, getProductos, getCategorias, getOfertas} from '../controllers/API.controllers.js';
const router = Router();

router.get('/API/:Email' , getUsuario);
router.post('/API', createCliente) ;

router.get('/Productos', getProductos);
router.get('/Categorias', getCategorias);
router.get('/Ofertas', getOfertas);
export default router;
