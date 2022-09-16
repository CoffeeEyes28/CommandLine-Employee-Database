const inquier = require('inquirer')
const mysql = require('mysql2')
require('dotenv').config();



const connection = mysql.createConnection(
    {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    },
    console.log('connected to _db.')
)

function mainMenu(){
    inquier
    .prompt([
        {
            type: 'list',
            name: 'answer',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Deparments', 'Add Department']
        },
    ])
    .then(({answer}) => {
        switch(answer) {
            case 'View All Employees':
                viewAllEmployees();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                    updateRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Deparments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;                       
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

function viewAllEmployees(){
    connection.query('SELECT * FROM employee', function (err, result){
     if (err){
        console.log(err);
     }
     console.table(result);
     mainMenu();
});

}






















mainMenu();