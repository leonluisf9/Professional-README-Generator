// TODO: Include packages needed for this application
// import fs from 'fs';
import inquirer from 'inquirer';
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
import { writeFile } from 'fs/promises';


// the `writeToLog` function will take in data and use it to write to a file called `log.txt`.

// TODO: Create an array of questions for user input
const questions = [];

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your Project Tittle?',
//     },

//    ])
//   .then((data) => {
//     const filename = `README.md`;
//     // writeToFile(filename, data);

//     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });


// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your Project Title?',
    },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter your GitHub Username',
    // },
    // {
    //   type: 'input',
    //   name: 'email',
    //   message: 'Enter your Email address.',
    // },
  ]);
};

// const generateHTML = ({ name, github, email }) =>

const generateHTML = ({ name }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4"># ${name}</h1>
    </div>
  </header>
</body>
</html>`;

// Bonus using writeFileSync as a promise
// TODO: Create a function to initialize app
// function init() {}
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateHTML(answers)))
    .then(() => console.log('Successfully wrote Project Tittle to README.md'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// const writeToLog = (data) => {
//     fs.writeFile(fileName, data, (err) => {
//       err ? console.error(err) : console.log('README.md file created!');
//     });
//   };
// }

// import colors from 'colors';


