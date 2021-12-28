# Professional README Generator

[![License Badge](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

## Description

The professional README generator is an application that is run in the node.js environment via the command line. This application inquires users about each section of a professional README file. The application prompts users with questions about their projects, and then collects the user input in order to generate a finalized README file for their project.

## Table of Contents
  * [Built With](#built-with)
  * [Code Access](#code-access)
  * [Preview](#preview)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)
  * [Credits](#credits)

## Built With

The README generator application was built with:
- JavaScript
- Node.js
- File System
- npm
- Inquirer

## Code Access

If you would like to access the code for this application, please visit [GitHub](https://github.com/sm3131/readme-generator)

## Preview

Click on the link below to watch the Screencastify video that walks the user through proper usage of the application:

## Installation
To install the README generator application complete the following steps:
1. Clone the application's code from this [GitHub](https://github.com/sm3131/readme-generator) repository onto your local machine into a new directory (e.g. readme-generator).
2. Open the command line and navigate to the directory you cloned this repository into, then open the content in a code text editor. You should now see the main files for this project (index.js, generateMarkdown.js, and README.md).
3. Next check to see if you have node.js installed on your machine by running the command *node -v* in your command line
4. If you have node.js make sure your version is up to date by going to this website (https://nodejs.org/en/)
5. If you do not have node.js installed follow the installation steps on this website (https://nodejs.org/en/)
6. Once you have node.js installed, make sure you are still in the readme generator directory in the command line, and then run the following command *npm init* to initialize this application with npm and a package.json file
7. After you have node.js and your npm initialized, you will need to install the *inquirer* package from npm in order to run this application. You can install this package using the command *npm install inquirer*
8. Now that everything has been properly installed and initialized, you are ready to run the application via node.js using the command line.

## Usage
To use the readme generator application complete the following steps:
1. The purpose of this application is to generate a professional README file for your current and future coding projects, so if you are in need of a professional README this is the application for you. 
2. After you have completed all of the above installation steps, you can now either test the application to see how it works and what the prompts ask, or you can jump right into creating a README for your project.
3. To begin running the application in the command line, type *node index.js* and this will start the program.
4. If the program is running properly you should be confronted with user prompts that ask you to enter information that will be included in your newly generated README file.
5. After answering all of the user prompts, you should receive a message in the command line saying "NEW_README.md file created!"
6. Now go back to your code text editor and you should see that a new README file has been created. It should be properly formatted and contain all of the information you included throughout the user prompts.
7. You can now use this README file for your current or future coding projects. You are also able to edit, add, and make changes to the information in the README file as you see fit.

**IMPORTANT NOTE:** Each time you run the program and fill out the user prompts you will overwrite the existing NEW_README.md file if one currently exists. Filling out the user prompts multiple times will not create multiple NEW_README.md files instead it will overwrite the existing NEW_README.md file. It is recommended that you copy and save the NEW_README.md file you created before generating a new one, that way you will not lose any of your project README files generated with this program.

## License

MIT License

Copyright (c) 2021 Sammi Moore

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

If you would like to access this project's repository as well as other projects in my GitHub, click this [GitHub](https://github.com/sm3131) link. 

For all other questions or inquires please feel free to contact me via email at [sm2683@nau.edu](mailto:sm2683@nau.edu)

## Credits

This project was created based off of some starter code provided by [Xandromus](https://github.com/coding-boot-camp/potential-enigma/blob/main/readme-guide.md). The starter code provided a few instructions on what functions needed to be created, but all of the actual code was written by myself, Sammi Moore. 

For the license badges and license section of the readme generator, I used the following resources:
- https://choosealicense.com/ (To help with picking which licenses to include)
- https://shields.io/ (To generate the link to create the license badges)
- https://wisehackermonkey.github.io/badge-demo/ (To help with coloring the license badges and grabbing the license links)
- https://opensource.org/licenses/ (To borrow the license section text describing the terms of each of the licenses included in the readme generator)

For the general structure of the README.md and markdown syntax I used the following resources:
- https://github.com/coding-boot-camp/potential-enigma/blob/main/readme-guide.md (README.md structure)
- https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax (markdown syntax)

I also used the inquirer package from npm in this node.js application in order to generate user prompt questions. (https://www.npmjs.com/package/inquirer)



