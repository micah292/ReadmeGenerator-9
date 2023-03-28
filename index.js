// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'useage',
        message: 'Provide instructions and examples for use:',
    },
    {
        type: 'input',
        name: 'testing',
        message: "Provide any testing you've used in your project:",
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Did you work with any collaborators?',
    },
    {
        type: 'input',
        name: 'assets',
        message: 'Did you use any third-party assets or tutorials?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPLv2',
            'BSD 3-clause',
            'Unlicense',
            'other',
            'none']
    },
];

// TODO: Create a function to write README file
let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

// TODO: Create a function to initialize app
let init = () => {
    inquirer.prompt(questions)
        .then(answers => {
                const createMd = generateMarkdown(answers);
                writeToFile('README.md', createMd)
        });

};


// Function call to initialize app
init();
