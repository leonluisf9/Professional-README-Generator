// TODO: Include packages needed for this application
// import fs from 'fs';
import inquirer from 'inquirer';
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
import { writeFile } from 'fs/promises';

// TODO: Create an array of questions for user input
const questions = [];

// Use writeFileSync method to use promises instead of a callback function
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Project Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your Project Description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage instructions',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contributions',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter Tests',
      },
  ]);
};

// const generateFILE = ({ name, description, installation, usage, contributing, tests }) =>
const generateFILE = ({ name, description, installation, usage, contributing, tests }) =>
  `# ${name} \n
## Description \n${description}\n
## Installation \n${installation}\n
## Usage \n${usage}\n
## Contributing \n${contributing}\n
## Tests \n${tests}
`;

// Bonus using writeFileSync as a promise
// TODO: Create a function to initialize app
// function init() {}
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateFILE(answers)))
    .then(() => console.log('Successfully wrote Information to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();



