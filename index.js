#! /usr/bin/env node

// shabang

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter Your First Number",
        type: "number",
        name: "FirstNumber" },
    { message: "Enter Your Second Number",
        type: "number",
        name: "SecondNumber" },
    {
        message: "Selected Operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional Statements 
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please Select Another Valid Operator");
}
