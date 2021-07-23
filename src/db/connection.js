const mysql = require('mysql2');
// const { prototype } = require('mysql2/typings/mysql/lib/protocol/sequences/Sequence');
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

connection.connect((error) => {
    if (error) console.log(error);
    console.log("Successfully connected to database")
});

module.exports = connection;