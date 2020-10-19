const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
    
        
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "please describe your project?",
        },
        {
            type: "input",
            name: "installation",
            message: "how is this application installed?",
        },
        {
            type: "input",
            name: "usage",
            message: "what is this application used for?",
        },
        {
            type: "input",
            name: "contributing",
            message: "contribution guidelines?",
        },
        {
            type: "input",
            name: "test",
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
            name: "githubRepo",
            message: "Please enter your GitHub address (https://github.com/<username>/<repository name>",
        },
        {
            type: "input",
            name: "emailAddress",
            message: "Please enter your email address",
        },
        ]


        // function to write README file
        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, function (err) {
                console.log(fileName);
                console.log(data);
                if (err) {
                    return console.log(err);
                } else {

                    console.log("Success!");
                }
            } ,

            )
        }
 
            // function to initialize program
            function init() {
                inquirer.prompt(questions)
                    .then(function (data) {
                        writeToFile("README.md", generateMarkdown(data));
                        console.log(data)
                    });
            }      
            
            init();