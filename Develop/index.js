const inquirer = require("inquirer");
const fs = require("fs");
//const util = require("util");


// array of questions for user
//const questions = [
inquirer.prompt([
{
    type: "input",
    title: "title",
    message: "What is the title of your project?",
},
{
    type: "input",
    title: "description",
    message: "please describe your project?",
},
{
    type: "input",
    title: "installation instructions",
    message: "how is this application installed?",
},
{
    type: "input",
    title: "usage",
    message: "what is this application used for?",
},
{
    type: "input",
    title: "contribution",
    message: "contribution guidelines?",
},
{
    type: "input",
    title: "test",
    message: "how is this application tested?",
},
{
    type: "checkbox",
    message: "what license is your project under?",
    name: "license",
    choices: [
        "BSD",
        "MIT",
        "GPL"
    ]
},
{
    type: "input",
    title: "GitHub repository",
    message: "Please enter your GitHub address",
},
{
        type: "input",
        title: "eamiladdress",
        message: "Please enter your email address",
},


]).then(function(data) {

    var filename = data.name.toLowerCase().split(' ').join('') + ".json";
  
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
  
      if (err) {
        return console.log(err);
      }
  
      console.log("Success!");
  
    });
  });
