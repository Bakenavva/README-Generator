// TODO: Include packages needed for this application
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

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
  // path.join(process.cwd()) returns path to current working directory. Additional parameters will be append values to the path as strings; Can create new folders
  // Example: path.join(process.cwd(), "helloWorld") will return C:\...\Develop\helloWorld; folder of helloWorld is created in Develop.
  const outputDir = path.join(process.cwd());
  try {
    if (!fs.existsSync(outputDir)) { // Check if the directory exists
      fs.mkdirSync(outputDir); // Create the directory if it doesn't exist
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
      const markdown = generateMarkdown(data); // Imported function from generateMarkdown.js;
      writeToFile("README.md", markdown); // Create file with imported template w/ inquirer values;  File name can be changed here (first parameter)
      console.log(`Success`);  
    }  catch (err) {
      console.error(`Error generating README:`, err);
    }
  });
}

// Function call to initialize app
init();