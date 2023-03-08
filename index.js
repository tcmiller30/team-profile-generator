// Requirements for node modules
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamList = [];

    const getManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the manager's id?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the manager's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the manager's office number?",
                name:'officeNum'
            }
        ]).then((ans) => {
            console.log(ans);
            const manager = new Manager(ans.name, ans.id, ans.email, ans.officeNum);
            teamList.push(manager);
            askForNewMember();
        })
    }

    const getEngineer = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the engineer's id?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the engineer's GitHub?",
                name:'github'
            }
        ]).then((ans) => {
            console.log(ans);
            const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
            teamList.push(engineer);
            askForNewMember();
        })
    }

    const getIntern = () => {
        inquirer.prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the intern's id?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "Where does the intern go to school?",
                name:'school'
            }
        ]).then((ans) => {
            console.log(ans);
            const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
            teamList.push(intern);
            askForNewMember();
        })
    }

    const askForNewMember = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Do you have any Engineers or Interns left to add, or is the team complete?',
                    name: 'newMember',
                    choices: [
                        'Engineer',
                        'Intern',
                        'Done' ]
                }
            ]) .then((ans) => {
                switch (ans.newMember){
                    case 'Engineer':
                        getEngineer();
                        break;
                    case 'Intern':
                        getIntern();
                        break;
                    case 'Done':
                        generateHTML(teamList)
                        break;
                }
            })
    }

    const generateHTML = () => {

    }

    function init() {getManager();}
    init();