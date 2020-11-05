const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Contribution guidelines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Testing instructions:",
    name: "test",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Choose a license:",
    name: "license",
    choices: ["MIT", "ISC", "IBM"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  let output = generateMarkdown(data);
  console.log(output);
  fs.writeFileSync(fileName, output);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    let filename = data.title.toLowerCase().split(" ").join("") + ".md";
    console.log(data);
    writeToFile(filename, data);
  });
}

// function call to initialize program
init();
