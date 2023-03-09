// Requirements for node modules
const inquirer = require('inquirer');
const htmlGen = require('./src/htmlTemplate')
const writeFile = require('./src/writeFile');

// Requirements for Employee Subclasses
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const teamList = [];
// Inquirer Prompts/Functions for each type of employee role
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
            // Constructs new Manager object using results from inquirer
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
            // Constructs new Engineer object using results from inquirer
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
            // Constructs new Intern object using results from inquirer
            const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
            teamList.push(intern);
            askForNewMember();
        })
    }

    // Menu presented to user after every new Member to determine if the user is done or not
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

    // Creates html file using modules from src/ 
    const generateHTML = (teamMembers) => {
        let html = htmlGen(teamMembers);
        writeFile(html);
    }

    // Prompts user to enter the manager's info when they first initialize the application
    function init() {getManager();}
    init();