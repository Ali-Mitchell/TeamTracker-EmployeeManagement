
const Employee = require('./Employee');


class Engineer extends Employee{

    constructor(name, jobTitle, email, github, salary){
        super(name, jobTitle, email);

        this.salary = salary;
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }
}


module.exports = Engineer;