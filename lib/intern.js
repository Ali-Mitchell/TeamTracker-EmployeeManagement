const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, jobTitle, email, school){
        super(name, jobTitle, email);

        this.school = school;
    }

    getRole(){
        return 'Intern';
    }
}


module.exports = Intern;