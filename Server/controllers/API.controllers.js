 import { pool } from "../DB.js";
import fs from 'fs';
 
export const getUsuario = async (req, res) => {
    console.log(req.params.Email);
    
    const [result] = await pool.query("SELECT * FROM Usuarios WHERE Email = ?", 
    [
        req.params.Email
    ])
    if(result.length == 0){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    res.json(result[0]);
}

export const createCliente = async (req, res) => {
    const {Nombre, ApellidoPaterno, ApellidoMaterno, Telefono, Pais, Email, Password} = req.body
    await pool.query("BEGIN;");
    const result = await pool.query("INSERT INTO Clientes(Nombre, ApellidoPaterno, ApellidoMaterno, Telefono, Pais) VALUES (?,?,?,?,?) ",
    [
        Nombre,
        ApellidoPaterno,
        ApellidoMaterno,
        Telefono,
        Pais
    ]);
    const result1 = await pool.query("INSERT INTO Usuarios ( Email, Password , ID_Cliente) VALUES ( ?, ?, (SELECT MAX(ID_Cliente) AS id FROM clientes))",
    [
        Email,
        Password
    ]);
    await pool.query("COMMIT;");
    console.log(result1);
    res.send('Creando Usuario');
}

export const getProductos = async (req, res) => {
    
    console.log(req.params);
    
    const [result] = await pool.query("SELECT * FROM Productos");
    
    console.log(result);
    
    if(result.length == 0){
        return res.status(404).json({message: "Usuario no encontrado"});
    }
    res.json(result);
}