const fs = require('fs');

const profileDataArgs = process.argv.slice(2, process.argv.length);

const [name, github] = profileDataArgs;

const generatePage = require('./page-template.js');

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

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