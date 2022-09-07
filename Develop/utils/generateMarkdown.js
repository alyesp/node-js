// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license}](${renderLicenseLink(license)})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-blue`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# License 
  ${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  ${data.}
  
  ${renderLicenseSection(data.license)}
  
  You can access more badges and their purposes at [shields.io](https://shields.io/category/license)
  
  ## Installation
  Follow these steps to install this application:
  
  Now you give the installation instructions on how to use your application.
  
  ## Usage 
  Instructions for use: 
  
  This is how you are going to use the project and maybe even add some helpful video links or gifs into it.
  
  ## Contributions
  If you would like to contribute, please adhere to these guidelines:
  
  Give the guidelines for assisting with your project here.
  # ${data.title}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
