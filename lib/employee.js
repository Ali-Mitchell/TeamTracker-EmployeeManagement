class Employee {
    constructor(name, jobTitle, email){
        this.name = name;
        this.jobTitle = jobTitle;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.jobTitle;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return 'Employee';
    }
}


module.exports = Employee;