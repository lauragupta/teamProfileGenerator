const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Establish empty arrays for output answers
const output = [];

//Manager Questions
const managerQuestions = [
    {
      name: 'name',
      message: "What is your team manager's name?",
      type: 'input'
    },
    {
        name: 'email',
        message: "What is the team manager's email?",
        type: 'input'
    },
    {
        name: 'id',
        message: "What is the team manager's employee ID" ,
        type: 'input'
    },
    {
        name: 'office',
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
        name: 'name',
        message: "What is the engineer's name",
        type: 'input',
    },  
    {
        name: 'email',
        message: "What is the engineer's email address",
        type: 'input',
    },
    {
        name: 'id',
        message: "What is the engineer's employee ID",
        type: 'input',
    },
    {
        name: 'githubUsername',
        message: "What is the engineer's GitHub username?",
        type: 'input',
    }
];

//Intern questions

const internQuestions = [
    {
        name: 'name',
        message: "What is the intern's name",
        type: 'input',
    },  
    {
        name: 'email',
        message: "What is the intern's email address",
        type: 'input',
    },
    {
        name: 'id',
        message: "What is the engineer's employee ID",
        type: 'input',
    },
    {
        name: 'school',
        message: "What is the intern's school?",
        type: 'input',
    },
];

//function to make manager html card
function renderManagerCard(name, email, id, office) {
    return `<div class="column"><h2 class="is-size-2 has-background-link has-text-light">Name: ${name}</h2><h3 class="is-size-3 has-background-link has-text-light">Manager</h2><p>ID: ${id}</p><p>Email: <a href="mailto:${email}"></a></p><p>Office number: ${office}</p></div>`
} 
    
//function to make engineer html cards
function renderEngineerCard(name, email, id, githubUsername) {
    return `<div class="column"><h2 class="is-size-2 has-background-link has-text-light">Name: ${name}</h2><h3 class="is-size-3 has-background-link has-text-light">Engineer</h2><p>ID: ${id}</p><p>Email: <a href="mailto:${email}"></a></p><p><a href="https://github.com/${githubUsername}" target="_blank">Check out my code on GitHub!</a></p></div>`
} 
//function to make intern html card
function renderInternCard(name, email, id, school) {
    return `<div class="column"><h2 class="is-size-2 has-background-link has-text-light">Name: ${name}</h2><h3 class="is-size-3 has-background-link has-text-light">Intern</h2><p>ID: ${id}</p><p>Email: <a href="mailto:${email}"></a></p><p>School: ${school}</p></div>`
} 

//set variable to string of html
const cards = output.toString();

//Starting manager question function for inquirer
function askManagerQuestions() {
    inquirer.prompt(managerQuestions).then((response) => {
        const manager = new Manager(response.name, response.email, response.id, response.office);
        const htmlCard = renderManagerCard(manager.name, manager.email, manager.id, manager.office);
        output.push(htmlCard);
        console.log(htmlCard);
        askAddExit();
    });
}

//function to add engineers and interns and to 
function askAddExit() {
    inquirer.prompt(addOrExitQuestion).then((response) => {
        if(response.addOrExit === 'Add an Engineer') {
            inquirer.prompt(engineerQuestions).then((response) => {
                const engineer = new Engineer(response.name, response.email, response.id, response.githubUsername);
                const htmlCard = renderEngineerCard(engineer.name, engineer.email, engineer.id, engineer.githubUsername);
                output.push(htmlCard);
                console.log(htmlCard);
                askAddExit();
            })
        } else if(response.addOrExit === 'Add an Intern') {
            inquirer.prompt(internQuestions).then((response) => {
                const intern = new Intern(response.name, response.email, response.id, response.school);
                const htmlCard = renderInternCard(intern.name, intern.email, intern.id, intern.school);
                output.push(htmlCard);
                console.log(htmlCard);
                askAddExit();
            })
        } else if(response.addOrExit === 'Exit to see my team') {
            console.log();
            return(output);
        }
    });
}

//Calling the manager questions
askManagerQuestions();

var body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="container">
        <div class="has-background-danger has-text-white-bis is-10">
              <div class="container">
                  <div class="columns">
                      <div class="column title is-centered">My Team</div>
                  </div>
              </div>
            </div>
        </div>
    </header>
    <br>
    <main class="container">
        <div class="columns" id="cards">
            ${cards}
        </div>
    </main>
</body>
</html>`

//function to write file to the index.html file or to console an error if there is one
fs.writeFile("index.html", body, (err) =>
err ? console.error(err) : console.log('Success!')
);
