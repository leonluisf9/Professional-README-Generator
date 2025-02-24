// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

const licenses = ['None', 'MIT_License', 'LGPL_3.0', 'MPL_2.0', 'AGPL_3.0', 'Unlicense', 'Apache_2.0','GPL_3.0'];

// TODO: Create an array of questions for user input
const questions = [
     {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?'
     },
     {
        type: 'input',
        name: 'description',
        message: 'Enter your Project Description'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation instructions'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage instructions'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contributions'
      },
      {
        type: 'input',
        name: 'video',
        message: 'Enter Link to a demo video'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username:'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
      },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "README.md";
    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " Successfully created README.md!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();