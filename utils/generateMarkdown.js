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

function renderLicenseLink(license) {
  if(license === 'Apache2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GPL') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'ISC') {
    return `(https://opensource.org/licenses/ISC)`
  } else if (license === 'BSD') {
    return `(https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === undefined || 'none') {
    return '';
  }
}

function renderLicenseSection(license, year, copyRight, program) {

  if(license === 'Apache2.0') {
    return `Copyright ${year} ${copyRight}

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`;
  } else if (license === 'GPL') {
    return `${program}
    Copyright (C) ${year} ${copyRight}

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.`
  } else if (license === 'ISC') {
    return `Copyright ${year} ${copyRight}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`
  } else if (license === 'BSD') {
    return `Copyright ${year} ${copyRight}

    Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    
    1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    
    2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    
    3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  } else if (license === 'MIT') {
    return `Copyright ${year} ${copyRight}

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } else if (license === undefined || 'none') {
    return '';
  }
}

const builtTools = tools => tools.join('\n  ');

function generateMarkdown(readmeData) {
  return `
  # ${readmeData.title}

  ${renderLicenseBadge(readmeData.license)}${renderLicenseLink(readmeData.license)}

  ## Description
  ${readmeData.description}

  ## Table of Contents
  * [Built With](#built-with)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Built With
  ${builtTools(readmeData.tools)}

  ## Installation
  ${readmeData.installation}

  ## Usage
  ${readmeData.usage}

  ## License
  ${renderLicenseSection(readmeData.license, readmeData.copyrightYear, readmeData.licenseName, readmeData.title)}

  ## Contributing
  ${readmeData.contribution}

  ## Tests
  ${readmeData.tests}

  ## Questions

  If you would like to access this project's repository as well as other projects in GitHub, click this [GitHub](https://github.com/${readmeData.github}) link.

  For all other questions or inquires please feel free to contact me via email at [${readmeData.email}](mailto:${readmeData.email})

  ## Credits
  ${readmeData.credit}
`;
}

module.exports = generateMarkdown;
