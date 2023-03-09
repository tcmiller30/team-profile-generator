const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.icon = 'fi fi-rr-hand-holding-seeding';
        this.subClassQ = 'School'
    }
    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

module.exports = Intern;