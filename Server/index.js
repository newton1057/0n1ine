import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js'
import APIRoutes from './routes/API.routes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(APIRoutes);

app.listen(PORT);
console.log("Servidor corriendo en port " + PORT);