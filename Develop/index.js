// array of questions for user
const questions = [

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
    type: "list",
    message: "what license is your project under?",
    name: "license",
    choices: [
        "BSD",
        "MIT",
        "GPL"
    ]
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
