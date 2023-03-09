const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
        this.icon = 'fi fi-rr-crown';
        this.subClassQ = 'Office Number'
    }

    getOfficeNum(){
        return this.officeNum
    }
    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;