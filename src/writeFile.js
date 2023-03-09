const fs = require('fs');

// Creates an index.htmnl file in dist/ using template provided by index.js/htmlTemplate.js
const writeFile = htmlFile =>
    fs.writeFile('./dist/index.html', htmlFile, (err) => {
        err?
            console.log(err)
            :
            console.log('The Team Profile has been successfully created!')
    });

module.exports = writeFile;

