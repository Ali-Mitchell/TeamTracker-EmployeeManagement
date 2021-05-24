
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
        managerDiv = `
        <div class='bg-pink-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-pink-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-user-tie w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Manager</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Office Number: ${employee.officeNumber}</span>
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
        engineerDiv = `
        <div class='bg-pink-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-pink-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-code w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Engineer</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>GitHub: <a class='underline hover:text-white' target='_blank' href='https://www.github.com/${employee.github}'>${employee.github}</a></span>
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
    internDiv = `
        <div class='bg-pink-100 rounded flex flex-col w-1/3 m-5'>
            <div class='bg-pink-500 text-center text-white'>
                <h4 class='text-xl'>${employee.name}</h4>
                <span>
                    <i class="fas fa-user-graduate w-1.5 inline"></i>
                    <h5 class='text-lg inline'>Intern</h5>
                </span>
            </div>
            <div class='text-center p-1.5 mb-1 flex flex-col'>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Id Number: ${employee.id}</span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>Email: <a class='underline hover:text-white' href="mailto:${employee.email}">${employee.email}</a></span>
                <span class='text-base mx-8 mt-1 py-2 bg-pink-50 shadow-inner rounded-sm'>School: ${employee.school}</span>
            </div>
        </div>`
    }
    //console.log(internDiv);
    finalArray.push(internDiv);
}

module.exports = generateHTML;