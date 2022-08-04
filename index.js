const inquirer = require("inquirer")
const Choices = require("inquirer/lib/objects/choices")
const mysql = require("mysql")
require('console.table')
// const database = require("../db")
const database = require('./database');
//const connection = ()
const db = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
})
db.connect(()=>{
    prompt()
})
const promptMessages = {
    viewAllEmployees: "View every employee",
    addEmployee: "Add an employee",
    updateRole: "Update an employee's role",
    viewAllRoles: "View all roles",
    addRole: "Add a role",
    viewAllDepartments: "View all departments",
    addDepartment: "Add a department"
}

function prompt(){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "Pick an option",
        choices: [
            promptMessages.viewAllEmployees,
            promptMessages.addEmployee,
            promptMessages.updateRole,
            promptMessages.viewAllRoles,
            promptMessages.addRole,
            promptMessages.viewAllDepartments,
            promptMessages.addDepartment

        ]
    })

    .then(ans=>{
        console.log(ans.action)
        if(ans.action=== promptMessages.viewAllEmployees){
            viewEmployees()
            prompt()
        }
        if(ans.action=== promptMessages.viewAllDepartments){
            viewDepartments()
        }
        if(ans.action=== promptMessages.viewAllRoles){
            viewRoles()
        }
        if(ans.action=== promptMessages.addEmployee){
            addEmployee()
        }
        if(ans.action=== promptMessages.addRole){
            addRole()
        }
        if(ans.action=== promptMessages.addDepartment){
            addDepartment()
        }
        if(ans.action=== promptMessages.updateRole){
            updateRole()
        }
    })
   
}

function viewDepartments(){
    database.query("SELECT * FROM departments", (err, data)=>{
        console.table(data)
        console.log(data)
        prompt()
    })
}

function viewRoles(){
    database.query("SELECT * FROM role", (err, data)=>{
        console.table(data)
        console.log(data)
        prompt()
    })
}



function viewEmployees(){
    database.query("SELECT * FROM employees", (err, employees)=>{
        console.table(employees)
    //    console.log(data)
        prompt()
    })
}
