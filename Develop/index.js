// TODO: Include packages needed for this application
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project:"
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license for your project or select None?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
    default: "npm i"
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run test?",
    default: "npm test"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?"
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const outputDir = path.join(process.cwd());
  try {
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    const filePath = path.join(outputDir, fileName);
    fs.writeFileSync(filePath, data);
    console.log(`File written successfully to`, filePath);
  } catch (err) {
    console.error(`Error writing file:`, err);
  }
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(`Generating README...`);
    try {
      const markdown = generateMarkdown(data);
      writeToFile("README.md", markdown);
      console.log(`Success`);  
    }  catch (err) {
      console.error(`Error generating README:`, err);
    }
  });
}

// Function call to initialize app
init();