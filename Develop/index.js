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
    message: "License:",
    name: "license",
    choices: ["License 1", "License 2", "License 3"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  var output = generateMarkdown(data);
  console.log(output);
  fs.writeFileSync(fileName, output);
  // fs.writeFile(fileName, output, function (err) {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log("done writing file");
  // });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
    writeToFile("node.md", data);
  });
}

// function call to initialize program
init();
