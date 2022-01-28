const fs = require("fs");
const inquirer = require("inquirer");

//Establish empty arrays for output answers
const managerOutput = [];
const engineerOutput = [];
const internOutput = [];

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
//Engineer questions
const engineerQuestions = [
    {
        name: 'engineerName',
        message: "What is the engineer's name",
        type: 'input',
    },  
    {
        name: 'engineerEmail',
        message: "What is the engineer's email address",
        type: 'input',
    },
    {
        name: 'engineerId',
        message: "What is the engineer's employee ID",
        type: 'input',
    },
    {
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub username?",
        type: 'input',
    }
];

//Intern questions

const internQuestions = [
    {
        name: 'internName',
        message: "What is the intern's name",
        type: 'input',
    },  
    {
        name: 'internEmail',
        message: "What is the intern's email address",
        type: 'input',
    },
    {
        name: 'internId',
        message: "What is the engineer's employee ID",
        type: 'input',
    },
    {
        name: 'internSchool',
        message: "What is the intern's school?",
        type: 'input',
    },
];
    
//Directing question function for inquirer
function askManagerQuestions() {
    inquirer.prompt(managerQuestions).then((response) => {
        console.log(response);
        managerOutput.push(response);
        askAddExit();
    });
}
function askAddExit() {
    inquirer.prompt(addOrExitQuestion).then((response) => {
        if(response.addOrExit === 'Add an Engineer') {
            inquirer.prompt(engineerQuestions).then((response) => {
                engineerOutput.push(response);
                askAddExit();
            })
        } else if(response.addOrExit === 'Add an Intern') {
            inquirer.prompt(internQuestions).then((response) => {
                internOutput.push(response);
                askAddExit();
            })
        } else if(response.addOrExit === 'Exit to see my team') {
            console.log(response);
            return;
        }
    });
}

//Calling the manager questions
askManagerQuestions();