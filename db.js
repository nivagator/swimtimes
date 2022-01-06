const mariadb = require('mariadb');
require('dotenv').config()

// local mariadb docker
const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_DATABASE,
    connectionLimit: 5
});

module.exports = pool;