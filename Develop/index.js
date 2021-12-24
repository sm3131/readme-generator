// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is your project title?'
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a description for your project.'
    },
    {
        type:'input',
        name:'installation',
        message:'Please provide the installation instructions for your project.'
    },
    {
        type:'input',
        name:'usage',
        message:'Describe how to use this application, include all details you would like users to know.',
        // default:'none'
    },
    {
        type:'confirm',
        name:'confirmLicense',
        message:'Would you like to add a license to your project?',
        default: false
    },
    {
        type:'list',
        name:'license',
        message:'Please pick one license from the list below to add to your project.',
        choices:[ 'Apache2.0', 'GPL', 'ISC', 'BSD', 'MIT', 'none' ],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type:'input',
        name:'licenseName',
        message:'Please enter the name of the copyright owner(s)/holder(s).',
        default:'none'
    },
    {
        type:'input',
        name:'copyrightYear',
        message:'Please enter the copyright year for the project',
        default:currentYear
    },
    {
        type:'input',
        name:'contribution',
        message:'Provide instructions to explain to users or fellow programmers how they can contribute to this project. Be sure to include specific instructions about proper ways to contribute to the project.',
        // default:'none'
    },
    {
        type:'input',
        name:'tests',
        message:'If there are any tests that need to be run by users of this application please include instructions here.',
        // default:'none'
    },
    {
        type:'input',
        name:'github',
        message:'Please enter your GitHub username.'
    },
    {
        type:'input',
        name:'email',
        message:'Please provide your email address for the questions section.'
    },
    {
        type:'input',
        name:'credit',
        message:'If there are aspects of the project that required the use of outside sources, please include them here. List all the sources and information necessary to accurately credit the people, organizations, companies, and resources involved in the development of this project.',
        // default:'none'
    }
])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
