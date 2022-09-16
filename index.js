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
).promise();



function mainMenu(){
    inquier
    .prompt([
        {
            type: 'list',
            name: 'answer',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Deparments', 'Add Department', 'Exit']
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
            case 'Exit':
                exit();
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


const addEmployee = async() => {
const roles = await connection.query('SELECT * FROM role');


const newEmployee = await inquier
   .prompt([
    
    {
        type: 'input',
        name: 'firstName',
        message: 'What is your employees first name?'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'What is your employees last name?'
    },
    {
       type: 'input',
       name: 'role',
       message: 'What is your employess role id?',
     
    },
    {
        type: 'input',
        name: 'manager',
        message: 'what is your employees manager id?'
    },
   ])
   .then((data) => {
    console.log(data)
   })
   .catch((err) => {
    console.log(err)
   })
}






    









function exit(){
    console.log('Goodbye!')
    process.exit()
}

mainMenu();