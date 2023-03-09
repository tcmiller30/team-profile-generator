const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.icon = 'fi fi-rr-settings'
        this.subClassQ = 'GitHub'
    }
    getGitHub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;