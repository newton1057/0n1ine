import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host:'192.168.1.97',
    port:4308,
    user:'user',
    password:'',
    database:'ProyectoFinal'
});

