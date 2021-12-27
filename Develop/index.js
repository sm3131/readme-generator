// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

const d = new Date();
const currentYear = d.getFullYear();

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
        type:'checkbox',
        name:'tools',
        message:'Select all of the tools you used to create your project from the list below. \nIf you cannot find a tool you used, feel free to press enter to select the default of "other" or include "other" in your choice options, so you can change and edit the list in the readme file after it is created.\n',
        choices: ['- HTML', '- CSS', '- JS', '- JQuery', '- Node.js', '- React', '- Express', '- Python', '- C++', '- Other'],
        default: '- Other'
        
    },
    {
        type:'input',
        name:'installation',
        message:'Please provide the installation instructions for your project.'
    },
    {
        type:'input',
        name:'usage',
        message:'Describe how to use this application, include all details you would like users to know.'
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
        message:'Provide instructions to explain to users or fellow programmers how they can contribute to this project. Be sure to include specific instructions about proper ways to contribute to the project.'
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
        message:'If there are aspects of the project that required the use of outside sources, please include them here. List all the sources and information necessary to accurately credit the people, organizations, companies, and resources involved in the development of this project.'
    }
])
};

questions()
.then(readmeData => {
    console.log(readmeData);
    return markdown(readmeData);
})
.then(readmeMD => {
    fs.writeFile('NEW_README.md', readmeMD, err => {
        if(err) throw err;
        console.log('NEW_README.md file created!')
    })
})
