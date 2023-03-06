// Requirements for node modules
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the new team member's name?",
            name: 'name'
        },
        {
            type:'input',
            message: 'What is their ID?',
            name: 'id'
        },
        {
            type:'input',
            message: 'What is their email?',
            name: 'email'
        }
    ])

    const askForNewMember = () => {
        inquirer
            .prompt([
                {
                    type: 'list',
                    message: 'Would you like to add another member to the team?',
                    name: 'newMember',
                    choices: [
                        'Yes',
                        'No' ]
                }
            ]) .then((answers) => {
                if(answers.newMember == 'Yes'){
                    newMember()
                }
                else{
                    console.log('Generation Complete!')
                    return
                }
            })
    }