import inquirer from "inquirer";
import chalk from "chalk"

// Asking Questions From Users through Inquirer

let answers = await inquirer.prompt([
    {message: "Enter First Number", type: "number", name: "firstNumber"},
    {message: "Enter Second Number",type: "number", name: "secondNumber"},
    {
        message: "Select one Operate to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction","Multiplication", "Division"],
    },
]);


// Conditional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input");
}