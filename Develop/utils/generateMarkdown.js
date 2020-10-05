// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Description  
  ${data.description}

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)
  
  # Installation

  ${data.installation}
 
  # Usage
  ${data.usage}
  
  # License
  ${data.license}
  
  # Contributing
  ${data.contributing}
  
  # Tests
  ${data.test}
  
  # Question
  ${data.githubRepo}
  ${data.emailAddress}

`;
}

module.exports = generateMarkdown;
