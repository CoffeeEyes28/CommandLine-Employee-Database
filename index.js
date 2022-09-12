const inquier = require('inquirer')
const mysql = require('mysql2')
const db = require('./db')


const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: ''
    },
    console.log('connected to _db.')
)