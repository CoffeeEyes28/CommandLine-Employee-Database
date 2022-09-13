const inquier = require('inquirer')
const mysql = require('mysql2')
require('dotenv').config();
// const db = require('./db')


const connection = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: ''
    },
    console.log('connected to _db.')
)

console.log(process.env.PASSWORD)