import {Router} from 'express';
import {getUsuario, createCliente, getProductos} from '../controllers/API.controllers.js';
const router = Router();

router.get('/API/:Email' , getUsuario);
router.post('/API', createCliente) ;

router.get('/Productos', getProductos);

export default router;
