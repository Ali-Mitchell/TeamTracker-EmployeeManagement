
const javascript = require('../index');
let finalArray = [];


function baseHTML() { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Team Tracker</span>
                </div>
            </nav>
    <div class="container d-flex flex-wrap" id="employee-profiles">
        ${finalArray.join('')}
    </div>


    </body>
    </html>`
};

function generateHTML (arr) {
    arr.forEach((employee) => {
        switch(employee.getRole()){
            case 'Manager':
                managerCard(employee);
                break;
            case 'Engineer':
                engineerCard(employee);
                break;
            default:
                internCard(employee);
        }
    })
    return baseHTML();
}


//manager card
function managerCard(employee){
    let managerDiv = '';
    if (employee !== ""){
        managerDiv = `<div class=" col-4 card border-dark" style="max-width: 18rem;">
            <div class="card-header">${employee.jobTitle}
            </div>

            <div class="card-body text-dark">
                <h5 class="card-title">${employee.name}</h5>
                <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a><br>
                </span> 
                <span class='card-text'>
                Salary: ${employee.salary}</span>
            </div>
        </div>`
    }

    //console.log(managerDiv);
    finalArray.push(managerDiv);
}

//engineer card
function engineerCard(employee){
    let engineerDiv = '';
    if (employee !== "") {
        engineerDiv = `<div class=" col-4 card border-dark" style="max-width: 18rem;">
        <div class="card-header">${employee.jobTitle}
        </div>

        <div class="card-body text-dark">
            <h5 class="card-title">${employee.name}</h5>
            <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span> 
            <br>
            <span class='card-text'>GitHub: <a class='underline hover:text-white' target='_blank' href='https://www.github.com/${employee.github}'>${employee.github}</a></span>
            <span class='card-text'>Office Number: ${employee.salary}</span>
        </div>
    </div>`
    }
    //console.log(engineerDiv);
    finalArray.push(engineerDiv);
}

//intern card
function internCard(employee){
    let internDiv = '';
    if (employee !== "") {
    internDiv = 
    `<div class=" col-4 card border-dark" style="max-width: 18rem;">
    <div class="card-header">${employee.jobTitle}
    </div>

    <div class="card-body text-dark">
        <h5 class="card-title">${employee.name}</h5>
        <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span> 
       <br> <span class='card-text'> School: ${employee.school}</span>
    </div>
</div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

module.exports = generateHTML;