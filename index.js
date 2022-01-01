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
        message:'What is your project title?',
        validate: title => {
            if (title) {
              return true;
            } else {
              console.log('Please enter a title for your project!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Please provide a description for your project.',
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please enter a description for your project!');
              return false;
            }
        }
    },
    {
        type:'checkbox',
        name:'tools',
        message:'Select all of the tools you used to create your project from the list below. \nIf you cannot find a tool you used, select "other", so you can change and add tools in the readme file after it is created.\n',
        choices: ['- HTML', '- CSS', '- JS', '- JQuery', '- Node.js', '- React', '- Express', '- Python', '- C++', '- Other']
    },
    {
        type:'input',
        name:'installation',
        message:'Please provide the installation instructions for your project.',
        validate: installation => {
            if (installation) {
              return true;
            } else {
              console.log('Please enter installation instructions for your project!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'usage',
        message:'Describe how to use this application.',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
                console.log('Please describe how to use your application!');
              return false;
            }
        }
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
        default:''
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
        message:'Provide instructions for users explaining how they can contribute to this project.',
        validate: contribution => {
            if (contribution) {
              return true;
            } else {
              console.log('Please describe how to contribute to your project, or explain why this project is not open to contributions!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'tests',
        message:'If there are any tests that need to be run by users of this application please include instructions here.',
        default:'npm run test'
    },
    {
        type:'input',
        name:'github',
        message:'Please enter your GitHub username.',
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter your github username!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:'Please provide your email address for the questions section.',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
        }
    },
    {
        type:'input',
        name:'credit',
        message:'Provide a list of credits that were used in the development of this project.',
        validate: creditInput => {
            if (creditInput) {
              return true;
            } else {
              console.log('Please include credits for this project, or state that you created this project on your own!');
              return false;
            }
        }
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
