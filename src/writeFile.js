const fs = require('fs');

const writeFile = htmlFile =>
    fs.writeFile('./dist/index.html', htmlFile, (err) => {
        err?
            console.log(err)
            :
            console.log('The Team Profile has been successfully created!')
    });

module.exports = writeFile;

