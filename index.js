
const { prompt } = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/generateHTML.js');
const team =[];


async function addEmployee(){
    let { employee } = await
        prompt({
            type: 'list',
            name: 'employee',
            message: 'What kind of employee would you like to add next?',
            choices: ['Engineer', 'Intern', 'None']
        })
    switch(employee){
        case 'Engineer': 
            createEngineer();
            break;
        case 'Intern':
            createIntern();
            break;
        default: 
            //console.log(allEmployees);
            init(team);
    }
}


function createManager(){
   prompt([{
            type: 'input',
            name: 'managerName',
            message: 'Managers Name:'
        },
        {
            type: 'input',
            name: 'jobTitle',
            message: 'Job Title: '
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Email address: '
        },

        {
            type: 'input',
            name: 'managerSalary',
            message: 'Salary: '
        }
        ])
        .then((data) => {
            const manager = new Manager(data.managerName, data.jobTitle, data.managerEmail, data.managerSalary);
            team.push(manager);
            addEmployee();
        }) 

}



function createEngineer() {
    prompt([{
            type: 'input',
            name: 'engineerName',
            message: 'Engineers Name:'
        },
        {
            type: 'input',
            name: 'jobTitle',
            message: 'Job Title: '
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Email address: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'GitHub Username: '
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Salary: '
        }
        ])
        .then((data) => {
            const engineer = new Engineer(data.engineerName, data.engineerTitle, data.engineerEmail, data.github, data.engineerSalary);
            team.push(engineer);
            addEmployee();
        }) 


}



function createIntern(){
    prompt([{
            type: 'input',
            name: 'internName',
            message: 'Interns Name:'
        },
        {
            type: 'input',
            name: 'jobTitle',
            message: 'Job Title: '
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'School: '
        }
        ])
        .then((data) => {
            const intern = new Intern(data.internName, data.jobTitle, data.internEmail, data.school);
            team.push(intern);
            addEmployee();
        }) 
}


function createFile(fileName, data){
    fs.writeFile(path.join(__dirname, 'public', fileName), data, err => {
        console.log(err);
    });
}

function init (answers) {
    createFile('employees.html', generateHTML(answers));
    console.log('HTML file created!');
}

createManager();