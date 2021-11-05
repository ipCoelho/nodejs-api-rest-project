// This file is responsible for creating the connection to the database.
const mysql = require('mysql2');

const Conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bcd127',
    database: 'agenda_petshop'
})

module.exports = Conexao
