const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'José',
    password: 'S3z-RTiVlkMCsfLj',
    port: '',
    database: 'node-login'
});
connection.connect();

module.exports = connection;