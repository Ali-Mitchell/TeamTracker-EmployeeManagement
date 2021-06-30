
const javacsript = require('../index');
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
        <header class='bg-pink-200'>
        <h2 class='text-white text-center text-4xl p-3'>My Team</h2>
        </header>
        <main id='employee-profiles' class='grid grid-cols-1 md:grid-cols-3 main'>
        ${finalArray.join('')}
        </main>
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
            <div class="card-header">${employee.id}
            </div>

            <div class="card-body text-dark">
                <h5 class="card-title">${employee.name}</h5>
                <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span> 
                <span class='card-text'>Office Number: ${employee.officeNumber}</span>
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
        <div class="card-header">${employee.id}
        </div>

        <div class="card-body text-dark">
            <h5 class="card-title">${employee.name}</h5>
            <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span> 
            <span class='card-text'>Office Number: ${employee.officeNumber}</span>
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
    <div class="card-header">${employee.id}
    </div>

    <div class="card-body text-dark">
        <h5 class="card-title">${employee.name}</h5>
        <span class="card-text"> Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span> 
        <span class='card-text'>Office Number: ${employee.officeNumber}</span>
    </div>
</div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

module.exports = generateHTML;