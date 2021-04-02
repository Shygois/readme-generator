// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
//const readmeMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username. (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "project",
        message: "What is the name of your project? (Required)",
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project. (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project. (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage information for your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter any contribution guidelines for your project.",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter any contribution guidelines!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please enter any test instructions for your project.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter any test instructions!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
//fs.writeFile(generateMarkdown, data) {}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
