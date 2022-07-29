const inquirer = require("inquirer")
const Choices = require("inquirer/lib/objects/choices")
const mysql = require("mysql")
require('console.table')
//const connection = ()

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

   // .then(ans=>){}
   //
}

//prompt()