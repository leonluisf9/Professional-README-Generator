// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';

const licenses = ['None', 'MIT License', 'LGPL-3.0', 'MPL-2.0', 'AGPL-3.0', 'Unlicense', 'Apache-2.0','GPL-3.0'];

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
        name: 'tests',
        message: 'Enter Tests Instructions'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Enter project license:',
        choices: licenses
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filename = "README.md";
    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) : console.log(filename + " created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();



