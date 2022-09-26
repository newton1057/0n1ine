import { Router } from 'express';
import { pool } from '../DB.js';

const router = Router();

router.get("/ping", async (req, res) => {
    const [rows] = await pool.query("INSERT INTO Usuarios (Email, Password) VALUES ('williamschan72@gmail.com' , 'willychan12')");
    console.log(rows);
    res.json(rows);
});

export default router;