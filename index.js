// Requirements for node modules
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of the manager?",
            name: 'name'
        },
        {
            type:'input',
            message: 'What is their Employee ID?',
            name: 'id'
        },
        {
            type:'input',
            message: 'What is their email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is their office number?',
            name: 'office'
        }
    ]).then((answers) => {
        console.log(answers);
        askForNewMember();
    })

    const askForNewMember = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Do you have any Engineers or Interns left to add?',
                    name: 'newMember',
                    choices: [
                        'Engineer',
                        'Intern',
                        'Done' ]
                }
            ]) .then((answers) => {
                if(answers.newMember[0]){
                    console.log('You want to add an engineer?')
                }
                else if(answers.newMember[1]){
                    console.log('You want to add an engineer?')
                    return
                }else if(answers.newmember[2]){
                    console.log('You are done?')
                }
            })
    }