const inquirer = require('inquirer');

//const fs = require('fs');
//const generatePage = require('./page-template.js');

//const pageHTML = generatePage(name, github);

//fs.writeFile('index.html', generatePage(name, github), err => {
  //  if (err) throw new Error(err);

    //console.log('Portfolio complete! Check out index.html to see the output!');
//});

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
]).then(answers => console.log(answers));

// for loop Arrow function example //
/*const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===========');

    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs);*/