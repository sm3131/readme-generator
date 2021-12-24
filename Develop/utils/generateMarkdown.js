// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache2.0') {
    return `[![License Badge](https://img.shields.io/badge/license-${license}-blue)]`
  } else if (license === 'GPL') {
    return `[![License Badge](https://img.shields.io/badge/license-${license}-blue)]`;
  } else if (license === 'ISC') {
    return `[![License Badge](https://img.shields.io/badge/license-${license}-yellow)]`;
  } else if (license === 'BSD') {
    return `[![License Badge](https://img.shields.io/badge/license-${license}-orange)]`;
  } else if (license === 'MIT') {
    return `[![License Badge](https://img.shields.io/badge/license-${license}-green)]`;
  } else if (license === undefined || 'none') {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
