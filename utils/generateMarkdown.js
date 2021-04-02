// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `
  ## Name
   ${data.name}
  

  ## GitHub Username
  ${data.github}
  
  ## Email Address
  ${data.email}
  
  ## Project 
  ${data.project}
  
  ## Description
  ${data.desciption}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}

  ## Test Instructions
  ${data.test}
  
  ## License
  ${data.licenses}

`;
}

module.exports = generateMarkdown;
