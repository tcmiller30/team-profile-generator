// Templates for Employee/Role Cards
const managerCard = manager => 

`
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="name">${manager.getName()}</h5>
                            <i class="ms-3 me-2 ${manager.icon}"></i>
                            <h5 class="d-inline-block">${manager.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group">
                                <li class="list-group-item">ID: <span class="idNum">${manager.getId()}</span></li>
                                <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}" class="email">${manager.getEmail()}</a></li>
                                <li class="list-group-item subClassQ">${manager.subClassQ}: <span class="subClassA">${manager.getOfficeNum()}</span></li>
                            </ul>    
                        </div>
                    </div>
                </div>
`

const engineerCard = engineer =>

`
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="name">${engineer.getName()}</h5>
                            <i class="ms-3 me-2 ${engineer.icon}"></i>
                            <h5 class="d-inline-block">${engineer.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group">
                                <li class="list-group-item">ID: <span class="idNum">${engineer.getId()}</span></li>
                                <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}" class="email">${engineer.getEmail()}</a></li>
                                <li class="list-group-item subClassQ">${engineer.subClassQ}: <a class="subClassA" href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></li>
                            </ul>    
                        </div>
                    </div>
                </div>
`

const internCard = intern =>

`
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card mb-4">
                        <div class="card-header">
                            <h5 class="name">${intern.getName()}</h5>
                            <i class="ms-3 me-2 ${intern.icon}"></i>
                            <h5 class="d-inline-block">${intern.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <ul class="list-group list-group">
                                <li class="list-group-item">ID: <span class="idNum">${intern.getId()}</span></li>
                                <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}" class="email">${intern.getEmail()}</a></li>
                                <li class="list-group-item subClassQ">${intern.subClassQ}: <span class="subClassA">${intern.getSchool()}</span></li>
                            </ul>    
                        </div>
                    </div>
                </div>
`

// Iterates through each object in the array of Team Members from inquirer in index.js
const cardGroup = teamMembers => {
    let htmlTemplate = '';

    // Determines which card template to used based of the team member's role
    for(let i = 0; i < teamMembers.length; i++){
        if(teamMembers[i].getRole() === 'Engineer'){
            htmlTemplate += engineerCard(teamMembers[i]);
        }
        else if(teamMembers[i].getRole() === 'Intern'){
            htmlTemplate += internCard(teamMembers[i]);
        }
        else if(teamMembers[i].getRole() === 'Manager'){
            htmlTemplate += managerCard(teamMembers[i]);
        }
    } return htmlTemplate
    // console.log(htmlTemplate);
}


// Splices generated Card Group into an HTML Template
const htmlGen = data =>
`
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
        <h1 id="title" class="p-5">My Team</h1>
        <div class="container p-5">
    
            <div class="row justify-content-center">
                ${cardGroup(data)}
            </div>

        </div> 
    </body>
</html>
`
    





    module.exports = htmlGen;