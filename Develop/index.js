// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
//table of contents in generateMarkdown.js
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository? (Required)',
  //validate to make sure there is a value there
  validate: nameInput => {
    if (nameInput) {
      return true;
    }else {
      console.log('Please enter your repository title.');
      return false;
    }
  } 
},
//confirmation whether or not there is a installation process first
{
  input: 'input',
  name: 'confirmInstallation',
  message: 'Is there an installation process?'
},
{
  type: 'input',
  name: 'installation',
  message: 'Please list installation instructions.',
  // if the person selects a installation process allow them to input steps
  when: ({confirmInstallation}) => {
    if (confirmInstallation) {
      return true;
    }else {
      return false;
    }
  }
},
{//confirm
  type:'confirm',
  name:'confirmUsage',
  message:'Would you like to give instructions for using your application?'
},
{// if confirm
  type: 'input',
  name:'instructions',
  message:'Please list instructions for using your application. It is recommended to add descriptive images as well.',
  when: ({confirmUsage}) => {
    if (confirmUsage) {
      return true;
    }else {
      return false;
    }
  }
},
{
  type:'confirm',
  name:'confirmContribution',
  message:'May other developers contribute to your repository?'
},
{
  type:'input',
  name:'contribution',
  message: 'Please explain how other developers can contribute to your project.',
  when: ({confirmContribution}) => {
  if(confirmContribution) {
     return true;
    } else{
     return false;
    }
  }
},
{
  type:'confirm',
  name:'testConfirm',
  message:'Is testing available?'
},
{
  type:'input',
  name:'testing',
  message:'Please explain how users can test your application.',
  when:({testConfirm}) => {
    if (testConfirm) {
      return true;
    }else {
      return false;
    }
  }
},
{
  type: 'list',
  name:'license',
  message:'Choose a license for your repository.',
  choices : ['MIT_License','Boost_Software_License_1.0','Apache_License 2.0','Mozilla_Public_License_2.0'],
},

// {
//   type:'checkbox',
//   name:'license',
//   message:'Please choose a license for your repository.',
//   choices: ['']
// },
{
  type:'input',
  name:'username',
  message:'GitHub username (required)',
  validate: nameInput => {
    if(nameInput) {
      return true;
    }else {
      console.log('Enter your GitHub username.');
      return false;
    }
  }
},
{
  type:'input',
  name:'email',
  message:'Enter your email address (required)',
  validate: nameInput => {
    if(nameInput) {
      return true;
    }else {
      console.log('Enter email your address');
      return false;
    }
  }
},
{
  type:'input',
  name:'questions',
  message:'If you have any instructions for collaborators, please list them here.',
  validate: (nameInput) => {
    if (nameInput) {
      return true;
    }else {
      return false;
    }
  }
}]; //end question arrays

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.error('Sorry there was an error:' + error);
    }
  })
};

const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data) => {
    writeToFile('README1.md', data)
  })
  .catch((error) => {
    error ? console.log(error): console.log('Generating README file')
  } )

  // try {
  //   const userAnswers = inquirer.prompt(questions);
  //   console.log('Thank you! The data is being processed into your README1.md:', userAnswers);
  //   const myMarkdown = generateMarkdown(userAnswers);
  //   console.log(myMarkdown);
  //  await createReadMe('README1.md', myMarkdown);
  // } catch(error) {
  // console.log('sorry there was an error' + error);
//   }
};

// Function call to initialize app
init();
