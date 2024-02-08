const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: '126.0.0.1',
    user:'mysql',
    password: '',
    database: 'mystore'
})

export async function query(sql:any, values:any) {
    const [ rows, fields ] = await connection.execute(sql, values);
    return rows
}