const fs = require("fs");
const inquirer = require("inquirer");

const output = [];
//Manager Questions
const managerQuestions = [
    {
      name: 'managerName',
      message: "What is your team manager's name?",
      type: 'input'
    },
    {
        name: 'managerEmail',
        message: "What is the team manager's email?",
        type: 'input'
    },
    {
        name: 'managerId',
        message: "What is the team manager's employee ID" ,
        type: 'input'
    },
    {
        name: 'managerOffice',
        message: "What is the team manager's office number?",
        type: 'input',
    },  
];
// Add or Exit directing question
const addOrExitQuestion = [
    {
        name: 'addOrExit',
        message: 'Would you like to add an intern, add an engineer, or exit to get your team list?',
        type: 'list',
        choices: ['Add an Engineer', 'Add an Intern', 'Exit to see my team']
        
    },
];