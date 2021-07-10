const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, jobTitle, email, salary){
        super(name, jobTitle, email);

        this.salary = salary;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
