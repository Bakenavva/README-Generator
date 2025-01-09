# README Generator

## Description

This project was created with the intention of streamlining the intial stages of a new project, by auto-generating a README file after taking various inputs from the user, in the form of prompts. This approach allows for better allocation of time to other parts of the project. The generator utilizes a pre-built template, and should ensure that various input types do not damage the visual structure of the template, and therefore the generated file. 

This project relies on the command-line application, node.js [Inquirer package](https://www.npmjs.com/package/inquirer)., & javascript to function properly. Built into the functions that generate the README file is the ability to pick the file pathing for the desired output location of the file. This custom approach allows the user freedom for seamless integration of the README Generator as it can be modified in seconds to match the needs of the user in regards to where the output file is needed. 

## Instructions
Navigate to the index.js via terminal, and input the following command to initialize the application:

```bash
node index.js
```
The application will then ask a series of questions, which can be answered via the same terminal. Once completed the prompts are all returned, the application will generate the file to the user's chosen location. This file defaults to README.md.

The following instructions are for customizing the file pathing:
![alt text](Develop\images\file-pathing-instructions.png)
- path.join() allows for a custom file path to be set so that we can decide where we want the generated file to be sent. 
- The default value found on line 64 of index.js, process.cwd() calls the current working directory. This means the file path will be set to C:\User\...\Develop; additional parameters will output a new backslash alongside the inputted value. As it is now the function will generate a new folder called "sample".
Ex: path.join(process.cwd(), "newFolder"); will output C:\User\...\Develop\

The following allows for changing the file name & type:
![alt text](Develop\images\file-naming-instructions.png)
- Changing the parameter value of "README.md", within the writeToFile() on line 84 will allow for us to change the name of the file, and the extension being changed can allow for changing the file type.

## Link to video demo and repo. 
* [Video](https://drive.google.com/file/d/1GuTsG5za1gcQwhelqqTY8XPWeW26VVzP/view)
* [GitHub Repository](https://github.com/Bakenavva/README-Generator)