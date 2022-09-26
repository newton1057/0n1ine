import {createPool} from 'mysql2/promise';

export const pool = createPool({
    host:'192.168.0.27',
    port:4308,
    user:'user',
    password:'',
    database:'ProyectoFinal'
});

