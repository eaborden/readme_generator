// function to generate markdown for README
function generateMarkdown(data) {
  return `
 
  ![](https://img.shields.io/badge/license-${data.license}-blue.svg)


  # ${data.title}

  ## Description  
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}
 
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.test}
  
  ## Question
  View my GitHub repository here: ${data.githubRepo}\n
  Contact me at the folling email address: ${data.emailAddress}
 
`;

}

module.exports = generateMarkdown;



